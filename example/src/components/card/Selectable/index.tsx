import { createSignal } from "solid-js";

import { CgMoreAlt } from "solid-icons/cg";

import {
  Button,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  Text,
  type CardProps,
} from "@/index";

import * as styles from "./Selectable.css";
import { box } from "../../../themes/global.css";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const CardExample = (props: CardProps) => {
  return (
    <Card class={styles.card} {...props}>
      <CardPreview
        class={styles.grayBackground}
        logo={
          <img
            class={styles.logoBadge}
            src={resolveAsset("logo3.svg")}
            alt="Figma app logo"
          />
        }
      >
        <img
          class={styles.smallRadius}
          src={resolveAsset("office1.png")}
          alt="Presentation Preview"
        />
      </CardPreview>

      <CardHeader
        header={<Text weight="semibold">iOS App Prototype</Text>}
        description={
          <Caption1 class={styles.caption}>You created 53m ago</Caption1>
        }
        action={
          <Button
            appearance="transparent"
            icon={<CgMoreAlt />}
            aria-label="More actions"
          />
        }
      />
    </Card>
  );
};

const Selectable = () => {
  const [selected1, setSelected1] = createSignal(false);
  const [selected2, setSelected2] = createSignal(false);

  return (
    <div classList={{ [styles.main]: true, [box]: true }}>
      <CardExample
        selected={selected1()}
        onSelectionChange={({ selected }) => setSelected1(selected)}
      />
      <CardExample
        selected={selected2()}
        onSelectionChange={({ selected }) => setSelected2(selected)}
      />
    </div>
  );
};

export default Selectable;
