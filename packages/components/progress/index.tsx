import { createMemo, mergeProps } from "solid-js";
import type { BaseNoChildrenComponentProps } from "~/interface";
import { addClassList } from "~/utils/class";
import "./index.scss";
import { clampValue } from "~/utils/clampValue";

export interface ProgressBarProps
  extends BaseNoChildrenComponentProps<HTMLDivElement> {
  /**
   * The shape of the bar and track.
   * @default rounded
   */
  shape?: "rounded" | "square";
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
  thickness?: "medium" | "large";

  /**
   * The status of the ProgressBar bar. Changes the color of the bar.
   * @default brand
   */
  color?: "brand" | "success" | "warning" | "error";
}

const baseClassName = "fluent-progress-bar";

const ProgressBar = (props: ProgressBarProps) => {
  const merged = mergeProps({ max: 100 }, props);

  const percent = createMemo(() => {
    const value = clampValue(merged.value, merged.max);
    if (value === undefined) return value;

    return `${(value / merged.max) * 100}%`;
  });

  const color = createMemo(
    () => merged.color || (percent() === "100%" && "success") || undefined,
  );

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${merged.class}`]: merged.class,
        [`${baseClassName}-${merged.shape}`]: merged.shape,
        [`${baseClassName}-${merged.thickness}`]: merged.thickness,
      },
    });

  return (
    <div classList={classList()} style={merged.style}>
      <div
        classList={{
          [`${baseClassName}__bar`]: true,
          [`${baseClassName}__bar-${color()}`]: !!color(),
          [`${baseClassName}__bar-indeterminate`]: merged.value === undefined,
        }}
        style={{ width: percent() }}
      />
    </div>
  );
};

export default ProgressBar;
