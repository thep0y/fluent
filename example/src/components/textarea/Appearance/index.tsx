import { Field, Textarea } from "@/index";

import * as styles from "./index.css";
import { box } from "../../../themes/global.css";

const Appearance = () => {
  return (
    <div classList={{ [styles.base]: true, [box]: true }}>
      <div class={styles.fieldWrapper}>
        <Field label="Textarea with Outline appearance">
          <Textarea
            appearance="outline"
            placeholder="type here..."
            resize="both"
          />
        </Field>
      </div>

      <div classList={{ [styles.fieldWrapper]: true, [styles.inverted]: true }}>
        <Field
          label={{
            children: "Textarea with Filled Darker appearance",
            class: styles.invertedLabel,
          }}
        >
          <Textarea
            appearance="filled-darker"
            placeholder="type here..."
            resize="both"
          />
        </Field>
      </div>

      <div classList={{ [styles.fieldWrapper]: true, [styles.inverted]: true }}>
        <Field
          label={{
            children: "Textarea with Filled Lighter appearance",
            class: styles.invertedLabel,
          }}
        >
          <Textarea
            appearance="filled-lighter"
            placeholder="type here..."
            resize="both"
          />
        </Field>
      </div>
    </div>
  );
};

export default Appearance;
