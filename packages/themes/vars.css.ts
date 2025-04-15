import { createGlobalTheme } from "@vanilla-extract/css";

export const globalVars = createGlobalTheme(":root", {
  font: {
    size: {
      base: {
        "100": "10px",
        "200": "12px",
        "300": "14px",
        "400": "16px",
        "500": "20px",
        "600": "24px",
      },
      hero: {
        "700": "28px",
        "800": "32px",
        "900": "40px",
        "1000": "68px",
      },
    },
    lineHeight: {
      base: {
        "100": "14px",
        "200": "16px",
        "300": "20px",
        "400": "22px",
        "500": "28px",
        "600": "32px",
      },
      hero: {
        "700": "36px",
        "800": "40px",
        "900": "52px",
        "1000": "92px",
      },
    },
    family: {
      base: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
      monospace: 'Consolas, "Courier New", Courier, monospace',
      numeric:
        'Bahnschrift, "Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  border: {
    radius: {
      none: "0",
      small: "2px",
      medium: "4px",
      large: "6px",
      x: {
        large: "8px",
      },
      circular: "10000px",
    },
  },
  space: {
    horizontal: {
      none: "0",
      xxs: "2px",
      xs: "4px",
      s: { base: "8px", nudge: "6px" },
      m: "12px",
      l: "16px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
    },
    vertical: {
      none: "0",
      xxs: "2px",
      xs: "4px",
      s: { base: "8px", nudge: "6px" },
      m: "12px",
      l: "16px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
    },
  },
  stroke: {
    width: {
      thin: "1px",
      thick: "2px",
      thicker: "3px",
      thickest: "4px",
    },
  },
  motion: {
    duration: {
      ultra: {
        fast: "50ms",
        slow: "500ms",
      },
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      gentle: "250ms",
      slow: "300ms",
      slower: "400ms",
    },
    curve: {
      accelerate: {
        max: "cubic-bezier(0.9, 0.1, 1, 0.2)",
        mid: "cubic-bezier(1, 0, 1, 1)",
        min: "cubic-bezier(0.8, 0, 0.78, 1)",
      },
      decelerate: {
        max: "cubic-bezier(0.1, 0.9, 0.2, 1)",
        mid: "cubic-bezier(0, 0, 0, 1)",
        min: "cubic-bezier(0.33, 0, 0.1, 1)",
      },
      easy: {
        ease: {
          base: "cubic-bezier(0.33, 0, 0.67, 1)",
          max: "cubic-bezier(0.8, 0, 0.2, 1)",
        },
      },
      linear: "cubic-bezier(0, 0, 1, 1)",
    },
  },
});
