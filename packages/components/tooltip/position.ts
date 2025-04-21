import type { PositioningShorthand } from ".";

const CONSTANTS = {
  ARROW_OFFSET: 4.242,
  TOOLTIP_OFFSET: 8,
  HIDDEN_POSITION: -9999,
  VIEWPORT_PADDING: 10, // Minimum padding from viewport edges
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

// Define opposite positions for flipping
const POSITION_MIRRORS: Record<PositioningShorthand, PositioningShorthand> = {
  above: "below",
  "above-start": "below-start",
  "above-end": "below-end",
  below: "above",
  "below-start": "above-start",
  "below-end": "above-end",
  before: "after",
  "before-top": "after-top",
  "before-bottom": "after-bottom",
  after: "before",
  "after-top": "before-top",
  "after-bottom": "before-bottom",
};

const calculateCenter = {
  vertical: (trigger: DOMRect, tooltip: DOMRect): number =>
    trigger.top + (trigger.height - tooltip.height) / 2,

  horizontal: (trigger: DOMRect, tooltip: DOMRect): number =>
    trigger.left + (trigger.width - tooltip.width) / 2,

  arrowVertical: (tooltipHeight: number): number =>
    // Absolute positioning relative to the content area of the parent element.
    // The tooltip has a 1px border, so 1 should be subtracted when calculating the arrow position.
    tooltipHeight / 2 - 1 - CONSTANTS.ARROW_OFFSET,

  arrowHorizontal: (tooltipWidth: number): number =>
    // Absolute positioning relative to the content area of the parent element.
    // The tooltip has a 1px border, so 1 should be subtracted when calculating the arrow position.
    tooltipWidth / 2 - 1 - CONSTANTS.ARROW_OFFSET,
};

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

const isElementVisible = (element: HTMLElement): boolean =>
  element.offsetWidth > 0 && element.offsetHeight > 0;

// Check if the tooltip fits within the viewport with the current positioning
const doesTooltipFitViewport = (
  tooltipRect: DOMRect,
  offset: Offset,
  positioning: PositioningShorthand,
): boolean => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const tooltipTop = tooltipRect.top + offset.top;
  const tooltipLeft = tooltipRect.left + offset.left;
  const tooltipRight = tooltipLeft + tooltipRect.width;
  const tooltipBottom = tooltipTop + tooltipRect.height;

  // Add padding to viewport edges
  const minDistance = CONSTANTS.VIEWPORT_PADDING;

  // Check if tooltip exceeds viewport boundaries
  const fitsVertically =
    tooltipTop >= minDistance && tooltipBottom <= viewportHeight - minDistance;
  const fitsHorizontally =
    tooltipLeft >= minDistance && tooltipRight <= viewportWidth - minDistance;

  // For vertical positions (above/below), primarily check vertical fit
  if (positioning.startsWith("above") || positioning.startsWith("below")) {
    return fitsVertically;
  }

  // For horizontal positions (before/after), primarily check horizontal fit
  if (positioning.startsWith("before") || positioning.startsWith("after")) {
    return fitsHorizontally;
  }

  return fitsVertically && fitsHorizontally;
};

// Main function to calculate the position of the tooltip and its arrow
export const calculateOffsets = (
  triggerElement: HTMLElement,
  tooltipElement: HTMLElement,
  positioning: PositioningShorthand,
): {
  tooltip: Offset;
  arrow: OffsetNullable;
  finalPositioning: PositioningShorthand;
} => {
  if (!isElementVisible(tooltipElement)) {
    return {
      tooltip: {
        top: CONSTANTS.HIDDEN_POSITION,
        left: CONSTANTS.HIDDEN_POSITION,
      },
      arrow: { top: 0, left: 0 },
      finalPositioning: positioning,
    };
  }

  const triggerRect = triggerElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();

  // Calculate initial position
  let finalPositioning = positioning;
  let tooltipOffset = calculateTooltipOffset(
    triggerRect,
    tooltipRect,
    positioning,
  );

  // Check if tooltip fits in the current position
  if (!doesTooltipFitViewport(tooltipRect, tooltipOffset, positioning)) {
    // Try the mirror position
    const mirrorPosition = POSITION_MIRRORS[positioning];
    const mirrorOffset = calculateTooltipOffset(
      triggerRect,
      tooltipRect,
      mirrorPosition,
    );

    // Use mirror position if it fits better
    if (doesTooltipFitViewport(tooltipRect, mirrorOffset, mirrorPosition)) {
      finalPositioning = mirrorPosition;
      tooltipOffset = mirrorOffset;
    }
  }

  const arrow = calculateArrowOffset(
    triggerRect,
    tooltipRect,
    finalPositioning,
  );

  return {
    tooltip: tooltipOffset,
    arrow,
    finalPositioning,
  };
};
