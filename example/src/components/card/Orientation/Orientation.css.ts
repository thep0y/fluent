import { themeContract } from "@/themes";
import { style } from "@vanilla-extract/css";

export const main = style({
  gap: "36px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});

export const card = style({
  width: "360px",
  maxWidth: "100%",
  height: "fit-content",
});

export const section = style({
  width: "fit-content",
});

export const title = style({
  margin: "0 0 12px",
});

export const horizontalCardImage = style({
  width: "64px",
  height: "64px",
});

export const headerImage = style({
  borderRadius: "4px",
  maxWidth: "44px",
  maxHeight: "44px",
});

export const caption = style({
  color: themeContract.colorNeutralForeground3,
});

export const text = style({ margin: 0 });
