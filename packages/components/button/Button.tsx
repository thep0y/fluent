import { mergeProps, createMemo, children } from "solid-js";
import type { ButtonProps } from "./Button.types";
import { button } from "./Button.css";

const Button = (props: ButtonProps) => {
  const merged = mergeProps({ type: "button" }, props);

  const disabled = createMemo(
    () => merged.isLoading || merged.disabled || merged.disabledFocusable,
  );
  const iconOnly = createMemo(() => !!merged.icon && !merged.children);

  // 构建类名列表
  const classList = () => {
    const classes = {
      [button.base]: true,
      [merged.class || ""]: !!merged.class,
      [button.disabled]: disabled(),
      [button.iconOnly.base]: iconOnly(),
    };

    // 添加外观样式
    if (merged.appearance && button.appearance[merged.appearance]) {
      classes[button.appearance[merged.appearance]] = true;
    }

    // 添加尺寸样式
    if (merged.size && button.size[merged.size]) {
      classes[button.size[merged.size]] = true;

      // 添加尺寸特定的图标样式
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

    // 添加形状样式
    if (merged.shape && button.shape[merged.shape]) {
      classes[button.shape[merged.shape]] = true;
    }

    return classes;
  };

  // 构建内容
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
