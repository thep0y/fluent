import type { ParentProps } from "solid-js";
import { caption1 } from "./Caption1.css";

export const Caption1 = (props: ParentProps) => (
  <div class={caption1}>{props.children}</div>
);
