import { Field, Input } from "@/index";
import { box } from "../../themes/global.css";

const Required = () => (
  <div class={box}>
    <Field label="Required field" required>
      <Input />
    </Field>
  </div>
);

export default Required;
