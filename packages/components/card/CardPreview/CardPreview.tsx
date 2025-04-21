import { splitProps, children } from "solid-js";

import type { CardPreviewProps } from "./CardPreview.types";
import { cardPreview, logo } from "./CardPreview.css";

const CardPreview = (props: CardPreviewProps) => {
  const classList = () => ({
    [cardPreview]: true,
    [props.class || ""]: !!props.class,
  });

  const [local, others] = splitProps(props, ["class", "children", "logo"]);

  const logoElement = children(
    () => local.logo && <div class={logo}>{local.logo}</div>,
  );

  return (
    <div {...others} classList={classList()}>
      {local.children}
      {logoElement()}
    </div>
  );
};

export default CardPreview;
