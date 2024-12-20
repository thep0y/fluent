import {
  TbArrowCurveLeft,
  TbArrowCurveRight,
  TbArrowNarrowUp,
} from "solid-icons/tb";
import { For } from "solid-js";
import Tooltip from "~/components/tooltip";
import { Button } from "~/index";

const TooltipDemo = () => {
  const positions = [
    ["above-start", <TbArrowCurveLeft />],
    ["above", <TbArrowNarrowUp />],
    ["above-end", <TbArrowCurveRight />],

    ["before-top", <TbArrowCurveRight style={{ rotate: "-90deg" }} />],
    ["before", <TbArrowNarrowUp style={{ rotate: "-90deg" }} />],
    ["before-bottom", <TbArrowCurveLeft style={{ rotate: "-90deg" }} />],

    ["after-top", <TbArrowCurveLeft style={{ rotate: "90deg" }} />],
    ["after", <TbArrowNarrowUp style={{ rotate: "90deg" }} />],
    ["after-bottom", <TbArrowCurveRight style={{ rotate: "90deg" }} />],

    ["below-start", <TbArrowCurveRight style={{ rotate: "180deg" }} />],
    ["below", <TbArrowNarrowUp style={{ rotate: "180deg" }} />],
    ["below-end", <TbArrowCurveLeft style={{ rotate: "180deg" }} />],
  ] as const;

  return (
    <div
      style={{
        display: "flex",
        "align-items": "flex-start",
        gap: "4px",
        "flex-direction": "row",
        margin: "16px  0",
        height: "400px",
      }}
    >
      <div
        style={{
          display: "grid",
          margin: "24px 128px",
          gap: "4px",
          "grid-template-areas":
            '".             above-start   above         above-end     .            "' +
            '"before-top    .             .             .             after-top    "' +
            '"before        .             .             .             after        "' +
            '"before-bottom .             .             .             after-bottom "' +
            '".             below-start   below         below-end     .            "',
        }}
      >
        <For each={positions}>
          {([position, icon]) => (
            <Tooltip
              positioning={position}
              relationship="label"
              content={`This is ${position} tooltip`}
            >
              <Button style={{ "grid-area": position }} icon={icon} />
            </Tooltip>
          )}
        </For>
      </div>
    </div>
  );
};

export default TooltipDemo;
