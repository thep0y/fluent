import {
  Button,
  Card,
  CardHeader,
  CardPreview,
  Caption1,
  Subtitle1,
  Text,
} from "@/index";

import type { ParentProps } from "solid-js";

import { CgMoreAlt } from "solid-icons/cg";

import * as styles from "./Orientation.css";
import { box } from "../../../themes/global.css";

const Title = (props: ParentProps) => {
  return (
    <Subtitle1 as="h4" block class={styles.title}>
      {props.children}
    </Subtitle1>
  );
};

const appNameSvg =
  "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/app_logo.svg";

const Orientation = () => {
  return (
    <div classList={{ [styles.main]: true, [box]: true }}>
      <section class={styles.section}>
        <Title>'vertical' (Default)</Title>
        <p>With image as part of header</p>

        <Card class={styles.card}>
          <CardHeader
            image={
              <img
                class={styles.headerImage}
                src={appNameSvg}
                alt="App Name Document"
              />
            }
            header={<Text weight="semibold">App Name</Text>}
            description={<Caption1 class={styles.caption}>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<CgMoreAlt />}
                aria-label="More options"
              />
            }
          />

          <p class={styles.text}>
            Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
            Marshmallow pastry jujubes toffee sugar plum.
          </p>
        </Card>
      </section>

      <section class={styles.section}>
        <Title>'horizontal'</Title>
        <p>With image as part of preview</p>

        <Card class={styles.card} orientation="horizontal">
          <CardPreview class={styles.horizontalCardImage}>
            <img
              class={styles.horizontalCardImage}
              src={appNameSvg}
              alt="App Name Document"
            />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">App Name</Text>}
            description={<Caption1 class={styles.caption}>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<CgMoreAlt />}
                aria-label="More options"
              />
            }
          />
        </Card>
      </section>
    </div>
  );
};

export default Orientation;
