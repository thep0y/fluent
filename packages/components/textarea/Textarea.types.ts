import type { JSX } from "solid-js";

export type HTMLTextAreaElementProps = JSX.HTMLElementTags["textarea"];

/**
 * Textarea Props
 */
export type TextareaProps = Omit<
  HTMLTextAreaElementProps,
  "defaultValue" | "onChange" | "size" | "value"
> & {
  /**
   * Styling the Textarea should use.
   *
   * @default outline
   */
  appearance?: "outline" | "filled-darker" | "filled-lighter";

  /**
   * The default value of the Textarea.
   */
  defaultValue?: string;

  /**
   * Callback for when the user changes the value.
   */
  onChange?: (value: string) => void;

  /**
   * Which direction the Textarea is allowed to be resized.
   *
   * @default none
   */
  resize?: "none" | "horizontal" | "vertical" | "both";

  /**
   * Size of the Textarea.
   *
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * The value of the Textarea.
   */
  value?: string;

  innerClass?: string;
  innerClassList?: {
    [k: string]: boolean | undefined;
  };
};
