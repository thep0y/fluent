import { themeContract } from "@/themes";
import { style } from "@vanilla-extract/css";

export const main = style({
  gap: "36px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});

export const title = style({ margin: "0 0 12px" });

export const description = style({ margin: "0 0 12px" });

export const card = style({
  width: "480px",
  maxWidth: "100%",
  height: "fit-content",
});

export const caption = style({
  color: themeContract.colorNeutralForeground3,
});

export const logo = style({
  borderRadius: "4px",
  width: "48px",
  height: "48px",
});

export const text = style({ margin: "0" });
