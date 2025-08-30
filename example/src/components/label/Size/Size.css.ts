import { vars } from "@/themes";
import { style } from "@vanilla-extract/css";

export const size = style({
  display: "flex",
  flexDirection: "column",
  rowGap: vars.spacingVerticalL,
});
