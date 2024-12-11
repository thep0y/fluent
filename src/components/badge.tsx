import { BiSolidPaste } from "solid-icons/bi";
import { Badge } from "~/index";

const BadgeDemo = () => {
  return (
    <div>
      <div>
        <Badge />
      </div>

      <div>
        <Badge appearance="filled">999+</Badge>
        <Badge appearance="ghost">999+</Badge>
        <Badge appearance="outline">999+</Badge>
        <Badge appearance="tint">999+</Badge>
      </div>

      <div>
        <Badge size="tiny" />
        <Badge size="extra-small" />
        <Badge size="small" />
        <Badge size="medium" />
        <Badge size="large" />
        <Badge size="extra-large" />{" "}
      </div>

      <div>
        <Badge shape="square" />
        <Badge shape="rounded" />
        <Badge shape="circular" />
      </div>

      <div>
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

      <div>
        <Badge size="medium" icon={<BiSolidPaste />} />
      </div>
    </div>
  );
};

export default BadgeDemo;
