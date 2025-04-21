import { style } from "@vanilla-extract/css";
import { cardSize } from "../Card/Card.css";

// 基础卡片预览样式
export const cardPreview = style({
  marginRight: `calc(${cardSize} * -1)`,
  marginLeft: `calc(${cardSize} * -1)`,
  position: "relative",
});

// Logo样式
export const logo = style({
  position: "absolute",
  left: "12px",
  bottom: "12px",
  height: "32px",
  width: "32px",
});
