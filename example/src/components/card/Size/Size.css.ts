import { themeContract } from "@/themes";
import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  columnGap: "16px",
  rowGap: "36px",
});

export const title = style({ margin: "0 0 12px" });

export const card = style({
  width: "300px",
  maxWidth: "100%",
  height: "fit-content",
});

export const flex = style({
  gap: "4px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const appIcon = style({
  borderRadius: "4px",
  height: "32px",
});

export const caption = style({
  color: themeContract.colorNeutralForeground3,
});

export const cardFooter = style({
  alignItems: "center",
  justifyContent: "space-between",
});
