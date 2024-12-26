import type { PositioningShorthand } from ".";

const CONSTANTS = {
  ARROW_OFFSET: 4.242, // Offset for the arrow to ensure it points correctly
  TOOLTIP_OFFSET: 8, // Distance between the tooltip and the trigger element
  HIDDEN_POSITION: -9999, // Position used to hide elements by moving them off-screen
} as const;

export interface Offset {
  top: number;
  left: number;
}

export interface OffsetNullable {
  top?: number;
  left?: number;
  right?: number;
}

// Helper functions to calculate center positions
const calculateCenter = {
  vertical: (trigger: DOMRect, tooltip: DOMRect): number =>
    trigger.top + (trigger.height - tooltip.height) / 2,

  horizontal: (trigger: DOMRect, tooltip: DOMRect): number =>
    trigger.left + (trigger.width - tooltip.width) / 2,

  arrowVertical: (tooltipHeight: number): number =>
    tooltipHeight / 2 - CONSTANTS.ARROW_OFFSET,

  arrowHorizontal: (tooltipWidth: number): number =>
    tooltipWidth / 2 - CONSTANTS.ARROW_OFFSET,
};

// Calculate the position of the arrow based on the tooltip's dimensions and positioning
const calculateArrowOffset = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  positioning: PositioningShorthand,
): OffsetNullable => {
  const verticalCenter = calculateCenter.arrowVertical(tooltipRect.height);
  const horizontalCenter = calculateCenter.arrowHorizontal(tooltipRect.width);
  const triggerMidPoint = triggerRect.width / 2 - CONSTANTS.ARROW_OFFSET;

  const positionMap: Record<PositioningShorthand, OffsetNullable> = {
    above: { left: horizontalCenter },
    "above-start": { left: triggerMidPoint },
    "above-end": { right: triggerMidPoint },
    below: { left: horizontalCenter },
    "below-start": { left: triggerMidPoint },
    "below-end": { right: triggerMidPoint },
    before: { top: verticalCenter },
    "before-top": { top: verticalCenter },
    "before-bottom": { top: verticalCenter },
    after: { top: verticalCenter },
    "after-top": { top: verticalCenter },
    "after-bottom": { top: verticalCenter },
  };

  return positionMap[positioning];
};

// Calculate the offset for the tooltip based on the trigger's and tooltip's dimensions and positioning
const calculateTooltipOffset = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  positioning: PositioningShorthand,
): Offset => {
  const verticalCenter = calculateCenter.vertical(triggerRect, tooltipRect);
  const horizontalCenter = calculateCenter.horizontal(triggerRect, tooltipRect);

  const positionMap: Record<PositioningShorthand, Offset> = {
    above: {
      top:
        triggerRect.top -
        tooltipRect.height -
        CONSTANTS.TOOLTIP_OFFSET -
        tooltipRect.top,
      left: horizontalCenter - tooltipRect.left,
    },
    "above-start": {
      top:
        triggerRect.top -
        tooltipRect.height -
        CONSTANTS.TOOLTIP_OFFSET -
        tooltipRect.top,
      left: triggerRect.left - tooltipRect.left,
    },
    "above-end": {
      top:
        triggerRect.top -
        tooltipRect.height -
        CONSTANTS.TOOLTIP_OFFSET -
        tooltipRect.top,
      left: triggerRect.right - tooltipRect.width - tooltipRect.left,
    },
    below: {
      top: triggerRect.bottom + CONSTANTS.TOOLTIP_OFFSET - tooltipRect.top,
      left: horizontalCenter - tooltipRect.left,
    },
    "below-start": {
      top: triggerRect.bottom + CONSTANTS.TOOLTIP_OFFSET - tooltipRect.top,
      left: triggerRect.left - tooltipRect.left,
    },
    "below-end": {
      top: triggerRect.bottom + CONSTANTS.TOOLTIP_OFFSET - tooltipRect.top,
      left: triggerRect.right - tooltipRect.width - tooltipRect.left,
    },
    before: {
      top: verticalCenter - tooltipRect.top,
      left:
        triggerRect.left -
        tooltipRect.width -
        CONSTANTS.TOOLTIP_OFFSET -
        tooltipRect.left,
    },
    "before-top": {
      top: triggerRect.top - tooltipRect.top,
      left:
        triggerRect.left -
        tooltipRect.width -
        CONSTANTS.TOOLTIP_OFFSET -
        tooltipRect.left,
    },
    "before-bottom": {
      top: triggerRect.bottom - tooltipRect.height - tooltipRect.top,
      left:
        triggerRect.left -
        tooltipRect.width -
        CONSTANTS.TOOLTIP_OFFSET -
        tooltipRect.left,
    },
    after: {
      top: verticalCenter - tooltipRect.top,
      left: triggerRect.right + CONSTANTS.TOOLTIP_OFFSET - tooltipRect.left,
    },
    "after-top": {
      top: triggerRect.top - tooltipRect.top,
      left: triggerRect.right + CONSTANTS.TOOLTIP_OFFSET - tooltipRect.left,
    },
    "after-bottom": {
      top: triggerRect.bottom - tooltipRect.height - tooltipRect.top,
      left: triggerRect.right + CONSTANTS.TOOLTIP_OFFSET - tooltipRect.left,
    },
  };

  return positionMap[positioning];
};

// Check if an element is visible by verifying its width and height
const isElementVisible = (element: HTMLElement): boolean =>
  element.offsetWidth > 0 && element.offsetHeight > 0;

// Main function to calculate the position of the tooltip and its arrow
export const calculateOffsets = (
  triggerElement: HTMLElement,
  tooltipElement: HTMLElement,
  positioning: PositioningShorthand,
): { tooltip: Offset; arrow: OffsetNullable } => {
  if (!isElementVisible(tooltipElement)) {
    return {
      tooltip: {
        top: CONSTANTS.HIDDEN_POSITION,
        left: CONSTANTS.HIDDEN_POSITION,
      },
      arrow: { top: 0, left: 0 },
    };
  }

  const triggerRect = triggerElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  return {
    tooltip: calculateTooltipOffset(triggerRect, tooltipRect, positioning),
    arrow: calculateArrowOffset(triggerRect, tooltipRect, positioning),
  };
};
