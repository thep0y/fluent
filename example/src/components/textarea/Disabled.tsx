import { Field, Textarea } from "@/index";
import { box } from "../../themes/global.css";

const Disabled = () => (
  <div class={box}>
    <Field label="Disabled Textarea">
      <Textarea disabled />
    </Field>
  </div>
);

export default Disabled;
