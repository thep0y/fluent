import { children, lazy, mergeProps, Show } from "solid-js";
import { typographyStyles, type TypographyStyle } from "~/themes/typography";
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

    // 添加外观样式
    if (merged.appearance && spinner.appearance[merged.appearance]) {
      classes[spinner.appearance[merged.appearance]] = true;
    }

    // 添加尺寸样式
    if (merged.size && spinner.size[merged.size]) {
      classes[spinner.size[merged.size]] = true;
    }

    return classes;
  };

  const label = children(
    () =>
      merged.label && (
        <LazyLabel
          style={{
            ...labelStyles[merged.size],
            ...(merged.appearance === "inverted" ? labelStyles.inverted : {}),
          }}
        >
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

const labelStyles: Record<
  NonNullable<SpinnerProps["size"]> | "inverted",
  TypographyStyle | { color: string }
> = {
  inverted: {
    color: "var(--colorNeutralForegroundStaticInverted)",
  },

  "extra-tiny": {
    ...typographyStyles.body1,
  },

  tiny: {
    ...typographyStyles.body1,
  },

  "extra-small": {
    ...typographyStyles.body1,
  },

  small: {
    ...typographyStyles.body1,
  },

  medium: {
    ...typographyStyles.subtitle2,
  },

  large: {
    ...typographyStyles.subtitle2,
  },

  "extra-large": {
    ...typographyStyles.subtitle2,
  },

  huge: {
    ...typographyStyles.subtitle1,
  },
};

export default Spinner;
