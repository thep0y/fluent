import { children, mergeProps, Show } from "solid-js";
import type { JSX } from "solid-js";
import type { BaseComponentProps } from "~/interface";
import { addClassList } from "~/utils";
import "./index.scss";

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

const baseClassName = "fluent-badge";

const Badge = (props: BadgeProps) => {
  const merged = mergeProps(
    { appearance: "filled", iconPosition: "before", size: "medium" },
    props,
  );

  const classes = () =>
    addClassList({
      base: baseClassName,
      others: {
        [merged.class ?? ""]: merged.class,
        [`${baseClassName}-${merged.appearance}`]: merged.appearance,
        [`${baseClassName}-${merged.size}`]: merged.size,
        [`${baseClassName}-${merged.shape}`]: merged.shape,
        [`${baseClassName}-${merged.color}`]: merged.color,
        ...merged.classList,
      },
    });

  const icon = children(() => (
    <span class={`${baseClassName}__icon`}>{merged.icon}</span>
  ));

  return (
    <div classList={classes()} style={merged.style}>
      <Show when={merged.iconPosition === "before" && merged.icon}>
        {icon()}
      </Show>

      {merged.children}

      <Show when={merged.iconPosition === "after" && merged.icon}>
        {icon()}
      </Show>
    </div>
  );
};

export default Badge;
