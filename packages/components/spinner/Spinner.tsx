import { children, lazy, mergeProps, Show } from "solid-js";
import type { SpinnerProps } from "./Spinner.types";
import { spinner } from "./Spinner.css";

const LazyLabel = lazy(() => import("~/components/label/Label"));

const Spinner = (props: SpinnerProps) => {
  const merged = mergeProps(
    { size: "medium" as NonNullable<SpinnerProps["size"]> },
    props,
  );

  const classList = () => {
    const classes = {
      [spinner.base]: true,
      [merged.class || ""]: !!merged.class,
    };

    // Add appearance style
    if (merged.appearance && spinner.appearance[merged.appearance]) {
      classes[spinner.appearance[merged.appearance]] = true;
    }

    // Add size style
    if (merged.size && spinner.size[merged.size]) {
      classes[spinner.size[merged.size]] = true;
    }

    return classes;
  };

  const label = children(
    () =>
      merged.label && (
        <LazyLabel class={spinner.labelSize[merged.size]}>
          {merged.label}
        </LazyLabel>
      ),
  );

  return (
    <div classList={classList()} style={merged.style}>
      <Show
        when={
          merged.label &&
          (merged.labelPosition === "above" || props.labelPosition === "before")
        }
      >
        {label()}
      </Show>

      <span class={spinner.spinnerElement}>
        <span class={spinner.spinnerTail} />
      </span>

      <Show
        when={
          merged.label &&
          (merged.labelPosition === undefined ||
            merged.labelPosition === "below" ||
            merged.labelPosition === "after")
        }
      >
        {label()}
      </Show>
    </div>
  );
};

export default Spinner;
