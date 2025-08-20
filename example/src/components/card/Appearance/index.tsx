import {
  Body1,
  Button,
  Caption1,
  Card,
  CardHeader,
  type CardProps,
  Subtitle1,
  Text,
} from "@/index";
import * as styles from "./Appearance.css";
import { CgMoreAlt } from "solid-icons/cg";
import { box } from "../../../themes/global.css";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const ExampleHeader = ({ title, description }: Record<string, string>) => {
  return (
    <header>
      {title ? (
        <Subtitle1 as="h4" block class={styles.title}>
          {title}
        </Subtitle1>
      ) : null}

      {description ? (
        <Body1 as="p" block class={styles.description}>
          {description}
        </Body1>
      ) : null}
    </header>
  );
};

const CardExample = (props: CardProps) => {
  const onClick = () => console.log("Interactive!");

  return (
    <Card {...props} class={styles.card} onClick={onClick}>
      <CardHeader
        image={
          <img
            class={styles.logo}
            src={resolveAsset("app_logo.svg")}
            alt="App name logo"
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
  );
};

const Appearance = () => {
  return (
    <div classList={{ [styles.main]: true, [box]: true }}>
      <section>
        <ExampleHeader
          title="Filled (Default)"
          description="This is the default style to use for cards. Use this style variant for most of your card
          designs."
        />

        <CardExample />
      </section>

      <section>
        <ExampleHeader
          title="Filled Alternative"
          description="Use if your card is being displayed on a lighter gray or white surface. This ensures that you
          have adequate contrast between the card surface and the background of the application."
        />

        <CardExample appearance="filled-alternative" />
      </section>

      <section>
        <ExampleHeader
          title="Outline"
          description="Use when you don't want a filled background color but a discernable outline (border) on the
          card."
        />

        <CardExample appearance="outline" />
      </section>

      <section>
        <ExampleHeader
          title="Subtle"
          description="This variant doesn't have a background or border for the card container. However, it does include
          interaction states that display a visible footprint when interacting with the card item."
        />

        <CardExample appearance="subtle" />
      </section>
    </div>
  );
};

export default Appearance;
