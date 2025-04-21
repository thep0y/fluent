import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 基础进度条样式
const baseProgressBar = style({
  height: "2px",
  backgroundColor: themeContract.colorNeutralBackground6,
  width: "100%",
  display: "block",
  borderRadius: vars.borderRadiusMedium,
  overflow: "hidden",
});

// 进度条内部条样式
const baseBar = style({
  transitionTimingFunction: "ease",
  transitionDuration: "0.3s",
  transitionProperty: "width",
  height: "100%",
  borderRadius: "inherit",
});

// 不同颜色变体
const colorVariants = styleVariants({
  brand: {
    backgroundColor: themeContract.colorCompoundBrandBackground,
  },
  success: {
    backgroundColor: themeContract.colorPaletteGreenBackground3,
  },
  error: {
    backgroundColor: themeContract.colorPaletteRedBackground3,
  },
  warning: {
    backgroundColor: themeContract.colorPaletteDarkOrangeBackground3,
  },
});

// 不确定状态动画
const indeterminateAnimation = keyframes({
  "0%": { left: "-33%" },
  "100%": { left: "100%" },
});

// 不确定状态样式
const indeterminateBar = style({
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  animationDuration: "3s",
  animationName: indeterminateAnimation,
  backgroundImage: `linear-gradient(
    to right,
    ${themeContract.colorNeutralBackground6} 0%,
    ${themeContract.colorTransparentBackground} 50%,
    ${themeContract.colorNeutralBackground6} 100%
  )`,
  maxWidth: "33%",
  position: "relative",
});

// 尺寸变体
const sizeVariants = styleVariants({
  medium: {
    height: "2px",
  },
  large: {
    height: "4px",
    margin: "20px 0",
  },
});

// 形状变体
const shapeVariants = styleVariants({
  rounded: {
    borderRadius: vars.borderRadiusMedium,
  },
  square: {
    borderRadius: vars.borderRadiusNone,
  },
});

// 导出样式对象
export const progress = {
  base: baseProgressBar,
  bar: {
    base: baseBar,
    color: colorVariants,
    indeterminate: indeterminateBar,
  },
  size: sizeVariants,
  shape: shapeVariants,
};
