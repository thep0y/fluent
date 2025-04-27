import {
  style,
  styleVariants,
  createVar,
  globalStyle,
} from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Create icon spacing variable
export const iconSpacing = createVar();

// Icon style
const iconStyle = style({
  vars: {
    [iconSpacing]: vars.spacingHorizontalSNudge,
  },
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  fontSize: "20px",
  height: "20px",
  width: "20px",
});

const iconBeforeStyle = style({
  marginRight: iconSpacing,
});

const iconAfterStyle = style({
  marginLeft: iconSpacing,
});

// Icon-only button style
const iconOnlyStyle = style({
  minWidth: "32px",
  maxWidth: "32px",
  padding: "5px",
});

globalStyle(`${iconOnlyStyle} ${iconStyle}`, {
  margin: 0,
});

// Small icon-only button
const smallIconOnlyStyle = style({
  minWidth: "24px",
  maxWidth: "24px",
});

// Large icon-only button
const largeIconOnlyStyle = style({
  minWidth: "40px",
  maxWidth: "40px",
});

// Small icon spacing
const smallIconSpacingStyle = style({
  vars: {
    [iconSpacing]: vars.spacingHorizontalXS,
  },
});

// Large icon spacing
const largeIconSpacingStyle = style({
  vars: {
    [iconSpacing]: vars.spacingHorizontalSNudge,
  },
});

