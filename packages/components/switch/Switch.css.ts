import {
  style,
  styleVariants,
  createVar,
  globalStyle,
} from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Create transition animation variables
export const transitionDuration = createVar();
export const transitionTiming = createVar();

// Base switch style
const baseSwitch = style({
  alignItems: "flex-start",
  boxSizing: "border-box",
  display: "inline-flex",
  position: "relative",
});

// Disabled state style
const disabledStyle = style({});

// Base indicator style
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

// Default indicator style
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

// Input style
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

// Label style
const labelStyle = style({
  marginTop: `calc((20px - ${vars.lineHeightBase300}) / 2)`,
  marginBottom: `calc((20px - ${vars.lineHeightBase300}) / 2)`,
  cursor: "pointer",
  padding: `${vars.spacingVerticalS} ${vars.spacingHorizontalS}`,
});

// Label position variants
const labelPositionVariants = styleVariants({
  after: {},
  before: {},
  above: {},
});

// Lively style
const livelyStyle = style({});

// Global styles
// Label position - above
globalStyle(`${labelPositionVariants.above}`, {
  flexDirection: "column",
});

// Label position - before
globalStyle(`${labelPositionVariants.before} ${inputStyle}`, {
  right: "0",
  left: "unset",
});

// Lively state styles
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

// Enabled and checked state
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

// Enabled and unchecked state
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

// Disabled state
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

// Export styles
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
