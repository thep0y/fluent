import { Field, Input, type FieldProps } from "@/index";
import { box } from "../../themes/global.css";

const Default = (props: Partial<FieldProps>) => (
  <div class={box}>
    <Field
      label="Example field"
      validationState="success"
      validationMessage="This is a success message."
      {...props}
    >
      <Input />
    </Field>
  </div>
);

export default Default;
