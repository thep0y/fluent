import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Base divider style
const baseDivider = style({
  textAlign: "center",
  flexDirection: "row",
  boxSizing: "border-box",
  position: "relative",
  width: "100%",
  alignItems: "center",
  fontSize: vars.fontSizeBase200,
  color: themeContract.colorNeutralForeground2,
  lineHeight: vars.lineHeightBase200,
  flexGrow: 1,
  display: "flex",
  fontWeight: vars.fontWeightRegular,
  fontFamily: vars.fontFamilyBase,
});

// Horizontal divider pseudo-elements style
const horizontalPseudoElements = style({
  selectors: {
    "&::before, &::after": {
      borderColor: themeContract.colorNeutralStroke2,
      marginRight: 0,
      marginBottom: 0,
      flexGrow: 1,
      display: "flex",
      boxSizing: "border-box",
      content: '""',
      borderTopWidth: vars.strokeWidthThin,
      borderTopStyle: "solid",
      minWidth: "8px",
    },
  },
});

// Vertical divider style
const verticalStyle = style({
  minHeight: "20px",
  flexDirection: "column",
  selectors: {
    "&::before, &::after": {
      minHeight: "8px",
      borderRightWidth: vars.strokeWidthThin,
      borderRightStyle: "solid",
      borderTopWidth: 0,
      borderTopStyle: "none",
    },
    "&::before": {
      marginBottom: 0,
    },
    "&::after": {
      marginTop: 0,
    },
  },
});

// Alignment base style
const alignmentBase = style({
  selectors: {
    [`&:not(${verticalStyle})::before`]: {
      marginRight: "12px",
    },
    [`&:not(${verticalStyle})::after`]: {
      marginLeft: "12px",
    },
    [`&${verticalStyle}::before`]: {
      marginBottom: "12px",
    },
    [`&${verticalStyle}::after`]: {
      marginTop: "12px",
    },
  },
});

// Alignment variants
const alignmentVariants = styleVariants({
  start: {
    selectors: {
      [`&:not(${verticalStyle})::before`]: {
        maxWidth: "8px",
      },
      [`&${verticalStyle}::before`]: {
        maxHeight: "8px",
      },
    },
  },
  center: {},
  end: {
    selectors: {
      [`&:not(${verticalStyle})::after`]: {
        maxWidth: "8px",
      },
      [`&${verticalStyle}::after`]: {
        maxHeight: "8px",
      },
    },
  },
});

// Appearance variants
const appearanceVariants = styleVariants({
  default: {},
  subtle: {
    color: themeContract.colorNeutralForeground3,
    selectors: {
      "&::before, &::after": {
        borderColor: themeContract.colorNeutralStroke3,
      },
    },
  },
  brand: {
    color: themeContract.colorBrandForeground1,
    selectors: {
      "&::before, &::after": {
        borderColor: themeContract.colorBrandStroke1,
      },
    },
  },
  strong: {
    color: themeContract.colorNeutralForeground1,
    selectors: {
      "&::before, &::after": {
        borderColor: themeContract.colorNeutralStroke1,
      },
    },
  },
});

// Inset style
const insetStyle = style({
  selectors: {
    [`&:not(${verticalStyle})`]: {
      paddingLeft: "12px",
      paddingRight: "12px",
    },
    [`&${verticalStyle}`]: {
      marginBottom: "12px",
      marginTop: "12px",
    },
  },
});

// Content wrapper style
const wrapperStyle = style({
  padding: "0 8px",
});

// Export style object
export const divider = {
  base: baseDivider,
  horizontal: horizontalPseudoElements,
  vertical: verticalStyle,
  alignmentBase,
  alignment: alignmentVariants,
  appearance: appearanceVariants,
  inset: insetStyle,
  wrapper: wrapperStyle,
};
