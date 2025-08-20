import { themeContract } from "@/themes";
import { style } from "@vanilla-extract/css";

export const container = style({
  gap: "16px",
  display: "flex",
  flexWrap: "wrap",
});

export const card = style({
  width: "280px",
  height: "fit-content",
});

export const flex = style({
  gap: "4px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const labels = style({ gap: "6px" });

export const footer = style({ gap: "12px" });

export const caption = style({
  color: themeContract.colorNeutralForeground3,
});

export const taskCheckbox = style({
  display: "flex",
  alignItems: "flex-start",
});

export const grid = style({
  gap: "16px",
  display: "flex",
  flexDirection: "column",
});
