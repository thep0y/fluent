import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 创建CSS变量
export const cardBorderRadius = createVar("--fui-Card--border-radius");
export const cardSize = createVar("--fui-Card--size");

// 基础卡片样式
export const card = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  boxShadow: themeContract.shadow4,
  backgroundColor: themeContract.colorNeutralBackground1,
  margin: "auto",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "relative",
  color: themeContract.colorNeutralForeground1,

  // 使用CSS变量
  borderRadius: cardBorderRadius,
  padding: cardSize,
  gap: cardSize,

  // 设置默认值
  vars: {
    [cardBorderRadius]: vars.borderRadiusMedium,
    [cardSize]: vars.spacingHorizontalM,
  },
});

// 尺寸变体
export const size = styleVariants({
  small: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusSmall,
      [cardSize]: vars.spacingHorizontalS,
    },
  },
  medium: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusMedium,
      [cardSize]: vars.spacingHorizontalM,
    },
  },
  large: {
    vars: {
      [cardBorderRadius]: vars.borderRadiusLarge,
      [cardSize]: vars.spacingHorizontalL,
    },
  },
});

// 外观变体
export const appearance = styleVariants({
  filled: {
    boxShadow: themeContract.shadow4,
    backgroundColor: themeContract.colorNeutralBackground1,
  },
  "filled-alternative": {
    boxShadow: themeContract.shadow4,
    backgroundColor: themeContract.colorNeutralBackground2,
  },
  outline: {
    boxShadow: "none",
    backgroundColor: "transparent",
    border: `${vars.strokeWidthThin} solid ${themeContract.colorNeutralStroke1}`,
  },
  subtle: {
    boxShadow: "none",
    backgroundColor: themeContract.colorNeutralBackground2,
  },
});

// 方向变体
export const orientation = styleVariants({
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

// 选中状态
export const selected = style({
  outline: `${vars.strokeWidthThick} solid ${themeContract.colorCompoundBrandStroke}`,
  outlineOffset: "-1px",
});

// 焦点模式
export const focusMode = style({
  // 基础样式，可以根据需要扩展
  outline: `${vars.strokeWidthThin} solid ${themeContract.colorCompoundBrandStroke}`,
  outlineOffset: "-1px",
});
