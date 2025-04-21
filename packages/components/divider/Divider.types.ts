import type { BaseComponentProps } from "~/types";

/**
 * Divider appearance options
 */
export type DividerAppearance = "brand" | "default" | "strong" | "subtle";

/**
 * Divider alignment options
 */
export type DividerAlignment = "start" | "center" | "end";

/**
 * Props for the Divider component
 */
export interface DividerProps extends BaseComponentProps<HTMLDivElement> {
  /**
   * Determines the alignment of the content within the divider.
   *
   * @default 'center'
   */
  alignContent?: DividerAlignment;

  /**
   * A divider can have one of the preset appearances.
   * When not specified, the divider has its default appearance.
   *
   * @default 'default'
   */
  appearance?: DividerAppearance;

  /**
   * Adds padding to the beginning and end of the divider.
   *
   * @default false
   */
  inset?: boolean;

  /**
   * A divider can be horizontal (default) or vertical.
   *
   * @default false
   */
  vertical?: boolean;
}
