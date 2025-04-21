import { style, styleVariants, createVar } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 创建内容间距变量
export const contentSpacing = createVar();

// 内容样式
const contentStyle = style({
  vars: {
    [contentSpacing]: vars.spacingHorizontalSNudge,
  },
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  boxSizing: "border-box",
  color: themeContract.colorNeutralForeground3,
});

const contentBeforeStyle = style({
  marginRight: contentSpacing,
  paddingLeft: vars.spacingHorizontalMNudge,
});

const contentAfterStyle = style({
  marginLeft: contentSpacing,
  paddingRight: vars.spacingHorizontalMNudge,
});

// 基础输入框样式
const baseInput = style({
  display: "inline-flex",
  alignItems: "center",
  flexWrap: "nowrap",
  position: "relative",
  boxSizing: "border-box",
  verticalAlign: "middle",
  minHeight: "32px",
  fontFamily: vars.fontFamilyBase,
  fontSize: vars.fontSizeBase300,
  fontWeight: vars.fontWeightRegular,
  lineHeight: vars.lineHeightBase300,
  backgroundColor: themeContract.colorNeutralBackground1,
  border: `1px solid ${themeContract.colorNeutralStroke1}`,
  borderBottomColor: themeContract.colorNeutralStrokeAccessible,
  gap: vars.spacingHorizontalXXS,
  borderRadius: vars.borderRadiusMedium,
  transitionDuration: vars.durationFaster,
  transitionProperty: "background, border, color",
  transitionTimingFunction: vars.curveEasyEase,

  selectors: {
    "&:focus-within": {
      borderBottomColor: themeContract.colorNeutralStrokeAccessiblePressed,
      outline: "transparent solid 2px",
    },
    "&:focus-within::after": {
      transform: "scaleX(1)",
      transitionProperty: "transform",
      transitionDuration: vars.durationNormal,
      transitionDelay: vars.curveDecelerateMid,
    },
    "&::after": {
      boxSizing: "border-box",
      content: '""',
      position: "absolute",
      left: "-1px",
      bottom: "-1px",
      right: "-1px",
      height: `max(2px, ${vars.borderRadiusMedium})`,
      borderBottomLeftRadius: vars.borderRadiusMedium,
      borderBottomRightRadius: vars.borderRadiusMedium,
      borderBottom: `2px solid ${themeContract.colorCompoundBrandStroke}`,
      clipPath: "inset(calc(100% - 2px) 0px 0px)",
      transform: "scaleX(0)",
      transitionProperty: "transform",
      transitionDuration: vars.durationUltraFast,
      transitionDelay: vars.curveAccelerateMid,
    },
  },
});

// 输入框外观变体
const appearanceVariants = styleVariants({
  outline: {}, // 默认样式，已在baseInput中定义
  underline: {
    backgroundColor: themeContract.colorTransparentBackground,
    borderLeftStyle: "none",
    borderRightStyle: "none",
    borderTopStyle: "none",
    borderRadius: "0px",

    selectors: {
      "&:focus-within::after": {
        right: "0",
        left: "0",
        borderRadius: "0",
      },
    },
  },
  "filled-darker": {
    backgroundColor: themeContract.colorNeutralBackground3,
    borderColor: themeContract.colorTransparentStroke,
  },
  "filled-lighter": {
    backgroundColor: themeContract.colorNeutralBackground1,
    borderColor: themeContract.colorTransparentStroke,
  },
  "filled-darker-shadow": {
    backgroundColor: themeContract.colorNeutralBackground3,
    borderColor: themeContract.colorTransparentStroke,
    boxShadow: themeContract.shadow4,
  },
  "filled-lighter-shadow": {
    borderColor: themeContract.colorTransparentStroke,
    boxShadow: themeContract.shadow4,
  },
});

// 输入框尺寸变体
const sizeVariants = styleVariants({
  medium: {}, // 默认尺寸，已在baseInput中定义
  small: {
    minHeight: "24px",
    fontSize: vars.fontSizeBase200,
    lineHeight: vars.lineHeightBase200,
  },
  large: {
    minHeight: "40px",
    fontSize: vars.fontSizeBase400,
    lineHeight: vars.lineHeightBase400,
  },
});

// NOTE: 禁用样式应该定义在appearanceVariants之后，否则在禁用状态下，其优先级会低于appearanceVariants的样式，导致禁用状态下的样式无法生效。

// 禁用状态样式
const disabledStyle = style({
  cursor: "not-allowed",
  borderColor: themeContract.colorNeutralStrokeDisabled,
  backgroundColor: themeContract.colorTransparentBackground,
});

// 输入元素样式
const inputElementStyle = style({
  alignSelf: "stretch",
  boxSizing: "border-box",
  flexGrow: 1,
  minWidth: "0px",
  borderStyle: "none",
  padding: `0 ${vars.spacingHorizontalM}`,
  color: themeContract.colorNeutralForeground1,
  backgroundColor: "transparent",
  outlineStyle: "none",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",

  selectors: {
    [`${disabledStyle} &`]: {
      cursor: "not-allowed",
      color: themeContract.colorNeutralForegroundDisabled,
      backgroundColor: themeContract.colorTransparentBackground,
    },
  },
});

export const input = {
  base: baseInput,
  element: inputElementStyle,
  appearance: appearanceVariants,
  size: sizeVariants,
  disabled: disabledStyle,
  content: {
    base: contentStyle,
    before: contentBeforeStyle,
    after: contentAfterStyle,
  },
};
