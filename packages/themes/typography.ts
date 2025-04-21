import { vars } from "./var.css";

export type TypographyStyle = {
  "font-family": string;
  "font-size": string;
  "font-weight": string;
  "line-height": string;
};

export type TypographyStyles = {
  body1: TypographyStyle;
  body1Strong: TypographyStyle;
  body1Stronger: TypographyStyle;
  body2: TypographyStyle;
  caption1: TypographyStyle;
  caption1Strong: TypographyStyle;
  caption1Stronger: TypographyStyle;
  caption2: TypographyStyle;
  caption2Strong: TypographyStyle;
  subtitle1: TypographyStyle;
  subtitle2: TypographyStyle;
  subtitle2Stronger: TypographyStyle;
  title1: TypographyStyle;
  title2: TypographyStyle;
  title3: TypographyStyle;
  largeTitle: TypographyStyle;
  display: TypographyStyle;
};

/**
 * Global typography styles (fontSize)", fontWeight, and lineHeight)
 */
export const typographyStyles: TypographyStyles = {
  body1: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase300,
    "font-weight": vars.fontWeightRegular,
    "line-height": vars.lineHeightBase300,
  },
  body1Strong: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase300,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightBase300,
  },
  body1Stronger: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase300,
    "font-weight": vars.fontWeightBold,
    "line-height": vars.lineHeightBase300,
  },
  body2: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase400,
    "font-weight": vars.fontWeightRegular,
    "line-height": vars.lineHeightBase400,
  },
  caption1: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase200,
    "font-weight": vars.fontWeightRegular,
    "line-height": vars.lineHeightBase200,
  },
  caption1Strong: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase200,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightBase200,
  },
  caption1Stronger: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase200,
    "font-weight": vars.fontWeightBold,
    "line-height": vars.lineHeightBase200,
  },
  caption2: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase100,
    "font-weight": vars.fontWeightRegular,
    "line-height": vars.lineHeightBase100,
  },
  caption2Strong: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase100,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightBase100,
  },
  subtitle1: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase500,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightBase500,
  },
  subtitle2: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase400,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightBase400,
  },
  subtitle2Stronger: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase400,
    "font-weight": vars.fontWeightBold,
    "line-height": vars.lineHeightBase400,
  },
  title1: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeHero800,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightHero800,
  },
  title2: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeHero700,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightHero700,
  },
  title3: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeBase600,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightBase600,
  },
  largeTitle: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeHero900,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightHero900,
  },
  display: {
    "font-family": vars.fontFamilyBase,
    "font-size": vars.fontSizeHero1000,
    "font-weight": vars.fontWeightSemibold,
    "line-height": vars.lineHeightHero1000,
  },
};
