export type FluentKeyboardEvent<T extends HTMLElement> = KeyboardEvent & {
  target: Element;
  currentTarget: T;
};

export type FluentMouseEvent<T extends HTMLElement> = MouseEvent & {
  target: Element;
  currentTarget: T;
};
