import { createSignal } from "solid-js";
import { Button, Divider, Label, Slider } from "@/index";
import { box, fieldColumn } from "../themes/global.css";

const wrapperStyle = {
  display: "flex",
  "align-items": "center",
  width: "200px",
};
const style = { width: "200px" };

const Controlled = () => {
  const [sliderValue, setSliderValue] = createSignal(160);

  const onSliderChange = (data: number) => setSliderValue(data);

  const resetSlider = () => setSliderValue(0);
  return (
    <div style={{ display: "flex", "flex-direction": "column" }}>
      <Label>Control Slider [ Current Value: {sliderValue()} ]</Label>
      <Slider
        aria-valuetext={`Value is ${sliderValue}`}
        value={sliderValue()}
        min={20}
        max={200}
        onChange={onSliderChange}
      />

      <Button onClick={resetSlider}>Reset</Button>
    </div>
  );
};

const Step = () => {
  return (
    <div style={wrapperStyle}>
      <Label>Step Example</Label>
      <Slider defaultValue={6} step={3} min={0} max={12} />
    </div>
  );
};

const MinMax = () => {
  const min = 10;
  const max = 50;
  return (
    <>
      <Label>Min/Max Example</Label>
      <div style={wrapperStyle}>
        <Label aria-hidden>{min}</Label>
        <Slider min={min} max={max} defaultValue={20} />
        <Label aria-hidden>{max}</Label>
      </div>
    </>
  );
};

const Vertical = () => {
  return (
    <div style={{ ...wrapperStyle, height: "200px" }}>
      <Label>Vertical Example</Label>
      <Slider vertical step={2} defaultValue={6} min={0} max={10} />
    </div>
  );
};

const SliderDemo = () => {
  return (
    <div class={box}>
      <Divider appearance="strong">
        <h2>Slider</h2>
      </Divider>

      <div class={fieldColumn}>
        <div style={wrapperStyle}>
          <Slider
            onChange={(v) => {
              console.log(v);
            }}
            style={style}
          />
        </div>
      </div>

      <div class={fieldColumn}>
        <div style={wrapperStyle}>
          <Slider size="medium" defaultValue={20} style={style} />
          <Slider size="small" defaultValue={20} style={style} />
        </div>
      </div>

      <div class={fieldColumn}>
        <Controlled />
      </div>

      <div class={fieldColumn}>
        <Step />
      </div>

      <div class={fieldColumn}>
        <MinMax />
      </div>

      <div class={fieldColumn}>
        <Vertical />
      </div>

      <div class={fieldColumn}>
        <div style={wrapperStyle}>
          <Slider disabled style={style} />
        </div>
      </div>
    </div>
  );
};

export default SliderDemo;
