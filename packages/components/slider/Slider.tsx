import { createComputed, createMemo, createSignal, mergeProps } from "solid-js";
import type { SliderProps, SliderSize } from "./Slider.types";
import {
  slider,
  progressPercent,
  progressDirection,
  stepsPercent,
} from "./Slider.css";
import { clamp } from "~/utils/clamp";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Slider = (props: SliderProps) => {
  const merged = mergeProps(
    { min: 0, max: 100, size: "medium" as SliderSize },
    props,
  );

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

  // 构建类名列表
  const classList = () => {
    const classes = {
      [slider.base]: true,
      [merged.class || ""]: !!merged.class,
      [slider.vertical]: merged.vertical,
      [slider.disabled]: merged.disabled,
      [slider.size[merged.size]]: true,
    };

    // 添加尺寸样式
    // if (merged.size && slider.size[merged.size]) {
    //   classes[slider.size[merged.size]] = true;
    // }

    return classes;
  };

  const style = () =>
    assignInlineVars({
      // ...merged.style,
      [progressPercent]: `${valuePercent()}%`,
      [progressDirection]: merged.vertical ? "0deg" : "90deg",
      [stepsPercent]: merged.step
        ? `${(merged.step / (merged.max - merged.min)) * 100}%`
        : undefined,
    });

  const onChange = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    const newValue = Number(target.value);
    setCurrentValue(clamp(newValue, merged.min, merged.max));
    merged.onChange?.(newValue);
  };

  return (
    <div classList={classList()} style={style()}>
      <input
        type="range"
        class={slider.input}
        min={merged.min}
        max={merged.max}
        step={merged.step}
        value={currentValue()}
        onInput={onChange}
        disabled={merged.disabled}
      />
      <div class={slider.rail} />
      <div class={slider.thumb} />
    </div>
  );
};

const getPercent = (value: number, min: number, max: number) => {
  return max === min ? 0 : ((value - min) / (max - min)) * 100;
};

export default Slider;
