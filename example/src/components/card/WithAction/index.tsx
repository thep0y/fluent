import {
  Body1,
  Button,
  Caption1,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Link,
  Subtitle1,
} from "@/index";
import * as styles from "./WithAction.css";
import { FiMoreHorizontal } from "solid-icons/fi";
import { IoOpenOutline } from "solid-icons/io";
import { box } from "../../../themes/global.css";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const Header = ({ title, description }: Record<string, string>) => {
  return (
    <>
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
    </>
  );
};

export const WithAction = () => {
  let linkRef: HTMLAnchorElement | undefined;

  const onActionCardKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      onActionCardClick();
    }
  };

  const onActionCardClick = () => {
    alert("Opened Classroom Collaboration app");
  };

  const onLinkedCardClick = () => {
    linkRef?.click();
  };

  const onLinkedCardKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Enter") {
      onLinkedCardClick();
    }
  };

  return (
    <div classList={{ [styles.main]: true, [box]: true }}>
      <section>
        <Header
          title="Card with click event"
          description="This card has both a root click event and an Open button that performs the same action. Adding enter key handling to the card root is optional since the Open button also provides keyboard access."
        />

        <Card
          class={styles.card}
          onClick={onActionCardClick}
          onKeyDown={onActionCardKeyDown}
          focusMode="off"
        >
          <CardPreview>
            <img
              src={resolveAsset("office2.png")}
              alt="Sales Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            image={
              <img
                src={resolveAsset("pptx.png")}
                width="32px"
                height="32px"
                alt="Microsoft PowerPoint logo"
              />
            }
            header={
              <Body1>
                <b>App Name</b>
              </Body1>
            }
            description={<Caption1>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<FiMoreHorizontal />}
                aria-label="More options"
              />
            }
          />

          <p class={styles.text}>
            Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
            Marshmallow pastry jujubes toffee sugar plum.
          </p>

          <CardFooter>
            <Button
              appearance="primary"
              icon={<IoOpenOutline />}
              onClick={onActionCardClick}
            >
              Open
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <Header
          title="Linked Card"
          description="When a card doesn't have a separate button within its contents, it usually makes the most sense for the title text of the card to become the additional interactive element (a link in this example)."
        />

        <Card
          class={styles.card}
          onClick={onLinkedCardClick}
          onKeyDown={onLinkedCardKeyDown}
          focusMode="off"
        >
          <CardPreview>
            <img
              src={resolveAsset("office2.png")}
              alt="Sales Presentation Preview"
            />
          </CardPreview>

          <CardHeader
            image={
              <img
                src={resolveAsset("pptx.png")}
                width="32px"
                height="32px"
                alt="Microsoft PowerPoint logo"
              />
            }
            header={
              <Link
                href="https://www.microsoft.com/"
                target="_blank"
                ref={linkRef}
                class={styles.link}
              >
                <b>App Name</b>
              </Link>
            }
            description={<Caption1>Developer</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<FiMoreHorizontal />}
                aria-label="More options"
              />
            }
          />
        </Card>
      </section>
    </div>
  );
};
