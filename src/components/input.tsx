import { AiFillCamera, AiOutlineDollar, AiOutlineUser } from "solid-icons/ai";
import { createSignal } from "solid-js";
import Input, { type InputProps } from "~/components/input";
import Label from "~/components/label";

const Uncontrolled = () => {
  const onChange: InputProps["onChange"] = (value) => {
    // Uncontrolled inputs can be notified of changes to the value
    console.log(`New value: "${value}"`);
  };

  return (
    <div>
      <Label>Uncontrolled input with default value</Label>
      <Input defaultValue="default value" onChange={onChange} />
    </div>
  );
};

const Controlled = () => {
  const [value, setValue] = createSignal("initial value");
  const onChange: InputProps["onChange"] = (v) => {
    // Uncontrolled inputs can be notified of changes to the value
    console.log(`New value: "${v}"`);
    setValue(v);
  };

  return (
    <div>
      <Label>Controlled input with default value</Label>
      <Input value={value()} onChange={onChange} />
    </div>
  );
};

const InputDemo = () => {
  const style = {
    padding: "10px 0",
  };
  return (
    <div>
      <div style={style}>
        <Input onInput={(v) => console.log(v)} />
      </div>

      <div style={{ "margin-bottom": "20px" }}>
        <div style={style}>
          <Input appearance="underline" />
        </div>
        <div style={style}>
          <Input appearance="filled-lighter" />
        </div>
        <div style={style}>
          <Input appearance="filled-darker" />
        </div>
      </div>

      <div style={{ "margin-bottom": "20px" }}>
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

      <div style={{ "margin-bottom": "20px" }}>
        <div style={style}>
          <Input disabled />
        </div>
        <div style={style}>
          <Input appearance="underline" disabled />
        </div>
        <div style={style}>
          <Input appearance="filled-lighter" disabled />
        </div>
        <div style={style}>
          <Input appearance="filled-darker" disabled />
        </div>
      </div>

      <div style={{ "margin-bottom": "20px" }}>
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

      <div style={{ "margin-bottom": "20px" }}>
        <Input placeholder="This is a placeholder" />
      </div>

      <div style={{ "margin-bottom": "20px" }}>
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
