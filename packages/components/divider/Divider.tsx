import { mergeProps, Show } from "solid-js";
import type { DividerAlignment, DividerProps } from "./Divider.types";
import { divider } from "./Divider.css";

const Divider = (props: DividerProps) => {
  const merged = mergeProps(
    { alignContent: "center" as DividerAlignment },
    props,
  );

  // Build class list
  const classList = () => {
    const classes = {
      [divider.base]: true,
      [divider.horizontal]: !merged.vertical,
      [divider.vertical]: merged.vertical,
      [divider.alignmentBase]: !!merged.children,
      [merged.class || ""]: !!merged.class,
    };

    // Add alignment style
    if (merged.alignContent && divider.alignment[merged.alignContent]) {
      classes[divider.alignment[merged.alignContent]] = !!merged.children;
    }

    // Add appearance style
    if (merged.appearance && divider.appearance[merged.appearance]) {
      classes[divider.appearance[merged.appearance]] = true;
    }

    // Add inset style
    if (merged.inset) {
      classes[divider.inset] = true;
    }

    // Add specific class name for vertical dividers for CSS selectors
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
