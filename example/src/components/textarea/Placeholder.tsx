import { Field, Textarea } from "@/index";
import { box } from "../../themes/global.css";

const Placeholder = () => (
  <div class={box}>
    <Field label="Textarea with placeholder">
      <Textarea placeholder="type here..." />
    </Field>
  </div>
);

export default Placeholder;
