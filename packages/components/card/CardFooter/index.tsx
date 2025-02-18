import type { ParentProps } from "solid-js";

import type { CardFooterProps } from "./types";

import "./index.scss";

const baseClassName = "fluent-card-footer";

export const CardFooter = (props: ParentProps<CardFooterProps>) => (
  <div class={baseClassName}>{props.children}</div>
);
