import { CgInfo } from "solid-icons/cg";
import {
  TbOutlineArrowCurveLeft,
  TbOutlineArrowCurveRight,
  TbOutlineArrowNarrowUp,
} from "solid-icons/tb";
import { For } from "solid-js";
import { Button, Divider, themeContract, Tooltip } from "@/index";
import { box, field } from "../themes/global.css";

const positions = () =>
  [
    ["above-start", <TbOutlineArrowCurveLeft />],
    ["above", <TbOutlineArrowNarrowUp />],
    ["above-end", <TbOutlineArrowCurveRight />],

    ["before-top", <TbOutlineArrowCurveRight style={{ rotate: "-90deg" }} />],
    ["before", <TbOutlineArrowNarrowUp style={{ rotate: "-90deg" }} />],
    ["before-bottom", <TbOutlineArrowCurveLeft style={{ rotate: "-90deg" }} />],

    ["after-top", <TbOutlineArrowCurveLeft style={{ rotate: "90deg" }} />],
    ["after", <TbOutlineArrowNarrowUp style={{ rotate: "90deg" }} />],
    ["after-bottom", <TbOutlineArrowCurveRight style={{ rotate: "90deg" }} />],

    ["below-start", <TbOutlineArrowCurveRight style={{ rotate: "180deg" }} />],
    ["below", <TbOutlineArrowNarrowUp style={{ rotate: "180deg" }} />],
    ["below-end", <TbOutlineArrowCurveLeft style={{ rotate: "180deg" }} />],
  ] as const;

const TooltipGrid = (props: { withArrow?: boolean }) => {
  return (
    <div
      class={field}
      style={{
        display: "grid",
        padding: "24px 0",
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
  );
};

const TooltipDemo = () => (
  <div class={box}>
    <Divider appearance="strong">
      <h2>Tooltip</h2>
    </Divider>

    <TooltipGrid />

    <TooltipGrid withArrow />

    <div
      class={field}
      style={{ display: "flex", gap: "24px", "justify-content": "center" }}
    >
      <Tooltip
        content={{
          children: "Example tooltip",
          style: {
            "background-color": themeContract.colorBrandBackground,
            color: themeContract.colorNeutralForegroundInverted,
          },
        }}
        positioning="before"
        withArrow
        relationship="label"
      >
        <Button icon={<CgInfo />} size="small" shape="square" />
      </Tooltip>

      <Tooltip
        content={{
          children: "Example tooltip",
          style: {
            "background-color": themeContract.colorBrandBackground,
            color: themeContract.colorNeutralForegroundInverted,
          },
        }}
        positioning="above"
        withArrow
        relationship="label"
      >
        <Button icon={<CgInfo />} size="medium" shape="circular" />
      </Tooltip>

      <Tooltip
        content={{
          children: "Example tooltip",
          style: {
            "background-color": themeContract.colorBrandBackground,
            color: themeContract.colorNeutralForegroundInverted,
          },
        }}
        positioning="above"
        withArrow
        relationship="label"
      >
        <Button icon={<CgInfo />} size="large" />
      </Tooltip>
    </div>
  </div>
);

export default TooltipDemo;
