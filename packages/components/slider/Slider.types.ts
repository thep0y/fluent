import type { BaseNoChildrenComponentProps } from "~/types";

/**
 * A slider supports different sizes.
 */
export type SliderSize = "small" | "medium";

export interface SliderProps
  extends Omit<BaseNoChildrenComponentProps<HTMLDivElement>, "onChange"> {
  /**
   * The starting value for an uncontrolled Slider.
   * Mutually exclusive with `value` prop.
   */
  defaultValue?: number;

  /**
   *  Whether to render the Slider as disabled.
   *
   * @default `false` (renders enabled)
   */
  disabled?: boolean;

  /**
   * The max value of the Slider.
   * @default 100
   */
  max?: number;

  /**
   * The min value of the Slider.
   * @default 0
   */
  min?: number;

  /**
   * The size of the Slider.
   * @default 'medium'
   */
  size?: SliderSize;

  /**
   * The number of steps that the Slider's `value` will increment upon change. When provided, the Slider
   * will snap to the closest available value. This must be a positive value.
   * @default 1
   */
  step?: number;

  /**
   * The current value of the controlled Slider.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: number;

  /**
   * Render the Slider in a vertical orientation, smallest value on the bottom.
   * @default `false`
   */
  vertical?: boolean;

  /**
   * Triggers a callback when the value has been changed. This will be called on every individual step.
   */
  onChange?: (value: number) => void;
}
