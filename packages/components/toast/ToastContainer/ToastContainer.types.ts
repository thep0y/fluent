import type { JSX } from "solid-js";
import type { ToastPosition } from "../ToastContent/ToastContent.types";

export interface ToastContainerProps {
  children: JSX.Element;
  position: ToastPosition;
}
