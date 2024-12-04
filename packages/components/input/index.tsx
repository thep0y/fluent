import { children, createSignal, type JSX } from "solid-js";
import "./index.scss";
import { addClassList } from "~/utils";
import type { BaseNoChildrenComponentProps } from "~/interface";

type HTMLInputElementProps = JSX.HTMLElementTags["input"];

export interface InputProps
  extends BaseNoChildrenComponentProps<HTMLInputElement>,
  Omit<HTMLInputElementProps, "style" | "onChange" | "onInput"> {
  /** Input can't have children. */
  children?: never;

  /**
   * Size of the input (changes the font size and spacing).
   * @default 'medium'
   */
  // This name overlaps with the native `size` prop, but that prop isn't very useful in practice
  // (we could add `htmlSize` for the native functionality if someone needs it)
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size
  size?: "small" | "medium" | "large";

  /**
   * Controls the colors and borders of the input.
   * @default 'outline'
   *
   * Note: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future.
   */
  appearance?:
  | "outline"
  | "underline"
  | "filled-darker"
  | "filled-lighter"
  | "filled-darker-shadow"
  | "filled-lighter-shadow";

  /**
   * Default value of the input. Provide this if the input should be an uncontrolled component
   * which tracks its current state internally; otherwise, use `value`.
   *
   * (This prop is mutually exclusive with `value`.)
   */
  defaultValue?: string;

  /**
   * Current value of the input. Provide this if the input is a controlled component where you
   * are maintaining its current state; otherwise, use `defaultValue`.
   *
   * (This prop is mutually exclusive with `defaultValue`.)
   */
  value?: string;

  /**
   * Called when the user changes the input's value.
   */
  onChange?: (value: string) => void;

  /**
   * Called when the user inputs value.
   */
  onInput?: (value: string) => void;

  /**
   * An input can have different text-based [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types)
   * based on the type of value the user will enter.
   *
   * Note that no custom styling is currently applied for alternative types, and some types may
   * activate browser-default styling which does not match the Fluent design language.
   *
   * (For non-text-based types such as `button` or `checkbox`, use the appropriate component or an
   * `<input>` element instead.)
   * @default 'text'
   */
  type?:
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "datetime-local"
  | "month"
  | "number"
  | "time"
  | "week";

  /** Element before the input text, within the input border */
  contentBefore?: JSX.Element;

  /** Element after the input text, within the input border */
  contentAfter?: JSX.Element;
}

const baseClassName = "fluent-input";

const Input = (props: InputProps) => {
  const [internalValue, setInternalValue] = createSignal(
    props.defaultValue ?? "",
  );

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${props.class}`]: props.class,
        [`${baseClassName}-disabled`]: props.disabled,
        [`${baseClassName}-${props.size}`]: props.size,
        [`${baseClassName}-${props.appearance}`]: props.appearance,
        [`${baseClassName}-has-content-before`]: !!props.contentBefore,
        [`${baseClassName}-has-content-after`]: !!props.contentAfter,
      },
    });

  const onChange: HTMLInputElementProps["onChange"] = (e) => {
    const inputValue = e.currentTarget.value;
    if (props.value === undefined) {
      setInternalValue(inputValue);
    }

    props.onChange?.(inputValue);
  };

  const onInput: HTMLInputElementProps["onChange"] = (e) => {
    const inputValue = e.currentTarget.value;
    if (props.value === undefined) {
      setInternalValue(inputValue);
    }

    props.onInput?.(inputValue);
  };

  const contentBefore = children(
    () =>
      props.contentBefore && (
        <span class={`${baseClassName}__contentBefore`}>
          {props.contentBefore}
        </span>
      ),
  );

  const contentAfter = children(
    () =>
      props.contentAfter && (
        <span class={`${baseClassName}__contentAfter`}>
          {props.contentAfter}
        </span>
      ),
  );

  return (
    <span classList={classList()}>
      {contentBefore()}
      <input
        class={`${baseClassName}__input`}
        value={props.value ?? internalValue()}
        onChange={onChange}
        onInput={onInput}
        disabled={props.disabled}
        placeholder={props.placeholder}
      />
      {contentAfter()}
    </span>
  );
};

export default Input;
