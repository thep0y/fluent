import { Field, Input } from "@/index";
import { box } from "../../themes/global.css";

const Disabled = () => (
  <div class={box}>
    <Field label="Field with disabled control">
      <Input disabled />
    </Field>
  </div>
);

export default Disabled;
