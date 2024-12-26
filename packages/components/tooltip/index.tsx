import type { BaseComponentProps } from "~/interface";
import "./index.scss";
import { mergeProps, Portal } from "solid-js/web";
import {
  children,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  Show,
  type JSX,
} from "solid-js";
import { addClassList, useTimeout } from "~/utils";
import { calculateOffsets, type OffsetNullable } from "./position";

export type PositioningShorthand =
  | "above"
  | "above-start"
  | "above-end"
  | "below"
  | "below-start"
  | "below-end"
  | "before"
  | "before-top"
  | "before-bottom"
  | "after"
  | "after-top"
  | "after-bottom";

export type OnVisibleChangeData = {
  visible: boolean;

  /**
   * The event object, if this visibility change was triggered by a keyboard event on the document element
   * (such as Escape to hide the visible tooltip). Otherwise undefined.
   */
  documentKeyboardEvent?: KeyboardEvent;
};

export interface TooltipProps extends BaseComponentProps<HTMLDivElement> {
  /**
   * The tooltip's visual appearance.
   * * `normal` - Uses the theme's background and text colors.
   * * `inverted` - Higher contrast variant that uses the theme's inverted colors.
   *
   * @default normal
   */
  appearance?: "normal" | "inverted";
  /**
   * Delay before the tooltip is hidden, in milliseconds.
   *
   * @default 250
   */
  hideDelay?: number;

  /**
   * Notification when the visibility of the tooltip is changing.
   *
   * **Note**: for backwards compatibility, `event` will be undefined if this was triggered by a keyboard event on
   * the document element. Use `data.documentKeyboardEvent` if the keyboard event object is needed.
   */
  onVisibleChange?: (data: OnVisibleChangeData) => void;

  /**
   * Configure the positioning of the tooltip
   *
   * @default above
   */
  positioning?: PositioningShorthand;

  /**
   * (Required) Specifies whether this tooltip is acting as the description or label of its trigger element.
   *
   * * `label` - The tooltip sets the trigger's aria-label or aria-labelledby attribute. This is useful for buttons
   *    displaying only an icon, for example.
   * * `description` - The tooltip sets the trigger's aria-description or aria-describedby attribute.
   * * `inaccessible` - No aria attributes are set on the trigger. This makes the tooltip's content inaccessible to
   *   screen readers, and should only be used if the tooltip's text is available by some other means.
   */
  relationship: "label" | "description" | "inaccessible";

  /**
   * Delay before the tooltip is shown, in milliseconds.
   *
   * @default 250
   */
  showDelay?: number;

  /**
   * Control the tooltip's visibility programatically.
   *
   * This can be used in conjunction with onVisibleChange to modify the tooltip's show and hide behavior.
   *
   * If not provided, the visibility will be controlled by the tooltip itself, based on hover and focus events on the
   * trigger (child) element.
   *
   * @default false
   */
  visible?: boolean;

  /**
   * Render an arrow pointing to the target element
   *
   * @default false
   */
  withArrow?: boolean;

  /**
   * The text or JSX content of the tooltip.
   */
  content: JSX.Element;

  mount?: Node;
}

const baseClassName = "fluent-tooltip";

