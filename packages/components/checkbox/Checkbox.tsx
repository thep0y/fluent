import { createSignal, lazy, mergeProps, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

import { FaSolidCheck } from "solid-icons/fa";

import type { CheckboxProps, RequiredCheckboxProps } from "./Checkbox.types";

import type { LabelProps } from "../label";

import * as styles from "./Checkbox.css";

const Label = lazy(() => import("../label"));

export const Checkbox = (props: CheckboxProps) => {
  const merged = mergeProps(
    {
      disabled: false,
      checked: false,
      shape: "square",
      size: "medium",
      labelPosition: "after",
    } as RequiredCheckboxProps,
    props,
  );

  const [checked, setChecked] = createSignal(merged.checked);

  const rootClassList = () => ({
    [styles.root]: true,
    [styles.disabled]: merged.disabled,
    [styles.mixed]: checked() === "mixed",
    [styles.checked]: checked() === true,
    [styles.unchecked]: checked() === false,
  });

  const inputClassList = () => ({
    [styles.input]: true,
    [styles.inputSizes[merged.size]]: true,
    [styles.inputPositions[merged.labelPosition]]: true,
  });

  const labelClassList = () => ({
    [styles.label]: true,
    [styles.labelSizes[merged.size]]: true,
    [styles.labelPositions[merged.labelPosition]]: true,
  });

  const indicatorClassList = () => ({
    [styles.indicator]: true,
    [styles.indicatorSizes[merged.size]]: true,
    [styles.indicatorShapes[merged.shape]]: true,
  });

  return (
    <span classList={rootClassList()}>
      <Dynamic
        component="input"
        type="checkbox"
        classList={inputClassList()}
        checked={checked() === true}
        onChange={(e) => {
          const val = e.currentTarget.indeterminate
            ? "mixed"
            : e.currentTarget.checked;
          setChecked(val);
          merged.onChange?.({
            checked: val,
          });
        }}
        {...merged.input}
      />

      <Show when={merged.labelPosition === "before" && merged.label}>
        <Show
          when={typeof merged.label !== "string"}
          fallback={
            <Label classList={labelClassList()}>{merged.label as string}</Label>
          }
        >
          <Label
            classList={labelClassList()}
            {...(merged.label as LabelProps)}
          />
        </Show>
      </Show>

      <Dynamic
        component="span"
        classList={indicatorClassList()}
        aria-hidden
        {...merged.indicator}
      >
        <Show when={checked() === true}>
          <FaSolidCheck />
        </Show>
      </Dynamic>

      <Show when={merged.labelPosition === "after" && merged.label}>
        <Show
          when={typeof merged.label !== "string"}
          fallback={
            <Label classList={labelClassList()}>{merged.label as string}</Label>
          }
        >
          <Label
            classList={labelClassList()}
            {...(merged.label as LabelProps)}
          />
        </Show>
      </Show>
    </span>
  );
};
