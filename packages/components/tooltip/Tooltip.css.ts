import {
  style,
  styleVariants,
  createVar,
  globalStyle,
} from "@vanilla-extract/css";
import { themeContract } from "~/themes/theme.css";
import { vars } from "~/themes/var.css";

// 创建箭头偏移变量
export const arrowOffset = createVar();
export const arrowAngle = createVar();

// 基础tooltip样式
const baseTooltip = style({
  zIndex: 1000000,
  position: "absolute",
  right: 0,
  left: 0,
  top: 0,
  margin: 0,
  lineHeight: vars.lineHeightBase300,
  fontWeight: vars.fontWeightRegular,
  fontSize: vars.fontSizeBase300,
  fontFamily: vars.fontFamilyBase,
  textAlign: "left",
  backgroundColor: themeContract.colorNeutralBackground1,
  color: themeContract.colorNeutralForeground1,
});

// 内容样式
const contentStyle = style({
  filter: `drop-shadow(0 0 2px ${themeContract.colorNeutralShadowAmbient}) drop-shadow(0 4px 8px ${themeContract.colorNeutralShadowKey})`,
  overflowWrap: "break-word",
  cursor: "default",
  maxWidth: "240px",
  boxSizing: "border-box",
  lineHeight: vars.lineHeightBase200,
  fontSize: vars.fontSizeBase200,
  fontFamily: vars.fontFamilyBase,
  backgroundColor: themeContract.colorNeutralBackground1,
  color: themeContract.colorNeutralForeground1,
  padding: "4px 11px 6px",
  borderRadius: vars.borderRadiusMedium,
  border: `1px solid ${themeContract.colorTransparentStroke}`,
  position: "absolute",
});

// 定位变体
const positioningVariants = {
  above: style({
    vars: {
      [arrowOffset]: "-4.242px",
      [arrowAngle]: "-45deg",
    },
  }),
  below: style({
    vars: {
      [arrowOffset]: "-4.242px",
      [arrowAngle]: "135deg",
    },
  }),
  before: style({
    vars: {
      [arrowOffset]: "-4.242px",
      [arrowAngle]: "225deg",
    },
  }),
  after: style({
    vars: {
      [arrowOffset]: "-4.242px",
      [arrowAngle]: "45deg",
    },
  }),
};

// 箭头样式
const arrowStyle = style({
  width: "8.484px",
  height: "8.484px",
  backgroundClip: "content-box",
  backgroundColor: "inherit",
  zIndex: -1,
  position: "absolute",
  boxSizing: "border-box",
  transform: `rotate(${arrowAngle})`,

  selectors: {
    '[data-popper-placement^="above"] &': { bottom: arrowOffset },
    '[data-popper-placement^="below"] &': { top: arrowOffset },
    '[data-popper-placement^="before"] &': { right: arrowOffset },
    '[data-popper-placement^="after"] &': { left: arrowOffset },
  },
});

// 箭头伪元素样式
globalStyle(`${arrowStyle}::before`, {
  content: '""',
  clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
  borderBottomLeftRadius: vars.borderRadiusSmall,
  height: "100%",
  width: "100%",
  backgroundColor: "inherit",
  display: "block",
  margin: "-1px",
  border: `1px solid ${themeContract.colorTransparentStroke}`,
});

// 外观变体
const appearanceVariants = styleVariants({
  normal: {
    backgroundColor: themeContract.colorNeutralBackground1,
    color: themeContract.colorNeutralForeground1,
  },
  inverted: {
    backgroundColor: themeContract.colorNeutralForeground1,
    color: themeContract.colorNeutralBackground1,
  },
});

export const tooltip = {
  base: baseTooltip,
  content: contentStyle,
  arrow: arrowStyle,
  positioning: positioningVariants,
  appearance: appearanceVariants,
};
