import { splitProps, type JSX, type ParentProps } from "solid-js";

import type { CardFooterProps } from "./CardFooter.types";
import { cardFooter } from "./CardFooter.css";

export const CardFooter = (
  props: ParentProps<CardFooterProps> &
    JSX.HTMLSlotElementAttributes<HTMLDivElement>,
) => {
  const [local, others] = splitProps(props, ["children", "class"]);

  const classList = () => ({
    [cardFooter]: true,
    [local.class || ""]: !!local.class,
  });

  return (
    <div {...others} classList={classList()}>
      {local.children}
    </div>
  );
};
