import { Dynamic } from "solid-js/web";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type { LinkProps, RequiredLinkProps } from "./Link.types";

import * as styles from "./Link.css";

export const Link = (props: LinkProps) => {
  const propsWithDefault = mergeProps(
    {
      appearance: "default",
      disabled: false,
      disabledFocusable: false,
      inline: false,
    } as RequiredLinkProps,
    props,
  );

  const elementType = createMemo(
    () => propsWithDefault.as || ("href" in propsWithDefault ? "a" : "button"),
  );

  const [local, rest] = splitProps(propsWithDefault, [
    "class",
    "classList",
    "appearance",
    "inline",
    "disabled",
    "disabledFocusable",
    "as",
    "onClick",
    "onKeyDown",
    "tabIndex",
    "role",
  ]);

  const mergedAttributes = mergeProps(rest, {
    onClick: (
      e: MouseEvent & {
        currentTarget: HTMLAnchorElement & HTMLButtonElement;
        target: Element;
      },
    ) => {
      if (local.disabled || local.disabledFocusable) {
        e.preventDefault();
        return;
      }
      if (local.onClick && typeof local.onClick === "function") {
        local.onClick(e);
      }
    },
    onKeyDown: (
      e: KeyboardEvent & {
        currentTarget: HTMLAnchorElement & HTMLButtonElement;
        target: Element;
      },
    ) => {
      const isActivatable = e.key === "Enter" || e.key === " ";
      if ((local.disabled || local.disabledFocusable) && isActivatable) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (local.onKeyDown && typeof local.onKeyDown === "function") {
        local.onKeyDown(e);
      }

      if (elementType() === "span" && isActivatable && !local.onKeyDown) {
        e.preventDefault();
        (e.currentTarget as HTMLElement).click?.();
      }
    },
    tabIndex:
      local.tabIndex ?? (local.disabled && !local.disabledFocusable ? -1 : 0),
    "aria-disabled": local.disabled || local.disabledFocusable || undefined,
    role:
      elementType() === "span"
        ? "button"
        : local.disabled || local.disabledFocusable
          ? "link"
          : undefined,
    ...(elementType() === "a" && {
      href: local.disabled ? undefined : "href" in rest ? rest.href : undefined,
    }),
    ...(elementType() === "button" && {
      disabled: local.disabled && !local.disabledFocusable,
      type: "button",
    }),
  });

  const classList = () => ({
    [local.class || ""]: !!local.class,
    ...local.classList,
    [styles.link]: true,
    [styles.href]: elementType() === "a" && !!mergedAttributes.href,
    [styles.button]: elementType() === "button",
    [styles.subtle]: local.appearance === "subtle",
    [styles.inline]: local.inline,
    [styles.disabled]: local.disabled,
  });

  return (
    <Dynamic
      component={elementType()}
      classList={classList()}
      {...(mergedAttributes as LinkProps)}
    />
  );
};
