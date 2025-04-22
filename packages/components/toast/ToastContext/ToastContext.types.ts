import type { JSX } from "solid-js/jsx-runtime";
import type { ToastPosition } from "../ToastContent";
import type { ToastContentProps } from "../ToastContent";

export type ToastOptions = Partial<Omit<ToastContentProps, "message" | "type">>;
export type ToastFunction = (
  message: JSX.Element,
  options?: ToastOptions,
) => string;

export interface ToastContext {
  addToast: (toast: ToastContentProps) => void;
  removeToast: (position: ToastPosition, id: string) => void;
  updateToast: (
    position: ToastPosition,
    id: string,
    toast: Partial<ToastContentProps>,
  ) => void;
  success: ToastFunction;
  error: ToastFunction;
  warning: ToastFunction;
  info: ToastFunction;
}
