import { style } from "@vanilla-extract/css";
import { themeContract } from "@/themes/theme.css";

export const h1 = style({
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  color: themeContract.colorBrandForeground1,
});
