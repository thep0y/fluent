import Switch from "@/components/switch";
import { Divider } from "@/index";
import { createSignal } from "solid-js";
import { box, field } from "../themes/global.css";

const Checked = () => {
  const [checked, setChecked] = createSignal(true);
  const onChange = (ev: boolean) => {
    setChecked(ev);
    console.log(ev);
  };

  return (
    <Switch
      checked={checked()}
      onChange={onChange}
      label={checked() ? "Checked" : "Unchecked"}
    />
  );
};

const SwitchDemo = () => {
  return (
    <div class={box}>
      <Divider appearance="strong">
        <h2>Switch</h2>
      </Divider>

      <div class={field}>
        <Switch />
        <Switch label="This is a switch" />
      </div>

      <div class={field}>
        <Checked />
      </div>

      <div class={field}>
        <Switch disabled label="Unchecked and disabled" />
      </div>

      <div class={field}>
        <Switch disabled label="Checked and disabled" checked />
      </div>

      <div class={field}>
        <Switch label="With label before" labelPosition="before" />

        <Switch label="With label above" labelPosition="above" />

        <Switch label="With label after" labelPosition="after" />
      </div>

      <div class={field}>
        <Switch
          style={{ "max-width": "400px" }}
          label="Here is an example of a Switch with a long label and it starts to wrap to a second line."
        />
      </div>

      <div class={field}>
        <Switch required label="Required" />
      </div>
    </div>
  );
};

export default SwitchDemo;
