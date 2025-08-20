import type { ParentProps } from "solid-js";
import * as styles from "./Size.css";
import {
  Text,
  Card,
  CardHeader,
  type CardProps,
  Subtitle1,
  Caption1,
} from "@/index";
import { box } from "../../../themes/global.css";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const Title = (props: ParentProps) => {
  return (
    <Subtitle1 as="h4" block class={styles.title}>
      {props.children}
    </Subtitle1>
  );
};

const CardExample = (props: CardProps) => {
  return (
    <Card class={styles.card} {...props}>
      <header class={styles.flex}>
        <img
          class={styles.appIcon}
          src={resolveAsset("logo.svg")}
          alt="Application one logo"
        />
        <img
          class={styles.appIcon}
          src={resolveAsset("logo2.svg")}
          alt="Application two logo"
        />
      </header>

      <CardHeader
        header={
          <Text weight="semibold">
            Alert in Teams when a new document is uploaded in channel
          </Text>
        }
        description={<Caption1 class={styles.caption}>By Microsoft</Caption1>}
      />

      <footer classList={{ [styles.flex]: true, [styles.cardFooter]: true }}>
        <span>Automated</span>
        <span>3290</span>
      </footer>
    </Card>
  );
};

export const Size = () => {
  return (
    <div classList={{ [styles.main]: true, [box]: true }}>
      <section>
        <Title>'small'</Title>
        <CardExample size="small" />
      </section>

      <section>
        <Title>'medium' (Default)</Title>
        <CardExample size="medium" />
      </section>

      <section>
        <Title>'large'</Title>
        <CardExample size="large" />
      </section>
    </div>
  );
};
