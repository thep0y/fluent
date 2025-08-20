import { themeContract } from "@/themes";
import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  columnGap: "16px",
  rowGap: "36px",
});

export const title = style({ margin: "0 0 12px" });

export const description = style({ margin: "0 0 12px" });

export const card = style({
  width: "400px",
  maxWidth: "100%",
  height: "fit-content",
});

export const link = style({
  color: themeContract.colorNeutralForeground1,

  selectors: {
    "&:hover": {
      color: themeContract.colorNeutralForeground1,
      textDecoration: "none",
    },
  },
});

export const text = style({ margin: "0" });
