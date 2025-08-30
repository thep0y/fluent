import { themeContract, vars } from "@/themes";
import { style } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  flexDirection: "column",
  rowGap: vars.spacingVerticalMNudge,
});

export const inverted = style({
  backgroundColor: themeContract.colorNeutralBackgroundInverted,
});

export const invertedLabel = style({
  color: themeContract.colorNeutralForegroundInverted2,
});

export const fieldWrapper = style({
  padding: `${vars.spacingVerticalMNudge} ${vars.spacingHorizontalMNudge}`,
});
