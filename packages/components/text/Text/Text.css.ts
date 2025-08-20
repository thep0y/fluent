import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/themes";

export const root = style({
  fontFamily: vars.fontFamilyBase,
  fontSize: vars.fontSizeBase300,
  lineHeight: vars.lineHeightBase300,
  fontWeight: vars.fontWeightRegular,
  textAlign: "start",
  display: "inline",
  whiteSpace: "normal",
  overflow: "visible",
  textOverflow: "clip",
});

export const nowrap = style({
  whiteSpace: "nowrap",
  overflow: "hidden",
});

export const truncate = style({
  textOverflow: "ellipsis",
});

export const block = style({
  display: "block",
});

export const italic = style({
  fontStyle: "italic",
});

export const underline = style({
  textDecoration: "underline",
});

export const strikethrough = style({
  textDecoration: "line-through",
});

export const strikethroughUnderline = style({
  textDecoration: "line-through underline",
});

export const sizes = styleVariants({
  100: {
    fontSize: vars.fontSizeBase100,
    lineHeight: vars.lineHeightBase100,
  },
  200: {
    fontSize: vars.fontSizeBase200,
    lineHeight: vars.lineHeightBase200,
  },
  300: {
    fontSize: vars.fontSizeBase300,
    lineHeight: vars.lineHeightBase300,
  },
  400: {
    fontSize: vars.fontSizeBase400,
    lineHeight: vars.lineHeightBase400,
  },
  500: {
    fontSize: vars.fontSizeBase500,
    lineHeight: vars.lineHeightBase500,
  },
  600: {
    fontSize: vars.fontSizeBase600,
    lineHeight: vars.lineHeightBase600,
  },
  700: {
    fontSize: vars.fontSizeHero700,
    lineHeight: vars.lineHeightHero700,
  },
  800: {
    fontSize: vars.fontSizeHero800,
    lineHeight: vars.lineHeightHero800,
  },
  900: {
    fontSize: vars.fontSizeHero900,
    lineHeight: vars.lineHeightHero900,
  },
  1000: {
    fontSize: vars.fontSizeHero1000,
    lineHeight: vars.lineHeightHero1000,
  },
});

export const monospace = style({
  fontFamily: vars.fontFamilyMonospace,
});

export const numeric = style({
  fontFamily: vars.fontFamilyNumeric,
});

export const weights = styleVariants({
  regular: {},
  medium: {
    fontWeight: vars.fontWeightMedium,
  },
  semibold: {
    fontWeight: vars.fontWeightSemibold,
  },
  bold: {
    fontWeight: vars.fontWeightBold,
  },
});

export const aligns = styleVariants({
  start: {},
  center: {
    textAlign: "center",
  },
  end: {
    textAlign: "end",
  },
  justify: {
    textAlign: "justify",
  },
});
