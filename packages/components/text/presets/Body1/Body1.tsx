import type { ParentProps } from "solid-js";
import { body1 } from "./Body1.css";

export const Body1 = (props: ParentProps) => (
  <div class={body1}>{props.children}</div>
);
