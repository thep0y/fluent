import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { themeContract, vars } from "~/themes";

export const root = style({
  position: "relative",
  display: "inline-flex",
  cursor: "pointer",
  verticalAlign: "middle",
  color: themeContract.colorNeutralForeground3,
});

const indicatorBorderColor = createVar();
const indicatorBackgroundColor = createVar();
const indicatorColor = createVar();

export const unchecked = style({
  selectors: {
    "&:hover": {
      color: themeContract.colorNeutralForeground2,

      vars: {
        [indicatorBorderColor]: themeContract.colorNeutralStrokeAccessibleHover,
      },
    },

    "&:active": {
      color: themeContract.colorNeutralForeground1,

      vars: {
        [indicatorBorderColor]:
          themeContract.colorNeutralStrokeAccessiblePressed,
      },
    },
  },
});

export const checked = style({
  vars: {
    [indicatorBackgroundColor]: themeContract.colorCompoundBrandBackground,
    [indicatorColor]: themeContract.colorNeutralForegroundInverted,
    [indicatorBorderColor]: themeContract.colorCompoundBrandBackground,
  },

  color: themeContract.colorNeutralForeground1,

  selectors: {
    "&:hover": {
      vars: {
        [indicatorBackgroundColor]:
          themeContract.colorCompoundBrandBackgroundHover,
        [indicatorBorderColor]: themeContract.colorCompoundBrandBackgroundHover,
      },
    },

    "&:active": {
      vars: {
        [indicatorBackgroundColor]:
          themeContract.colorCompoundBrandBackgroundPressed,
        [indicatorBorderColor]:
          themeContract.colorCompoundBrandBackgroundPressed,
      },
    },
  },
});

export const mixed = style({
  vars: {
    [indicatorBorderColor]: themeContract.colorCompoundBrandStroke,
    [indicatorColor]: themeContract.colorCompoundBrandForeground1,
  },

  color: themeContract.colorNeutralForeground1,

  selectors: {
    "&:hover": {
      vars: {
        [indicatorBorderColor]: themeContract.colorCompoundBrandStrokeHover,
        [indicatorColor]: themeContract.colorCompoundBrandForeground1Hover,
      },
    },

    "&:active": {
      vars: {
        [indicatorBorderColor]: themeContract.colorCompoundBrandStrokePressed,
        [indicatorColor]: themeContract.colorCompoundBrandForeground1Pressed,
      },
    },
  },
});

export const disabled = style({
  vars: {
    [indicatorBorderColor]: themeContract.colorNeutralStrokeDisabled,
    [indicatorColor]: themeContract.colorNeutralForegroundDisabled,
  },

  cursor: "default",
  color: themeContract.colorNeutralForegroundDisabled,

  "@media": {
    "(forced-colors: active)": {
      vars: {
        [indicatorColor]: "GrayText",
      },

      color: "GrayText",
    },
  },
});

export const input = style({
  boxSizing: "border-box",
  cursor: "inherit",
  height: "100%",
  margin: 0,
  opacity: 0,
  position: "absolute",
  top: 0,
  // Calculate the width of the hidden input by taking into account the size of the indicator + the padding around it.
  // This is done so that clicking on that "empty space" still toggles the checkbox.
  width: `calc(16px + 2 * ${vars.spacingHorizontalS})`,
});

export const inputSizes = styleVariants({
  medium: {},

  large: {
    width: `calc(20px + 2 * ${vars.spacingHorizontalS})`,
  },
});

export const inputPositions = styleVariants({
  before: {
    right: 0,
  },
  after: {
    left: 0,
  },
});

export const indicator = style({
  alignSelf: "flex-start",
  boxSizing: "border-box",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  color: indicatorColor,
  backgroundColor: indicatorBackgroundColor,
  borderColor: indicatorBorderColor,
  borderStyle: "solid",
  borderWidth: vars.strokeWidthThin,
  borderRadius: vars.borderRadiusSmall,
  margin: `${vars.spacingVerticalS} ${vars.spacingHorizontalS}`,
  fill: "currentColor",
  pointerEvents: "none",

  fontSize: "12px",
  height: "16px",
  width: "16px",
});

export const indicatorSizes = styleVariants({
  medium: {},

  large: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
});

export const indicatorShapes = styleVariants({
  square: {},

  circular: {
    borderRadius: vars.borderRadiusCircular,
  },
});

export const label = style({
  alignSelf: "center",
  color: "inherit",
  cursor: "inherit",
  padding: `${vars.spacingVerticalS} ${vars.spacingHorizontalS}`,
});

export const labelPositions = styleVariants({
  before: {
    paddingRight: vars.spacingHorizontalXS,
  },
  after: {
    paddingLeft: vars.spacingHorizontalXS,
  },
});

export const labelSizes = styleVariants({
  medium: {
    marginTop: `calc((16px - ${vars.lineHeightBase300}) / 2)`,
    marginBottom: `calc((16px - ${vars.lineHeightBase300}) / 2)`,
  },

  large: {
    marginTop: `calc((20px - ${vars.lineHeightBase300}) / 2)`,
    marginBottom: `calc((20px - ${vars.lineHeightBase300}) / 2)`,
  },
});
