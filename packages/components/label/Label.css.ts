import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 基础标签样式
const baseLabel = style({
  lineHeight: vars.lineHeightBase300,
  fontSize: vars.fontSizeBase300,
  fontFamily: vars.fontFamilyBase,
  color: themeContract.colorNeutralForeground1,
});

// 尺寸变体
const sizeVariants = styleVariants({
  small: {
    fontSize: vars.fontSizeBase200,
    lineHeight: vars.lineHeightBase200,
  },
  medium: {},
  large: {
    fontWeight: vars.fontWeightSemibold,
    fontSize: vars.fontSizeBase400,
    lineHeight: vars.lineHeightBase400,
  },
});

// 字重变体
const weightVariants = styleVariants({
  regular: {},
  semibold: {
    fontWeight: vars.fontWeightSemibold,
  },
});

// 禁用状态样式
const disabledStyle = style({
  color: themeContract.colorNeutralForegroundDisabled,
});

// 必填标记样式
const requiredStyle = style({
  paddingLeft: vars.spacingHorizontalXS,
  color: themeContract.colorPaletteRedForeground3,
});

// 导出样式对象
export const label = {
  base: baseLabel,
  size: sizeVariants,
  weight: weightVariants,
  disabled: disabledStyle,
  required: requiredStyle,
};
