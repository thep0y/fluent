import type { JSX } from "solid-js";

export interface BaseComponentProps<T extends HTMLElement>
  extends Omit<JSX.HTMLAttributes<T>, "class" | "classList"> {
  children?: JSX.Element;
  class?: string;
  classList?: { [key: string]: boolean | undefined };
}

export type BaseNoChildrenComponentProps<T extends HTMLElement> = Omit<
  BaseComponentProps<T>,
  "children"
>;

export type TimeoutID = ReturnType<typeof setTimeout>;
