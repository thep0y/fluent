import { keyframes, style, createVar } from "@vanilla-extract/css";
import { themeContract } from "~/themes";
import { vars } from "~/themes/var.css";

// Create variables
export const toastMaxWidth = createVar();
export const toastMinWidth = createVar();

// Define animations
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

// Base toast style
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

// Position-related styles
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

// Exit animation styles
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

// Toast content style
export const toastContent = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 16px",
  color: themeContract.colorNeutralForeground1,
  backgroundColor: themeContract.colorNeutralBackground1,
  borderRadius: vars.borderRadiusMedium,
  boxShadow: themeContract.shadow8,
  borderLeft: `${vars.borderRadiusMedium} solid ${themeContract.colorTransparentStroke}`,
  "@media": {
    "(prefers-color-scheme: dark)": {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
  },
});

// Toast type styles
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

// Icon and message container
export const toastIconMessage = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacingVerticalS,
});

// Icon style
export const toastIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Message style
export const toastMessage = style({
  fontSize: vars.fontSizeBase300,
  lineHeight: 1.5,
  wordBreak: "break-word",
});

// Action buttons container
export const toastActions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacingVerticalS,
  marginLeft: vars.spacingVerticalM,
});
