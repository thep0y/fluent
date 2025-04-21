import { style } from "@vanilla-extract/css";

// 基础卡片头部样式
export const cardHeader = style({
  flexShrink: 0,
  display: "grid",
  gridAutoColumns: "min-content 1fr min-content",
  alignItems: "center",
  vars: {
    "--fui-CardHeader--gap": "12px",
  },
});

// 图片区域样式
export const image = style({
  gridRowStart: "span 2",
  gridColumnStart: "1",
  marginRight: "var(--fui-CardHeader--gap)",
  display: "inline-flex",
});

// 标题区域样式
export const header = style({
  gridRowStart: "1",
  gridColumnStart: "2",
  display: "flex",
});

// 描述区域样式
export const description = style({
  gridRowStart: "2",
  gridColumnStart: "2",
  display: "flex",
});

// 操作区域样式
export const action = style({
  gridColumnStart: "3",
  gridRowStart: "span 2",
  marginLeft: "var(--fui-CardHeader--gap)",
});
