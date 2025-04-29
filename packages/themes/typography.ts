import { vars } from "./var.css";

export type TypographyStyle = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
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
export const typographyVars = {
  body1: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase300,
    fontWeight: vars.fontWeightRegular,
    lineHeight: vars.lineHeightBase300,
  },
  body1Strong: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase300,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightBase300,
  },
  body1Stronger: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase300,
    fontWeight: vars.fontWeightBold,
    lineHeight: vars.lineHeightBase300,
  },
  body2: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase400,
    fontWeight: vars.fontWeightRegular,
    lineHeight: vars.lineHeightBase400,
  },
  caption1: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase200,
    fontWeight: vars.fontWeightRegular,
    lineHeight: vars.lineHeightBase200,
  },
  caption1Strong: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase200,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightBase200,
  },
  caption1Stronger: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase200,
    fontWeight: vars.fontWeightBold,
    lineHeight: vars.lineHeightBase200,
  },
  caption2: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase100,
    fontWeight: vars.fontWeightRegular,
    lineHeight: vars.lineHeightBase100,
  },
  caption2Strong: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase100,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightBase100,
  },
  subtitle1: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase500,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightBase500,
  },
  subtitle2: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase400,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightBase400,
  },
  subtitle2Stronger: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase400,
    fontWeight: vars.fontWeightBold,
    lineHeight: vars.lineHeightBase400,
  },
  title1: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeHero800,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightHero800,
  },
  title2: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeHero700,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightHero700,
  },
  title3: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeBase600,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightBase600,
  },
  largeTitle: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeHero900,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightHero900,
  },
  display: {
    fontFamily: vars.fontFamilyBase,
    fontSize: vars.fontSizeHero1000,
    fontWeight: vars.fontWeightSemibold,
    lineHeight: vars.lineHeightHero1000,
  },
};
