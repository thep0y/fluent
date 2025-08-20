import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Base badge style
export const badge = style({
  display: "inline-flex",
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontFamily: vars.fontFamilyBase,
  fontWeight: vars.fontWeightSemibold,
  borderColor: themeContract.colorTransparentStroke,

  height: "20px",
  width: "20px",
  fontSize: vars.fontSizeBase200,
  lineHeight: vars.lineHeightBase200,
  minWidth: "max-content",
  padding: `0 calc(${vars.spacingHorizontalXS} + ${vars.spacingHorizontalXXS})`,

  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderStyle: "solid",
      borderColor: "inherit",
      borderWidth: vars.strokeWidthThin,
      borderRadius: "inherit",
    },
  },
});

// Size variants
export const size = styleVariants({
  tiny: {
    minWidth: "unset",
    lineHeight: "4px",
    fontSize: "4px",
    height: "6px",
    width: "6px",
    padding: "unset",
  },
  "extra-small": {
    minWidth: "unset",
    lineHeight: "6px",
    fontSize: "6px",
    height: "10px",
    width: "10px",
    padding: "unset",
  },
  small: {
    lineHeight: vars.lineHeightBase100,
    fontSize: vars.fontSizeBase100,
    height: "16px",
    width: "16px",
    padding: `0 calc(${vars.spacingHorizontalXXS} + ${vars.spacingHorizontalXXS})`,
  },
  medium: {},
  large: {
    minWidth: "24px",
    height: "24px",
  },
  "extra-large": {
    width: "32px",
    height: "32px",
    padding: `0 calc(${vars.spacingHorizontalSNudge} + ${vars.spacingHorizontalXXS})`,
  },
});

// Appearance variants
export const appearance = styleVariants({
  filled: {
    backgroundColor: themeContract.colorBrandBackground,
    color: themeContract.colorNeutralForegroundOnBrand,
  },
  ghost: {
    color: themeContract.colorBrandForeground1,
  },
  outline: {
    borderColor: "currentcolor",
    color: themeContract.colorBrandForeground1,
  },
  tint: {
    borderColor: themeContract.colorBrandStroke2,
    color: themeContract.colorBrandForeground2,
  },
});

// Color variants
export const color = styleVariants({
  brand: {
    backgroundColor: themeContract.colorBrandBackground,
    color: themeContract.colorNeutralForegroundOnBrand,
  },
  danger: {
    backgroundColor: themeContract.colorPaletteRedBackground3,
  },
  important: {
    backgroundColor: themeContract.colorNeutralForeground1,
    color: themeContract.colorNeutralBackground1,
  },
  informative: {
    backgroundColor: themeContract.colorNeutralBackground5,
    color: themeContract.colorNeutralForeground3,
  },
  severe: {
    backgroundColor: themeContract.colorPaletteDarkOrangeBackground3,
  },
  subtle: {
    backgroundColor: themeContract.colorNeutralBackground1,
    color: themeContract.colorNeutralForeground1,
  },
  success: {
    backgroundColor: themeContract.colorPaletteGreenBackground3,
  },
  warning: {
    backgroundColor: themeContract.colorPaletteYellowBackground3,
    color: themeContract.colorNeutralForeground1Static,
  },
});

// Shape variants
export const shape = styleVariants({
  circular: {
    borderRadius: vars.borderRadiusCircular,
  },
  rounded: {
    borderRadius: vars.borderRadiusMedium,
  },
  square: {
    borderRadius: vars.borderRadiusNone,
  },
});

export const icon = style({
  display: "flex",
  lineHeight: 1,
  margin: `0 calc(-1 * ${vars.spacingHorizontalXXS})`,
  fontSize: "12px",
});
