import { FaSolidReply, FaSolidShare } from "solid-icons/fa";
import Button from "~/components/button";
import { Card, CardFooter, CardHeader, CardPreview } from "~/components/card";
import { Caption1 } from "~/components/text";
import { Body1 } from "~/index";

const Cards = () => (
  <div>
    <div style={{ padding: "20px" }}>
      <Card style={{ width: "720px" }}>
        <CardHeader
          image={
            <img
              src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/avatar_elvia.svg"
              alt="Elvia Atkins avatar picture"
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
  </div>
);

export default Cards;
