import { style, styleVariants } from "@vanilla-extract/css";
import { themeContract, typographyVars, vars } from "~/themes";

export const container = style({
  display: "inline-flex",
  boxSizing: "border-box",
  position: "relative",
  padding: `0 0 ${vars.strokeWidthThick} 0`,
  margin: 0,
  borderRadius: vars.borderRadiusMedium,
  verticalAlign: "top",
});

export const disabled = style({
  backgroundColor: themeContract.colorTransparentBackground,
  border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStrokeDisabled}`,
});

export const interactive = style({
  selectors: {
    // This is all for the bottom focus border.
    // It's supposed to be 2px flat all the way across and match the radius of the field's corners.
    "&::after": {
      boxSizing: "border-box",
      content: '""',
      position: "absolute",
      left: "-1px",
      bottom: "-1px",
      right: "-1px",

      // Maintaining the correct corner radius:
      // Use the whole border-radius as the height and only put radii on the bottom corners.
      // (Otherwise the radius would be automatically reduced to fit available space.)
      // max() ensures the focus border still shows up even if someone sets tokens.borderRadiusMedium to 0.
      height: `max(${vars.strokeWidthThick}, ${vars.borderRadiusMedium})`,
      borderBottomLeftRadius: vars.borderRadiusMedium,
      borderBottomRightRadius: vars.borderRadiusMedium,

      // Flat 2px border:
      // By default borderBottom will cause little "horns" on the ends. The clipPath trims them off.
      // (This could be done without trimming using `background: linear-gradient(...)`, but using
      // borderBottom makes it easier for people to override the color if needed.)
      borderBottom: `${vars.strokeWidthThick} solid ${themeContract.colorCompoundBrandStroke}`,
      clipPath: `inset(calc(100% - ${vars.strokeWidthThick}) 0 0 0)`,

      // Animation for focus OUT
      transform: "scaleX(0)",
      transitionProperty: "transform",
      transitionDuration: vars.durationUltraFast,
      transitionDelay: vars.curveAccelerateMid,

      "@media": {
        "screen and (prefers-reduced-motion: reduce)": {
          transitionDuration: "0.01ms",
          transitionDelay: "0.01ms",
        },
      },
    },

    "&:focus-within::after": {
      // Animation for focus IN
      transform: "scaleX(1)",
      transitionProperty: "transform",
      transitionDuration: vars.durationNormal,
      transitionDelay: vars.curveDecelerateMid,

      "@media": {
        "screen and (prefers-reduced-motion: reduce)": {
          transitionDuration: "0.01ms",
          transitionDelay: "0.01ms",
        },
      },
    },

    "&:focus-within:active::after": {
      // This is if the user clicks the field again while it's already focused
      borderBottomColor: themeContract.colorCompoundBrandStrokePressed,
    },

    "&:focus-within": {
      outlineWidth: vars.strokeWidthThick,
      outlineStyle: "solid",
      outlineColor: "transparent",
    },
  },
});

export const filled = style({
  border: `${vars.strokeWidthThin} solid ${themeContract.colorTransparentStroke}`,

  selectors: {
    "&:hover,&:focus-within": {
      borderColor: themeContract.colorTransparentStrokeInteractive,
    },
  },
});

export const appearances = styleVariants({
  outline: {
    backgroundColor: themeContract.colorNeutralBackground1,
    border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1}`,
    borderBottomColor: themeContract.colorNeutralStrokeAccessible,

    selectors: {
      "&:hover": {
        border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1Hover}`,
        borderBottomColor: themeContract.colorNeutralStrokeAccessibleHover,
      },
      "&:active": {
        border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1Pressed}`,
        borderBottomColor: themeContract.colorNeutralStrokeAccessiblePressed,
      },

      "&:focus-within": {
        border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1Pressed}`,
        borderBottomColor: themeContract.colorCompoundBrandStroke,
      },
    },
  },

  "filled-darker": [
    filled,
    {
      backgroundColor: themeContract.colorNeutralBackground3,
    },
  ],

  "filled-lighter": [
    filled,
    {
      backgroundColor: themeContract.colorNeutralBackground1,
    },
  ],
});

export const invalid = style({
  selectors: {
    "&:not(:focus-within),&:hover:not(:focus-within)": {
      borderColor: themeContract.colorPaletteRedBorder2,
    },
  },
});

export const textarea = style({
  borderStyle: "none",
  margin: 0,
  backgroundColor: "transparent",
  boxSizing: "border-box",
  color: themeContract.colorNeutralForeground1,
  flexGrow: 1,
  fontFamily: vars.fontFamilyBase,
  height: "100%",

  selectors: {
    "&::placeholder": {
      color: themeContract.colorNeutralForeground4,
      opacity: 1,
    },
  },

  outlineStyle: "none", // disable default browser outline
});

export const textareaDisabled = style({
  color: themeContract.colorNeutralForegroundDisabled,
  cursor: "not-allowed",

  selectors: {
    "&::placeholder": {
      color: themeContract.colorNeutralForegroundDisabled,
    },
  },
});

// The padding style adds both content and regular padding (from design spec), this is because the handle is not
// affected by changing the padding of the root.
export const textareaSizes = styleVariants({
  small: [
    typographyVars.caption1,
    {
      minHeight: "40px",
      padding: `${vars.spacingVerticalXS} calc(${vars.spacingHorizontalSNudge} + ${vars.spacingHorizontalXXS})`,
      maxHeight: "200px",
    },
  ],
  medium: [
    typographyVars.body1,
    {
      minHeight: "52px",
      padding: `${vars.spacingVerticalSNudge} calc(${vars.spacingHorizontalMNudge} + ${vars.spacingHorizontalXXS})`,
      maxHeight: "260px",
    },
  ],
  large: [
    typographyVars.body2,
    {
      minHeight: "64px",
      padding: `${vars.spacingVerticalS} calc(${vars.spacingHorizontalM} + ${vars.spacingHorizontalXXS})`,
      maxHeight: "320px",
    },
  ],
});

export const textareaResizes = styleVariants({
  none: {
    resize: "none",
  },
  vertical: {
    resize: "vertical",
  },
  horizontal: {
    resize: "horizontal",
  },
  both: {
    resize: "both",
  },
});
