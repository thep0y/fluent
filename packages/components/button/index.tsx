import { children, createMemo, mergeProps } from "solid-js";
import type { BaseComponentProps, BaseSizeComponentProps } from "~/interface";
import { addClassList } from "~/utils/class";
import "./index.scss";
import type { JSX } from "solid-js";

type ButtonAppearance =
  | "secondary"
  | "primary"
  | "outline"
  | "subtle"
  | "transparent"
  | "danger";
type ButtonShape = "rounded" | "circular" | "square";
type ButtonType = "submit" | "reset" | "button";

export interface ButtonProps
  extends Omit<BaseComponentProps<HTMLButtonElement>, "size">,
    BaseSizeComponentProps<HTMLButtonElement> {
  /**
   * A button can have its content and borders styled for greater emphasis or to be subtle.
   * - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
   * - 'primary': Emphasizes the button as a primary action.
   * - 'outline': Removes background styling.
   * - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
   * - 'transparent': Removes background and border styling.
   * - 'danger': Indicates a dangerous or potentially negative action, typically styled with a warning color.
   *
   * @default 'secondary'
   */
  appearance?: ButtonAppearance;

  /**
   * When set, allows the button to be focusable even when it has been disabled. This is used in scenarios where it
   * is important to keep a consistent tab order for screen reader and keyboard users. The primary example of this
   * pattern is when the disabled button is in a menu or a commandbar and is seldom used for standalone buttons.
   *
   * @default false
   */
  disabledFocusable?: boolean;

  /**
   * A button can show that it cannot be interacted with.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * A button can format its icon to appear before or after its content.
   *
   * @default 'before'
   */
  iconPosition?: "before" | "after";

  /**
   * A button can be rounded, circular, or square.
   *
   * @default 'rounded'
   */
  shape?: ButtonShape;

  icon?: JSX.Element;
  isLoading?: boolean;
}

const baseClassName = "fluent-button";

const Button = (props: ButtonProps) => {
  const merged = mergeProps({ type: "button" }, props);

  const disabled = createMemo(
    () => merged.isLoading || merged.disabled || merged.disabledFocusable,
  );
  const iconOnly = createMemo(() => merged.icon && !merged.children);

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${merged.class}`]: merged.class,
        [`${baseClassName}-disabled`]: disabled(),
        [`${baseClassName}-${merged.shape}`]: merged.shape,
        [`${baseClassName}-${merged.appearance}`]: merged.appearance,
        [`${baseClassName}-${merged.size}`]: merged.size,
        [`${baseClassName}-icon-only`]: iconOnly(),
      },
    });

  const resolved = children(() => (
    <>
      {merged.iconPosition !== "after" && merged.icon && (
        <span class={`${baseClassName}__icon`}>{merged.icon}</span>
      )}
      {!iconOnly() && merged.children}
      {merged.iconPosition === "after" && merged.icon && (
        <span class={`${baseClassName}__icon ${baseClassName}__icon-after`}>
          {merged.icon}
        </span>
      )}
    </>
  ));

  return (
    <button
      type={merged.type as ButtonType}
      classList={classList()}
      style={merged.style}
      aria-disabled={merged.disabledFocusable}
      onClick={merged.onClick}
      disabled={disabled()}
    >
      {resolved()}
    </button>
  );
};

export default Button;
