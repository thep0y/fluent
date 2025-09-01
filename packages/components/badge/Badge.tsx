import { children, Show, splitProps } from "solid-js";

import { mergeProps } from "~/utils/mergeProps";

import type { BadgeProps } from "./Badge.types";

import * as styles from "./Badge.css";

export const Badge = (props: BadgeProps) => {
  const merged = mergeProps(
    {
      size: "medium",
      appearance: "filled",
      shape: "circular",
      iconPosition: "before",
      color: "brand",
    },
    props
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
    [styles.badge]: true,
    [styles.size[local.size]]: true,
    [styles.shape[local.shape]]: true,
    [styles.appearance[local.appearance][local.color]]: true,
    [local.class || ""]: !!local.class,
    ...local.classList,
  });

  const iconClassList = () => ({
    [styles.iconRoot]: true,
    [styles.iconSize[local.size]]: true,
    [styles.iconPosition[local.iconPosition]]:
      !!local.children && local.size !== "extra-large",
    [styles.iconXLPosition[local.iconPosition]]:
      !!local.children && local.size === "extra-large",
  });

  const badgeIcon = children(
    () => local.icon && <span classList={iconClassList()}>{local.icon}</span>
  );

  return (
    <div classList={classList()} {...others}>
      <Show when={local.iconPosition === "before"}>{badgeIcon()}</Show>

      {local.children}

      <Show when={local.iconPosition === "after"}>{badgeIcon()}</Show>
    </div>
  );
};
