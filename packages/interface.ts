import type { JSX } from "solid-js";
import type { FluentMouseEvent } from "./types";

export type HTMLInputElementProps = JSX.HTMLElementTags["input"];
export type HTMLDivElementProps = JSX.HTMLElementTags["div"];

export type SizeType = "small" | "medium" | "large";
export type Direction = "left" | "center" | "right" | "top" | "bottom";
export type Placement =
  | ("top-left" | "top-right" | "bottom-left" | "bottom-right")
  | Direction;

export interface BaseComponentProps<T extends HTMLElement> {
  ref?: T | ((e: T) => void);
  id?: string;
  class?: string;
  classList?: Record<string, boolean | undefined>;
  style?: JSX.CSSProperties;
  children?: JSX.Element;
}

export interface BaseOnClickComponentProps<T extends HTMLElement>
  extends BaseComponentProps<T> {
  onClick?: (event: FluentMouseEvent<T>) => void;
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
