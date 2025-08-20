import {
  Badge,
  Body1,
  Button,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  Checkbox,
  Text,
} from "@/index";
import * as styles from "./Templates.css";
import { FiMoreHorizontal } from "solid-icons/fi";
import { HiSolidBellAlert } from "solid-icons/hi";
import { FaSolidCircleHalfStroke } from "solid-icons/fa";
import { ImAttachment } from "solid-icons/im";
import { AiOutlineCheckCircle } from "solid-icons/ai";
import { TiMessage } from "solid-icons/ti";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const excelLogo = resolveAsset("xlsx.png");
const wordLogo = resolveAsset("docx.png");
const powerpointLogoURL = resolveAsset("pptx.png");

export const Templates = () => {
  return (
    <div class={styles.container}>
      <Card class={styles.card}>
        <header classList={{ [styles.flex]: true, [styles.labels]: true }}>
          <Badge color="severe" shape="rounded" appearance="tint">
            Red
          </Badge>

          <Badge color="success" shape="rounded" appearance="tint">
            Green
          </Badge>

          <Badge color="brand" shape="rounded" appearance="tint">
            Blue
          </Badge>
        </header>

        <div class={styles.taskCheckbox}>
          <Checkbox id="task-1" />

          <label for="task-1">
            <Text block weight="semibold">
              Task title
            </Text>

            <Caption1 block class={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
              Marshmallow pastry jujubes toffee sugar plum.
            </Caption1>
          </label>
        </div>

        <div class={styles.taskCheckbox}>
          <Checkbox id="task-2" />

          <label for="task-2">
            <Text block weight="semibold">
              Task title
            </Text>

            <Caption1 block class={styles.caption}>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
              Marshmallow pastry jujubes toffee sugar plum.
            </Caption1>
          </label>
        </div>

        <footer classList={{ [styles.flex]: true, [styles.footer]: true }}>
          <HiSolidBellAlert color="#C4314B" />
          <FaSolidCircleHalfStroke color="#0078DB" />

          <div class={styles.flex}>
            <ImAttachment />
            <Body1>4</Body1>
          </div>

          <div class={styles.flex}>
            <AiOutlineCheckCircle />
            <Body1>2/12</Body1>
          </div>

          <TiMessage />
        </footer>
      </Card>

      <Card class={styles.card}>
        <CardPreview>
          <img
            src={resolveAsset("intelligence.png")}
            alt="Intelligence - Design to Amplify"
          />
        </CardPreview>
      </Card>

      <div class={styles.grid} role="list">
        <Card class={styles.card} size="small" role="listitem">
          <CardHeader
            image={
              <img
                src={powerpointLogoURL}
                alt="PowerPoint app logo"
                loading="lazy"
              />
            }
            header={<Text weight="semibold">Team Offsite 2020</Text>}
            description={
              <Caption1 class={styles.caption}>
                OneDrive &gt; Presentations
              </Caption1>
            }
            action={
              <Button appearance="transparent" icon={<FiMoreHorizontal />} />
            }
          />
        </Card>

        <Card class={styles.card} size="small" role="listitem">
          <CardHeader
            image={<img src={excelLogo} alt="Excel app logo" loading="lazy" />}
            header={<Text weight="semibold">Team Budget</Text>}
            description={
              <Caption1 class={styles.caption}>
                OneDrive &gt; Spreadsheets
              </Caption1>
            }
            action={
              <Button appearance="transparent" icon={<FiMoreHorizontal />} />
            }
          />
        </Card>

        <Card class={styles.card} size="small" role="listitem">
          <CardHeader
            image={<img src={wordLogo} alt="Word app logo" loading="lazy" />}
            header={<Text weight="semibold">Secret Project Briefing</Text>}
            description={
              <Caption1 class={styles.caption}>
                OneDrive &gt; Documents
              </Caption1>
            }
            action={
              <Button appearance="transparent" icon={<FiMoreHorizontal />} />
            }
          />
        </Card>
      </div>
    </div>
  );
};
