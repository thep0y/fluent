import { vars } from "@/themes";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  rowGap: vars.spacingVerticalL,
});
