import { mergeProps, children } from "solid-js";
import type { LabelProps } from "./Label.types";
import { label } from "./Label.css";

export const Label = (props: LabelProps) => {
  const merged = mergeProps(
    {
      size: "medium" as NonNullable<LabelProps["size"]>,
      weight: "regular" as NonNullable<LabelProps["weight"]>,
    },
    props,
  );

  // Build class list
  const classList = () => {
    const classes = {
      [label.base]: true,
      [label.disabled]: merged.disabled,
      [merged.class || ""]: !!merged.class,
      ...merged.classList,
    };

    // Add size style
    if (merged.size && label.size[merged.size]) {
      classes[label.size[merged.size]] = true;
    }

    // Add weight style
    if (merged.weight && label.weight[merged.weight]) {
      classes[label.weight[merged.weight]] = true;
    }

    return classes;
  };

  // Handle required marker
  const required = children(
    () =>
      merged.required && (
        <span class={label.required} aria-hidden>
          {typeof merged.required === "boolean" ? "*" : merged.required}
        </span>
      ),
  );

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: We know this is a label, not a control
    <label classList={classList()} style={merged.style}>
      {merged.children}
      {required()}
    </label>
  );
};
