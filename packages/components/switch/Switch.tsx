import type { HTMLDivElementProps, HTMLInputElementProps } from "~/types";
import { children, createSignal, lazy, mergeProps } from "solid-js";
import type { SwitchProps } from "./Switch.types";
import { switchStyles } from "./Switch.css";

const LazyLabel = lazy(() => import("~/components/label/Label"));

const Switch = (props: SwitchProps) => {
  const merged = mergeProps(
    {
      indicator: <Indicator />,
      labelPosition: "after" as SwitchProps["labelPosition"],
      lively: true,
    },
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

  const classList = () => {
    const classes = {
      [switchStyles.base]: true,
      [merged.class || ""]: !!merged.class,
      [switchStyles.disabled]: merged.disabled,
      [switchStyles.lively]: merged.lively,
    };

    // 添加标签位置样式
    if (
      merged.label &&
      merged.labelPosition &&
      switchStyles.labelPosition[merged.labelPosition]
    ) {
      classes[switchStyles.labelPosition[merged.labelPosition]] = true;
    }

    return classes;
  };

  const onClick: HTMLDivElementProps["onClick"] = (event) => {
    if (merged.disabled) return;

    const target = event.target;
    if (target.classList.contains(switchStyles.input)) {
      return;
    }
    const input = event.currentTarget.querySelector<HTMLInputElement>(
      `.${switchStyles.input}`,
    );
    input?.click();
  };

  const renderLabel = children(() => {
    if (!merged.label) return null;
    return (
      <LazyLabel class={switchStyles.label} required={merged.required}>
        {merged.label}
      </LazyLabel>
    );
  });

  return (
    <div classList={classList()} style={merged.style} onClick={onClick}>
      <input
        class={switchStyles.input}
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

      <div class={switchStyles.indicator} aria-hidden={true}>
        {merged.indicator}
      </div>

      {merged.labelPosition === "after" && renderLabel()}
    </div>
  );
};

const Indicator = () => <div class={switchStyles.defaultIndicator} />;

export default Switch;
