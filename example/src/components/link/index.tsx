import { Link, type LinkProps } from "@/index";
import { box } from "../../themes/global.css";

const Default = (props: LinkProps & { as?: "a" }) => (
  <Link href="https://www.bing.com" {...props}>
    This is a link
  </Link>
);

const Appearance = () => (
  <Link appearance="subtle" href="https://www.bing.com">
    Subtle link
  </Link>
);

const Inline = () => (
  <div>
    This is an{" "}
    <Link href="https://www.bing.com" inline>
      inline link
    </Link>{" "}
    used alongside other text
  </div>
);

const Disabled = () => (
  <Link disabled href="https://www.bing.com">
    Disabled link
  </Link>
);

const DisabledFocusable = () => (
  <Link inline disabled disabledFocusable href="https://www.bing.com">
    Disabled but still focusable
  </Link>
);

const AsButton = () => <Link>Render as a button</Link>;

const AsSpan = () => (
  <div style={{ width: "200px" }}>
    The following link renders as a span.{" "}
    <Link as="span" inline onClick={() => alert("Link rendered as span")}>
      Links that render as a span wrap correctly between lines when their
      content is very long
    </Link>
    . This is because they behave as regular inline elements.
  </div>
);

const LinkExamples = () => {
  return (
    <div class={box}>
      <Default />
      <Appearance />
      <Inline />
      <Disabled />
      <DisabledFocusable />
      <AsButton />
      <AsSpan />
    </div>
  );
};

export default LinkExamples;
