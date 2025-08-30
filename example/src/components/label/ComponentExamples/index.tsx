import { Checkbox, Field, Input, Slider, Switch, Textarea } from "@/index";
import { root } from "./index.css";
import { box } from "../../../themes/global.css";

const ComponentExamples = () => (
  <div classList={{ [root]: true, [box]: true }}>
    <Field label="Input">
      <Input />
    </Field>
    <Field label="Textarea">
      <Textarea />
    </Field>
    {/* <Field label="Combobox">
      <Combobox>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
      </Combobox>
    </Field> */}
    {/* <Field label="SpinButton">
      <SpinButton />
    </Field> */}
    <Field hint="Checkboxes use their own label instead of the Field label.">
      <Checkbox label="Checkbox" />
    </Field>
    <Field label="Slider">
      <Slider defaultValue={25} />
    </Field>
    <Field label="Switch">
      <Switch />
    </Field>
    {/* <Field label="RadioGroup">
      <RadioGroup>
        <Radio label="Option 1" />
        <Radio label="Option 2" />
        <Radio label="Option 3" />
      </RadioGroup>
    </Field> */}
  </div>
);

export default ComponentExamples;
