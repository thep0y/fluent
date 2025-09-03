import { createContext, useContext, createSignal, onCleanup } from "solid-js";
import type { JSX } from "solid-js";

import { useTimeout } from "~/hooks/useTimeout";

interface TooltipContextValue {
  currentTooltipId: () => string | null;
  showTooltip: (id: string, delay: number) => void;
  hideTooltip: (id: string, delay: number) => void;
  hideAllTooltips: () => void;
}

const TooltipContext = createContext<TooltipContextValue>();

export const TooltipProvider = (props: { children: JSX.Element }) => {
  const [currentTooltipId, setCurrentTooltipId] = createSignal<string | null>(
    null,
  );

  const [setCurrentTimeout, clearCurrentTimeout] = useTimeout();

  const showTooltip = (id: string, delay: number) => {
    clearCurrentTimeout();

    // 如果已有其他tooltip显示，立即隐藏
    const current = currentTooltipId();
    if (current && current !== id) {
      setCurrentTooltipId(null);
    }

    setCurrentTimeout(() => {
      setCurrentTooltipId(id);
    }, delay);
  };

  const hideTooltip = (id: string, delay: number) => {
    clearCurrentTimeout();

    // 只有当前显示的tooltip才能隐藏
    if (currentTooltipId() === id) {
      setCurrentTimeout(() => {
        setCurrentTooltipId(null);
      }, delay);
    }
  };

  const hideAllTooltips = () => {
    clearCurrentTimeout();
    setCurrentTooltipId(null);
  };

  onCleanup(() => {
    clearCurrentTimeout();
  });

  const contextValue: TooltipContextValue = {
    currentTooltipId,
    showTooltip,
    hideTooltip,
    hideAllTooltips,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      {props.children}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltipContext must be used within a TooltipProvider");
  }
  return context;
};
