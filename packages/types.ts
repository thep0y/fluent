import type { JSX } from "solid-js";

export type HTMLInputElementProps = JSX.HTMLElementTags["input"];
export type HTMLDivElementProps = JSX.HTMLElementTags["div"];

export type HTMLSlotElementAttributes<T = HTMLSlotElement> =
  JSX.HTMLSlotElementAttributes<T>;

export interface BaseComponentProps<T extends HTMLElement>
  extends Omit<JSX.HTMLAttributes<T>, "class" | "classList" | "style"> {
  children?: JSX.Element;
  class?: string;
  classList?: { [key: string]: boolean | undefined };
  style?: JSX.CSSProperties;
}

export type BaseNoChildrenComponentProps<T extends HTMLElement> = Omit<
  BaseComponentProps<T>,
  "children"
>;

export type TimeoutID = ReturnType<typeof setTimeout>;
