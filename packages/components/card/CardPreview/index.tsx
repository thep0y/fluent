import { children, splitProps } from "solid-js";
import type { JSX, ParentProps } from "solid-js";

import { addClassList } from "~/utils";

import type { CardPreviewProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card-preview";

export const CardPreview = (
  props: ParentProps<CardPreviewProps> &
    JSX.HTMLSlotElementAttributes<HTMLDivElement>,
) => {
  const [local, others] = splitProps(props, ["class", "children", "logo"]);

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${local.class}`]: local.class,
      },
    });

  const logo = children(
    () =>
      local.logo && <div class={`${baseClassName}__logo`}>{local.logo}</div>,
  );
  return (
    <div {...others} classList={classList()}>
      {local.children}
      {logo()}
    </div>
  );
};
