import { splitProps, type JSX, type ParentProps } from "solid-js";

import { addClassList } from "~/utils";

import type { CardFooterProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card-footer";

export const CardFooter = (
  props: ParentProps<CardFooterProps> &
    JSX.HTMLSlotElementAttributes<HTMLDivElement>,
) => {
  const [local, others] = splitProps(props, ["children", "class"]);

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${local.class}`]: local.class,
      },
    });

  return (
    <div {...others} classList={classList()}>
      {local.children}
    </div>
  );
};
