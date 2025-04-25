import { createSignal, onCleanup, onMount } from "solid-js";
import ProgressBar from "@/components/progress/Progress";
import { Divider, useInterval, useTimeout } from "@/index";

const ProgressDemo = () => {
  const [value, setValue] = createSignal(0);
  const [setInterval, cancelInterval] = useInterval();
  const [setTimeout, cancelTimeout] = useTimeout();

  onMount(() => {
    setInterval(() => {
      if (value() <= 99) setValue((prev) => prev + 1);
      else {
        setTimeout(() => {
          setValue(0);
          cancelTimeout();
        }, 3000);
      }
    }, 100);
  });

  onCleanup(() => {
    cancelInterval();
    cancelTimeout();
  });

  const style = {
    height: "20px",
    width: "400px",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  };

  return (
    <div class="box">
      <Divider appearance="strong">
        <h2>ProgressBar</h2>
      </Divider>

      <div class="field-column">
        <div style={style}>
          <ProgressBar value={value()} />
        </div>

        <div style={style}>
          <ProgressBar value={100} />
        </div>
      </div>

      <div class="field-column">
        <div style={style}>
          <ProgressBar value={75} color="error" />
        </div>
        <div style={style}>
          <ProgressBar value={95} color="warning" />
        </div>
        <div style={style}>
          <ProgressBar value={100} color="success" />
        </div>
      </div>

      <div class="field-column">
        <div style={style}>
          <ProgressBar />
        </div>
      </div>

      <div class="field-column">
        <div style={style}>
          <ProgressBar value={50} shape="rounded" thickness="large" />
        </div>

        <div style={style}>
          <ProgressBar value={50} shape="square" thickness="large" />
        </div>
      </div>

      <div class="field-column">
        <div style={style}>
          <ProgressBar value={50} thickness="medium" />
        </div>

        <div style={style}>
          <ProgressBar value={50} thickness="large" />
        </div>
      </div>
    </div>
  );
};

export default ProgressDemo;
