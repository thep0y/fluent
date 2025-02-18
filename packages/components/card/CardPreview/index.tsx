import { children, type ParentProps } from "solid-js";

import type { CardPreviewProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card-preview";

export const CardPreview = (props: ParentProps<CardPreviewProps>) => {
  const logo = children(
    () =>
      props.logo && <div class={`${baseClassName}__logo`}>{props.logo}</div>,
  );
  return (
    <div class={baseClassName}>
      {props.children}
      {logo()}
    </div>
  );
};