// Base button style
const baseButton = style({
  alignItems: "center",
  boxSizing: "border-box",
  display: "inline-flex",
  justifyContent: "center",
  textDecorationLine: "none",
  verticalAlign: "middle",
  margin: "0px",
  overflow: "hidden",
  backgroundColor: themeContract.colorNeutralBackground1,
  color: themeContract.colorNeutralForeground1,
  border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1}`,
  fontFamily: vars.fontFamilyBase,
  outlineStyle: "none",
  padding: `5px ${vars.spacingHorizontalM}`,
  borderRadius: vars.borderRadiusMedium,
  fontSize: vars.fontSizeBase300,
  fontWeight: vars.fontWeightSemibold,
  lineHeight: vars.lineHeightBase300,
  transitionDuration: vars.durationFaster,
  transitionProperty: "background, border, color",
  transitionTimingFunction: vars.curveEasyEase,

  selectors: {
    [`&:not(${iconOnlyStyle})`]: {
      minWidth: "96px",
    },
    "&:hover": {
      backgroundColor: themeContract.colorNeutralBackground1Hover,
      borderColor: themeContract.colorNeutralStroke1Hover,
      color: themeContract.colorNeutralForeground1Hover,
      cursor: "pointer",
    },
    "&:hover:active": {
      backgroundColor: themeContract.colorNeutralBackground1Pressed,
      borderColor: themeContract.colorNeutralStroke1Pressed,
      color: themeContract.colorNeutralForeground1Pressed,
      outlineStyle: "none",
    },
  },
});

// Disabled state style
const disabledStyle = style({
  cursor: "not-allowed",
  color: themeContract.colorNeutralForegroundDisabled,
  borderColor: themeContract.colorNeutralStrokeDisabled,
  backgroundColor: themeContract.colorNeutralBackgroundDisabled,

  selectors: {
    "&:hover": {
      cursor: "not-allowed",
      color: themeContract.colorNeutralForegroundDisabled,
      borderColor: themeContract.colorNeutralStrokeDisabled,
      backgroundColor: themeContract.colorNeutralBackgroundDisabled,
    },
    "&:hover:active": {
      cursor: "not-allowed",
      color: themeContract.colorNeutralForegroundDisabled,
      borderColor: themeContract.colorNeutralStrokeDisabled,
      backgroundColor: themeContract.colorNeutralBackgroundDisabled,
    },
  },
});

// Button variants by appearance
const appearanceVariants = styleVariants({
  secondary: {}, // Default style, defined in baseButton
  primary: {
    selectors: {
      "&:not(:disabled)": {
        color: themeContract.colorNeutralForegroundOnBrand,
        backgroundColor: themeContract.colorBrandBackground,
        borderColor: "transparent",
      },
      "&:not(:disabled):hover": {
        color: themeContract.colorNeutralForegroundOnBrand,
        backgroundColor: themeContract.colorBrandBackgroundHover,
        borderColor: "transparent",
      },
      "&:not(:disabled):hover:active": {
        color: themeContract.colorNeutralForegroundOnBrand,
        backgroundColor: themeContract.colorBrandBackgroundPressed,
        borderColor: "transparent",
      },
      [`&${disabledStyle}`]: {
        borderColor: "transparent",
      },
      [`&${disabledStyle}:hover`]: {
        borderColor: "transparent",
      },
      [`&${disabledStyle}:hover:active`]: {
        borderColor: "transparent",
      },
    },
  },
  outline: {
    backgroundColor: themeContract.colorTransparentBackground,

    selectors: {
      "&:hover": {
        backgroundColor: themeContract.colorTransparentBackground,
      },
      "&:hover:active": {
        backgroundColor: themeContract.colorTransparentBackground,
      },
    },
  },
  subtle: {
    color: themeContract.colorNeutralForeground2,
    backgroundColor: themeContract.colorSubtleBackground,
    borderColor: "transparent",

    selectors: {
      "&:hover": {
        color: themeContract.colorNeutralForeground2Hover,
        backgroundColor: themeContract.colorSubtleBackgroundHover,
        borderColor: "transparent",
      },
      "&:hover:active": {
        backgroundColor: themeContract.colorSubtleBackgroundPressed,
        borderColor: "transparent",
      },
      "&:disabled": {
        borderColor: "transparent",
      },
      "&:disabled:hover": {
        borderColor: "transparent",
      },
      "&:disabled:hover:active": {
        borderColor: "transparent",
      },
    },
  },
  transparent: {
    color: themeContract.colorNeutralForeground2,
    backgroundColor: themeContract.colorTransparentBackground,
    borderColor: "transparent",

    selectors: {
      "&:hover": {
        color: themeContract.colorNeutralForeground2BrandHover,
        backgroundColor: themeContract.colorTransparentBackgroundHover,
        borderColor: "transparent",
      },
      "&:hover:active": {
        color: themeContract.colorNeutralForeground2BrandPressed,
        backgroundColor: themeContract.colorTransparentBackgroundPressed,
        borderColor: "transparent",
      },
      "&.fluent-button-disabled": {
        borderColor: "transparent",
      },
      "&.fluent-button-disabled:hover": {
        borderColor: "transparent",
      },
      "&.fluent-button-disabled:hover:active": {
        borderColor: "transparent",
      },
    },
  },
});

globalStyle(`${appearanceVariants.subtle}:hover ${iconStyle}`, {
  color: themeContract.colorNeutralForeground2BrandHover,
});

globalStyle(`${appearanceVariants.subtle}:hover:active ${iconStyle}`, {
  color: themeContract.colorNeutralForeground2BrandPressed,
});

// Button variants by size
const sizeVariants = styleVariants({
  medium: {}, // Default size, defined in baseButton
  small: {
    lineHeight: vars.lineHeightBase200,
    fontSize: vars.fontSizeBase200,
    fontWeight: vars.fontWeightRegular,
    borderRadius: vars.borderRadiusMedium,
    padding: `3px ${vars.spacingHorizontalS}`,

    selectors: {
      [`&:not(${iconOnlyStyle})`]: {
        minWidth: "64px",
      },
      [`&:has(${iconStyle})`]: {
        paddingTop: "1px",
        paddingBottom: "1px",
      },
    },
  },
  large: {
    lineHeight: vars.lineHeightBase400,
    fontSize: vars.fontSizeBase400,
    fontWeight: vars.fontWeightSemibold,
    borderRadius: vars.borderRadiusMedium,
    padding: `8px ${vars.spacingHorizontalL}`,

    selectors: {
      [`&:not(${iconOnlyStyle})`]: {
        minWidth: "96px",
      },
      [`&:has(${iconStyle})`]: {
        paddingTop: "7px",
        paddingBottom: "7px",
      },
    },
  },
});

globalStyle(`${sizeVariants.large} ${iconStyle}`, {
  width: "24px",
  height: "24px",
});

// Button variants by shape
const shapeVariants = styleVariants({
  rounded: {}, // Default shape, defined in baseButton
  circular: {
    borderRadius: vars.borderRadiusCircular,
  },
  square: {
    borderRadius: vars.borderRadiusNone,
  },
});

export const button = {
  base: baseButton,
  appearance: appearanceVariants,
  size: sizeVariants,
  shape: shapeVariants,
  disabled: disabledStyle,
  icon: {
    base: iconStyle,
    before: iconBeforeStyle,
    after: iconAfterStyle,
    small: smallIconSpacingStyle,
    large: largeIconSpacingStyle,
  },
  iconOnly: {
    base: iconOnlyStyle,
    small: smallIconOnlyStyle,
    large: largeIconOnlyStyle,
  },
};
