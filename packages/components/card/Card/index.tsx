import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";

import { addClassList } from "~/utils";

import type { CardProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card";

export const Card = (
  props: CardProps & JSX.HTMLSlotElementAttributes<HTMLDivElement>,
) => {
  const merged = mergeProps(
    {
      appearance: "filled",
      focusMode: "off",
      orientation: "vertical",
      size: "medium",
      selected: false,
      defaultSelected: false,
    } as CardProps,
    props,
  );

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${merged.class}`]: merged.class,
        [`${baseClassName}-focus-mode`]: merged.focusMode,
        [`${baseClassName}-${merged.size}`]: merged.size,
        [`${baseClassName}-${merged.orientation}`]: merged.orientation,
        [`${baseClassName}-selected`]:
          merged.defaultSelected ?? merged.selected,
        [`${baseClassName}-${merged.appearance}`]: merged.appearance,
        [`${baseClassName}-${merged.size}`]: merged.size,
      },
    });

  const [local, others] = splitProps(merged, [
    "class",
    "children",
    "appearance",
    "focusMode",
    "orientation",
    "size",
    "selected",
    "defaultSelected",
    "onSelectionChange",
    "floatingAction",
    "checkbox",
  ]);

  return (
    <div {...others} classList={classList()}>
      {local.children}
    </div>
  );
};
