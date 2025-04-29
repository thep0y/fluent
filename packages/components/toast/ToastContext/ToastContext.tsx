import {
  createContext,
  createUniqueId,
  For,
  Show,
  useContext,
  type JSX,
} from "solid-js";
import { createStore } from "solid-js/store";
import type {
  ToastContext as Context,
  ToastOptions,
} from "./ToastContext.types";
import ToastContent, {
  type ToastContentProps,
  type ToastPosition,
} from "../ToastContent";
import { ToastContainer } from "../ToastContainer";

const ToastContext = createContext<Context>();

export const ToastProvider = (props: {
  children?: JSX.Element;
  maxToasts?: number;
}) => {
  console.warn(
    "Warning: This Toast component is not ported from the react fluent component library. The APIs are different. If you need the official APIs, please implement the Toast component yourself.",
  );

  const MAX_TOASTS_PER_POSITION = props.maxToasts ?? 5;
  const [toasts, setToasts] = createStore<
    Record<ToastPosition, ToastContentProps[]>
  >({
    top: [],
    bottom: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-right": [],
  });

  // Add toast, remove the oldest one if exceeds max count
  const addToast = (toast: ToastContentProps) => {
    toast.id = toast.id ?? createUniqueId();
    const position = toast.position ?? "top";
    const isBottomPosition = position.startsWith("bottom");

    setToasts(position, (currentToasts) => {
      let newToasts = [...currentToasts];

      // Remove the oldest one if exceeds max count
      if (currentToasts.length >= MAX_TOASTS_PER_POSITION) {
        // Remove the oldest toast (for bottom positions remove the first one,
        // for top positions remove the last one)
        newToasts = isBottomPosition
          ? newToasts.slice(1)
          : newToasts.slice(0, -1);
      }

      // Add new toast based on position (for bottom positions add to the end,
      // for top positions add to the beginning)
      return isBottomPosition ? [...newToasts, toast] : [toast, ...newToasts];
    });

    return toast.id;
  };

  // Remove specified toast
  const removeToast = (position: ToastPosition, id: string) => {
    setToasts(position, (toasts) => toasts.filter((toast) => toast.id !== id));
  };

  // Update specified toast
  const updateToast = (
    position: ToastPosition,
    id: string,
    updatedToast: Partial<ToastContentProps>,
  ) => {
    setToasts(position, (toasts) =>
      toasts.map((toast) =>
        toast.id === id ? { ...toast, ...updatedToast } : toast,
      ),
    );
  };

  // Helper method: show success toast
  const success = (message: JSX.Element, options?: ToastOptions) => {
    return addToast({
      type: "success",
      message,
      ...options,
    } as ToastContentProps);
  };

  // Helper method: show error toast
  const error = (message: JSX.Element, options?: ToastOptions) => {
    return addToast({
      type: "error",
      message,
      ...options,
    } as ToastContentProps);
  };

  // Helper method: show warning toast
  const warning = (message: JSX.Element, options?: ToastOptions) => {
    return addToast({
      type: "warning",
      message,
      ...options,
    } as ToastContentProps);
  };

  // Helper method: show info toast
  const info = (message: JSX.Element, options?: ToastOptions) => {
    return addToast({
      type: "info",
      message,
      ...options,
    } as ToastContentProps);
  };

  // Render toast container for specified position
  const renderToastContainer = (position: ToastPosition) => {
    return (
      <Show when={toasts[position].length > 0}>
        <ToastContainer position={position}>
          <For each={toasts[position]}>
            {(toast) => <ToastContent {...toast} />}
          </For>
        </ToastContainer>
      </Show>
    );
  };

  // All possible positions
  const positions: ToastPosition[] = [
    "top",
    "bottom",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        updateToast,
        success,
        error,
        warning,
        info,
      }}
    >
      {props.children}

      {positions.map((position) => renderToastContainer(position))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast: cannot find a ToastContext");
  }
  return context;
};
