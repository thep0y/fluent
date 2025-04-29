import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Base label style
const baseLabel = style({
  lineHeight: vars.lineHeightBase300,
  fontSize: vars.fontSizeBase300,
  fontFamily: vars.fontFamilyBase,
  color: themeContract.colorNeutralForeground1,
});

// Size variants
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

// Weight variants
const weightVariants = styleVariants({
  regular: {},
  semibold: {
    fontWeight: vars.fontWeightSemibold,
  },
});

// Disabled state style
const disabledStyle = style({
  color: themeContract.colorNeutralForegroundDisabled,
});

// Required mark style
const requiredStyle = style({
  paddingLeft: vars.spacingHorizontalXS,
  color: themeContract.colorPaletteRedForeground3,
});

// Export style object
export const label = {
  base: baseLabel,
  size: sizeVariants,
  weight: weightVariants,
  disabled: disabledStyle,
  required: requiredStyle,
};
