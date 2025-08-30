import { Field, Input } from "@/index";
import { box } from "../../themes/global.css";

const Hint = () => (
  <div class={box}>
    <Field label="Example with hint" hint="Sample hint text.">
      <Input />
    </Field>
  </div>
);

export default Hint;
