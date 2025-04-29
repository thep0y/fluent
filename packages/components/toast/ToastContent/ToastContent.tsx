import {
  createEffect,
  createSignal,
  createUniqueId,
  mergeProps,
  on,
  onCleanup,
  Show,
  type Component,
} from "solid-js";
import { VsClose } from "solid-icons/vs";

import { usePausableTimeout } from "~/hooks";

import { Button } from "~/components/button";

import { ToastIcon } from "../ToastIcon";
import type {
  ToastContentProps,
  ToastPosition,
  ToastType,
} from "./ToastContent.types";
import { useToast } from "../ToastContext/ToastContext";
import * as styles from "./ToastContent.css";
import { toastMaxWidth } from "./ToastContent.css";

/**
 * Toast content component - Renders toast content including icon, message and action buttons
 */
const ToastContent: Component<ToastContentProps> = (props) => {
  const { removeToast } = useToast();

  const merged = mergeProps(
    {
      id: createUniqueId(),
      duration: 3000,
      position: "top" as ToastPosition,
      type: "info" as ToastType,
      closable: true,
      maxWidth: 400,
    },
    props,
  );

  const [visible, setVisible] = createSignal(true);
  const [exiting, setExiting] = createSignal(false);

  // Close Toast with animation
  const close = () => {
    setExiting(true);
    // Wait for animation to complete before removing
    const id = setTimeout(() => {
      setVisible(false);
      merged.onClose?.();
      clearTimer();
      removeToast(merged.position, merged.id);
      clearTimeout(id);
    }, 300); // Matches CSS animation duration
  };

  const {
    start: startTimer,
    pause: pauseTimer,
    resume: resumeTimer,
    clear: clearTimer,
  } = usePausableTimeout(close, merged.duration);

  // Auto-close timer
  createEffect(
    on([visible, () => merged.duration], ([v, duration]) => {
      if (v && duration > 0) {
        startTimer();
      }
      return () => {
        clearTimer();
      };
    }),
  );

  // Clean up timer when component unmounts
  onCleanup(() => {
    clearTimer();
  });

  const handleMouseEnter = () => {
    pauseTimer();
    merged.onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    resumeTimer();
    merged.onMouseLeave?.();
  };

  const classList = () => ({
    [styles.toast]: true,
    [getPositionClass(merged.position)]: true,
    [getExitingClass(merged.position)]: exiting(),
  });

  return (
    <Show when={visible()}>
      <div
        classList={classList()}
        style={{
          ...merged.style,
          "z-index": merged.zIndex,
          [toastMaxWidth]:
            typeof merged.maxWidth === "number"
              ? `${merged.maxWidth}px`
              : merged.maxWidth,
        }}
        role="alert"
        aria-live="assertive"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div class={`${styles.toastContent} ${getTypeClass(merged.type)}`}>
          <div class={styles.toastIconMessage}>
            {merged.icon || <ToastIcon type={merged.type} />}
            <span class={styles.toastMessage}>{merged.message}</span>
          </div>
          <div class={styles.toastActions}>
            {merged.action}
            {merged.closable && (
              <Button
                onClick={close}
                appearance="subtle"
                size="small"
                icon={<VsClose />}
              />
            )}
          </div>
        </div>
      </div>
    </Show>
  );
};

// Helper function to get position-based style class
const getPositionClass = (position: ToastPosition) => {
  switch (position) {
    case "top":
      return styles.toastTop;
    case "top-left":
      return styles.toastTopLeft;
    case "top-right":
      return styles.toastTopRight;
    case "bottom":
      return styles.toastBottom;
    case "bottom-left":
      return styles.toastBottomLeft;
    case "bottom-right":
      return styles.toastBottomRight;
    default:
      return styles.toastTop;
  }
};

// Helper function to get position-based exit animation class
const getExitingClass = (position: ToastPosition) => {
  switch (position) {
    case "top":
      return `${styles.toastExiting} ${styles.toastTopExiting}`;
    case "top-left":
      return `${styles.toastExiting} ${styles.toastTopLeftExiting}`;
    case "top-right":
      return `${styles.toastExiting} ${styles.toastTopRightExiting}`;
    case "bottom":
      return `${styles.toastExiting} ${styles.toastBottomExiting}`;
    case "bottom-left":
      return `${styles.toastExiting} ${styles.toastBottomLeftExiting}`;
    case "bottom-right":
      return `${styles.toastExiting} ${styles.toastBottomRightExiting}`;
    default:
      return `${styles.toastExiting} ${styles.toastTopExiting}`;
  }
};

// Helper function to get type-based style class
const getTypeClass = (type: ToastType) => {
  switch (type) {
    case "info":
      return styles.toastInfo;
    case "success":
      return styles.toastSuccess;
    case "warning":
      return styles.toastWarning;
    case "error":
      return styles.toastError;
    default:
      return styles.toastInfo;
  }
};

export default ToastContent;
