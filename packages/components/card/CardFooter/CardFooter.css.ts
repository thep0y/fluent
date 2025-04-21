import { style } from "@vanilla-extract/css";

// 基础页脚样式
export const cardFooter = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  boxSizing: "border-box",
});
