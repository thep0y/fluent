import { style, styleVariants, createVar } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

/**
 * CSS变量定义
 */
// 进度相关变量
export const progressDirection = createVar("--fui-Slider--direction");
export const progressPercent = createVar("--fui-Slider--progress");
export const stepsPercent = createVar("--fui-Slider--steps-percent");

// 颜色相关变量
export const thumbColor = createVar("--fui-Slider--thumb-color");
export const progressColor = createVar("--fui-Slider--progress-color");
export const railColor = createVar("--fui-Slider--rail-color");

// 尺寸相关变量
const railSize = createVar("--fui-Slider--rail-size");
const innerThumbRadius = createVar("--fui-Slider--inner-thumb-radius");
const thumbSize = createVar("--fui-Slider--thumb-size");
const thumbPosition = createVar("--fui-Slider--thumb-position");

/**
 * 基础样式定义
 */
// 垂直方向样式标记
const vertical = style({});

// 基础滑块容器样式
const baseSlider = style({
  display: "grid",
  position: "relative",
  alignItems: "center",
  justifyItems: "center",
  touchAction: "none",
  gridTemplateColumns: `1fr calc(100% - ${thumbSize}) 1fr`,
  gridTemplateRows: `1fr ${thumbSize} 1fr`,
  minHeight: "32px",

  // 默认颜色变量
  vars: {
    [thumbColor]: themeContract.colorCompoundBrandBackground,
    [progressColor]: themeContract.colorCompoundBrandBackground,
    [railColor]: themeContract.colorNeutralStrokeAccessible,
  },

  selectors: {
    // 悬停状态
    "&:hover": {
      vars: {
        [thumbColor]: themeContract.colorCompoundBrandBackgroundHover,
        [progressColor]: themeContract.colorCompoundBrandBackgroundHover,
      },
    },

    // 激活状态
    "&:active": {
      vars: {
        [thumbColor]: themeContract.colorCompoundBrandBackgroundPressed,
        [progressColor]: themeContract.colorCompoundBrandBackgroundPressed,
      },
    },

    // 水平方向特有样式
    [`&:not(${vertical})`]: {
      minWidth: "120px",
    },

    // 垂直方向特有样式
    [`&${vertical}`]: {
      display: "inline-grid",
      minHeight: "120px",
      gridTemplateColumns: `1fr ${thumbSize} 1fr`,
      gridTemplateRows: `1fr calc(100% - ${thumbSize}) 1fr`,
    },
  },
});

/**
 * 变体样式定义
 */
// 尺寸变体
const sizeVariants = styleVariants({
  // 小尺寸
  small: {
    vars: {
      [railSize]: "2px",
      [thumbSize]: "16px",
      [innerThumbRadius]: "5px",
    },
  },
  // 中尺寸（默认）
  medium: {
    vars: {
      [railSize]: "4px",
      [thumbSize]: "20px",
      [innerThumbRadius]: "6px",
    },
  },
});

// 禁用状态
const disabled = style({
  opacity: 0.5,
  pointerEvents: "none",

  vars: {
    [thumbColor]: themeContract.colorNeutralForegroundDisabled,
    [progressColor]: themeContract.colorNeutralForegroundDisabled,
    [railColor]: themeContract.colorNeutralBackgroundDisabled,
  },
});

/**
 * 组件部件样式
 */
// 滑块轨道样式
const rail = style({
  height: railSize,
  outlineColor: themeContract.colorTransparentStroke,
  outlineStyle: "solid",
  outlineWidth: "1px",
  backgroundImage: `linear-gradient(
    ${progressDirection},
    ${progressColor} 0%,
    ${progressColor} ${progressPercent},
    ${railColor} ${progressPercent}
  )`,
  forcedColorAdjust: "none",
  gridColumnStart: "2",
  gridColumnEnd: "2",
  gridRowStart: "2",
  gridRowEnd: "2",
  pointerEvents: "none",
  position: "relative",
  width: "100%",
  borderRadius: vars.borderRadiusXLarge,

  selectors: {
    // 步进标记
    "&::before": {
      backgroundImage: `repeating-linear-gradient(
        ${progressDirection},
        transparent 0%,
        transparent calc(${stepsPercent} - 1px),
        ${themeContract.colorNeutralBackground1} calc(${stepsPercent} - 1px),
        ${themeContract.colorNeutralBackground1} ${stepsPercent}
      )`,
      position: "absolute",
      content: '""',
    },

    // 垂直方向轨道
    [`${vertical} &`]: {
      width: railSize,
      height: "100%",
    },

    // 水平方向步进标记
    [`${baseSlider}:not(${vertical}) &::before`]: {
      height: railSize,
      right: "-1px",
      left: "-1px",
    },

    // 垂直方向步进标记
    [`${vertical} &::before`]: {
      width: railSize,
      top: "-1px",
      bottom: "-1px",
    },

    // 小尺寸轨道高度
    [`${sizeVariants.small} &`]: {
      height: "2px",
    },
  },
});

// 滑块拇指样式
const thumb = style({
  backgroundColor: thumbColor,
  borderRadius: vars.borderRadiusCircular,
  height: thumbSize,
  width: thumbSize,
  position: "absolute",
  pointerEvents: "none",
  boxShadow: `0 0 0 calc(${thumbSize} * .2) ${themeContract.colorNeutralBackground1} inset`,
  outlineStyle: "none",
  forcedColorAdjust: "none",
  gridColumnStart: "2",
  gridColumnEnd: "2",
  gridRowStart: "2",
  gridRowEnd: "2",

  // 拇指位置计算
  vars: {
    [thumbPosition]: `clamp(${innerThumbRadius}, ${progressPercent}, calc(100% - ${innerThumbRadius}))`,
  },

  selectors: {
    // 拇指边框
    "&::before": {
      content: '""',
      boxSizing: "border-box",
      bottom: 0,
      right: 0,
      top: 0,
      left: 0,
      position: "absolute",
      borderRadius: vars.borderRadiusCircular,
      border: `calc(20px * 0.05) solid ${themeContract.colorNeutralStroke1}`,
    },

    // 水平方向拇指位置
    [`${baseSlider}:not(${vertical}) &`]: {
      left: thumbPosition,
      transform: "translateX(-50%)",
    },

    // 垂直方向拇指位置
    [`${vertical} &`]: {
      bottom: thumbPosition,
      transform: "translateY(50%)",
    },
  },
});

// 输入控件样式
const input = style({
  gridColumnStart: "1",
  gridColumnEnd: "-1",
  gridRowStart: "1",
  gridRowEnd: "-1",
  opacity: 0,
  cursor: "pointer",
  margin: 0,
  padding: 0,
  width: "100%",
  height: thumbSize,

  selectors: {
    // 垂直方向输入控件
    [`${vertical} &`]: {
      width: thumbSize,
      height: "100%",
      direction: "rtl",
      writingMode: "vertical-lr",
    },
  },
});

/**
 * 导出样式对象
 */
export const slider = {
  base: baseSlider,
  rail,
  thumb,
  input,
  vertical,
  size: sizeVariants,
  disabled,
};
