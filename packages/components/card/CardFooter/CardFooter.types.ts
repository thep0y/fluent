import type { JSX } from "solid-js";
import type { HTMLSlotElementAttributes } from "~/types";

export interface CardFooterProps
  extends HTMLSlotElementAttributes<HTMLDivElement> {
  /**
   * Container that renders on the far end of the footer, used for action buttons.
   */
  action?: JSX.Element;
}
