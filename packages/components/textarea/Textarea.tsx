import { createSignal, mergeProps, splitProps } from "solid-js";

import type { HTMLTextAreaElementProps, TextareaProps } from "./Textarea.types";

import * as styles from "./Textarea.css";

type RequiredProps<T extends keyof TextareaProps> = NonNullable<
  TextareaProps[T]
>;

const Textarea = (props: TextareaProps) => {
  const [value, setValue] = createSignal(props.value ?? props.defaultValue);

  const merged = mergeProps(
    {
      size: "medium" as RequiredProps<"size">,
      appearance: "outline" as RequiredProps<"appearance">,
      resize: "none" as RequiredProps<"resize">,
    },
    props,
  );

  const [local, others] = splitProps(merged, [
    "size",
    "appearance",
    "resize",
    "defaultValue",
    "value",
    "onChange",
    "class",
    "classList",
    "innerClass",
    "innerClassList",
  ]);

  const containerClassList = () => ({
    [styles.container]: true,
    [styles.disabled]: others.disabled,
    [styles.appearances[local.appearance]]: !others.disabled,
    [styles.interactive]: !others.disabled,
    [styles.invalid]:
      !others.disabled && `${others["aria-invalid"]}` === "true",
    [local.class ?? ""]: !!local.class,
    ...local.classList,
  });

  const textareaClassList = () => ({
    [styles.textarea]: true,
    [styles.textareaSizes[local.size]]: true,
    [styles.textareaResizes[local.resize]]: true,
    [styles.textareaDisabled]: others.disabled,
    [local.innerClass ?? ""]: !!local.innerClass,
    ...local.innerClassList,
  });

  const handleChange: HTMLTextAreaElementProps["onChange"] = (e) => {
    merged.onChange?.(e.target.value);
    setValue(e.target.value);
  };

  return (
    <span classList={containerClassList()}>
      <textarea
        classList={textareaClassList()}
        onChange={handleChange}
        value={value() ?? ""}
        {...others}
      />
    </span>
  );
};

export default Textarea;
