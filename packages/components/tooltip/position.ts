import type { PositioningShorthand } from ".";

type Offset = { top: number; left: number };

const calculateOffset = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  positioning: string,
  offset: number,
): Offset => {
  const verticalCenter =
    triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
  const horizontalCenter =
    triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;

  const offsets: Record<string, () => Offset> = {
    above: () => ({
      top: triggerRect.top - tooltipRect.height - offset - tooltipRect.top,
      left: horizontalCenter - tooltipRect.left,
    }),
    "above-start": () => ({
      top: triggerRect.top - tooltipRect.height - offset - tooltipRect.top,
      left: triggerRect.left - tooltipRect.left,
    }),
    "above-end": () => ({
      top: triggerRect.top - tooltipRect.height - offset - tooltipRect.top,
      left: triggerRect.right - tooltipRect.width - tooltipRect.left,
    }),
    below: () => ({
      top: triggerRect.bottom + offset - tooltipRect.top,
      left: horizontalCenter - tooltipRect.left,
    }),
    "below-start": () => ({
      top: triggerRect.bottom + offset - tooltipRect.top,
      left: triggerRect.left - tooltipRect.left,
    }),
    "below-end": () => ({
      top: triggerRect.bottom + offset - tooltipRect.top,
      left: triggerRect.right - tooltipRect.width - tooltipRect.left,
    }),
    before: () => ({
      top: verticalCenter - tooltipRect.top,
      left: triggerRect.left - tooltipRect.width - offset - tooltipRect.left,
    }),
    "before-top": () => ({
      top: triggerRect.top - tooltipRect.top,
      left: triggerRect.left - tooltipRect.width - offset - tooltipRect.left,
    }),
    "before-bottom": () => ({
      top: triggerRect.bottom - tooltipRect.height - tooltipRect.top,
      left: triggerRect.left - tooltipRect.width - offset - tooltipRect.left,
    }),
    after: () => ({
      top: verticalCenter - tooltipRect.top,
      left: triggerRect.right + offset - tooltipRect.left,
    }),
    "after-top": () => ({
      top: triggerRect.top - tooltipRect.top,
      left: triggerRect.right + offset - tooltipRect.left,
    }),
    "after-bottom": () => ({
      top: triggerRect.bottom - tooltipRect.height - tooltipRect.top,
      left: triggerRect.right + offset - tooltipRect.left,
    }),
  };

  return (
    offsets[positioning]?.() ?? {
      top: triggerRect.top - tooltipRect.height - offset - tooltipRect.top,
      left: horizontalCenter - tooltipRect.left,
    }
  );
};

export const calculatePosition = (
  triggerElement: HTMLElement,
  tooltipElement: HTMLElement,
  positioning: PositioningShorthand,
): Offset => {
  if (tooltipElement.offsetWidth === 0 || tooltipElement.offsetHeight === 0) {
    // 如果 tooltip 尚未渲染，返回一个默认位置或不可见位置
    return { top: -9999, left: -9999 };
  }

  const triggerRect = triggerElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  return calculateOffset(triggerRect, tooltipRect, positioning, 8);
};
