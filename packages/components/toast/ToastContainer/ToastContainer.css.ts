import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const toastTop = createVar();
export const toastBottom = createVar();

const toastContainer = style({
  position: "fixed",
  left: 0, // prevent toastContainer width from overflowing screen
  width: "100%",
  zIndex: 9999,
  pointerEvents: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  padding: "8px",
  boxSizing: "border-box",

  vars: {
    [toastTop]: "0",
    [toastBottom]: "8px",
  },
});

const positioningVariants = styleVariants({
  top: {
    top: toastTop,
    alignItems: "center",
  },
  "top-left": {
    top: toastTop,
    alignItems: "flex-start",
  },
  "top-right": {
    top: toastTop,
    alignItems: "flex-end",
  },

  bottom: {
    bottom: toastBottom,
    alignItems: "center",
  },
  "bottom-left": {
    bottom: toastBottom,
    alignItems: "flex-start",
  },
  "bottom-right": {
    bottom: toastBottom,
    alignItems: "flex-end",
  },
});

export const toastContainerStyle = {
  base: toastContainer,
  position: positioningVariants,
};
