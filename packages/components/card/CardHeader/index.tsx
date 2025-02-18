import { children } from "solid-js";

import type { CardHeaderProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card-header";

export const CardHeader = (props: CardHeaderProps) => {
  const action = children(
    () =>
      props.action && (
        <div class={`${baseClassName}__action`}>{props.action}</div>
      ),
  );
  return (
    <div class={baseClassName}>
      <div class={`${baseClassName}__image`}>{props.image}</div>
      <div class={`${baseClassName}__header`}>{props.header}</div>
      <div class={`${baseClassName}__description`}>{props.description}</div>
      {action()}
    </div>
  );
};
