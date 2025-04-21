import type { BaseComponentProps } from "~/types";
import type { JSX } from "solid-js";

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
  content:
    | NonNullable<JSX.Element>
    | { children: JSX.Element; class: string }
    | { children: JSX.Element; style: JSX.CSSProperties };

  /**
   * The DOM node where the tooltip should be mounted.
   */
  mount?: Node;

  /**
   * The element that triggers the tooltip.
   */
  children: JSX.Element;
}
