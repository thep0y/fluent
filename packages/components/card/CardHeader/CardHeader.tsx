import { children, splitProps } from "solid-js";

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

  const action = children(
    () => local.action && <div class={actionStyle}>{local.action}</div>,
  );

  return (
    <div {...others} classList={classList()}>
      <div class={image}>{local.image}</div>
      <div class={header}>{local.header}</div>
      <div class={description}>{local.description}</div>
      {action()}
    </div>
  );
};

export default CardHeader;
