import {
	createVar,
	globalStyle,
	style,
	styleVariants,
} from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "~/themes/var.css";
import { themeContract } from "~/themes/theme.css";

const iconSpacing = createVar();

const disableStyle = {
	cursor: "not-allowed",
	color: themeContract.color.neutralForeground.disabled,
	borderColor: themeContract.color.neutralStroke.disabled,
	backgroundColor: themeContract.color.neutralBackground.disabled,
	opacity: 0.6,
} as const;

const base = style({
	alignItems: "center",
	boxSizing: "border-box",
	display: "inline-flex",
	justifyContent: "center",
	textDecorationLine: "none",
	verticalAlign: "middle",
	margin: 0,
	overflow: "hidden",
	backgroundColor: themeContract.color.neutralBackground[1],
	color: themeContract.color.neutralForeground[1],
	border: `${vars.strokeWidth.thin} solid ${themeContract.color.neutralStroke[1]}`,
	fontFamily: vars.font.fontFamily.base,
	outlineStyle: "none",
	padding: `5px ${vars.spacing.horizontal.m}`,
	minWidth: "96px",
	borderRadius: vars.borderRadius.medium,
	fontSize: vars.font.fontSize.base300,
	fontWeight: vars.font.fontWeight.semibold,
	lineHeight: vars.font.lineHeight.base300,
	transitionDuration: vars.duration.faster,
	transitionProperty: "background, border, color",
	transitionTimingFunction: vars.curve.easyEase,

	":hover": {
		backgroundColor: themeContract.color.neutralBackground["1Hover"],
		borderColor: themeContract.color.neutralStroke["1Hover"],
		color: themeContract.color.neutralForeground["1Hover"],
		cursor: "pointer",
	},

	":disabled": {
		...disableStyle,
	},

	selectors: {
		"&:hover:active": {
			backgroundColor: themeContract.color.neutralBackground["1Pressed"],
			borderColor: themeContract.color.neutralStroke["1Pressed"],
			color: themeContract.color.neutralForeground["1Pressed"],
			outlineStyle: "none",
		},

		"&:disabled:hover": {
			...disableStyle,
		},

		"&:disabled:hover:active": {
			...disableStyle,
		},
	},
});

const appearanceVariants = styleVariants({
	primary: {
		color: themeContract.color.neutralForeground.onBrand,
		backgroundColor: themeContract.color.brandBackground.default,
		borderColor: "transparent",

		":hover": {
			color: themeContract.color.neutralForeground.onBrand,
			backgroundColor: themeContract.color.brandBackground.hover,
			borderColor: "transparent",
		},

		":disabled": {
			borderColor: "transparent",
		},

		selectors: {
			"&:hover:active": {
				color: themeContract.color.neutralForeground.onBrand,
				backgroundColor: themeContract.color.brandBackground.pressed,
				borderColor: "transparent",
			},
		},
	},

	secondary: {}, // default style defined in base

	outline: {
		backgroundColor: themeContract.color.transparentBackground.default,

		":hover": {
			backgroundColor: themeContract.color.transparentBackground.hover,
		},

		selectors: {
			"&:hover:active": {
				backgroundColor: themeContract.color.transparentBackground.pressed,
			},
		},
	},

	danger: {
		backgroundColor: themeContract.color.status.danger.background3,
		color: themeContract.color.neutralForeground.onBrand,
		borderColor: "transparent",

		":hover": {
			backgroundColor: themeContract.color.status.danger.background3Hover,
		},

		selectors: {
			"&:hover:active": {
				backgroundColor: themeContract.color.status.danger.background3Pressed,
			},
		},
	},

	subtle: {
		color: themeContract.color.neutralForeground[2],
		backgroundColor: themeContract.color.subtleBackground.default,
		borderColor: "transparent",

		":hover": {
			color: themeContract.color.neutralForeground["2Hover"],
			backgroundColor: themeContract.color.subtleBackground.hover,
			borderColor: "transparent",
		},

		":disabled": {
			borderColor: "transparent",
		},

		selectors: {
			"&:hover:active": {
				backgroundColor: themeContract.color.subtleBackground.pressed,
				borderColor: "transparent",
			},
		},
	},

	transparent: {
		color: themeContract.color.neutralForeground[2],
		backgroundColor: themeContract.color.transparentBackground.default,
		borderColor: "transparent",

		":hover": {
			color: themeContract.color.neutralForeground["2BrandHover"],
			backgroundColor: themeContract.color.transparentBackground.hover,
			borderColor: "transparent",
		},

		selectors: {
			"&:hover:active": {
				color: themeContract.color.neutralForeground["2BrandPressed"],
				backgroundColor: themeContract.color.transparentBackground.pressed,
				borderColor: "transparent",
			},
		},

		":disabled": {
			borderColor: "transparent",
		},
	},
});

