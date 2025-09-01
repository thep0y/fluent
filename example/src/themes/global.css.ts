import { themeContract, vars } from "@/themes";
import { style } from "@vanilla-extract/css";

export const box = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "40px",
  gap: "12px",
  fontSize: "14px",
  color: themeContract.colorNeutralForeground1,
  lineHeight: vars.lineHeightBase300,
});

export const field = style({
  display: "flex",
  width: "100%",
  padding: "10px",
  borderRadius: vars.borderRadiusXLarge,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(250, 250, 250)",
  boxSizing: "border-box",
  gap: vars.spacingHorizontalS,
});

export const fieldColumn = style({
  display: "flex",
  width: "100%",
  padding: "10px",
  borderRadius: vars.borderRadiusXLarge,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgb(250, 250, 250)",
  boxSizing: "border-box",
  gap: vars.spacingVerticalS,

  selectors: {
    [`&:has(${field})`]: {
      gap: vars.spacingVerticalNone,
      padding: "0 10px",
    },
  },
});
