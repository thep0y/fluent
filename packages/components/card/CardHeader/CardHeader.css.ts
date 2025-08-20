import { style } from "@vanilla-extract/css";
import { orientation } from "../Card/Card.css";

// Base card header style
export const cardHeader = style({
  flexShrink: 0,
  display: "grid",
  gridAutoColumns: "min-content 1fr min-content",
  alignItems: "center",
  vars: {
    "--fui-CardHeader--gap": "12px",
  },

  selectors: {
    [`${orientation.horizontal} &`]: {
      flexGrow: 1,
    },
  },
});

// Image area style
export const image = style({
  gridRowStart: "span 2",
  gridColumnStart: "1",
  marginRight: "var(--fui-CardHeader--gap)",
  display: "inline-flex",
});

// Header area style
export const header = style({
  gridRowStart: "1",
  gridColumnStart: "2",
  display: "flex",
});

// Description area style
export const description = style({
  gridRowStart: "2",
  gridColumnStart: "2",
  display: "flex",
});

// Action area style
export const action = style({
  gridRowStart: "span 2",
  gridColumnStart: "3",
  marginLeft: "var(--fui-CardHeader--gap)",
  display: "flex",
  alignItems: "center",
});