// 形状变体
const shapeVariants = styleVariants({
	rounded: {}, // default style defined in base
	circular: {
		borderRadius: vars.borderRadius.circular,
	},
	square: {
		borderRadius: vars.borderRadius.none,
	},
});

// 尺寸变体
const sizeVariants = styleVariants({
	small: {
		vars: {
			[iconSpacing]: vars.spacing.horizontal.xs,
		},
		minWidth: "64px",
		lineHeight: vars.font.lineHeight.base200,
		fontSize: vars.font.fontSize.base200,
		fontWeight: vars.font.fontWeight.regular,
		padding: `3px ${vars.spacing.horizontal.s}`,

		// selectors: {
		//   [`&:has(${icon})`]: {},
		// },
	},

	medium: {
		vars: {
			[iconSpacing]: vars.spacing.horizontal.sNudge,
		},
	}, // default style defined in base

	large: {
		vars: {
			[iconSpacing]: vars.spacing.horizontal.sNudge,
		},
		minWidth: "96px",
		lineHeight: vars.font.lineHeight.base400,
		fontSize: vars.font.fontSize.base400,
		fontWeight: vars.font.fontWeight.semibold,
		padding: `8px ${vars.spacing.horizontal.l}`,
	},
});

// icon styles
const icon = style({
	alignItems: "center",
	display: "inline-flex",
	justifyContent: "center",
	fontSize: "20px",
	height: "20px",
	width: "20px",
});

globalStyle(`${appearanceVariants.subtle}:hover ${icon}`, {
	color: themeContract.color.neutralForeground["2BrandHover"],
});

globalStyle(`${appearanceVariants.subtle}:hover:active ${icon}`, {
	color: themeContract.color.neutralForeground["2BrandPressed"],
});

const iconBefore = style({
	marginRight: iconSpacing,
});

const iconAfter = style({
	marginLeft: iconSpacing,
});

// icon only styles
const iconOnly = style({
	minWidth: "32px",
	maxWidth: "32px",
	padding: "5px",
});

globalStyle(`${iconOnly} ${icon}`, {
	margin: 0,
});

const iconOnlySmall = style({
	minWidth: "24px",
	maxWidth: "24px",
	padding: "1px",
});

const iconOnlyLarge = style({
	minWidth: "40px",
	maxWidth: "40px",
	padding: "7px",
});

const largeIcon = style({
	width: "24px",
	height: "24px",
	fontSize: "24px",
});

const disabledFocusable = style({
	...disableStyle,

	// keep focus outline
	// ":focus-visible": {
	//   // 可以根据需要自定义专门的 focus 样式
	//   outlineStyle: "solid",
	//   outlineWidth: "2px",
	//   outlineColor: themeContract.color.strokeFocus.outer,
	//   outlineOffset: "2px",
	// },

	// disabled hover styles
	":hover": {
		...disableStyle,
		cursor: "not-allowed",
	},

	// disabled hover:active styles
	selectors: {
		"&:hover:active": {
			...disableStyle,
			cursor: "not-allowed",
		},
	},
});

// create button recipe
export const buttonRecipe = recipe({
	base,
	variants: {
		appearance: appearanceVariants,
		shape: shapeVariants,
		size: sizeVariants,
		iconOnly: {
			true: iconOnly,
		},
		disabled: {
			true: {},
		},
		disabledFocusable: {
			true: disabledFocusable,
		},
	},
	compoundVariants: [
		{
			variants: {
				size: "small",
				iconOnly: true,
			},
			style: iconOnlySmall,
		},
		{
			variants: {
				size: "large",
				iconOnly: true,
			},
			style: iconOnlyLarge,
		},
		{
			variants: {
				size: "large",
			},
			style: {},
		},

		{
			variants: {
				appearance: "transparent",
				disabledFocusable: true,
			},
			style: {
				borderColor: "transparent",
			},
		},
	],
	defaultVariants: {
		appearance: "secondary",
		shape: "rounded",
		size: "medium",
	},
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export const buttonStyles = {
	icon,
	iconBefore,
	iconAfter,
	largeIcon,
};
