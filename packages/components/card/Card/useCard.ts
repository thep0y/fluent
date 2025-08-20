import type { JSX } from "solid-js";
import type { CardProps } from "./Card.types";
import { useFocusableGroup } from "~/hooks/useFocusableGroup";

const focusMap = {
  off: undefined,
  "no-tab": "limited-trap-focus",
  "tab-exit": "limited",
  "tab-only": "unlimited",
} as const;

/**
 * Create the state for interactive cards.
 *
 * This internal hook defines if the card is interactive
 * and control focus properties based on that.
 *
 * @param props - props from this instance of Card
 */
export const useCardInteractive = ({
  focusMode: initialFocusMode,
  ...props
}: CardProps) => {
  const interactive = (
    [
      "onClick",
      "onDoubleClick",
      "onMouseUp",
      "onMouseDown",
      "onPointerUp",
      "onPointerDown",
      "onTouchStart",
      "onTouchEnd",
      "onDragStart",
      "onDragEnd",
    ] as (keyof JSX.HTMLAttributes<HTMLElement>)[]
  ).some((prop) => props[prop]);

  // default focusMode to tab-only when interactive, and off when not
  const focusMode = initialFocusMode ?? (interactive ? "no-tab" : "off");

  const groupperAttrs = useFocusableGroup({
    tabBehavior: focusMap[focusMode],
  });

  const interactiveFocusAttributes = {
    ...groupperAttrs(),
    tabIndex: 0,
  };

  return {
    interactive,
    focusAttributes: focusMode === "off" ? null : interactiveFocusAttributes,
  };
};
