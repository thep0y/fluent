import { mergeProps, Show } from "solid-js";
import type { DividerAlignment, DividerProps } from "./Divider.types";
import { divider } from "./Divider.css";

const Divider = (props: DividerProps) => {
  const merged = mergeProps(
    { alignContent: "center" as DividerAlignment },
    props,
  );

  // 构建类名列表
  const classList = () => {
    const classes = {
      [divider.base]: true,
      [divider.horizontal]: !merged.vertical,
      [divider.vertical]: merged.vertical,
      [divider.alignmentBase]: !!merged.children,
      [merged.class || ""]: !!merged.class,
    };

    // 添加对齐样式
    if (merged.alignContent && divider.alignment[merged.alignContent]) {
      classes[divider.alignment[merged.alignContent]] = !!merged.children;
    }

    // 添加外观样式
    if (merged.appearance && divider.appearance[merged.appearance]) {
      classes[divider.appearance[merged.appearance]] = true;
    }

    // 添加内嵌样式
    if (merged.inset) {
      classes[divider.inset] = true;
    }

    // 为垂直分割线添加特定类名，用于CSS选择器
    if (merged.vertical) {
      classes["divider-vertical"] = true;
    }

    return classes;
  };

  return (
    <div classList={classList()} style={merged.style}>
      <Show when={merged.children}>
        <div class={divider.wrapper}>{merged.children}</div>
      </Show>
    </div>
  );
};

export default Divider;
