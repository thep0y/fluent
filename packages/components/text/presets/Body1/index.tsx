import type { ParentProps } from "solid-js";

import { typographyStyles } from "~/styles/global";

const baseClassName = "fluent-body1";

export const Body1 = (props: ParentProps) => (
  <div class={baseClassName} style={typographyStyles.body1}>
    {props.children}
  </div>
);
