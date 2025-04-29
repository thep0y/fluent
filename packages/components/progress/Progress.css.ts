import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Base progress bar style
const baseProgressBar = style({
  height: "2px",
  backgroundColor: themeContract.colorNeutralBackground6,
  width: "100%",
  display: "block",
  borderRadius: vars.borderRadiusMedium,
  overflow: "hidden",
});

// Progress bar inner bar style
const baseBar = style({
  transitionTimingFunction: "ease",
  transitionDuration: "0.3s",
  transitionProperty: "width",
  height: "100%",
  borderRadius: "inherit",
});

// Color variants
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

// Indeterminate animation
const indeterminateAnimation = keyframes({
  "0%": { left: "-33%" },
  "100%": { left: "100%" },
});

// Indeterminate state style
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

// Size variants
const sizeVariants = styleVariants({
  medium: {
    height: "2px",
  },
  large: {
    height: "4px",
    margin: "20px 0",
  },
});

// Shape variants
const shapeVariants = styleVariants({
  rounded: {
    borderRadius: vars.borderRadiusMedium,
  },
  square: {
    borderRadius: vars.borderRadiusNone,
  },
});

// Export style object
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
