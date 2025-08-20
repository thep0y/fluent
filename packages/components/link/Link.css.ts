import { style } from "@vanilla-extract/css";
import { themeContract, vars } from "~/themes";

export const link = style({
  backgroundColor: "transparent",
  boxSizing: "border-box",
  color: themeContract.colorBrandForegroundLink,
  cursor: "pointer",
  display: "inline",
  fontFamily: vars.fontFamilyBase,
  fontSize: vars.fontSizeBase300,
  fontWeight: vars.fontWeightRegular,
  margin: "0",
  padding: "0",
  overflow: "inherit",
  textAlign: "left",
  textDecorationLine: "none",
  textDecorationThickness: vars.strokeWidthThin,
  textOverflow: "inherit",
  userSelect: "text",

  selectors: {
    "&:focus-visible": {
      outlineStyle: "none",
    },
    "&:hover": {
      textDecorationLine: "underline",
      color: themeContract.colorBrandForegroundLinkHover,
    },
    "&:active": {
      textDecorationLine: "underline",
      color: themeContract.colorBrandForegroundLinkPressed,
    },
  },
});

export const button = style({
  borderStyle: "none",
});

export const href = style({
  fontSize: "inherit",
});

export const subtle = style({
  color: themeContract.colorNeutralForeground2,

  selectors: {
    "&:hover": {
      textDecorationLine: "underline",
      color: themeContract.colorNeutralForeground2Hover,
    },

    "&:active": {
      textDecorationLine: "underline",
      color: themeContract.colorNeutralForeground2Pressed,
    },
  },
});

export const inline = style({
  textDecorationLine: "underline",
});

export const disabled = style({
  textDecorationLine: "none",
  color: themeContract.colorNeutralForegroundDisabled,
  cursor: "not-allowed",

  selectors: {
    "&:hover": {
      textDecorationLine: "none",
      color: themeContract.colorNeutralForegroundDisabled,
    },

    "&:active": {
      textDecorationLine: "none",
      color: themeContract.colorNeutralForegroundDisabled,
    },
  },
});

export const inverted = style({
  color: themeContract.colorNeutralForegroundInvertedLink,

  selectors: {
    "&:hover": {
      color: themeContract.colorNeutralForegroundInvertedLinkHover,
    },

    "&:active": {
      color: themeContract.colorNeutralForegroundInvertedLinkPressed,
    },
  },
});
