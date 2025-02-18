import type { ParentProps } from "solid-js";
import { typographyStyles } from "~/styles/global";

const baseClassName = "fluent-caption1";

export const Caption1 = (props: ParentProps) => (
  <div class={baseClassName} style={typographyStyles.caption1}>
    {props.children}
  </div>
);
