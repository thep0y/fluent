import type { PositioningShorthand } from ".";

export const calculatePosition = (
  triggerElement: HTMLElement,
  tooltipElement: HTMLElement,
  positioning: PositioningShorthand,
) => {
  const triggerRect = triggerElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  let top = 0;
  let left = 0;

  switch (positioning) {
    case "above":
      top = triggerRect.top - tooltipRect.height - 8; // 默认8px间距
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
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
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
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
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
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
      top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
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

    default:
      top = triggerRect.top - tooltipRect.height - 8;
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
  }

  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return {
    top: top - scrollTop,
    left: left - scrollLeft,
  };
};
