import {
  mergeProps,
  createEffect,
  createMemo,
  children,
  onCleanup,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";
import type { TooltipProps } from "./Tooltip.types";
import { tooltip } from "./Tooltip.css";
import { useTimeout } from "~/hooks/useTimeout";
import { calculateOffsets, type OffsetNullable } from "./position";
import { createSignal } from "solid-js";

const Tooltip = (props: TooltipProps) => {
  let tooltipRef: HTMLDivElement | undefined;
  let triggerRef: HTMLElement | undefined;

  // Used to skip showing the tooltip in certain situations when the trigger is focused.
  let ignoreNextFocusEvent = false;

  const merged = mergeProps(
    {
      appearance: "normal",
      withArrow: false,
      positioning: "above",
      showDelay: 250,
      hideDelay: 250,
    } as Required<Omit<TooltipProps, "children">>,
    props,
  );

  const [positioning, setPositioning] = createSignal(merged.positioning);
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
            const {
              tooltip: tooltipPos,
              arrow,
              finalPositioning,
            } = calculateOffsets(
              triggerElement,
              tooltipElement,
              merged.positioning,
            );
            setTooltipOffset(tooltipPos);
            setArrowOffset(arrow);
            setPositioning(finalPositioning);
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

  // Build class list
  const classList = createMemo(() => {
    const classes = {
      [tooltip.base]: true,
      [merged.class || ""]: !!merged.class,
    };

    // Add appearance style
    if (merged.appearance && tooltip.appearance[merged.appearance]) {
      classes[tooltip.appearance[merged.appearance]] = true;
    }

    // Add positioning style
    if (merged.positioning) {
      const positionBase = merged.positioning.split(
        "-",
      )[0] as keyof typeof tooltip.positioning;
      if (tooltip.positioning[positionBase]) {
        classes[tooltip.positioning[positionBase]] = true;
      }
    }

    return classes;
  });

  // Listener for onPointerEnter and onFocus on the trigger element
  const onEnterTrigger = (event: PointerEvent | FocusEvent) => {
    if (event.type === "focus" && ignoreNextFocusEvent) {
      ignoreNextFocusEvent = false;
      return;
    }

    setDelayTimeout(() => {
      setVisible(true);
      merged.onVisibleChange?.({ visible: true });
    }, merged.showDelay);
  };

  // Listener for onPointerLeave and onBlur on the trigger element
  const onLeaveTrigger = (event: PointerEvent | FocusEvent) => {
    let delay = merged.hideDelay;

    if (event.type === "blur") {
      // Hide immediately when losing focus
      delay = 0;

      // The focused element gets a blur event when the document loses focus
      // (e.g. switching tabs in the browser), but we don't want to show the
      // tooltip again when the document gets focus back.
      ignoreNextFocusEvent = document.activeElement === event.target;
    }

    setDelayTimeout(() => {
      setVisible(false);
      setTooltipOffset({ left: 0, top: 0 });
      merged.onVisibleChange?.({ visible: false });
    }, delay);
  };

  const resolved = children(() => merged.children);

  createEffect(() => {
    if (triggerRef) return;

    triggerRef = resolved()! as HTMLElement;
    if (triggerRef) {
      triggerRef.onpointerenter = onEnterTrigger;
      triggerRef.onpointerleave = onLeaveTrigger;
      triggerRef.onfocus = onEnterTrigger;
      triggerRef.onblur = onLeaveTrigger;
    }
  });

  const content = children(() =>
    typeof merged.content === "object" && "children" in merged.content
      ? merged.content.children
      : merged.content,
  );

  return (
    <>
      {resolved()}

      <Show when={visible()}>
        <Portal
          mount={merged.mount}
          ref={(ref) => {
            ref.dir = "ltr";
            ref.setAttribute("data-portal-node", "true");
          }}
        >
          <div classList={classList()} style={merged.style}>
            <div
              ref={tooltipRef}
              role="tooltip"
              style={{
                transform: `translate3d(${tooltipOffset().left}px, ${tooltipOffset().top}px, 0)`,
                ...(typeof merged.content === "object" &&
                "style" in merged.content
                  ? merged.content.style
                  : undefined),
              }}
              classList={{
                [tooltip.content]: true,
                [(merged.content as { class: string }).class]: !!(
                  typeof merged.content === "object" &&
                  "class" in merged.content &&
                  merged.content.class
                ),
              }}
              data-popper-placement={positioning()}
            >
              <Show when={merged.withArrow}>
                <div
                  class="tooltip-arrow"
                  classList={{ [tooltip.arrow]: true }}
                  style={arrowStyle()}
                />
              </Show>
              {content()}
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default Tooltip;
