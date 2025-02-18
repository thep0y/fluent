import type { JSX } from "solid-js";

/**
 * Data sent from the selection events on a selectable card.
 */
export type CardOnSelectData = {
  selected: boolean;
};

/**
 * Card component props.
 */
export interface CardProps {
  /**
   * Sets the appearance of the card.
   *
   * `filled`
   * The card will have a shadow, border and background color.
   *
   * `filled-alternative`
   * This appearance is similar to `filled`, but the background color will be a little darker.
   *
   * `outline`
   * This appearance is similar to `filled`, but the background color will be transparent and no shadow applied.
   *
   * `subtle`
   * This appearance is similar to `filled-alternative`, but no border is applied.
   *
   * @default 'filled'
   */
  appearance?: "filled" | "filled-alternative" | "outline" | "subtle";

  /**
   * Sets the focus behavior for the card.
   *
   * `off`
   * The card will not focusable.
   *
   * `no-tab`
   * This behaviour traps the focus inside of the Card when pressing the Enter key and will only release focus when
   * pressing the Escape key.
   *
   * `tab-exit`
   * This behaviour traps the focus inside of the Card when pressing the Enter key but will release focus when pressing
   * the Tab key on the last inner element.
   *
   * `tab-only`
   * This behaviour will cycle through all elements inside of the Card when pressing the Tab key and then release focus
   * after the last inner element.
   *
   * @default 'off'
   */
  focusMode?: "off" | "no-tab" | "tab-exit" | "tab-only";

  /**
   * Defines the orientation of the card.
   *
   * @default 'vertical'
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Controls the card's border radius and padding between inner elements.
   *
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * Defines the controlled selected state of the card.
   *
   * @default false
   */
  selected?: boolean;

  /**
   * Defines whether the card is initially in a selected state when rendered.
   *
   * @default false
   */
  defaultSelected?: boolean;

  /**
   * Callback to be called when the selected state value changes.
   */
  onSelectionChange?: (data: CardOnSelectData) => void;

  /**
   * Floating action that can be rendered on the top-right of a card. Often used together with
   * `selected`, `defaultSelected`, and `onSelectionChange` props
   */
  floatingAction?: JSX.Element;

  /**
   * The internal checkbox element that renders when the card is selectable.
   */
  checkbox?: JSX.Element;
}
