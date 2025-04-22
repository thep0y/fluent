import type { Component } from "solid-js";
import { Portal } from "solid-js/web";
import type { ToastContainerProps } from "./ToastContainer.types";
import { toastContainerStyle } from "./ToastContainer.css";

/**
 * Toast container component - Manages toast position and animation effects
 */
const ToastContainer: Component<ToastContainerProps> = (props) => {
  return (
    <Portal
      ref={(el) => {
        el.classList.add(toastContainerStyle.base);
        el.classList.add(toastContainerStyle.position[props.position]);
      }}
    >
      {props.children}
    </Portal>
  );
};

export default ToastContainer;
