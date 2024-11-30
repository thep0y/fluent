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
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase300)",
    "font-weight": "var(--fontWeightRegular)",
    "line-height": "var(--lineHeightBase300)",
  },
  body1Strong: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase300)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightBase300)",
  },
  body1Stronger: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase300)",
    "font-weight": "var(--fontWeightBold)",
    "line-height": "var(--lineHeightBase300)",
  },
  body2: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase400)",
    "font-weight": "var(--fontWeightRegular)",
    "line-height": "var(--lineHeightBase400)",
  },
  caption1: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase200)",
    "font-weight": "var(--fontWeightRegular)",
    "line-height": "var(--lineHeightBase200)",
  },
  caption1Strong: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase200)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightBase200)",
  },
  caption1Stronger: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase200)",
    "font-weight": "var(--fontWeightBold)",
    "line-height": "var(--lineHeightBase200)",
  },
  caption2: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase100)",
    "font-weight": "var(--fontWeightRegular)",
    "line-height": "var(--lineHeightBase100)",
  },
  caption2Strong: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase100)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightBase100)",
  },
  subtitle1: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase500)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightBase500)",
  },
  subtitle2: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase400)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightBase400)",
  },
  subtitle2Stronger: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase400)",
    "font-weight": "var(--fontWeightBold)",
    "line-height": "var(--lineHeightBase400)",
  },
  title1: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeHero800)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightHero800)",
  },
  title2: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeHero700)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightHero700)",
  },
  title3: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeBase600)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightBase600)",
  },
  largeTitle: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeHero900)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightHero900)",
  },
  display: {
    "font-family": "var(--fontFamilyBase)",
    "font-size": "var(--fontSizeHero1000)",
    "font-weight": "var(--fontWeightSemibold)",
    "line-height": "var(--lineHeightHero1000)",
  },
};
