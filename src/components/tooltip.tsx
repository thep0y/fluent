import { CgInfo } from "solid-icons/cg";
import {
  TbArrowCurveLeft,
  TbArrowCurveRight,
  TbArrowNarrowUp,
} from "solid-icons/tb";
import { For } from "solid-js";
import Tooltip from "~/components/tooltip";
import { Button } from "~/index";

const positions = () =>
  [
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

const TooltipGrid = (props: { withArrow?: boolean }) => {
  return (
    <div
      style={{
        display: "flex",
        "align-items": "flex-start",
        "justify-content": "center",
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
        <For each={positions()}>
          {([position, icon]) => (
            <Tooltip
              positioning={position}
              relationship="label"
              content={`This is ${position} tooltip`}
              withArrow={props.withArrow}
            >
              <Button
                style={{
                  "grid-area": position,
                  width: "64px",
                  height: "64px",
                  "max-width": "64px",
                }}
                icon={icon}
              />
            </Tooltip>
          )}
        </For>
      </div>
    </div>
  );
};

const TooltipDemo = () => (
  <div>
    <TooltipGrid />

    <TooltipGrid withArrow />

    <div style={{ display: "flex", gap: "24px", "justify-content": "center" }}>
      <Tooltip
        content={{
          children: "Example tooltip",
          style: {
            "background-color": "var(--colorBrandBackground)",
            color: "var(--colorNeutralForegroundInverted)",
          },
        }}
        positioning="after"
        withArrow
        relationship="label"
      >
        <Button icon={<CgInfo />} />
      </Tooltip>

      <Tooltip
        content={{
          children: "Example tooltip",
          style: {
            "background-color": "var(--colorBrandBackground)",
            color: "var(--colorNeutralForegroundInverted)",
          },
        }}
        positioning="above"
        withArrow
        relationship="label"
      >
        <Button icon={<CgInfo />} size="large" shape="circular" />
      </Tooltip>

      <Tooltip
        content={{
          children: "Example tooltip",
          style: {
            "background-color": "var(--colorBrandBackground)",
            color: "var(--colorNeutralForegroundInverted)",
          },
        }}
        positioning="above"
        withArrow
        relationship="label"
        // visible
      >
        <Button icon={<CgInfo />} size="large" />
      </Tooltip>
    </div>
  </div>
);

export default TooltipDemo;
