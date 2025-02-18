import { children, splitProps, type JSX } from "solid-js";

import { addClassList } from "~/utils";

import type { CardHeaderProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card-header";

export const CardHeader = (
  props: CardHeaderProps & JSX.HTMLSlotElementAttributes<HTMLDivElement>,
) => {
  const [local, others] = splitProps(props, [
    "class",
    "action",
    "image",
    "header",
    "description",
  ]);

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${local.class}`]: local.class,
      },
    });

  const action = children(
    () =>
      local.action && (
        <div class={`${baseClassName}__action`}>{local.action}</div>
      ),
  );
  return (
    <div {...others} classList={classList()}>
      <div class={`${baseClassName}__image`}>{local.image}</div>
      <div class={`${baseClassName}__header`}>{local.header}</div>
      <div class={`${baseClassName}__description`}>{local.description}</div>
      {action()}
    </div>
  );
};