const Tooltip = (props: TooltipProps) => {
  let tooltipRef: HTMLDivElement | undefined;
  let triggerRef: HTMLElement | undefined;

  // Used to skip showing the tooltip  in certain situations when the trigger is focused.
  // See comments where this is set for more info.
  let ignoreNextFocusEvent = false;

  const merged = mergeProps(
    {
      appearance: "normal",
      withArrow: false,
      positioning: "above" as PositioningShorthand,
      showDelay: 250,
      hideDelay: 250,
    },
    props,
  );

  const [tooltipOffset, setTooltipOffset] = createSignal({ top: 0, left: 0 });
  const [arrowOffset, setArrowOffset] = createSignal<OffsetNullable>({});
  const [visible, setVisible] = createSignal(merged.visible);

  const [setDelayTimeout, clearDelayTimeout] = useTimeout();

  const arrowStyle = createMemo(() => {
    const { left, right, top } = arrowOffset();
    if (left !== undefined) return { left: `${left}px` };
    if (right !== undefined) return { right: `${right}px` };
    if (top !== undefined) return { top: `${top}px` };
  });

  createEffect(() => {
    const tooltipElement = tooltipRef!;
    const triggerElement = triggerRef!;

    if (visible() && tooltipElement && triggerElement) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (
            entry.target === tooltipElement &&
            tooltipElement.offsetWidth > 0 &&
            tooltipElement.offsetHeight > 0
          ) {
            const { tooltip, arrow } = calculateOffsets(
              triggerElement,
              tooltipElement,
              merged.positioning,
            );
            setTooltipOffset(tooltip);
            setArrowOffset(arrow);
          }
        }
      });

      resizeObserver.observe(tooltipElement);

      return () => {
        resizeObserver.disconnect();
      };
    }
  });

  onCleanup(() => {
    clearDelayTimeout();
  });

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${baseClassName}-with-arrow`]: merged.withArrow,
        [`${baseClassName}-${merged.positioning}`]: merged.positioning,
      },
    });

  // Listener for onPointerEnter and onFocus on the trigger element
  const onEnterTrigger = (event: PointerEvent | FocusEvent) => {
    if (event.type === "focues" && ignoreNextFocusEvent) {
      ignoreNextFocusEvent = false;
      return;
    }

    // TODO: Show immediately if another tooltip is already visible
    //const delay = context.visibleTooltip ? 0 : state.showDelay;

    setDelayTimeout(() => {
      setVisible(true);
    }, merged.showDelay);

    //event.persist(); // Persist the event since the setVisible call will happen asynchronously
  };

  // Listener for onPointerLeave and onBlur on the trigger element
  const onLeaveTrigger = (event: PointerEvent | FocusEvent) => {
    let delay = merged.hideDelay;

    if (event.type === "blur") {
      // Hide immediately when losing focus
      delay = 0;

      // The focused element gets a blur event when the document loses focus
      // (e.g. switching tabs in the browser), but we don't want to show the
      // tooltip again when the document gets focus back. Handle this case by
      // checking if the blurred element is still the document's activeElement.
      // See https://github.com/microsoft/fluentui/issues/13541
      ignoreNextFocusEvent = document.activeElement === event.target;
    }

    setDelayTimeout(() => {
      setVisible(false);
      setTooltipOffset({ left: 0, top: 0 });
    }, delay);

    //event.persist(); // Persist the event since the setVisible call will happen asynchronously
  };

  const resolved = children(() => merged.children);

  createEffect(() => {
    if (triggerRef) return;

    triggerRef = resolved()! as HTMLElement;
    if (triggerRef) {
      triggerRef.onpointerenter = onEnterTrigger;
      triggerRef.onpointerleave = onLeaveTrigger;
    }
  });

  return (
    <>
      {resolved()}

      <Show when={visible()}>
        <Portal
          mount={merged.mount}
          ref={(ref) => {
            ref.dir = "ltr";
            ref.setAttribute("data-portal-node", "true");
            ref.classList.add(
              ...Object.entries(classList())
                .filter(([_, b]) => b)
                .map(([v, _]) => v),
            );
            for (const [k, v] of Object.entries(merged.style ?? {})) {
              ref.style.setProperty(k, v);
            }
          }}
        >
          <div
            ref={tooltipRef}
            role="tooltip"
            style={{
              transform: `translate3d(${tooltipOffset().left}px, ${tooltipOffset().top}px, 0)`,
            }}
            class={`${baseClassName}__content`}
            data-popper-placement={merged.positioning}
          >
            <Show when={merged.withArrow}>
              <div
                class={`${baseClassName}__content-arrow`}
                style={arrowStyle()}
              />
            </Show>
            {merged.content}
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default Tooltip;
