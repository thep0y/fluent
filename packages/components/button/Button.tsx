import { mergeProps, createMemo, children } from "solid-js";
import type { ButtonProps } from "./Button.types";
import { button } from "./Button.css";

const Button = (props: ButtonProps) => {
  const merged = mergeProps({ type: "button" }, props);

  const disabled = createMemo(
    () => merged.isLoading || merged.disabled || merged.disabledFocusable,
  );
  const iconOnly = createMemo(() => !!merged.icon && !merged.children);

  // Build class list
  const classList = () => {
    const classes = {
      [button.base]: true,
      [merged.class || ""]: !!merged.class,
      [button.disabled]: disabled(),
      [button.iconOnly.base]: iconOnly(),
    };

    // Add appearance style
    if (merged.appearance && button.appearance[merged.appearance]) {
      classes[button.appearance[merged.appearance]] = true;
    }

    // Add size style
    if (merged.size && button.size[merged.size]) {
      classes[button.size[merged.size]] = true;

      // Add size-specific icon styles
      if (merged.icon) {
        if (merged.size === "small") {
          classes[button.icon.small] = true;
          if (iconOnly()) {
            classes[button.iconOnly.small] = true;
          }
        } else if (merged.size === "large") {
          classes[button.icon.large] = true;
          if (iconOnly()) {
            classes[button.iconOnly.large] = true;
          }
        }
      }
    }

    // Add shape style
    if (merged.shape && button.shape[merged.shape]) {
      classes[button.shape[merged.shape]] = true;
    }

    return classes;
  };

  // Build content
  const resolved = children(() => (
    <>
      {merged.iconPosition !== "after" && merged.icon && (
        <span class={`${button.icon.base} ${button.icon.before}`}>
          {merged.icon}
        </span>
      )}
      {!iconOnly() && merged.children}
      {merged.iconPosition === "after" && merged.icon && (
        <span class={`${button.icon.base} ${button.icon.after}`}>
          {merged.icon}
        </span>
      )}
    </>
  ));

  return (
    <button
      type={merged.type as ButtonProps["type"]}
      classList={classList()}
      style={merged.style}
      aria-disabled={merged.disabledFocusable}
      onClick={merged.onClick}
      disabled={disabled()}
    >
      {resolved()}
    </button>
  );
};

export default Button;
