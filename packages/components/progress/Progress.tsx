import { createMemo, mergeProps } from "solid-js";
import type {
  ProgressBarColor,
  ProgressBarProps,
  ProgressBarShape,
  ProgressBarThickness,
} from "./Progress.types";
import { progress } from "./Progress.css";
import { clampValue } from "~/utils/clampValue";

const ProgressBar = (props: ProgressBarProps) => {
  const merged = mergeProps(
    {
      max: 100,
      thickness: "medium" as ProgressBarThickness,
      shape: "rounded" as ProgressBarShape,
      color: "brand" as ProgressBarColor,
    },
    props,
  );

  const percent = createMemo(() => {
    const value = clampValue(merged.value, merged.max);
    if (value === undefined) return value;

    return `${(value / merged.max) * 100}%`;
  });

  const color = createMemo(
    () => (percent() === "100%" && "success") || merged.color || undefined,
  );

  // Build class list
  const classList = () => {
    const classes = {
      [progress.base]: true,
      [merged.class || ""]: !!merged.class,
    };

    // Add shape style
    if (merged.shape && progress.shape[merged.shape]) {
      classes[progress.shape[merged.shape]] = true;
    }

    // Add size style
    if (merged.thickness && progress.size[merged.thickness]) {
      classes[progress.size[merged.thickness]] = true;
    }

    return classes;
  };

  return (
    <div classList={classList()} style={merged.style}>
      <div
        classList={{
          [progress.bar.base]: true,
          [color() ? progress.bar.color[color()!] : ""]: !!color(),
          [progress.bar.indeterminate]: merged.value === undefined,
        }}
        style={{ width: percent() }}
      />
    </div>
  );
};

export default ProgressBar;
