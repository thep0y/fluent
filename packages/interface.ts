import type { JSX } from "solid-js";

export type HTMLInputElementProps = JSX.HTMLElementTags["input"];
export type HTMLDivElementProps = JSX.HTMLElementTags["div"];

export type SizeType = "small" | "medium" | "large";
export type Direction = "left" | "center" | "right" | "top" | "bottom";
export type Placement =
  | ("top-left" | "top-right" | "bottom-left" | "bottom-right")
  | Direction;

export interface BaseComponentProps<T extends HTMLElement>
  extends Omit<JSX.InputHTMLAttributes<T>, "class" | "classList"> {
  children?: JSX.Element;
  style?: JSX.CSSProperties;
  class?: string;
  classList?: { [key: string]: boolean | undefined };
}

export type BaseNoChildrenComponentProps<T extends HTMLElement> = Omit<
  BaseComponentProps<T>,
  "children"
>;

export interface BaseSizeComponentProps<T extends HTMLElement>
  extends BaseComponentProps<T> {
  size?: SizeType;
}

export interface BaseDirectionComponentProps<T extends HTMLElement>
  extends BaseComponentProps<T> {
  direction?: Direction;
}

export interface BasePlacementComponentProps<T extends HTMLElement>
  extends BaseComponentProps<T> {
  placement?: Placement;
}

export type TimeoutID = ReturnType<typeof setTimeout>;

export type MessageLevel = "info" | "success" | "warning" | "error";
