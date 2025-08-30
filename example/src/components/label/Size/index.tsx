import { Field, Input } from "@/index";
import * as styles from "./Size.css";
import { box } from "../../../themes/global.css";

const Size = () => (
  <div classList={{ [styles.size]: true, [box]: true }}>
    <Field label="Size small" size="small">
      <Input />
    </Field>
    <Field label="Size medium" size="medium">
      <Input />
    </Field>
    <Field label="Size large" size="large">
      <Input />
    </Field>
  </div>
);

export default Size;
