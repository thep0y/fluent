import type { JSX } from "solid-js";
import type { BaseComponentProps } from "~/types";

export interface BadgeProps extends BaseComponentProps<HTMLDivElement> {
  /**
   * A Badge can be filled, outline, ghost, inverted
   * @defaultvalue filled
   */
  appearance?: "filled" | "ghost" | "outline" | "tint";

  /**
   * A Badge can be one of preset colors
   * @defaultvalue brand
   */
  color?:
    | "brand"
    | "danger"
    | "important"
    | "informative"
    | "severe"
    | "subtle"
    | "success"
    | "warning";

  /**
   * A Badge can position the icon before or after the content.
   * @defaultvalue before
   */
  iconPosition?: "before" | "after";

  /**
   * A Badge can be square, circular or rounded.
   * @defaultvalue circular
   */
  shape?: "circular" | "rounded" | "square";

  /**
   * A Badge can be on of several preset sizes.
   * @defaultvalue medium
   */
  size?: "tiny" | "extra-small" | "small" | "medium" | "large" | "extra-large";

  icon?: JSX.Element;
}
