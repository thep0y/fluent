import { globalStyle, style } from "@vanilla-extract/css";
import { themeContract, lightTheme, darkTheme } from "@/themes/theme.css";

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: darkTheme,
    },
    "(prefers-color-scheme: light)": {
      vars: lightTheme,
    },
  },
});

export const h1 = style({
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  color: themeContract.colorBrandForeground1,
});
