import { mergeProps, splitProps } from "solid-js";

import type { CardProps } from "./Card.types";
import {
  card,
  size,
  appearance,
  orientation,
  selected,
  focusMode,
} from "./Card.css";

export const Card = (props: CardProps) => {
  const merged = mergeProps(
    {
      appearance: "filled",
      focusMode: "off",
      orientation: "vertical",
      size: "medium",
      selected: false,
      defaultSelected: false,
    } as Required<CardProps>,
    props,
  );

  const classList = () => ({
    [card]: true,
    [size[merged.size]]: true,
    [appearance[merged.appearance]]: true,
    [orientation[merged.orientation]]: true,
    [selected]: merged.defaultSelected ?? merged.selected,
    [focusMode]: merged.focusMode !== "off",
    [merged.class || ""]: !!merged.class,
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

export default Card;
