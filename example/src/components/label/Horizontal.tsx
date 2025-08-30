import { Field, Input } from "@/index";
import { box } from "../../themes/global.css";

const Horizontal = () => (
  <div class={box}>
    <Field
      label="Horizontal"
      orientation="horizontal"
      hint="Validation message and hint are below the input."
    >
      <Input />
    </Field>
  </div>
);

export default Horizontal;
