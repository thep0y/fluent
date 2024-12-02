import type { BaseComponentProps } from "~/interface";
import "./index.scss";
import { addClassList } from "~/utils/class";
import { children, type JSX } from "solid-js";

export interface LabelProps extends BaseComponentProps<HTMLLabelElement> {
  /**
   * Renders the label as disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Displays an indicator that the label is for a required field. The required prop can be set to true to display
   * an asterisk (*). Or it can be set to a string or jsx content to display a different indicator.
   * @default false
   */
  required?: boolean | JSX.Element;

  /**
   * A label supports different sizes.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * A label supports regular and semibold fontweight.
   * @default regular
   */
  weight?: "regular" | "semibold";
}

const baseClassName = "fluent-label";

const Label = (props: LabelProps) => {
  const classes = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${props.class}`]: props.class,
        [`${baseClassName}-${props.size}`]: props.size,
        [`${baseClassName}-${props.weight}`]: props.weight,
        [`${baseClassName}-${props.disabled}`]: props.disabled,
      },
    });

  const required = children(
    () =>
      props.required && (
        <span class={`${baseClassName}__required`} aria-hidden>
          {typeof props.required === "boolean" ? "*" : props.required}
        </span>
      ),
  );

  return (
    <label classList={classes()} style={props.style}>
      {props.children}
      {required()}
    </label>
  );
};

export default Label;
