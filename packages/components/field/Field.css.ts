import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract, typographyVars, vars } from "~/themes";

export const root = style({
  display: "grid",
});

// In horizontal layout, the field is a grid with the label taking up the entire first column.
// The last row is slack space in case the label is taller than the rest of the content.
export const horizontal = style({
  gridTemplateColumns: "33% 1fr",
  gridTemplateRows: "auto auto auto 1fr",
});

// In horizontal layout without a label, replace the label's column with padding.
// This lets grid auto-flow properly place the other children, and keeps fields with and without labels aligned.
export const horizontalNoLabel = style({
  paddingLeft: "33%",
  gridTemplateColumns: "1fr",
});

export const label = styleVariants({
  vertical: {
    paddingTop: vars.spacingVerticalXXS,
    paddingBottom: vars.spacingVerticalXXS,
    marginBottom: vars.spacingVerticalXXS,
  },

  verticalLarge: {
    paddingTop: "1px",
    paddingBottom: "1px",
    marginBottom: vars.spacingVerticalXS,
  },

  horizontal: {
    paddingTop: vars.spacingVerticalSNudge,
    paddingBottom: vars.spacingVerticalSNudge,
    marginRight: vars.spacingHorizontalM,
    gridRowStart: "1",
    gridRowEnd: "-1",
  },

  horizontalSmall: {
    paddingTop: vars.spacingVerticalXS,
    paddingBottom: vars.spacingVerticalXS,
  },

  horizontalLarge: {
    // To align the label text with the Input text, it should be centered within the 40px height of the Input.
    // This is (40px - lineHeightBase400) / 2 = 9px. Hardcoded since there is no 9px padding token.
    paddingTop: "9px",
    paddingBottom: "9px",
  },
});

export const secondaryTextBase = style([
  typographyVars.caption1,
  {
    marginTop: vars.spacingVerticalXXS,
    color: themeContract.colorNeutralForeground3,
  },
]);

export const secondaryText = styleVariants({
  error: {
    color: themeContract.colorPaletteRedForeground1,
  },

  withIcon: {
    // Add a gutter for the icon, to allow multiple lines of text to line up to the right of the icon.
    paddingLeft: `calc(12px + ${vars.spacingHorizontalXS})`,
  },
});

const validationMessageIconBase = style({
  display: "inline-block",
  fontSize: "12px",
  // Negative left margin puts the icon in the gutter of the validation message div's withIcon style.
  marginLeft: `calc(-12px - ${vars.spacingHorizontalXS})`,
  marginRight: vars.spacingHorizontalXS,
  // Line height of 0 prevents the verticalAlign from affecting the line height of the text.
  lineHeight: "0",
  // Negative verticalAlign shifts the inline icon down to align with the text (effectively top padding).
  verticalAlign: "-1px",
});

export const validationMessageIcon = styleVariants({
  error: [
    validationMessageIconBase,
    {
      color: themeContract.colorPaletteRedForeground1,
    },
  ],

  warning: [
    validationMessageIconBase,
    {
      color: themeContract.colorPaletteDarkOrangeForeground1,
    },
  ],

  success: [
    validationMessageIconBase,
    {
      color: themeContract.colorPaletteGreenForeground1,
    },
  ],
});

export const hint = style({});
