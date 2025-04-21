import type { JSX } from "solid-js";
import type { BaseNoChildrenComponentProps } from "~/types";

export interface SwitchProps
  extends Omit<BaseNoChildrenComponentProps<HTMLDivElement>, "onChange"> {
  /**
   * Defines the controlled checked state of the Switch.
   * If passed, Switch ignores the `defaultChecked` property.
   * This should only be used if the checked state is to be controlled at a higher level and there is a plan to pass the
   * correct value based on handling `onChange` events and re-rendering.
   *
   * @default false
   */
  checked?: boolean;

  /**
   * Defines whether the Switch is initially in a checked state or not when rendered.
   *
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * The position of the label relative to the Switch.
   *
   * @default after
   */
  labelPosition?: "above" | "after" | "before";

  /**
   * Callback to be called when the checked state value changes.
   */
  onChange?: (checked: boolean) => void;

  /**
   * The track and the thumb sliding over it indicating the on and off status of the Switch.
   */
  indicator?: JSX.Element;

  /**
   * Hidden input that handles the Switch's functionality.
   *
   * This is the PRIMARY slot: all native properties specified directly on the `<Switch>` tag will be applied to this
   * slot, except `className` and `style`, which remain on the root slot.
   */
  //input: HTMLInputElement;

  /**
   * The Switch's label.
   */
  label?: string;

  lively?: boolean;

  disabled?: boolean;
  required?: boolean;
}
