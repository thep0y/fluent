import { children, createSignal, splitProps } from "solid-js";

import { mergeProps } from "~/utils/mergeProps";

import type { InputProps } from "./Input.types";
import { input } from "./Input.css";

export const Input = (props: InputProps) => {
  const merged = mergeProps(
    {
      type: "text",
      size: "medium",
      appearance: "outline",
      disabled: false,
    },
    props
  );

  const [local, others] = splitProps(merged, [
    "type",
    "onChange",
    "onInput",
    "value",
    "defaultValue",
    "size",
    "appearance",
    "class",
    "classList",
    "style",
    "disabled",
    "contentBefore",
    "contentAfter",
  ]);

  // Create internal state to manage value
  const [internalValue, setInternalValue] = createSignal(
    local.defaultValue || ""
  );

  // Build class list
  const classList = () => ({
    [input.base]: true,
    [input.disabled]: local.disabled,
    [input.appearance[local.appearance]]: true,
    [input.size[local.size]]: true,
    [local.class || ""]: !!local.class,
    ...local.classList,
  });

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;

    local.onChange?.(inputValue);

    if (local.value === undefined) {
      setInternalValue(inputValue);
    }
  };

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const inputValue = target.value;

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
      )
  );

  const contentAfter = children(
    () =>
      local.contentAfter && (
        <span class={`${input.content.base} ${input.content.after}`}>
          {local.contentAfter}
        </span>
      )
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
