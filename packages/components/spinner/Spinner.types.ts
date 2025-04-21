import type { JSX } from "solid-js";
import type { BaseNoChildrenComponentProps } from "~/types";

export interface SpinnerProps
  extends BaseNoChildrenComponentProps<HTMLDivElement> {
  /**
   * The appearance of the Spinner.
   * @default 'primary'
   */
  appearance?: "primary" | "inverted";

  /**
   * Time in milliseconds after component mount before spinner is visible.
   * @default 0
   */
  delay?: number;

  /**
   * Where the label is positioned relative to the Spinner
   * @default 'after'
   */
  labelPosition?: "above" | "below" | "before" | "after";

  /**
   * The size of the spinner.
   * @default 'medium'
   */
  size?:
    | "extra-tiny"
    | "tiny"
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large"
    | "huge";

  /**
   * The animated spinning ring.
   */
  spinner?: JSX.Element;

  /**
   * The part of the spinner that rotates.
   */
  spinnerTail?: JSX.Element;

  /**
   * An optional label for the Spinner.
   */
  label?: JSX.Element;
}
