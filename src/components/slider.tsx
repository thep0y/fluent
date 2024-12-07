import { createSignal } from "solid-js";
import { Button, Label, Slider } from "~/index";

const wrapperStyle = { display: "flex", "align-items": "center" };

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
    <div style={wrapperStyle}>
      <Label>Vertical Example</Label>
      <Slider vertical step={2} defaultValue={6} min={0} max={10} />
    </div>
  );
};

const SliderDemo = () => {
  return (
    <div>
      <div>
        <Slider
          onChange={(v) => {
            console.log(v);
          }}
        />
      </div>

      <div>
        <Slider size="medium" defaultValue={20} />
        <Slider size="small" defaultValue={20} />
      </div>

      <div>
        <Controlled />
      </div>

      <div>
        <Step />
      </div>

      <div>
        <MinMax />
      </div>

      <div>
        <Vertical />
      </div>

      <div>
        <Slider disabled />
      </div>
    </div>
  );
};

export default SliderDemo;
