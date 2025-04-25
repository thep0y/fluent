import { AiFillCamera, AiOutlineDollar, AiOutlineUser } from "solid-icons/ai";
import { createEffect, createSignal } from "solid-js";
import { Input, Label, darkThemeVars, type InputProps } from "@/index";

const Uncontrolled = () => {
  const onChange: InputProps["onChange"] = (value) => {
    // Uncontrolled inputs can be notified of changes to the value
    console.log(`New value: "${value}"`);
  };

  return (
    <div class="field">
      <Label>Uncontrolled input with default value</Label>
      <Input defaultValue="default value" onChange={onChange} />
    </div>
  );
};

const Controlled = () => {
  const [value, setValue] = createSignal("initial value");
  const handleInput: InputProps["onInput"] = (v) => {
    if (v.length <= 20) {
      setValue(v);
    }
  };

  createEffect(() => console.log(`New value: "${value()}"`));

  return (
    <div class="field">
      <Label>Controlled input limiting the value to 20 characters</Label>
      <Input id="input-121" value={value()} onInput={handleInput} />
    </div>
  );
};

const InputDemo = () => {
  const style = {
    padding: "10px",
  };
  return (
    <div class="box">
      <div class="field" style={style}>
        <Input onInput={(v) => console.log(v)} />
      </div>

      <div class="field-column">
        <div style={style}>
          <Input appearance="underline" />
        </div>
        <div
          style={{
            ...style,
            "background-color": darkThemeVars.colorNeutralBackground2,
          }}
        >
          <Input appearance="filled-lighter" />
        </div>
        <div
          style={{
            ...style,
            "background-color": darkThemeVars.colorNeutralBackground2,
          }}
        >
          <Input appearance="filled-darker" />
        </div>
      </div>

      <div class="field-column" style={{ "margin-bottom": "20px" }}>
        <div style={style}>
          <Input contentBefore={<AiOutlineUser />} />
        </div>
        <div style={style}>
          <Input contentAfter={<AiFillCamera />} />
        </div>
        <div style={style}>
          <Input contentBefore={<AiOutlineDollar />} contentAfter=".00" />
        </div>
      </div>

      <div class="field-column" style={{ "margin-bottom": "20px" }}>
        <div style={style}>
          <Input disabled value="disabled" />
        </div>
        <div style={style}>
          <Input appearance="underline" disabled value="disabled" />
        </div>
        <div
          style={{
            ...style,
            "background-color": darkThemeVars.colorNeutralBackground2,
          }}
        >
          <Input appearance="filled-lighter" disabled value="disabled" />
        </div>
        <div
          style={{
            ...style,
            "background-color": darkThemeVars.colorNeutralBackground2,
          }}
        >
          <Input appearance="filled-darker" disabled value="disabled" />
        </div>
      </div>

      <div class="field-column" style={{ "margin-bottom": "20px" }}>
        <div>
          <Label style={{ "padding-inline-end": "12px" }}>
            Sample inline input
          </Label>

          <Input />
        </div>

        <p>
          This input is <Input placeholder="inline" aria-label="inline" />{" "}
          within a paragraph of text (be sure to provide an{" "}
          <code>aria-label</code>).
        </p>
      </div>

      <div class="field-column" style={{ "margin-bottom": "20px" }}>
        <Input placeholder="This is a placeholder" />
      </div>

      <div class="field-column" style={{ "margin-bottom": "20px" }}>
        <div style={style}>
          <Input size="small" />
        </div>
        <div style={style}>
          <Input />
        </div>
        <div style={style}>
          <Input size="large" />
        </div>
      </div>

      <Uncontrolled />

      <Controlled />
    </div>
  );
};

export default InputDemo;
