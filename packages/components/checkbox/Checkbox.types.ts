import type { HTMLElementProps, RequiredPick } from "~/types";
import type { Label } from "../label";

export interface CheckboxSlots extends HTMLElementProps<"span"> {
  /**
   * The Checkbox's label.
   */
  label?: typeof Label;

  /**
   * Hidden input that handles the checkbox's functionality.
   *
   * This is the PRIMARY slot: all native properties specified directly on `<Checkbox>` will be applied to this slot,
   * except `className` and `style`, which remain on the root slot.
   */
  input: Omit<
    HTMLElementProps<"input">,
    "type" | "class" | "classList" | "style" | "checked"
  >;

  /**
   * The checkbox, with the checkmark icon as its child when checked.
   */
  indicator: Omit<HTMLElementProps<"span">, "class" | "classList">;
}

/**
 * Checkbox Props
 */
export type CheckboxProps = Omit<
  HTMLElementProps<"input"> & Partial<CheckboxSlots>,
  "checked" | "defaultChecked" | "onChange" | "size"
> & {
  /**
   * The controlled value for the checkbox.
   *
   * @default false
   */
  checked?: "mixed" | boolean;

  /**
   * Checkboxes don't support children. To add a label, use the `label` prop.
   */
  children?: never;

  /**
   * Whether the checkbox should be rendered as checked by default.
   */
  defaultChecked?: "mixed" | boolean;

  /**
   * The position of the label relative to the checkbox indicator.
   *
   * @default after
   */
  labelPosition?: "before" | "after";

  /**
   * Callback to be called when the checked state value changes.
   */
  // eslint-disable-next-line @nx/workspace-consistent-callback-type -- can't change type of existing callback
  onChange?: (data: CheckboxOnChangeData) => void;

  /**
   * The shape of the checkbox indicator.
   *
   * The `circular` variant is only recommended to be used in a tasks-style UI (checklist),
   * since it otherwise could be confused for a `RadioItem`.
   *
   * @default square
   */
  shape?: "square" | "circular";

  /**
   * The size of the checkbox indicator.
   *
   * @default medium
   */
  size?: "medium" | "large";
};

/**
 * Data for the onChange event for checkbox.
 */
export interface CheckboxOnChangeData {
  checked: "mixed" | boolean;
}

export type RequiredCheckboxProps = RequiredPick<
  CheckboxProps,
  "checked" | "disabled" | "labelPosition" | "shape" | "size"
>;
