import {
  Button,
  Body1,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Caption1,
  Divider,
} from "@/index";
import { FaSolidReply, FaSolidShare } from "solid-icons/fa";
import { box, field } from "../../themes/global.css";

const Default = () => (
  <div class={box}>
    <Divider appearance="strong">
      <h2>Card</h2>
    </Divider>

    <div class={field}>
      <Card style={{ width: "720px" }}>
        <CardHeader
          image={
            <img
              src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/avatar_elvia.svg"
              alt="Elvia Atkins"
            />
          }
          header={
            <Body1>
              <b>Elvia Atkins</b> mentioned you
            </Body1>
          }
          description={<Caption1>5h ago · About us - Overview</Caption1>}
        />

        <CardPreview
          logo={
            <img
              src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/docx.png"
              alt="Microsoft Word document"
            />
          }
        >
          <img
            src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/doc_template.png"
            alt="Preview of a Word document: About Us - Overview"
          />
        </CardPreview>

        <CardFooter>
          <Button icon={<FaSolidReply />}>Reply</Button>
          <Button icon={<FaSolidShare />}>Share</Button>
        </CardFooter>
      </Card>
    </div>

    <div class={field}></div>
  </div>
);

export default Default;
