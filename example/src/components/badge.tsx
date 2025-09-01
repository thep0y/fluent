import { Badge, Divider } from "@/index";
import { BiSolidPaste } from "solid-icons/bi";
import { box, field } from "../themes/global.css";

const BadgeDemo = () => {
  return (
    <div class={box}>
      <Divider appearance="strong">
        <h2>Badge</h2>
      </Divider>

      <div class={field}>
        <Badge />
      </div>
      <div class={field}>
        <Badge appearance="filled">999+</Badge>
        <Badge appearance="ghost">999+</Badge>
        <Badge appearance="outline">999+</Badge>
        <Badge appearance="tint">999+</Badge>
      </div>
      <div class={field}>
        <Badge size="tiny" />
        <Badge size="extra-small" />
        <Badge size="small" />
        <Badge size="medium" />
        <Badge size="large" />
        <Badge size="extra-large" />{" "}
      </div>
      <div class={field}>
        <Badge shape="square" />
        <Badge shape="rounded" />
        <Badge shape="circular" />
      </div>
      <div class={field}>
        <Badge appearance="filled" color="brand">
          999+
        </Badge>
        <Badge appearance="filled" color="danger">
          999+
        </Badge>
        <Badge appearance="filled" color="important">
          999+
        </Badge>
        <Badge appearance="filled" color="informative">
          999+
        </Badge>
        <Badge appearance="filled" color="severe">
          999+
        </Badge>
        <Badge appearance="filled" color="subtle">
          999+
        </Badge>
        <Badge appearance="filled" color="success">
          999+
        </Badge>
        <Badge appearance="filled" color="warning">
          999+
        </Badge>
      </div>
      <div class={field}>
        <Badge size="medium" icon={<BiSolidPaste />} />
      </div>
      <div class={field}>
        <Badge size="medium" icon={<BiSolidPaste />}>
          Paste
        </Badge>
      </div>
    </div>
  );
};

export default BadgeDemo;
