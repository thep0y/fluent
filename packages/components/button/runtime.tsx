import { Show, splitProps } from "solid-js";
import type { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.css";

export function runtimeButton(...classNames: string[]) {
	return function Button(props: ButtonProps) {
		const [local, others] = splitProps(props, [
			"appearance",
			"children",
			"disabled",
			"disabledFocusable",
			"icon",
			"iconPosition",
			"shape",
			"size",
			"class",
		]);

		const iconPosition = () => local.iconPosition || "before";
		const size = () => local.size || "medium";

		return (
			<button
				{...others}
				disabled={local.disabled}
				aria-disabled={local.disabledFocusable}
				class={[local.class, ...classNames].filter(Boolean).join(" ")}
			>
				<Show when={local.icon && iconPosition() === "before"} keyed={false}>
					<span
						class={`${buttonStyles.icon} ${buttonStyles.iconBefore} ${
							size() === "large" ? buttonStyles.largeIcon : ""
						}`}
					>
						{local.icon}
					</span>
				</Show>

				<Show when={local.children} keyed={false}>
					{local.children}
				</Show>

				<Show when={local.icon && iconPosition() === "after"} keyed={false}>
					<span
						class={`${buttonStyles.icon} ${buttonStyles.iconAfter} ${
							size() === "large" ? buttonStyles.largeIcon : ""
						}`}
					>
						{local.icon}
					</span>
				</Show>
			</button>
		);
	};
}
