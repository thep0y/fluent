import { Field, Input } from "@/index";
import { root } from "./index.css";
import { box } from "../../../themes/global.css";
import { IoSparkles } from "solid-icons/io";

const ValidationMessage = () => (
  <div classList={{ [root]: true, [box]: true }}>
    <Field label="Error state" validationMessage="This is an error message.">
      <Input />
    </Field>
    <Field
      label="Warning state"
      validationState="warning"
      validationMessage="This is a warning message."
    >
      <Input />
    </Field>
    <Field
      label="Success state"
      validationState="success"
      validationMessage="This is a success message."
    >
      <Input />
    </Field>
    <Field
      label="Custom state"
      validationState="none"
      validationMessageIcon={<IoSparkles />}
      validationMessage="This is a custom message."
    >
      <Input />
    </Field>
  </div>
);

export default ValidationMessage;
