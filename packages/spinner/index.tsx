import { children, lazy, mergeProps, Show, type JSX } from "solid-js";
import "./index.scss";
import { addClassList } from "~/utils/class";
import type { BaseNoChildrenComponentProps } from "~/interface";
import { typographyStyles, type TypographyStyle } from "~/styles/global";

const LazyLabel = lazy(() => import("~/label"));

export interface SpinnerProps
  extends BaseNoChildrenComponentProps<HTMLDivElement> {
  /**
   * The appearance of the Spinner.
   * @default 'primary'
   */
  appearance?: "primary" | "inverted";

  /**
   * Time in milliseconds after component mount before spinner is visible.
   * @default 0
   */
  delay?: number;

  /**
   * Where the label is positioned relative to the Spinner
   * @default 'after'
   */
  labelPosition?: "above" | "below" | "before" | "after";

  /**
   * The size of the spinner.
   * @default 'medium'
   */
  size?:
  | "extra-tiny"
  | "tiny"
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large"
  | "huge";

  /**
   * The animated spinning ring.
   */
  spinner?: JSX.Element;

  /**
   * The part of the spinner that rotates.
   */
  spinnerTail?: JSX.Element;

  /**
   * An optional label for the Spinner.
   */
  label?: JSX.Element;
}

const baseClassName = "fluent-spinner";

const Spinner = (props: SpinnerProps) => {
  const merged = mergeProps(
    { size: "medium" as NonNullable<SpinnerProps["size"]> },
    props,
  );

  const classList = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${merged.class}`]: props.class,
        [`${baseClassName}-${props.appearance}`]: props.appearance,
        [`${baseClassName}-${props.size}`]: props.size,
      },
    });

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

      <span class={`${baseClassName}__spinner`}>
        <span class={`${baseClassName}__spinnerTail`} />
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
