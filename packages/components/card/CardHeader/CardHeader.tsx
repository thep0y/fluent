import { Show, splitProps } from "solid-js";

import type { CardHeaderProps } from "./CardHeader.types";
import {
  cardHeader,
  image,
  header,
  description,
  action as actionStyle,
} from "./CardHeader.css";

export const CardHeader = (props: CardHeaderProps) => {
  const [local, others] = splitProps(props, [
    "class",
    "action",
    "image",
    "header",
    "description",
  ]);

  const classList = () => ({
    [cardHeader]: true,
    [`${local.class}`]: !!local.class,
  });

  return (
    <div {...others} classList={classList()}>
      <Show when={local.image}>
        <div class={image}>{local.image}</div>
      </Show>

      <Show when={local.header}>
        <div class={header}>{local.header}</div>
      </Show>

      <Show when={local.description}>
        <div class={description}>{local.description}</div>
      </Show>

      <Show when={local.action}>
        <div class={actionStyle}>{local.action}</div>
      </Show>
    </div>
  );
};

export default CardHeader;
