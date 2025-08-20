import type { JSX } from "solid-js";

export type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>;

export type HTMLElementProps<T extends keyof JSX.HTMLElementTags> =
  JSX.HTMLElementTags[T];

export type HTMLInputElementProps = HTMLElementProps<"input">;
export type HTMLDivElementProps = HTMLElementProps<"div">;

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

/* === Like fluentui types === */

/**
 * HTML element types that are not allowed to have children.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Glossary/Empty_element
 */
type EmptyIntrinsicElements =
  | "area"
  | "base"
  | "br"
  | "col"
  | "embed"
  | "hr"
  | "img"
  | "input"
  | "link"
  | "meta"
  | "param"
  | "source"
  | "track"
  | "wbr";

/**
 * Our own alias for `JSX.IntrinsicElements` type that is compatible with both React 17 and React 18+.
 * Use this type to get the intrinsic elements from React types in order to avoid issues between different React versions.
 */
type JSXIntrinsicElement<Element extends JSXIntrinsicElementKeys> =
  JSX.HTMLElementTags[Element];

/**
 * Helper type for {@link Slot}. Modifies `JSXIntrinsicElements<Type>`:
 * * Removes legacy string ref.
 * * Disallows children for empty tags like 'img'.
 */
type IntrinsicElementProps<Type extends JSXIntrinsicElementKeys> =
  Type extends EmptyIntrinsicElements
    ? PropsWithoutChildren<JSXIntrinsicElement<Type>>
    : JSXIntrinsicElement<Type>;

// biome-ignore lint/suspicious/noExplicitAny: We need to use any here to allow for union types in the Props type.
type DistributiveOmit<T, K extends keyof any> = T extends unknown
  ? Omit<T, K>
  : T;

type PropsWithoutChildren<P> = "children" extends keyof P
  ? DistributiveOmit<P, "children">
  : P;

type IsSingleton<T extends string> = {
  [K in T]: Exclude<T, K> extends never ? true : false;
}[T];

// biome-ignore lint/suspicious/noExplicitAny: We need to use any here to allow for union types in the Props type.
type WithSlotRenderFunction<Props extends Record<string, any>> =
  PropsWithoutChildren<Props> & {
    children?: "children" extends keyof Props ? Props["children"] : never;
  };

type JSXIntrinsicElementKeys = keyof JSX.HTMLElementTags;

export type Slot<
  Type extends JSXIntrinsicElementKeys,
  AlternateAs extends JSXIntrinsicElementKeys,
> = IsSingleton<Extract<Type, string>> extends true
  ?
      | ({ as?: Type } & JSX.HTMLElementTags[Type])
      | (AlternateAs extends unknown
          ? { as: AlternateAs } & WithSlotRenderFunction<
              IntrinsicElementProps<AlternateAs>
            >
          : never)
      | null
  : "Error: First parameter to Slot must not be not a union of types. See documentation of Slot type.";
