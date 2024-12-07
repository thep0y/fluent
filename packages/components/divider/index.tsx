import { addClassList } from "~/utils/class";
import "./index.scss";
import type { BaseComponentProps } from "~/interface";
import { mergeProps, Show } from "solid-js";

export interface DividerProps extends BaseComponentProps<HTMLDivElement> {
  /**
   * Determines the alignment of the content within the divider.
   *
   * @default 'center'
   */
  alignContent?: "start" | "center" | "end";

  /**
   * A divider can have one of the preset appearances.
   * When not specified, the divider has its default appearance.
   *
   * @default 'default'
   */
  appearance?: "brand" | "default" | "strong" | "subtle";

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

const baseClassName = "fluent-divider";

const Divider = (props: DividerProps) => {
  const merged = mergeProps({ alignContent: "center" }, props);

  const classes = () =>
    addClassList({
      base: baseClassName,
      others: {
        [`${merged.class}`]: merged.class,
        [`${baseClassName}-${merged.appearance}`]: merged.appearance,
        [`${baseClassName}-align-${merged.alignContent}`]:
          merged.children && merged.alignContent,
        [`${baseClassName}-vertical`]: merged.vertical,
        [`${baseClassName}-inset`]: merged.inset,
      },
    });

  return (
    <div classList={classes()} style={merged.style}>
      <Show when={merged.children}>
        <div class={`${baseClassName}__wrapper`}>{merged.children}</div>
      </Show>
    </div>
  );
};

export default Divider;
