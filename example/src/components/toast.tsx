import type { ToastPosition, ToastType } from "@/components/toast";
import { Button, Divider, useToast } from "@/index";
import {
  TbArrowCurveLeft,
  TbArrowCurveRight,
  TbArrowNarrowUp,
} from "solid-icons/tb";
import { For, type JSX } from "solid-js";
import { box, field } from "../themes/global.css";

const positions = (): [ToastPosition, JSX.Element][] =>
  [
    ["top-left", <TbArrowCurveLeft />],
    ["top", <TbArrowNarrowUp />],
    ["top-right", <TbArrowCurveRight />],

    ["bottom-left", <TbArrowCurveRight style={{ rotate: "180deg" }} />],
    ["bottom", <TbArrowNarrowUp style={{ rotate: "180deg" }} />],
    ["bottom-right", <TbArrowCurveLeft style={{ rotate: "180deg" }} />],
  ] as const;

const toastTypes = ["info", "success", "warning", "error"] as const;
const randomIndex = () => Math.floor(Math.random() * toastTypes.length);

const ToastDemo = () => {
  const toast = useToast();

  const showToast = (position: ToastPosition, type: ToastType) => {
    toast.addToast({
      position,
      message: `This is a ${type} message`,
      type,
    });
  };

  return (
    <div class={box}>
      <Divider appearance="strong">
        <h2>Toast</h2>
      </Divider>

      <div
        class={field}
        style={{
          display: "grid",
          padding: "24px 0",
          gap: "24px",
          "grid-template-areas":
            '"top-left   top         top-right"' +
            '".    .             ."' +
            '".        .             ."' +
            '".  .             ."' +
            '"bottom-left   bottom         bottom-right"',
          "justify-content": "space-evenly",
        }}
      >
        <For each={positions()}>
          {([position, icon]) => (
            <Button
              style={{
                "grid-area": position,
                width: "64px",
                height: "64px",
                "max-width": "64px",
              }}
              onClick={() => showToast(position, toastTypes[randomIndex()])}
              icon={icon}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default ToastDemo;
