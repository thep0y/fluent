import type { JSX } from "solid-js";

type ButtonAppearance =
  | "secondary"
  | "primary"
  | "outline"
  | "subtle"
  | "transparent";
type ButtonShape = "rounded" | "circular" | "square";

/**
 * A button supports different sizes.
 */
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
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

  /**
   * A button supports different sizes.
   *
   * @default 'medium'
   */
  size?: ButtonSize;

  children?: JSX.Element;

  icon?: JSX.Element;

  isLoading?: boolean;
}
