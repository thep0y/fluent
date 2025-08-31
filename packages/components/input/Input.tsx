import { children, createSignal, mergeProps, splitProps } from "solid-js";
import type { InputProps } from "./Input.types";
import { input } from "./Input.css";

export const Input = (props: InputProps) => {
  const merged = mergeProps({ type: "text" as InputProps["type"] }, props);

  const [local, others] = splitProps(merged, [
    "type",
    "onChange",
    "onInput",
    "value",
    "defaultValue",
    "size",
    "appearance",
    "class",
    "style",
    "disabled",
    "contentBefore",
    "contentAfter",
  ]);

  // Create internal state to manage value
  const [internalValue, setInternalValue] = createSignal(
    local.defaultValue || "",
  );

  // Build class list
  const classList = () => {
    const classes = {
      [input.base]: true,
      [local.class || ""]: !!local.class,
      [input.disabled]: local.disabled,
    };

    // Add appearance style
    if (local.appearance && input.appearance[local.appearance]) {
      classes[input.appearance[local.appearance]] = true;
    }

    // Add size style
    if (local.size && input.size[local.size]) {
      classes[input.size[local.size]] = true;
    }

    return classes;
  };

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;
    if (local.value !== undefined) {
      target.value = local.value;
    }
    local.onChange?.(inputValue);
    if (local.value === undefined) {
      setInternalValue(inputValue);
    }
  };

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;
    if (local.value !== undefined) {
      target.value = local.value;
    }
    local.onInput?.(inputValue);
    if (local.value === undefined) {
      setInternalValue(inputValue);
    }
  };

  // Build content
  const contentBefore = children(
    () =>
      local.contentBefore && (
        <span class={`${input.content.base} ${input.content.before}`}>
          {local.contentBefore}
        </span>
      ),
  );

  const contentAfter = children(
    () =>
      local.contentAfter && (
        <span class={`${input.content.base} ${input.content.after}`}>
          {local.contentAfter}
        </span>
      ),
  );

  return (
    <span classList={classList()} style={local.style}>
      {contentBefore()}
      <input
        class={input.element}
        value={local.value ?? internalValue()}
        onChange={onChange}
        onInput={onInput}
        disabled={local.disabled}
        type={local.type}
        {...others}
      />
      {contentAfter()}
    </span>
  );
};
