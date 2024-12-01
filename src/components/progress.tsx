import { createSignal, onCleanup, onMount } from "solid-js";
import ProgressBar from "~/progress";
import { useInterval, useTimeout } from "~/utils/time";

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

  return (
    <>
      <div>
        <div style={{ height: "20px" }}>
          <ProgressBar value={value()} />
        </div>

        <div style={{ height: "20px" }}>
          <ProgressBar value={100} />
        </div>
      </div>

      <div>
        <div style={{ height: "20px" }}>
          <ProgressBar value={75} color="error" />
        </div>
        <div style={{ height: "20px" }}>
          <ProgressBar value={95} color="warning" />
        </div>
        <div style={{ height: "20px" }}>
          <ProgressBar value={100} color="success" />
        </div>
      </div>

      <div style={{ height: "20px" }}>
        <ProgressBar />
      </div>

      <div>
        <div style={{ height: "20px" }}>
          <ProgressBar value={50} shape="rounded" thickness="large" />
        </div>

        <div style={{ height: "20px" }}>
          <ProgressBar value={50} shape="square" thickness="large" />
        </div>
      </div>

      <div>
        <div style={{ height: "20px" }}>
          <ProgressBar value={50} thickness="medium" />
        </div>

        <div style={{ height: "20px" }}>
          <ProgressBar value={50} thickness="large" />
        </div>
      </div>
    </>
  );
};

export default ProgressDemo;
