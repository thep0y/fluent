import { mergeProps, splitProps } from "solid-js";

import type { RequiredTextProps, TextProps } from "./Text.types";

import * as styles from "./Text.css";
import { Dynamic } from "solid-js/web";

export const Text = (props: TextProps) => {
  const merged = mergeProps(
    {
      as: "span",
      align: "start",
      block: false,
      font: "base",
      italic: false,
      size: 300,
      strikethrough: false,
      truncate: false,
      underline: false,
      weight: "regular",
      wrap: true,
    } as RequiredTextProps,
    props,
  );

  const [local, others] = splitProps(merged, [
    "as",
    "class",
    "classList",
    "align",
    "block",
    "font",
    "italic",
    "size",
    "strikethrough",
    "truncate",
    "underline",
    "weight",
    "wrap",
  ]);

  const classList = () => ({
    [local.class ?? ""]: !!local.class,
    ...local.classList,
    [styles.root]: true,
    [styles.nowrap]: !local.wrap,
    [styles.truncate]: local.truncate,
    [styles.block]: local.block,
    [styles.italic]: local.italic,
    [styles.underline]: local.underline,
    [styles.strikethrough]: local.strikethrough,
    [styles.strikethroughUnderline]: local.strikethrough && local.underline,
    [styles.sizes[local.size]]: true,
    [styles.monospace]: local.font === "monospace",
    [styles.numeric]: local.font === "numeric",
    [styles.weights[local.weight]]: true,
    [styles.aligns[local.align]]: true,
  });

  return <Dynamic component={local.as} {...others} classList={classList()} />;
};
