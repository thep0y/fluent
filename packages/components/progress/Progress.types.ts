import type { BaseNoChildrenComponentProps } from "~/types";

/**
 * The shape of the progress bar and track.
 */
export type ProgressBarShape = "rounded" | "square";

/**
 * The thickness of the progress bar
 */
export type ProgressBarThickness = "medium" | "large";

/**
 * The color status of the progress bar
 */
export type ProgressBarColor = "brand" | "success" | "warning" | "error";

export interface ProgressBarProps
  extends BaseNoChildrenComponentProps<HTMLDivElement> {
  /**
   * The shape of the bar and track.
   * @default rounded
   */
  shape?: ProgressBarShape;

  /**
   * A decimal number between `0` and `100` (or between `0` and `max` if given),
   * which specifies how much of the task has been completed.
   *
   * If `undefined` (default), the ProgressBar will display an **indeterminate** state.
   */
  value?: number;

  /**
   * The maximum value, which indicates the task is complete.
   * The ProgressBar bar will be full when `value` equals `max`.
   * @default 100
   */
  max?: number;

  /**
   * The thickness of the ProgressBar bar
   * @default medium
   */
  thickness?: ProgressBarThickness;

  /**
   * The status of the ProgressBar bar. Changes the color of the bar.
   * @default brand
   */
  color?: ProgressBarColor;
}
