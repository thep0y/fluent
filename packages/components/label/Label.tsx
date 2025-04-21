import { mergeProps, children } from "solid-js";
import type { LabelProps } from "./Label.types";
import { label } from "./Label.css";

const Label = (props: LabelProps) => {
  const merged = mergeProps(
    {
      size: "medium" as NonNullable<LabelProps["size"]>,
      weight: "regular" as NonNullable<LabelProps["weight"]>,
    },
    props,
  );

  // 构建类名列表
  const classList = () => {
    const classes = {
      [label.base]: true,
      [merged.class || ""]: !!merged.class,
      [label.disabled]: merged.disabled,
    };

    // 添加尺寸样式
    if (merged.size && label.size[merged.size]) {
      classes[label.size[merged.size]] = true;
    }

    // 添加字重样式
    if (merged.weight && label.weight[merged.weight]) {
      classes[label.weight[merged.weight]] = true;
    }

    return classes;
  };

  // 处理必填标记
  const required = children(
    () =>
      merged.required && (
        <span class={label.required} aria-hidden>
          {typeof merged.required === "boolean" ? "*" : merged.required}
        </span>
      ),
  );

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl:
    <label classList={classList()} style={merged.style}>
      {merged.children}
      {required()}
    </label>
  );
};

export default Label;
