import { keyframes, style, createVar } from "@vanilla-extract/css";
import { themeContract } from "~/themes";
import { vars } from "~/themes/var.css";

// 创建变量
export const toastMaxWidth = createVar();
export const toastMinWidth = createVar();

// 定义动画
const toastSlideDown = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const toastSlideUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const toastSlideLeft = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(20px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const toastSlideRight = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-20px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const toastSlideUpExit = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(-20px)",
  },
});

const toastSlideDownExit = keyframes({
  from: {
    opacity: 1,
    transform: "translateY(0)",
  },
  to: {
    opacity: 0,
    transform: "translateY(20px)",
  },
});

const toastSlideLeftExit = keyframes({
  from: {
    opacity: 1,
    transform: "translateX(0)",
  },
  to: {
    opacity: 0,
    transform: "translateX(-20px)",
  },
});

const toastSlideRightExit = keyframes({
  from: {
    opacity: 1,
    transform: "translateX(0)",
  },
  to: {
    opacity: 0,
    transform: "translateX(20px)",
  },
});

// 基础Toast样式
export const toast = style({
  vars: {
    [toastMaxWidth]: "350px",
    [toastMinWidth]: "200px",
  },
  zIndex: vars.zIndexToast,
  maxWidth: toastMaxWidth,
  minWidth: toastMinWidth,
  padding: 0,
  pointerEvents: "auto",
  animationDuration: vars.durationSlow,
  animationFillMode: "both",
  transition: `opacity ${vars.durationSlow}, transform ${vars.durationSlow}`,
  fontFamily: vars.fontFamilyBase,
});

// 位置相关样式
export const toastTop = style({
  animationName: toastSlideDown,
});

export const toastTopLeft = style({
  animationName: toastSlideRight,
});

export const toastTopRight = style({
  animationName: toastSlideLeft,
});

export const toastBottom = style({
  animationName: toastSlideUp,
});

export const toastBottomLeft = style({
  animationName: toastSlideRight,
});

export const toastBottomRight = style({
  animationName: toastSlideLeft,
});

// 退出动画样式
export const toastExiting = style({
  animationDuration: vars.durationSlow,
  animationFillMode: "both",
});

export const toastTopExiting = style({
  animationName: toastSlideUpExit,
});

export const toastTopLeftExiting = style({
  animationName: toastSlideLeftExit,
});

export const toastTopRightExiting = style({
  animationName: toastSlideRightExit,
});

export const toastBottomExiting = style({
  animationName: toastSlideDownExit,
});

export const toastBottomLeftExiting = style({
  animationName: toastSlideLeftExit,
});

export const toastBottomRightExiting = style({
  animationName: toastSlideRightExit,
});

// Toast内容样式
export const toastContent = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 16px",
  color: themeContract.colorNeutralForeground1,
  backgroundColor: themeContract.colorNeutralBackground1,
  borderRadius: vars.borderRadiusMedium,
  // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  boxShadow: themeContract.shadow8,
  borderLeft: `${vars.borderRadiusMedium} solid ${themeContract.colorTransparentStroke}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
  },
});

// Toast类型样式
export const toastInfo = style({
  borderLeftColor: themeContract.colorBrandBackground,
});

export const toastSuccess = style({
  borderLeftColor: themeContract.colorStatusSuccessBackground3,
});

export const toastWarning = style({
  borderLeftColor: themeContract.colorStatusWarningBackground3,
});

export const toastError = style({
  borderLeftColor: themeContract.colorStatusDangerBackground3,
});

// 图标和消息容器
export const toastIconMessage = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacingVerticalS,
});

// 图标样式
export const toastIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// 消息样式
export const toastMessage = style({
  fontSize: vars.fontSizeBase300,
  lineHeight: 1.5,
  wordBreak: "break-word",
});

// 操作按钮容器
export const toastActions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacingVerticalS,
  marginLeft: vars.spacingVerticalM,
});
