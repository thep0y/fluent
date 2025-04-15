import {
  createComputed,
  createMemo,
  createSignal,
  mergeProps,
  type JSX,
} from "solid-js";
import type { BaseNoChildrenComponentProps } from "~/interface";
import "./index.scss";
import { addClassList, clamp } from "~/utils";

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
  size?: "small" | "medium";

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

  lively?: boolean;
}

const baseClassName = "fluent-slider";

const Slider = (props: SliderProps) => {
  const merged = mergeProps({ min: 0, max: 100, lively: true }, props);

  const [currentValue, setCurrentValue] = createSignal(
    props.value ?? props.defaultValue ?? merged.min,
  );

  createComputed(() => {
    if (props.value !== undefined) {
      setCurrentValue(clamp(props.value, merged.min, merged.max));
    }
  });

  const valuePercent = createMemo(() => {
    const clampedValue = clamp(currentValue() ?? 0, merged.min, merged.max);
    return getPercent(clampedValue, merged.min, merged.max);
  });

  const classes = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${merged.class}`]: merged.class,
        [`${baseClassName}-vertical`]: merged.vertical,
        [`${baseClassName}-${merged.size}`]: merged.size,
        [`${baseClassName}-disabled`]: merged.disabled,
        [`${baseClassName}-lively`]: merged.lively,
      },
    });

  const style = () => ({
    ...merged.style,
    "--fui-Slider--progress": `${valuePercent()}%`,
    "--fui-Slider--direction": merged.vertical ? "0deg" : "90deg",
    "--fui-Slider--steps-percent":
      merged.step && `${(merged.step / (merged.max - merged.min)) * 100}%`,
  });

  const onChange: JSX.HTMLElementTags["input"]["onChange"] = (e) => {
    const newValue = Number(e.target.value);
    setCurrentValue(clamp(newValue, merged.min, merged.max));
    merged.onChange?.(newValue);
  };

  return (
    <div classList={classes()} style={style()}>
      <input
        type="range"
        class={`${baseClassName}__input`}
        //onChange={onChange}
        min={merged.min}
        max={merged.max}
        step={merged.step}
        value={currentValue()}
        onInput={onChange}
        disabled={merged.disabled}
      />
      <div class={`${baseClassName}__rail`} />
      <div class={`${baseClassName}__thumb`} />
    </div>
  );
};

const getPercent = (value: number, min: number, max: number) => {
  return max === min ? 0 : ((value - min) / (max - min)) * 100;
};

export default Slider;
