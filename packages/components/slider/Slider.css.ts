import { style, styleVariants, createVar } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

/**
 * CSS Variable Definitions
 */
// Progress-related variables
export const progressDirection = createVar("--fui-Slider--direction");
export const progressPercent = createVar("--fui-Slider--progress");
export const stepsPercent = createVar("--fui-Slider--steps-percent");

// Color-related variables
export const thumbColor = createVar("--fui-Slider--thumb-color");
export const progressColor = createVar("--fui-Slider--progress-color");
export const railColor = createVar("--fui-Slider--rail-color");

// Size-related variables
const railSize = createVar("--fui-Slider--rail-size");
const innerThumbRadius = createVar("--fui-Slider--inner-thumb-radius");
const thumbSize = createVar("--fui-Slider--thumb-size");
const thumbPosition = createVar("--fui-Slider--thumb-position");

/**
 * Base Style Definitions
 */
// Vertical direction style marker
const vertical = style({});

// Base slider container style
const baseSlider = style({
  display: "grid",
  position: "relative",
  alignItems: "center",
  justifyItems: "center",
  touchAction: "none",
  gridTemplateColumns: `1fr calc(100% - ${thumbSize}) 1fr`,
  gridTemplateRows: `1fr ${thumbSize} 1fr`,
  minHeight: "32px",

  // Default color variables
  vars: {
    [thumbColor]: themeContract.colorCompoundBrandBackground,
    [progressColor]: themeContract.colorCompoundBrandBackground,
    [railColor]: themeContract.colorNeutralStrokeAccessible,
  },

  selectors: {
    // Hover state
    "&:hover": {
      vars: {
        [thumbColor]: themeContract.colorCompoundBrandBackgroundHover,
        [progressColor]: themeContract.colorCompoundBrandBackgroundHover,
      },
    },

    // Active state
    "&:active": {
      vars: {
        [thumbColor]: themeContract.colorCompoundBrandBackgroundPressed,
        [progressColor]: themeContract.colorCompoundBrandBackgroundPressed,
      },
    },

    // Horizontal direction specific styles
    [`&:not(${vertical})`]: {
      minWidth: "120px",
    },

    // Vertical direction specific styles
    [`&${vertical}`]: {
      display: "inline-grid",
      minHeight: "120px",
      gridTemplateColumns: `1fr ${thumbSize} 1fr`,
      gridTemplateRows: `1fr calc(100% - ${thumbSize}) 1fr`,
    },
  },
});

/**
 * Variant Style Definitions
 */
// Size variants
const sizeVariants = styleVariants({
  // Small size
  small: {
    vars: {
      [railSize]: "2px",
      [thumbSize]: "16px",
      [innerThumbRadius]: "5px",
    },
  },
  // Medium size (default)
  medium: {
    vars: {
      [railSize]: "4px",
      [thumbSize]: "20px",
      [innerThumbRadius]: "6px",
    },
  },
});

// Disabled state
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
 * Component Part Styles
 */
// Slider rail style
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
    // Step marks
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

    // Vertical direction rail
    [`${vertical} &`]: {
      width: railSize,
      height: "100%",
    },

    // Horizontal direction step marks
    [`${baseSlider}:not(${vertical}) &::before`]: {
      height: railSize,
      right: "-1px",
      left: "-1px",
    },

    // Vertical direction step marks
    [`${vertical} &::before`]: {
      width: railSize,
      top: "-1px",
      bottom: "-1px",
    },

    // Small size rail height
    [`${sizeVariants.small} &`]: {
      height: "2px",
    },
  },
});

// Slider thumb style
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

  // Calculate thumb position
  vars: {
    [thumbPosition]: `clamp(${innerThumbRadius}, ${progressPercent}, calc(100% - ${innerThumbRadius}))`,
  },

  selectors: {
    // Thumb border
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

    // Horizontal direction thumb position
    [`${baseSlider}:not(${vertical}) &`]: {
      left: thumbPosition,
      transform: "translateX(-50%)",
    },

    // Vertical direction thumb position
    [`${vertical} &`]: {
      bottom: thumbPosition,
      transform: "translateY(50%)",
    },
  },
});

// Input control style
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
    // Vertical direction input control
    [`${vertical} &`]: {
      width: thumbSize,
      height: "100%",
      direction: "rtl",
      writingMode: "vertical-lr",
    },
  },
});

/**
 * Export style object
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
