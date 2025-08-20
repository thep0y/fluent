import { globalStyle, style } from "@vanilla-extract/css";
import { cardSize, orientation } from "../Card/Card.css";

// Base card preview style
export const cardPreview = style({
  marginLeft: `calc(${cardSize} * -1)`,
  position: "relative",

  selectors: {
    [`${orientation.vertical} > :not([aria-hidden="true"])&:first-of-type`]: {
      marginTop: `calc(${cardSize} * -1)`,
    },

    [`${orientation.horizontal} &`]: {
      marginBottom: `calc(${cardSize} * -1)`,
      marginTop: `calc(${cardSize} * -1)`,
    },

    [`${orientation.vertical} &`]: {
      marginRight: `calc(${cardSize} * -1)`,
    },
  },
});

// Logo style
export const logo = style({
  position: "absolute",
  left: "12px",
  bottom: "12px",
  height: "32px",
  width: "32px",
});

globalStyle(`${cardPreview} > :not(${logo})`, {
  width: "100%",
  height: "100%",
  display: "block",
});
