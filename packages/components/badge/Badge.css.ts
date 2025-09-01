import { style, styleVariants } from "@vanilla-extract/css";
import { typographyVars } from "~/themes";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Base badge style
export const badge = style([
  typographyVars.caption1Strong,
  {
    display: "inline-flex",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    height: "20px",
    minWidth: "20px",
    padding: `0 calc(${vars.spacingHorizontalXS} + ${vars.spacingHorizontalXXS})`,
    borderRadius: vars.borderRadiusCircular,
    // Use a transparent stroke (rather than no border) so the border is visible in high contrast
    borderColor: themeContract.colorTransparentStroke,

    selectors: {
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderStyle: "solid",
        borderColor: "inherit",
        borderWidth: vars.strokeWidthThin,
        borderRadius: "inherit",
      },
    },
  },
]);

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
  medium: {}, // Default size
  large: {
    minWidth: "24px",
    height: "24px",
    padding: `0 calc(${vars.spacingHorizontalXS} + ${vars.spacingHorizontalXXS})`,
  },
  "extra-large": {
    width: "32px",
    height: "32px",
    padding: `0 calc(${vars.spacingHorizontalSNudge} + ${vars.spacingHorizontalXXS})`,
  },
});

const filledColor = styleVariants({
  brand: {
    backgroundColor: themeContract.colorBrandBackground,
    color: themeContract.colorNeutralForegroundOnBrand,
  },
  danger: {
    backgroundColor: themeContract.colorPaletteRedBackground3,
    color: themeContract.colorNeutralForegroundOnBrand,
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
    color: themeContract.colorNeutralForegroundOnBrand,
  },
  subtle: {
    backgroundColor: themeContract.colorNeutralBackground1,
    color: themeContract.colorNeutralForeground1,
  },
  success: {
    backgroundColor: themeContract.colorPaletteGreenBackground3,
    color: themeContract.colorNeutralForegroundOnBrand,
  },
  warning: {
    backgroundColor: themeContract.colorPaletteYellowBackground3,
    color: themeContract.colorNeutralForeground1Static,
  },
});

const ghostColor = styleVariants({
  brand: {
    color: themeContract.colorBrandForeground1,
  },
  danger: {
    color: themeContract.colorPaletteRedForeground3,
  },
  important: {
    color: themeContract.colorNeutralForeground1,
  },
  informative: {
    color: themeContract.colorNeutralForeground3,
  },
  severe: {
    color: themeContract.colorPaletteDarkOrangeForeground3,
  },
  subtle: {
    color: themeContract.colorNeutralForegroundStaticInverted,
  },
  success: {
    color: themeContract.colorPaletteGreenForeground3,
  },
  warning: {
    color: themeContract.colorPaletteYellowForeground2,
  },
});

const outlineColor = styleVariants({
  brand: {
    color: themeContract.colorBrandForeground1,
  },
  danger: {
    color: themeContract.colorPaletteRedForeground3,
    borderColor: themeContract.colorPaletteRedBorder2,
  },
  important: {
    color: themeContract.colorNeutralForeground3,
    borderColor: themeContract.colorNeutralStrokeAccessible,
  },
  informative: {
    color: themeContract.colorNeutralForeground3,
    borderColor: themeContract.colorNeutralStroke2,
  },
  severe: {
    color: themeContract.colorPaletteDarkOrangeForeground3,
  },
  subtle: {
    color: themeContract.colorNeutralForegroundStaticInverted,
  },
  success: {
    color: themeContract.colorPaletteGreenForeground3,
    borderColor: themeContract.colorPaletteGreenBorder2,
  },
  warning: {
    color: themeContract.colorPaletteYellowForeground2,
  },
});

const tintColor = styleVariants({
  brand: {
    backgroundColor: themeContract.colorBrandBackground2,
    color: themeContract.colorBrandForeground2,
    borderColor: themeContract.colorBrandStroke2,
  },
  danger: {
    backgroundColor: themeContract.colorPaletteRedBackground1,
    color: themeContract.colorPaletteRedForeground1,
    borderColor: themeContract.colorPaletteRedBorder1,
  },
  important: {
    backgroundColor: themeContract.colorNeutralForeground3,
    color: themeContract.colorNeutralBackground1,
    borderColor: themeContract.colorTransparentStroke,
  },
  informative: {
    backgroundColor: themeContract.colorNeutralBackground4,
    color: themeContract.colorNeutralForeground3,
    borderColor: themeContract.colorNeutralStroke2,
  },
  severe: {
    backgroundColor: themeContract.colorPaletteDarkOrangeBackground1,
    color: themeContract.colorPaletteDarkOrangeForeground1,
    borderColor: themeContract.colorPaletteDarkOrangeBorder1,
  },
  subtle: {
    backgroundColor: themeContract.colorNeutralBackground1,
    color: themeContract.colorNeutralForeground3,
    borderColor: themeContract.colorNeutralStroke2,
  },
  success: {
    backgroundColor: themeContract.colorPaletteGreenBackground1,
    color: themeContract.colorPaletteGreenForeground1,
    borderColor: themeContract.colorPaletteGreenBorder1,
  },
  warning: {
    backgroundColor: themeContract.colorPaletteYellowBackground1,
    color: themeContract.colorPaletteYellowForeground1,
    borderColor: themeContract.colorPaletteYellowBorder1,
  },
});

// Appearance variants
export const appearance = {
  filled: styleVariants(filledColor, (color) => [color]),
  ghost: styleVariants(ghostColor, (color) => [
    {
      selectors: {
        // The border is applied in an ::after pseudo-element because it should not affect layout.
        // The padding and size of the badge should be the same regardless of whether or not it has a border.
        "&::after": {
          display: "none",
        },
      },
    },
    color,
  ]),
  outline: styleVariants(outlineColor, (color) => [
    {
      borderColor: "currentcolor",
    },
    color,
  ]),
  tint: styleVariants(tintColor, (color) => [color]),
};

// Shape variants
export const shape = styleVariants({
  circular: {}, // Default shape
  rounded: {
    borderRadius: vars.borderRadiusMedium,
  },
  square: {
    borderRadius: vars.borderRadiusNone,
  },
});

export const iconRoot = style({
  display: "flex",
  lineHeight: 1,
  margin: `0 calc(-1 * ${vars.spacingHorizontalXXS})`, // Remove text padding added to root
  fontSize: "12px",
});

export const iconPosition = styleVariants({
  after: {
    marginLeft: `calc(${vars.spacingHorizontalXXS} + ${vars.spacingHorizontalXXS})`,
  },
  before: {
    marginRight: `calc(${vars.spacingHorizontalXXS} + ${vars.spacingHorizontalXXS})`,
  },
});

export const iconXLPosition = styleVariants({
  after: {
    marginLeft: `calc(${vars.spacingHorizontalXS} + ${vars.spacingHorizontalXXS})`,
  },
  before: {
    marginRight: `calc(${vars.spacingHorizontalXS} + ${vars.spacingHorizontalXXS})`,
  },
});

export const iconSize = styleVariants({
  tiny: {
    fontSize: "6px",
  },
  "extra-small": {
    fontSize: "10px",
  },
  small: {
    fontSize: "12px",
  },
  medium: {
    // Set by useIconRootClassName
  },
  large: {
    fontSize: "16px",
  },
  "extra-large": {
    fontSize: "20px",
  },
});
