import {
  style,
  styleVariants,
  createVar,
  keyframes,
  globalStyle,
} from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 创建动画
const spinnerAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const spinnerTailAnimation = keyframes({
  "0%": { transform: "rotate(-135deg)" },
  "50%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(225deg)" },
});

const spinnerTailBeforeAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(105deg)" },
  "100%": { transform: "rotate(0deg)" },
});

const spinnerTailAfterAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(225deg)" },
  "100%": { transform: "rotate(0deg)" },
});

// 创建自定义变量
const strokeWidth = createVar();

// 基础样式
const baseSpinner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "0",
  gap: "8px",
  overflow: "hidden",
});

// 旋转器样式
const spinnerElement = style({
  vars: {
    [strokeWidth]: vars.strokeWidthThicker,
  },
  width: "32px",
  height: "32px",
  position: "relative",
  flexShrink: "0",
  maskImage: `radial-gradient(
		closest-side,
		transparent calc(100% - ${strokeWidth} - 1px),
		white calc(100% - ${strokeWidth}) calc(100% - 1px),
		transparent 100%
	)`,
  backgroundColor: themeContract.colorBrandStroke2Contrast,
  color: themeContract.colorBrandStroke1,
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  animationName: spinnerAnimation,
});

// 旋转器尾部样式
const spinnerTail = style({
  position: "absolute",
  display: "block",
  width: "100%",
  height: "100%",
  maskImage: "conic-gradient(transparent 105deg, white 105deg)",
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationTimingFunction: vars.curveEasyEase,
  animationName: spinnerTailAnimation,

  selectors: {
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      display: "block",
      width: "100%",
      height: "100%",
      animation: "inherit",
      backgroundImage:
        "conic-gradient(currentcolor 135deg, transparent 135deg)",
    },
    "&::before": {
      animationName: spinnerTailBeforeAnimation,
    },
    "&::after": {
      animationName: spinnerTailAfterAnimation,
    },
  },
});

// 外观变体
const appearanceVariants = styleVariants({
  primary: {}, // 默认样式，已在baseSpinner中定义
  inverted: {}, // 用 global style 定义
});

globalStyle(`${appearanceVariants.inverted} .${spinnerElement}`, {
  color: themeContract.colorNeutralStrokeOnBrand2,
  backgroundColor: themeContract.colorNeutralStrokeAlpha2,
});

// 尺寸变体
const sizeVariants = styleVariants({
  "extra-tiny": {},
  tiny: {},
  "extra-small": {},
  small: {},
  medium: {}, // 默认样式，已在spinnerElement中定义
  large: {},
  "extra-large": {},
  huge: {},
});

// 为每个尺寸变体添加全局样式
globalStyle(`${sizeVariants["extra-tiny"]} .${spinnerElement}`, {
  vars: {
    [strokeWidth]: vars.strokeWidthThick,
  },
  width: "16px",
  height: "16px",
});

globalStyle(`${sizeVariants.tiny} .${spinnerElement}`, {
  vars: {
    [strokeWidth]: vars.strokeWidthThick,
  },
  width: "20px",
  height: "20px",
});

globalStyle(`${sizeVariants["extra-small"]} .${spinnerElement}`, {
  vars: {
    [strokeWidth]: vars.strokeWidthThick,
  },
  width: "24px",
  height: "24px",
});

globalStyle(`${sizeVariants.small} .${spinnerElement}`, {
  vars: {
    [strokeWidth]: vars.strokeWidthThick,
  },
  width: "28px",
  height: "28px",
});

globalStyle(`${sizeVariants.large} .${spinnerElement}`, {
  width: "36px",
  height: "36px",
});

globalStyle(`${sizeVariants["extra-large"]} .${spinnerElement}`, {
  width: "40px",
  height: "40px",
});

globalStyle(`${sizeVariants.huge} .${spinnerElement}`, {
  vars: {
    [strokeWidth]: vars.strokeWidthThickest,
  },
  width: "44px",
  height: "44px",
});

// 导出样式对象
export const spinner = {
  base: baseSpinner,
  spinnerElement,
  spinnerTail,
  appearance: appearanceVariants,
  size: sizeVariants,
};
