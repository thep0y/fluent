import {
  style,
  styleVariants,
  createVar,
  globalStyle,
} from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 创建过渡动画变量
export const transitionDuration = createVar();
export const transitionTiming = createVar();

// 基础开关样式
const baseSwitch = style({
  alignItems: "flex-start",
  boxSizing: "border-box",
  display: "inline-flex",
  position: "relative",
});

// 禁用状态样式
const disabledStyle = style({});

// 指示器基础样式
const indicatorStyle = style({
  color: themeContract.colorNeutralStrokeAccessible,
  borderColor: themeContract.colorNeutralStrokeAccessible,
  borderRadius: vars.borderRadiusCircular,
  border: "1px solid",
  lineHeight: "0",
  boxSizing: "border-box",
  fill: "currentcolor",
  flexShrink: "0",
  fontSize: "18px",
  height: "20px",
  margin: `${vars.spacingVerticalS} ${vars.spacingHorizontalS}`,
  pointerEvents: "none",
  transitionProperty: "background, border, color",
  transitionDuration: vars.durationNormal,
  transitionTimingFunction: vars.curveEasyEase,
  width: "40px",
});

// 默认指示器样式
const defaultIndicatorStyle = style({
  display: "inline-block",
  width: "1em",
  height: "1em",
  borderRadius: "50%",
  verticalAlign: "middle",
  backgroundColor: themeContract.colorNeutralStrokeAccessible,
  transitionProperty: "transform",
  transitionDuration: vars.durationNormal,
  transitionTimingFunction: vars.curveEasyEase,
});

// 输入框样式
const inputStyle = style({
  top: "0",
  left: "0",
  boxSizing: "border-box",
  cursor: "pointer",
  height: "100%",
  margin: "0",
  opacity: "0",
  position: "absolute",
  width: `calc(40px + 2 * ${vars.spacingHorizontalS})`,
});

// 标签样式
const labelStyle = style({
  marginTop: `calc((20px - ${vars.lineHeightBase300}) / 2)`,
  marginBottom: `calc((20px - ${vars.lineHeightBase300}) / 2)`,
  cursor: "pointer",
  padding: `${vars.spacingVerticalS} ${vars.spacingHorizontalS}`,
});

// 标签位置变体
const labelPositionVariants = styleVariants({
  after: {},
  before: {},
  above: {},
});

// 活跃样式
const livelyStyle = style({});

// 全局样式定义
// 标签位置 - 上方
globalStyle(`${labelPositionVariants.above}`, {
  flexDirection: "column",
});

// 标签位置 - 前方
globalStyle(`${labelPositionVariants.before} ${inputStyle}`, {
  right: "0",
  left: "unset",
});

// 活跃状态样式
globalStyle(`${livelyStyle} ${indicatorStyle}`, {
  fontSize: "12px",
  padding: "3px",
  transitionProperty: "font-size, padding",
  transitionDuration: "0.1s",
  transitionTimingFunction: "ease",
});

globalStyle(`${livelyStyle} ${indicatorStyle} > ${defaultIndicatorStyle}`, {
  transitionProperty: "width",
  transitionDuration: "0.1s",
  transitionTimingFunction: "ease",
});

globalStyle(
  `${livelyStyle} ${inputStyle}:not(:disabled):hover ~ ${indicatorStyle}`,
  {
    fontSize: "14px",
    padding: "2px",
  },
);

globalStyle(
  `${livelyStyle} ${inputStyle}:not(:disabled):active ~ ${indicatorStyle} > ${defaultIndicatorStyle}`,
  {
    width: "1.25em",
    borderRadius: "0.5em",
  },
);

// 启用且选中状态
globalStyle(`${inputStyle}:enabled:checked ~ ${indicatorStyle}`, {
  backgroundColor: themeContract.colorCompoundBrandBackground,
  borderColor: themeContract.colorTransparentStroke,
  display: "flex",
  justifyContent: "flex-end",
});

globalStyle(
  `${inputStyle}:enabled:checked ~ ${indicatorStyle} > ${defaultIndicatorStyle}`,
  {
    position: "relative",
    backgroundColor: themeContract.colorNeutralForegroundInverted,
    transitionProperty: "transform, width",
    transitionDuration: "0.5s, 0.2s",
    transitionTimingFunction: "ease-in-out, ease",
  },
);

globalStyle(`${inputStyle}:enabled:checked:hover ~ ${indicatorStyle}`, {
  backgroundColor: themeContract.colorCompoundBrandBackgroundHover,
  borderColor: themeContract.colorTransparentStrokeInteractive,
});

globalStyle(`${inputStyle}:enabled:checked:hover:active ~ ${indicatorStyle}`, {
  backgroundColor: themeContract.colorCompoundBrandBackgroundPressed,
  borderColor: themeContract.colorTransparentStrokeInteractive,
});

// 启用且未选中状态
globalStyle(`${inputStyle}:enabled:not(:checked) ~ ${indicatorStyle}`, {
  color: themeContract.colorNeutralStrokeAccessible,
  borderColor: themeContract.colorNeutralStrokeAccessible,
});

globalStyle(`${inputStyle}:enabled:not(:checked):hover ~ ${indicatorStyle}`, {
  color: themeContract.colorNeutralStrokeAccessibleHover,
  borderColor: themeContract.colorNeutralStrokeAccessibleHover,
});

globalStyle(
  `${inputStyle}:enabled:not(:checked):hover:active ~ ${indicatorStyle}`,
  {
    color: themeContract.colorNeutralStrokeAccessiblePressed,
    borderColor: themeContract.colorNeutralStrokeAccessiblePressed,
  },
);

// 禁用状态
globalStyle(`${inputStyle}:disabled`, {
  cursor: "default",
});

globalStyle(`${inputStyle}:disabled:not(:checked) ~ ${indicatorStyle}`, {
  borderColor: themeContract.colorNeutralStrokeDisabled,
});

globalStyle(`${inputStyle}:disabled:checked ~ ${indicatorStyle}`, {
  backgroundColor: themeContract.colorNeutralBackgroundDisabled,
  borderColor: themeContract.colorTransparentStrokeDisabled,
});

globalStyle(`${inputStyle}:disabled ~ ${indicatorStyle}`, {
  color: themeContract.colorNeutralForegroundDisabled,
});

globalStyle(`${inputStyle}:disabled ~ ${labelStyle}`, {
  cursor: "default",
  color: themeContract.colorNeutralForegroundDisabled,
});

export const switchStyles = {
  base: baseSwitch,
  disabled: disabledStyle,
  lively: livelyStyle,
  labelPosition: labelPositionVariants,
  indicator: indicatorStyle,
  defaultIndicator: defaultIndicatorStyle,
  input: inputStyle,
  label: labelStyle,
};
