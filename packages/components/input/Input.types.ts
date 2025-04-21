import type { JSX } from "solid-js";
import type { HTMLInputElementProps } from "~/types";

export type InputAppearance =
  | "outline"
  | "underline"
  | "filled-darker"
  | "filled-lighter"
  | "filled-darker-shadow"
  | "filled-lighter-shadow";

/**
 * Input size variants
 */
export type InputSize = "small" | "medium" | "large";

export interface InputProps
  extends Omit<HTMLInputElementProps, "onChange" | "onInput"> {
  /** Input can't have children. */
  children?: never;

  /**
   * Size of the input (changes the font size and spacing).
   * @default 'medium'
   */
  size?: InputSize;

  /**
   * Controls the colors and borders of the input.
   * @default 'outline'
   *
   * Note: 'filled-darker-shadow' and 'filled-lighter-shadow' are deprecated and will be removed in the future.
   */
  appearance?: InputAppearance;

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

  /**
   * A input can show that it cannot be interacted with.
   *
   * @default false
   */
  disabled?: boolean;
}
