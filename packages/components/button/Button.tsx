import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";

import { buttonRecipe } from "./Button.css";
import type { ButtonProps } from "./Button.types";
import { runtimeButton } from "./runtime";

export function Button(props: ButtonProps) {
	const isIconOnly = () => !!props.icon && !props.children;
	const isDisabled = () => props.disabled || props.disabledFocusable;
	const size = () => props.size || "medium";

	const className = buttonRecipe({
		appearance: props.appearance,
		shape: props.shape,
		size: size(),
		iconOnly: isIconOnly(),
		disabled: isDisabled(),
		disabledFocusable: props.disabledFocusable,
	});

	const args = [className];

	const Component = runtimeButton(...args);

	addFunctionSerializer(Component, {
		importPath: "@fluentui/solid/lib/components/button/runtime",
		importName: "runtimeButton",
		args: [args],
	});

	return Component(props);
}
