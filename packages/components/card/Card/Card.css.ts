import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// Create CSS variables
export const cardBorderRadius = createVar("--fui-Card--border-radius");
export const cardSize = createVar("--fui-Card--size");

// Base card style
export const card = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  boxShadow: themeContract.shadow4,
  backgroundColor: themeContract.colorNeutralBackground1,
  margin: "auto",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "relative",
  color: themeContract.colorNeutralForeground1,

  // Use CSS variables
  borderRadius: cardBorderRadius,
  padding: cardSize,
  gap: cardSize,

  // Set default values
  vars: {
    [cardBorderRadius]: vars.borderRadiusMedium,
    [cardSize]: vars.spacingHorizontalM,
  },

  selectors: {
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      content: '""',
      pointerEvents: "none",
      borderStyle: "solid",
      borderWidth: vars.strokeWidthThin,
      borderRadius: cardBorderRadius,
    },
  },
});

export const focused = style({
  selectors: {
    "&:focus": {
      outlineStyle: "none",
    },
    // "&:focus-visible": {
    //   outlineStyle: "none",
    // },
  },
});

export const selectableFocused = style({
  selectors: {
    "&:focus-within": {
      outlineStyle: "none",
    },
  },
});

// Size variants
export const size = styleVariants({
  small: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusSmall,
      [cardSize]: vars.spacingHorizontalS,
    },
  },
  medium: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusMedium,
      [cardSize]: vars.spacingHorizontalM,
    },
  },
  large: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusLarge,
      [cardSize]: vars.spacingHorizontalL,
    },
  },
});

// Appearance variants
export const appearance = styleVariants({
  filled: {
    boxShadow: themeContract.shadow4,
    backgroundColor: themeContract.colorNeutralBackground1,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorTransparentStroke,
      },
    },
  },
  "filled-alternative": {
    boxShadow: themeContract.shadow4,
    backgroundColor: themeContract.colorNeutralBackground2,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorTransparentStroke,
      },
    },
  },
  outline: {
    boxShadow: "none",
    backgroundColor: themeContract.colorTransparentBackground,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorNeutralStroke1,
      },
    },
  },
  subtle: {
    boxShadow: "none",
    backgroundColor: themeContract.colorSubtleBackground,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorTransparentStroke,
      },
    },
  },
});

// Orientation variants
export const orientation = styleVariants({
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

export const interactive = styleVariants({
  filled: {
    cursor: "pointer",
    backgroundColor: themeContract.colorNeutralBackground1,
    boxShadow: themeContract.shadow4,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorTransparentStroke,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground1Hover,
        backgroundColor: themeContract.colorNeutralBackground1Hover,
        boxShadow: themeContract.shadow8,
      },
      "&:active": {
        backgroundColor: themeContract.colorNeutralBackground1Pressed,
      },
    },
  },
  "filled-alternative": {
    cursor: "pointer",
    backgroundColor: themeContract.colorNeutralBackground2,
    boxShadow: themeContract.shadow4,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorTransparentStroke,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground2Hover,
        backgroundColor: themeContract.colorNeutralBackground2Hover,
        boxShadow: themeContract.shadow8,
      },
      "&:active": {
        backgroundColor: themeContract.colorNeutralBackground2Pressed,
      },
    },
  },
  outline: {
    cursor: "pointer",
    backgroundColor: themeContract.colorTransparentBackground,
    boxShadow: themeContract.shadow4,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorNeutralStroke1,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground1Hover,
        backgroundColor: themeContract.colorTransparentBackgroundHover,
      },
      "&:hover::after": {
        borderColor: themeContract.colorNeutralStroke1Hover,
      },
      "&:active": {
        backgroundColor: themeContract.colorTransparentBackgroundPressed,
      },
      "&:active::after": {
        borderColor: themeContract.colorNeutralStroke1Pressed,
      },
    },
  },
  subtle: {
    cursor: "pointer",
    backgroundColor: themeContract.colorSubtleBackground,
    boxShadow: "none",

    selectors: {
      "&::after": {
        borderColor: themeContract.colorTransparentStroke,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground1Hover,
        backgroundColor: themeContract.colorSubtleBackgroundHover,
      },
      "&:active": {
        backgroundColor: themeContract.colorSubtleBackgroundPressed,
      },
    },
  },
});

// Selected state
export const selected = styleVariants({
  filled: {
    backgroundColor: themeContract.colorNeutralBackground1Selected,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorNeutralStroke1Selected,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground1Selected,
        backgroundColor: themeContract.colorNeutralBackground1Selected,
      },
    },
  },
  "filled-alternative": {
    backgroundColor: themeContract.colorNeutralBackground2Selected,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorNeutralStroke1Selected,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground2Selected,
        backgroundColor: themeContract.colorNeutralBackground2Selected,
      },
    },
  },
  outline: {
    backgroundColor: themeContract.colorTransparentBackgroundSelected,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorNeutralStroke1Selected,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground1Selected,
        backgroundColor: themeContract.colorTransparentBackgroundSelected,
      },
    },
  },
  subtle: {
    backgroundColor: themeContract.colorSubtleBackgroundSelected,

    selectors: {
      "&::after": {
        borderColor: themeContract.colorNeutralStroke1Selected,
      },
      "&:hover": {
        color: themeContract.colorNeutralForeground1Selected,
        backgroundColor: themeContract.colorSubtleBackgroundSelected,
      },
    },
  },
});

export const floatingAction = style({
  zIndex: 1,
  position: "absolute",
  top: vars.spacingHorizontalXS,
  right: vars.spacingHorizontalXS,
});

export const checkbox = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  clipPath: "inset(50%)",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  overflow: "hidden",
});
