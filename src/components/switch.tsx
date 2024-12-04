import { createSignal } from "solid-js";
import Switch from "~/components/switch";

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
    <div>
      <div>
        <Switch />
        <Switch label="This is a switch" />
      </div>

      <div>
        <Checked />
      </div>

      <div>
        <Switch disabled label="Unchecked and disabled" />
      </div>

      <div>
        <Switch disabled label="Checked and disabled" checked />
      </div>

      <div>
        <Switch label="With label before" labelPosition="before" />

        <Switch label="With label above" labelPosition="above" />

        <Switch label="With label after" labelPosition="after" />
      </div>

      <div>
        <Switch
          style={{ "max-width": "400px" }}
          label="Here is an example of a Switch with a long label and it starts to wrap to a second line."
        />
      </div>

      <div>
        <Switch required label="Required" />
      </div>
    </div>
  );
};

export default SwitchDemo;
