import { mergeProps, children, Show, splitProps } from "solid-js";
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

  const [local, others] = splitProps(merged, [
    "size",
    "appearance",
    "shape",
    "iconPosition",
    "color",
    "icon",
    "class",
    "classList",
    "children",
  ]);

  const classList = () => ({
    [badge]: true,
    [size[local.size]]: true,
    [shape[local.shape]]: true,
    [appearance[local.appearance]]: true,
    [color[local.color]]: true,
    [local.class || ""]: !!local.class,
    ...local.classList,
  });

  const badgeIcon = children(
    () => local.icon && <span class={icon}>{local.icon}</span>,
  );

  return (
    <div classList={classList()} {...others}>
      <Show when={local.iconPosition === "before" && local.icon}>
        {badgeIcon()}
      </Show>

      {local.children}

      <Show when={local.iconPosition === "after" && local.icon}>
        {badgeIcon()}
      </Show>
    </div>
  );
};

export default Badge;
