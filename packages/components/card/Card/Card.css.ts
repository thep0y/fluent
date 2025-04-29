import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Create CSS variables
export const cardBorderRadius = createVar("--fui-Card--border-radius");
export const cardSize = createVar("--fui-Card--size");

// Base card style
export const card = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  boxShadow: themeContract.shadow4,
  backgroundColor: themeContract.colorNeutralBackground1,
  margin: "auto",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "relative",
  color: themeContract.colorNeutralForeground1,

  // Use CSS variables
  borderRadius: cardBorderRadius,
  padding: cardSize,
  gap: cardSize,

  // Set default values
  vars: {
    [cardBorderRadius]: vars.borderRadiusMedium,
    [cardSize]: vars.spacingHorizontalM,
  },
});

// Size variants
export const size = styleVariants({
  small: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusSmall,
      [cardSize]: vars.spacingHorizontalS,
    },
  },
  medium: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusMedium,
      [cardSize]: vars.spacingHorizontalM,
    },
  },
  large: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusLarge,
      [cardSize]: vars.spacingHorizontalL,
    },
  },
});

// Appearance variants
export const appearance = styleVariants({
  filled: {
    boxShadow: themeContract.shadow4,
    backgroundColor: themeContract.colorNeutralBackground1,
  },
  "filled-alternative": {
    boxShadow: themeContract.shadow4,
    backgroundColor: themeContract.colorNeutralBackground2,
  },
  outline: {
    boxShadow: "none",
    backgroundColor: "transparent",
    border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1}`,
  },
  subtle: {
    boxShadow: "none",
    backgroundColor: themeContract.colorNeutralBackground2,
  },
});

// Orientation variants
export const orientation = styleVariants({
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

// Selected state
export const selected = style({
  outline: `${vars.strokeWidthThick} solid ${themeContract.colorCompoundBrandStroke}`,
  outlineOffset: "-1px",
});

// Focus mode
export const focusMode = style({
  outline: `${vars.strokeWidthThin} solid ${themeContract.colorCompoundBrandStroke}`,
  outlineOffset: "-1px",
});
