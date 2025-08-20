import { themeContract, vars } from "@/themes";
import { style } from "@vanilla-extract/css";

export const main = style({
  gap: "16px",
  display: "flex",
  flexWrap: "wrap",
});

export const card = style({
  width: "400px",
  maxWidth: "100%",
  height: "fit-content",
});

export const caption = style({
  color: themeContract.colorNeutralForeground3,
});

export const smallRadius = style({ borderRadius: vars.borderRadiusSmall });

export const grayBackground = style({
  backgroundColor: themeContract.colorNeutralBackground3,
});

export const logoBadge = style({
  padding: "5px",
  borderRadius: vars.borderRadiusSmall,
  backgroundColor: "#FFF",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
});
