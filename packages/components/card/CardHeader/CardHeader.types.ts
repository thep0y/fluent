import type { JSX } from "solid-js";
import type { HTMLSlotElementAttributes } from "~/types";

export interface CardHeaderProps
  extends HTMLSlotElementAttributes<HTMLDivElement> {
  /**
   * Element used to render an image or avatar related to the card.
   */
  image?: JSX.Element;

  /**
   * Element used to render the main header title.
   */
  header?: JSX.Element;

  /**
   * Element used to render short descriptions related to the title.
   */
  description?: JSX.Element;

  /**
   * Container that renders on the far end of the footer, used for action buttons.
   */
  action?: JSX.Element;
}
