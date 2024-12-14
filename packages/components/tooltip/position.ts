import type { PositioningShorthand } from ".";

export const calculatePosition = (
  triggerElement: HTMLElement,
  tooltipElement: HTMLElement,
  positioning: PositioningShorthand,
) => {
  const triggerRect = triggerElement.firstElementChild!.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  let top = 0;
  let left = 0;

  switch (positioning) {
    case "above":
      top = triggerRect.top - tooltipRect.height - 8; // 8px gap
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      break;
    case "above-start":
      top = triggerRect.top - tooltipRect.height - 8;
      left = triggerRect.left;
      break;
    case "above-end":
      top = triggerRect.top - tooltipRect.height - 8;
      left = triggerRect.right - tooltipRect.width;
      break;
    case "below":
      top = triggerRect.bottom + 8;
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      break;
    case "below-start":
      top = triggerRect.bottom + 8;
      left = triggerRect.left;
      break;
    case "below-end":
      top = triggerRect.bottom + 8;
      left = triggerRect.right - tooltipRect.width;
      break;
    case "before":
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
      left = triggerRect.left - tooltipRect.width - 8;
      break;
    case "before-top":
      top = triggerRect.top;
      left = triggerRect.left - tooltipRect.width - 8;
      break;
    case "before-bottom":
      top = triggerRect.bottom - tooltipRect.height;
      left = triggerRect.left - tooltipRect.width - 8;
      break;
    case "after":
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
      left = triggerRect.right + 8;
      break;
    case "after-top":
      top = triggerRect.top;
      left = triggerRect.right + 8;
      break;
    case "after-bottom":
      top = triggerRect.bottom - tooltipRect.height;
      left = triggerRect.right + 8;
      break;
  }

  // Ensure tooltip stays within viewport
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  left = Math.max(10, Math.min(left, viewportWidth - tooltipRect.width - 10));
  top = Math.max(10, Math.min(top, viewportHeight - tooltipRect.height - 10));

  return { top, left };
};
