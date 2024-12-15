import { addClassList } from "~/utils";
import "./index.scss";
import type {
  BaseNoChildrenComponentProps,
  HTMLDivElementProps,
  HTMLInputElementProps,
} from "~/interface";
import { children, createSignal, lazy, mergeProps } from "solid-js";
import type { JSX } from "solid-js";

const LazyLabel = lazy(() => import("~/components/label"));

export interface SwitchProps
  extends BaseNoChildrenComponentProps<HTMLDivElement> {
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

const baseClassName = "fluent-switch";

const Switch = (props: SwitchProps) => {
  const merged = mergeProps(
    { indicator: <Indicator />, labelPosition: "after", lively: true },
    props,
  );

  const [isChecked, setIsChecked] = createSignal(
    merged.checked ?? merged.defaultChecked ?? false,
  );

  const handleChange: HTMLInputElementProps["onChange"] = (event) => {
    const checked = event.currentTarget.checked;

    if (merged.checked === undefined) {
      setIsChecked(checked);
    }

    merged.onChange?.(checked);
  };

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${baseClassName}-label-${merged.labelPosition}`]:
          merged.label && merged.labelPosition,
        [`${baseClassName}-disabled`]: merged.disabled,
        [`${baseClassName}-lively`]: merged.lively,
        [`${merged.class}`]: merged.class,
      },
    });

  const onClick: HTMLDivElementProps["onClick"] = (event) => {
    if (merged.disabled) return;

    const target = event.target;
    if (target.className === `${baseClassName}__input`) {
      return;
    }
    const input: HTMLInputElement = event.currentTarget.querySelector(
      `.${baseClassName}__input`,
    )!;
    input.click();
  };

  const renderLabel = children(() => {
    if (!merged.label) return null;
    return (
      <LazyLabel class={`${baseClassName}__label`} required={merged.required}>
        {merged.label}
      </LazyLabel>
    );
  });

  return (
    <div classList={classList()} style={merged.style} onClick={onClick}>
      <input
        class={`${baseClassName}__input`}
        role="switch"
        type="checkbox"
        checked={merged.checked ?? isChecked()}
        aria-checked={merged.checked ?? isChecked()}
        onChange={handleChange}
        disabled={merged.disabled}
      />

      {(merged.labelPosition === "before" ||
        merged.labelPosition === "above") &&
        renderLabel()}

      <div class={`${baseClassName}__indicator`} aria-hidden={true}>
        {merged.indicator}
      </div>

      {merged.labelPosition === "after" && renderLabel()}
    </div>
  );
};

const Indicator = () => <div class={`${baseClassName}__default-indicator`} />;

export default Switch;
