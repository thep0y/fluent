import type { JSX } from "solid-js";
import type { HTMLSlotElementAttributes } from "~/types";

export interface CardPreviewProps
  extends HTMLSlotElementAttributes<HTMLDivElement> {
  /**
   * Container that holds a logo related to the image preview provided.
   */
  logo?: JSX.Element;
}
