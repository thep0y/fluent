import { mergeProps, children, Show } from "solid-js";
import type { BadgeProps } from "./Badge.types";
import { badge, size, appearance, shape, color, icon } from "./Badge.css";

const Badge = (props: BadgeProps) => {
  const merged = mergeProps(
    {
      size: "medium" as NonNullable<BadgeProps["size"]>,
      appearance: "filled" as NonNullable<BadgeProps["appearance"]>,
      shape: "circular" as NonNullable<BadgeProps["shape"]>,
      iconPosition: "before" as NonNullable<BadgeProps["iconPosition"]>,
      color: "brand" as NonNullable<BadgeProps["color"]>,
    },
    props,
  );

  const classList = () => ({
    [badge]: true,
    [size[merged.size]]: true,
    [shape[merged.shape]]: true,
    [appearance[merged.appearance]]: true,
    [color[merged.color]]: true,
    [merged.class || ""]: !!merged.class,
  });

  const badgeIcon = children(
    () => merged.icon && <span class={icon}>{merged.icon}</span>,
  );

  return (
    <div classList={classList()} style={merged.style}>
      <Show when={merged.iconPosition === "before" && merged.icon}>
        {badgeIcon()}
      </Show>

      {merged.children}

      <Show when={merged.iconPosition === "after" && merged.icon}>
        {badgeIcon()}
      </Show>
    </div>
  );
};

export default Badge;
