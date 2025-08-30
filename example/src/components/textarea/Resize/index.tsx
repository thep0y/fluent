import { Field, Textarea } from "@/index";
import { root } from "./index.css";
import { box } from "../../../themes/global.css";

const Resize = () => {
  return (
    <div classList={{ [root]: true, [box]: true }}>
      <Field label='Textarea with resize set to "none"'>
        <Textarea resize="none" />
      </Field>

      <Field label='Textarea with resize set to "vertical"'>
        <Textarea resize="vertical" />
      </Field>

      <Field label='Textarea with resize set to "horizontal"'>
        <Textarea resize="horizontal" />
      </Field>

      <Field label='Textarea with resize set to "both"'>
        <Textarea resize="both" />
      </Field>
    </div>
  );
};

export default Resize;
