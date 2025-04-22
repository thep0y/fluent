import type { Component } from "solid-js";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillWarning,
} from "solid-icons/ai";
import type { ToastIconProps } from "./ToastIcon.types";
import { toastIconStyle } from "./ToastIcon.css";

/**
 * Toast icon component - displays corresponding icon based on Toast type
 */
const ToastIcon: Component<ToastIconProps> = (props) => {
  const iconMap = {
    info: <AiFillInfoCircle />,
    success: <AiFillCheckCircle />,
    warning: <AiFillWarning />,
    error: <AiFillCloseCircle />,
  };

  return <span class={toastIconStyle[props.type]}>{iconMap[props.type]}</span>;
};

export default ToastIcon;
