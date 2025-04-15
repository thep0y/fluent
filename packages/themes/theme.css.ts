import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  color: {
    neutral: {
      foreground: {
        "1": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
          static: null,
        },
        "2": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
          brand: {
            hover: null,
            pressed: null,
            selected: null,
          },
          link: {
            base: null,
            hover: null,
            pressed: null,
            selected: null,
          },
        },
        "3": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
          brand: {
            hover: null,
            pressed: null,
            selected: null,
          },
        },
        "4": null,
        disabled: null,
        inverted: {
          "2": null,
          base: null,
          hover: null,
          pressed: null,
          selected: null,
          link: {
            base: null,
            hover: null,
            pressed: null,
            selected: null,
          },
        },
        static: {
          inverted: null,
        },
        onBrand: null,
      },
      background: {
        "1": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        "2": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        "3": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        "4": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        "5": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        "6": null,
        inverted: {
          base: null,
          disabled: null,
        },
        static: null,
        alpha: {
          "2": null,
          base: null,
        },
        disabled: null,
      },
      stencil: {
        "1": {
          base: null,
          alpha: null,
        },
        "2": {
          base: null,
          alpha: null,
        },
      },
      card: {
        background: {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
          disabled: null,
        },
      },
      stroke: {
        "1": {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        "2": null,
        "3": null,
        accessible: {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        subtle: null,
        onBrand: {
          "2": {
            base: null,
            hover: null,
            pressed: null,
            selected: null,
          },
          base: null,
        },
        disabled: null,
        inverted: {
          disabled: null,
        },
        alpha: {
          "2": null,
          base: null,
        },
      },
      shadow: {
        ambient: {
          base: null,
          lighter: null,
          darker: null,
        },
        key: {
          base: null,
          lighter: null,
          darker: null,
        },
      },
    },
    brand: {
      foreground: {
        "1": null,
        "2": {
          base: null,
          hover: null,
          pressed: null,
        },
        link: {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
        inverted: {
          base: null,
          hover: null,
          pressed: null,
        },
        onLight: {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
      },
      background: {
        "2": {
          base: null,
          hover: null,
          pressed: null,
        },
        "3": {
          static: null,
        },
        "4": {
          static: null,
        },
        base: null,
        hover: null,
        pressed: null,
        selected: null,
        static: null,
        inverted: {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
      },
      stroke: {
        "1": null,
        "2": {
          base: null,
          hover: null,
          pressed: null,
          contrast: null,
        },
      },
      shadow: {
        ambient: null,
        key: null,
      },
    },
    compound: {
      brand: {
        foreground: {
          "1": {
            base: null,
            hover: null,
            pressed: null,
          },
        },
        background: {
          base: null,
          hover: null,
          pressed: null,
        },
        stroke: {
          base: null,
          hover: null,
          pressed: null,
        },
      },
    },
    subtle: {
      background: {
        base: null,
        hover: null,
        pressed: null,
        selected: null,
        light: {
          alpha: {
            hover: null,
            pressed: null,
            selected: null,
          },
        },
        inverted: {
          base: null,
          hover: null,
          pressed: null,
          selected: null,
        },
      },
    },
    transparent: {
      background: {
        base: null,
        hover: null,
        pressed: null,
        selected: null,
      },
      stroke: {
        base: null,
        interactive: null,
        disabled: null,
      },
    },
    background: {
      overlay: null,
    },
    scrollbar: {
      overlay: null,
    },
    stroke: {
      focus: {
        "1": null,
        "2": null,
      },
    },
    palette: {
      red: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
          inverted: null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      green: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
          inverted: null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      dark: {
        orange: {
          background: {
            "1": null,
            "2": null,
            "3": null,
          },
          foreground: {
            "1": null,
            "2": null,
            "3": null,
          },
          border: {
            "1": null,
            "2": null,
            active: null,
          },
        },
        red: {
          background: {
            "2": null,
          },
          foreground: {
            "2": null,
          },
          border: {
            active: null,
          },
        },
        green: {
          background: {
            "2": null,
          },
          foreground: {
            "2": null,
          },
          border: {
            active: null,
          },
        },
      },
      yellow: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
          inverted: null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      berry: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      light: {
        green: {
          background: {
            "1": null,
            "2": null,
            "3": null,
          },
          foreground: {
            "1": null,
            "2": null,
            "3": null,
          },
          border: {
            "1": null,
            "2": null,
            active: null,
          },
        },
        teal: {
          background: {
            "2": null,
          },
          foreground: {
            "2": null,
          },
          border: {
            active: null,
          },
        },
      },
      marigold: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      cranberry: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      pumpkin: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      peach: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      gold: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      brass: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      brown: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      forest: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      seafoam: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      teal: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      steel: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      blue: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      royal: {
        blue: {
          background: {
            "2": null,
          },
          foreground: {
            "2": null,
          },
          border: {
            active: null,
          },
        },
      },
      cornflower: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      navy: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      lavender: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      purple: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      grape: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      lilac: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      pink: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      magenta: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      plum: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      beige: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      mink: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      platinum: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
      anchor: {
        background: {
          "2": null,
        },
        foreground: {
          "2": null,
        },
        border: {
          active: null,
        },
      },
    },
    status: {
      success: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
          inverted: null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      warning: {
        background: {
          "1": null,
          "2": null,
          "3": null,
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
          inverted: null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
      danger: {
        background: {
          "1": null,
          "2": null,
          "3": {
            base: null,
            hover: null,
            pressed: null,
          },
        },
        foreground: {
          "1": null,
          "2": null,
          "3": null,
          inverted: null,
        },
        border: {
          "1": null,
          "2": null,
          active: null,
        },
      },
    },
  },
  shadow: {
    "2": {
      base: null,
      brand: null,
    },
    "4": {
      base: null,
      brand: null,
    },
    "8": {
      base: null,
      brand: null,
    },
    "16": {
      base: null,
      brand: null,
    },
    "28": {
      base: null,
      brand: null,
    },
    "64": {
      base: null,
      brand: null,
    },
  },
});

export const lightTheme = createTheme(themeContract, {
  color: {
    neutral: {
      foreground: {
        "1": {
          base: "#242424",
          hover: "#242424",
          pressed: "#242424",
          selected: "#242424",
          static: "#242424",
        },
        "2": {
          base: "#424242",
          hover: "#242424",
          pressed: "#242424",
          selected: "#242424",
          brand: {
            hover: "#0f6cbd",
            pressed: "#115ea3",
            selected: "#0f6cbd",
          },
          link: {
            base: "#424242",
            hover: "#242424",
            pressed: "#242424",
            selected: "#242424",
          },
        },
        "3": {
          base: "#616161",
          hover: "#424242",
          pressed: "#424242",
          selected: "#424242",
          brand: {
            hover: "#0f6cbd",
            pressed: "#115ea3",
            selected: "#0f6cbd",
          },
        },
        "4": "#707070",
        disabled: "#bdbdbd",
        inverted: {
          "2": "#ffffff",
          base: "#ffffff",
          hover: "#ffffff",
          pressed: "#ffffff",
          selected: "#ffffff",
          link: {
            base: "#ffffff",
            hover: "#ffffff",
            pressed: "#ffffff",
            selected: "#ffffff",
          },
        },
        static: {
          inverted: "#ffffff",
        },
        onBrand: "#ffffff",
      },
      background: {
        "1": {
          base: "#ffffff",
          hover: "#f5f5f5",
          pressed: "#e0e0e0",
          selected: "#ebebeb",
        },
        "2": {
          base: "#fafafa",
          hover: "#f0f0f0",
          pressed: "#dbdbdb",
          selected: "#e6e6e6",
        },
        "3": {
          base: "#f5f5f5",
          hover: "#ebebeb",
          pressed: "#d6d6d6",
          selected: "#e0e0e0",
        },
        "4": {
          base: "#f0f0f0",
          hover: "#fafafa",
          pressed: "#f5f5f5",
          selected: "#ffffff",
        },
        "5": {
          base: "#ebebeb",
          hover: "#f5f5f5",
          pressed: "#f0f0f0",
          selected: "#fafafa",
        },
        "6": "#e6e6e6",
        inverted: {
          base: "#292929",
          disabled: "rgba(255, 255, 255, 0.1)",
        },
        static: "#333333",
        alpha: {
          "2": "rgba(255, 255, 255, 0.8)",
          base: "rgba(255, 255, 255, 0.5)",
        },
        disabled: "#f0f0f0",
      },
      stencil: {
        "1": {
          base: "#e6e6e6",
          alpha: "rgba(0, 0, 0, 0.1)",
        },
        "2": {
          base: "#fafafa",
          alpha: "rgba(0, 0, 0, 0.05)",
        },
      },
      card: {
        background: {
          base: "#fafafa",
          hover: "#ffffff",
          pressed: "#f5f5f5",
          selected: "#ebebeb",
          disabled: "#f0f0f0",
        },
      },
      stroke: {
        "1": {
          base: "#d1d1d1",
          hover: "#c7c7c7",
          pressed: "#b3b3b3",
          selected: "#bdbdbd",
        },
        "2": "#e0e0e0",
        "3": "#f0f0f0",
        accessible: {
          base: "#616161",
          hover: "#575757",
          pressed: "#4d4d4d",
          selected: "#0f6cbd",
        },
        subtle: "#e0e0e0",
        onBrand: {
          "2": {
            base: "#ffffff",
            hover: "#ffffff",
            pressed: "#ffffff",
            selected: "#ffffff",
          },
          base: "#ffffff",
        },
        disabled: "#e0e0e0",
        inverted: {
          disabled: "rgba(255, 255, 255, 0.4)",
        },
        alpha: {
          "2": "rgba(255, 255, 255, 0.2)",
          base: "rgba(0, 0, 0, 0.05)",
        },
      },
      shadow: {
        ambient: {
          base: "rgba(0, 0, 0, 0.12)",
          lighter: "rgba(0, 0, 0, 0.06)",
          darker: "rgba(0, 0, 0, 0.2)",
        },
        key: {
          base: "rgba(0, 0, 0, 0.14)",
          lighter: "rgba(0, 0, 0, 0.07)",
          darker: "rgba(0, 0, 0, 0.24)",
        },
      },
    },
    brand: {
      foreground: {
        "1": "#0f6cbd",
        "2": {
          base: "#115ea3",
          hover: "#0f548c",
          pressed: "#0a2e4a",
        },
        link: {
          base: "#115ea3",
          hover: "#0f548c",
          pressed: "#0c3b5e",
          selected: "#115ea3",
        },
        inverted: {
          base: "#479ef5",
          hover: "#62abf5",
          pressed: "#479ef5",
        },
        onLight: {
          base: "#0f6cbd",
          hover: "#115ea3",
          pressed: "#0e4775",
          selected: "#0f548c",
        },
      },
      background: {
        "2": {
          base: "#ebf3fc",
          hover: "#cfe4fa",
          pressed: "#96c6fa",
        },
        "3": {
          static: "#0f548c",
        },
        "4": {
          static: "#0c3b5e",
        },
        base: "#0f6cbd",
        hover: "#115ea3",
        pressed: "#0c3b5e",
        selected: "#0f548c",
        static: "#0f6cbd",
        inverted: {
          base: "#ffffff",
          hover: "#ebf3fc",
          pressed: "#b4d6fa",
          selected: "#cfe4fa",
        },
      },
      stroke: {
        "1": "#0f6cbd",
        "2": {
          base: "#b4d6fa",
          hover: "#77b7f7",
          pressed: "#0f6cbd",
          contrast: "#b4d6fa",
        },
      },
      shadow: {
        ambient: "rgba(0, 0, 0, 0.3)",
        key: "rgba(0, 0, 0, 0.25)",
      },
    },
    compound: {
      brand: {
        foreground: {
          "1": {
            base: "#0f6cbd",
            hover: "#115ea3",
            pressed: "#0f548c",
          },
        },
        background: {
          base: "#0f6cbd",
          hover: "#115ea3",
          pressed: "#0f548c",
        },
        stroke: {
          base: "#0f6cbd",
          hover: "#115ea3",
          pressed: "#0f548c",
        },
      },
    },
    subtle: {
      background: {
        base: "transparent",
        hover: "#f5f5f5",
        pressed: "#e0e0e0",
        selected: "#ebebeb",
        light: {
          alpha: {
            hover: "rgba(255, 255, 255, 0.7)",
            pressed: "rgba(255, 255, 255, 0.5)",
            selected: "transparent",
          },
        },
        inverted: {
          base: "transparent",
          hover: "rgba(0, 0, 0, 0.1)",
          pressed: "rgba(0, 0, 0, 0.3)",
          selected: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
    transparent: {
      background: {
        base: "transparent",
        hover: "transparent",
        pressed: "transparent",
        selected: "transparent",
      },
      stroke: {
        base: "transparent",
        interactive: "transparent",
        disabled: "transparent",
      },
    },
    background: {
      overlay: "rgba(0, 0, 0, 0.4)",
    },
    scrollbar: {
      overlay: "rgba(0, 0, 0, 0.5)",
    },
    stroke: {
      focus: {
        "1": "#ffffff",
        "2": "#000000",
      },
    },
    palette: {
      red: {
        background: {
          "1": "#fdf6f6",
          "2": "#f1bbbc",
          "3": "#d13438",
        },
        foreground: {
          "1": "#bc2f32",
          "2": "#751d1f",
          "3": "#d13438",
          inverted: "#dc5e62",
        },
        border: {
          "1": "#f1bbbc",
          "2": "#d13438",
          active: "#d13438",
        },
      },
      green: {
        background: {
          "1": "#f1faf1",
          "2": "#9fd89f",
          "3": "#107c10",
        },
        foreground: {
          "1": "#0e700e",
          "2": "#094509",
          "3": "#107c10",
          inverted: "#359b35",
        },
        border: {
          "1": "#9fd89f",
          "2": "#107c10",
          active: "#107c10",
        },
      },
      dark: {
        orange: {
          background: {
            "1": "#fdf6f3",
            "2": "#f4bfab",
            "3": "#da3b01",
          },
          foreground: {
            "1": "#c43501",
            "2": "#7a2101",
            "3": "#da3b01",
          },
          border: {
            "1": "#f4bfab",
            "2": "#da3b01",
            active: "#da3b01",
          },
        },
        red: {
          background: {
            "2": "#d69ca5",
          },
          foreground: {
            "2": "#420610",
          },
          border: {
            active: "#750b1c",
          },
        },
        green: {
          background: {
            "2": "#9ad29a",
          },
          foreground: {
            "2": "#063b06",
          },
          border: {
            active: "#0b6a0b",
          },
        },
      },
      yellow: {
        background: {
          "1": "#fffef5",
          "2": "#fef7b2",
          "3": "#fde300",
        },
        foreground: {
          "1": "#817400",
          "2": "#817400",
          "3": "#fde300",
          inverted: "#fef7b2",
        },
        border: {
          "1": "#fef7b2",
          "2": "#fde300",
          active: "#fde300",
        },
      },
      berry: {
        background: {
          "1": "#fdf5fc",
          "2": "#edbbe7",
          "3": "#c239b3",
        },
        foreground: {
          "1": "#af33a1",
          "2": "#6d2064",
          "3": "#c239b3",
        },
        border: {
          "1": "#edbbe7",
          "2": "#c239b3",
          active: "#c239b3",
        },
      },
      light: {
        green: {
          background: {
            "1": "#f2fbf2",
            "2": "#a7e3a5",
            "3": "#13a10e",
          },
          foreground: {
            "1": "#11910d",
            "2": "#0b5a08",
            "3": "#13a10e",
          },
          border: {
            "1": "#a7e3a5",
            "2": "#13a10e",
            active: "#13a10e",
          },
        },
        teal: {
          background: {
            "2": "#a6e9ed",
          },
          foreground: {
            "2": "#00666d",
          },
          border: {
            active: "#00b7c3",
          },
        },
      },
      marigold: {
        background: {
          "1": "#fefbf4",
          "2": "#f9e2ae",
          "3": "#eaa300",
        },
        foreground: {
          "1": "#d39300",
          "2": "#835b00",
          "3": "#eaa300",
        },
        border: {
          "1": "#f9e2ae",
          "2": "#eaa300",
          active: "#eaa300",
        },
      },
      cranberry: {
        background: {
          "2": "#eeacb2",
        },
        foreground: {
          "2": "#6e0811",
        },
        border: {
          active: "#c50f1f",
        },
      },
      pumpkin: {
        background: {
          "2": "#efc4ad",
        },
        foreground: {
          "2": "#712d09",
        },
        border: {
          active: "#ca5010",
        },
      },
      peach: {
        background: {
          "2": "#ffddb3",
        },
        foreground: {
          "2": "#8f4e00",
        },
        border: {
          active: "#ff8c00",
        },
      },
      gold: {
        background: {
          "2": "#ecdfa5",
        },
        foreground: {
          "2": "#6c5700",
        },
        border: {
          active: "#c19c00",
        },
      },
      brass: {
        background: {
          "2": "#e0cea2",
        },
        foreground: {
          "2": "#553e06",
        },
        border: {
          active: "#986f0b",
        },
      },
      brown: {
        background: {
          "2": "#ddc3b0",
        },
        foreground: {
          "2": "#50301a",
        },
        border: {
          active: "#8e562e",
        },
      },
      forest: {
        background: {
          "2": "#bdd99b",
        },
        foreground: {
          "2": "#294903",
        },
        border: {
          active: "#498205",
        },
      },
      seafoam: {
        background: {
          "2": "#a8f0cd",
        },
        foreground: {
          "2": "#00723b",
        },
        border: {
          active: "#00cc6a",
        },
      },
      teal: {
        background: {
          "2": "#9bd9db",
        },
        foreground: {
          "2": "#02494c",
        },
        border: {
          active: "#038387",
        },
      },
      steel: {
        background: {
          "2": "#94c8d4",
        },
        foreground: {
          "2": "#00333f",
        },
        border: {
          active: "#005b70",
        },
      },
      blue: {
        background: {
          "2": "#a9d3f2",
        },
        foreground: {
          "2": "#004377",
        },
        border: {
          active: "#0078d4",
        },
      },
      royal: {
        blue: {
          background: {
            "2": "#9abfdc",
          },
          foreground: {
            "2": "#002c4e",
          },
          border: {
            active: "#004e8c",
          },
        },
      },
      cornflower: {
        background: {
          "2": "#c8d1fa",
        },
        foreground: {
          "2": "#2c3c85",
        },
        border: {
          active: "#4f6bed",
        },
      },
      navy: {
        background: {
          "2": "#a3b2e8",
        },
        foreground: {
          "2": "#001665",
        },
        border: {
          active: "#0027b4",
        },
      },
      lavender: {
        background: {
          "2": "#d2ccf8",
        },
        foreground: {
          "2": "#3f3682",
        },
        border: {
          active: "#7160e8",
        },
      },
      purple: {
        background: {
          "2": "#c6b1de",
        },
        foreground: {
          "2": "#341a51",
        },
        border: {
          active: "#5c2e91",
        },
      },
      grape: {
        background: {
          "2": "#d9a7e0",
        },
        foreground: {
          "2": "#4c0d55",
        },
        border: {
          active: "#881798",
        },
      },
      lilac: {
        background: {
          "2": "#e6bfed",
        },
        foreground: {
          "2": "#63276d",
        },
        border: {
          active: "#b146c2",
        },
      },
      pink: {
        background: {
          "2": "#f7c0e3",
        },
        foreground: {
          "2": "#80215d",
        },
        border: {
          active: "#e43ba6",
        },
      },
      magenta: {
        background: {
          "2": "#eca5d1",
        },
        foreground: {
          "2": "#6b0043",
        },
        border: {
          active: "#bf0077",
        },
      },
      plum: {
        background: {
          "2": "#d696c0",
        },
        foreground: {
          "2": "#43002b",
        },
        border: {
          active: "#77004d",
        },
      },
      beige: {
        background: {
          "2": "#d7d4d4",
        },
        foreground: {
          "2": "#444241",
        },
        border: {
          active: "#7a7574",
        },
      },
      mink: {
        background: {
          "2": "#cecccb",
        },
        foreground: {
          "2": "#343231",
        },
        border: {
          active: "#5d5a58",
        },
      },
      platinum: {
        background: {
          "2": "#cdd6d8",
        },
        foreground: {
          "2": "#3b4447",
        },
        border: {
          active: "#69797e",
        },
      },
      anchor: {
        background: {
          "2": "#bcc3c7",
        },
        foreground: {
          "2": "#202427",
        },
        border: {
          active: "#394146",
        },
      },
    },
    status: {
      success: {
        background: {
          "1": "#f1faf1",
          "2": "#9fd89f",
          "3": "#107c10",
        },
        foreground: {
          "1": "#0e700e",
          "2": "#094509",
          "3": "#107c10",
          inverted: "#54b054",
        },
        border: {
          "1": "#9fd89f",
          "2": "#107c10",
          active: "#107c10",
        },
      },
      warning: {
        background: {
          "1": "#fff9f5",
          "2": "#fdcfb4",
          "3": "#f7630c",
        },
        foreground: {
          "1": "#bc4b09",
          "2": "#8a3707",
          "3": "#bc4b09",
          inverted: "#faa06b",
        },
        border: {
          "1": "#fdcfb4",
          "2": "#bc4b09",
          active: "#f7630c",
        },
      },
      danger: {
        background: {
          "1": "#fdf3f4",
          "2": "#eeacb2",
          "3": {
            base: "#c50f1f",
            hover: "#b10e1c",
            pressed: "#960b18",
          },
        },
        foreground: {
          "1": "#b10e1c",
          "2": "#6e0811",
          "3": "#c50f1f",
          inverted: "#dc626d",
        },
        border: {
          "1": "#eeacb2",
          "2": "#c50f1f",
          active: "#c50f1f",
        },
      },
    },
  },
  shadow: {
    "2": {
      base: "0 0 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.25)",
    },
    "4": {
      base: "0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.25)",
    },
    "8": {
      base: "0 0 2px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.14)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.25)",
    },
    "16": {
      base: "0 0 2px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.14)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25)",
    },
    "28": {
      base: "0 0 8px rgba(0, 0, 0, 0.12), 0 14px 28px rgba(0, 0, 0, 0.14)",
      brand: "0 0 8px rgba(0, 0, 0, 0.3), 0 14px 28px rgba(0, 0, 0, 0.25)",
    },
    "64": {
      base: "0 0 8px rgba(0, 0, 0, 0.12), 0 32px 64px rgba(0, 0, 0, 0.14)",
      brand: "0 0 8px rgba(0, 0, 0, 0.3), 0 32px 64px rgba(0, 0, 0, 0.25)",
    },
  },
});

export const darkTheme = createTheme(themeContract, {
  color: {
    neutral: {
      foreground: {
        "1": {
          base: "#ffffff",
          hover: "#ffffff",
          pressed: "#ffffff",
          selected: "#ffffff",
          static: "#242424",
        },
        "2": {
          base: "#d6d6d6",
          hover: "#ffffff",
          pressed: "#ffffff",
          selected: "#ffffff",
          brand: {
            hover: "#479ef5",
            pressed: "#2886de",
            selected: "#479ef5",
          },
          link: {
            base: "#d6d6d6",
            hover: "#ffffff",
            pressed: "#ffffff",
            selected: "#ffffff",
          },
        },
        "3": {
          base: "#adadad",
          hover: "#d6d6d6",
          pressed: "#d6d6d6",
          selected: "#d6d6d6",
          brand: {
            hover: "#479ef5",
            pressed: "#2886de",
            selected: "#479ef5",
          },
        },
        "4": "#999999",
        disabled: "#5c5c5c",
        inverted: {
          "2": "#242424",
          base: "#242424",
          hover: "#242424",
          pressed: "#242424",
          selected: "#242424",
          link: {
            base: "#ffffff",
            hover: "#ffffff",
            pressed: "#ffffff",
            selected: "#ffffff",
          },
        },
        static: {
          inverted: "#ffffff",
        },
        onBrand: "#ffffff",
      },
      background: {
        "1": {
          base: "#292929",
          hover: "#3d3d3d",
          pressed: "#1f1f1f",
          selected: "#383838",
        },
        "2": {
          base: "#1f1f1f",
          hover: "#333333",
          pressed: "#141414",
          selected: "#2e2e2e",
        },
        "3": {
          base: "#141414",
          hover: "#292929",
          pressed: "#0a0a0a",
          selected: "#242424",
        },
        "4": {
          base: "#0a0a0a",
          hover: "#1f1f1f",
          pressed: "#000000",
          selected: "#1a1a1a",
        },
        "5": {
          base: "#000000",
          hover: "#141414",
          pressed: "#050505",
          selected: "#0f0f0f",
        },
        "6": "#333333",
        inverted: {
          base: "#ffffff",
          disabled: "rgba(255, 255, 255, 0.1)",
        },
        static: "#3d3d3d",
        alpha: {
          "2": "rgba(31, 31, 31, 0.7)",
          base: "rgba(26, 26, 26, 0.5)",
        },
        disabled: "#141414",
      },
      stencil: {
        "1": {
          base: "#575757",
          alpha: "rgba(255, 255, 255, 0.1)",
        },
        "2": {
          base: "#333333",
          alpha: "rgba(255, 255, 255, 0.05)",
        },
      },
      card: {
        background: {
          base: "#333333",
          hover: "#3d3d3d",
          pressed: "#2e2e2e",
          selected: "#383838",
          disabled: "#141414",
        },
      },
      stroke: {
        "1": {
          base: "#666666",
          hover: "#757575",
          pressed: "#6b6b6b",
          selected: "#707070",
        },
        "2": "#525252",
        "3": "#3d3d3d",
        accessible: {
          base: "#adadad",
          hover: "#bdbdbd",
          pressed: "#b3b3b3",
          selected: "#479ef5",
        },
        subtle: "#0a0a0a",
        onBrand: {
          "2": {
            base: "#ffffff",
            hover: "#ffffff",
            pressed: "#ffffff",
            selected: "#ffffff",
          },
          base: "#292929",
        },
        disabled: "#424242",
        inverted: {
          disabled: "rgba(255, 255, 255, 0.4)",
        },
        alpha: {
          "2": "rgba(255, 255, 255, 0.2)",
          base: "rgba(255, 255, 255, 0.1)",
        },
      },
      shadow: {
        ambient: {
          base: "rgba(0, 0, 0, 0.24)",
          lighter: "rgba(0, 0, 0, 0.12)",
          darker: "rgba(0, 0, 0, 0.4)",
        },
        key: {
          base: "rgba(0, 0, 0, 0.28)",
          lighter: "rgba(0, 0, 0, 0.14)",
          darker: "rgba(0, 0, 0, 0.48)",
        },
      },
    },
    brand: {
      foreground: {
        "1": "#479ef5",
        "2": {
          base: "#62abf5",
          hover: "#96c6fa",
          pressed: "#ebf3fc",
        },
        link: {
          base: "#479ef5",
          hover: "#62abf5",
          pressed: "#2886de",
          selected: "#479ef5",
        },
        inverted: {
          base: "#0f6cbd",
          hover: "#115ea3",
          pressed: "#0f548c",
        },
        onLight: {
          base: "#0f6cbd",
          hover: "#115ea3",
          pressed: "#0e4775",
          selected: "#0f548c",
        },
      },
      background: {
        "2": {
          base: "#082338",
          hover: "#0c3b5e",
          pressed: "#061724",
        },
        "3": {
          static: "#0f548c",
        },
        "4": {
          static: "#0c3b5e",
        },
        base: "#115ea3",
        hover: "#0f6cbd",
        pressed: "#0c3b5e",
        selected: "#0f548c",
        static: "#0f6cbd",
        inverted: {
          base: "#ffffff",
          hover: "#ebf3fc",
          pressed: "#b4d6fa",
          selected: "#cfe4fa",
        },
      },
      stroke: {
        "1": "#479ef5",
        "2": {
          base: "#0e4775",
          hover: "#0e4775",
          pressed: "#0a2e4a",
          contrast: "#0e4775",
        },
      },
      shadow: {
        ambient: "rgba(0, 0, 0, 0.3)",
        key: "rgba(0, 0, 0, 0.25)",
      },
    },
    compound: {
      brand: {
        foreground: {
          "1": {
            base: "#479ef5",
            hover: "#62abf5",
            pressed: "#2886de",
          },
        },
        background: {
          base: "#479ef5",
          hover: "#62abf5",
          pressed: "#2886de",
        },
        stroke: {
          base: "#479ef5",
          hover: "#62abf5",
          pressed: "#2886de",
        },
      },
    },
    subtle: {
      background: {
        base: "transparent",
        hover: "#383838",
        pressed: "#2e2e2e",
        selected: "#333333",
        light: {
          alpha: {
            hover: "rgba(36, 36, 36, 0.8)",
            pressed: "rgba(36, 36, 36, 0.5)",
            selected: "transparent",
          },
        },
        inverted: {
          base: "transparent",
          hover: "rgba(0, 0, 0, 0.1)",
          pressed: "rgba(0, 0, 0, 0.3)",
          selected: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
    transparent: {
      background: {
        base: "transparent",
        hover: "transparent",
        pressed: "transparent",
        selected: "transparent",
      },
      stroke: {
        base: "transparent",
        interactive: "transparent",
        disabled: "transparent",
      },
    },
    background: {
      overlay: "rgba(0, 0, 0, 0.5)",
    },
    scrollbar: {
      overlay: "rgba(255, 255, 255, 0.6)",
    },
    stroke: {
      focus: {
        "1": "#000000",
        "2": "#ffffff",
      },
    },
    palette: {
      red: {
        background: {
          "1": "#3f1011",
          "2": "#751d1f",
          "3": "#d13438",
        },
        foreground: {
          "1": "#e37d80",
          "2": "#f1bbbc",
          "3": "#e37d80",
          inverted: "#d13438",
        },
        border: {
          "1": "#d13438",
          "2": "#e37d80",
          active: "#e37d80",
        },
      },
      green: {
        background: {
          "1": "#052505",
          "2": "#094509",
          "3": "#107c10",
        },
        foreground: {
          "1": "#54b054",
          "2": "#9fd89f",
          "3": "#9fd89f",
          inverted: "#107c10",
        },
        border: {
          "1": "#107c10",
          "2": "#9fd89f",
          active: "#54b054",
        },
      },
      dark: {
        orange: {
          background: {
            "1": "#411200",
            "2": "#7a2101",
            "3": "#da3b01",
          },
          foreground: {
            "1": "#e9835e",
            "2": "#f4bfab",
            "3": "#e9835e",
          },
          border: {
            "1": "#da3b01",
            "2": "#e9835e",
            active: "#e9835e",
          },
        },
        red: {
          background: {
            "2": "#590815",
          },
          foreground: {
            "2": "#d69ca5",
          },
          border: {
            active: "#ac4f5e",
          },
        },
        green: {
          background: {
            "2": "#063b06",
          },
          foreground: {
            "2": "#9ad29a",
          },
          border: {
            active: "#4da64d",
          },
        },
      },
      yellow: {
        background: {
          "1": "#4c4400",
          "2": "#817400",
          "3": "#fde300",
        },
        foreground: {
          "1": "#feee66",
          "2": "#fef7b2",
          "3": "#fdea3d",
          inverted: "#817400",
        },
        border: {
          "1": "#fde300",
          "2": "#fdea3d",
          active: "#feee66",
        },
      },
      berry: {
        background: {
          "1": "#3a1136",
          "2": "#6d2064",
          "3": "#c239b3",
        },
        foreground: {
          "1": "#da7ed0",
          "2": "#edbbe7",
          "3": "#d161c4",
        },
        border: {
          "1": "#c239b3",
          "2": "#d161c4",
          active: "#da7ed0",
        },
      },
      light: {
        green: {
          background: {
            "1": "#063004",
            "2": "#0b5a08",
            "3": "#13a10e",
          },
          foreground: {
            "1": "#5ec75a",
            "2": "#a7e3a5",
            "3": "#3db838",
          },
          border: {
            "1": "#13a10e",
            "2": "#3db838",
            active: "#5ec75a",
          },
        },
        teal: {
          background: {
            "2": "#00666d",
          },
          foreground: {
            "2": "#a6e9ed",
          },
          border: {
            active: "#58d3db",
          },
        },
      },
      marigold: {
        background: {
          "1": "#463100",
          "2": "#835b00",
          "3": "#eaa300",
        },
        foreground: {
          "1": "#f2c661",
          "2": "#f9e2ae",
          "3": "#efb839",
        },
        border: {
          "1": "#eaa300",
          "2": "#efb839",
          active: "#f2c661",
        },
      },
      cranberry: {
        background: {
          "2": "#6e0811",
        },
        foreground: {
          "2": "#eeacb2",
        },
        border: {
          active: "#dc626d",
        },
      },
      pumpkin: {
        background: {
          "2": "#712d09",
        },
        foreground: {
          "2": "#efc4ad",
        },
        border: {
          active: "#df8e64",
        },
      },
      peach: {
        background: {
          "2": "#8f4e00",
        },
        foreground: {
          "2": "#ffddb3",
        },
        border: {
          active: "#ffba66",
        },
      },
      gold: {
        background: {
          "2": "#6c5700",
        },
        foreground: {
          "2": "#ecdfa5",
        },
        border: {
          active: "#dac157",
        },
      },
      brass: {
        background: {
          "2": "#553e06",
        },
        foreground: {
          "2": "#e0cea2",
        },
        border: {
          active: "#c1a256",
        },
      },
      brown: {
        background: {
          "2": "#50301a",
        },
        foreground: {
          "2": "#ddc3b0",
        },
        border: {
          active: "#bb8f6f",
        },
      },
      forest: {
        background: {
          "2": "#294903",
        },
        foreground: {
          "2": "#bdd99b",
        },
        border: {
          active: "#85b44c",
        },
      },
      seafoam: {
        background: {
          "2": "#00723b",
        },
        foreground: {
          "2": "#a8f0cd",
        },
        border: {
          active: "#5ae0a0",
        },
      },
      teal: {
        background: {
          "2": "#02494c",
        },
        foreground: {
          "2": "#9bd9db",
        },
        border: {
          active: "#4cb4b7",
        },
      },
      steel: {
        background: {
          "2": "#00333f",
        },
        foreground: {
          "2": "#94c8d4",
        },
        border: {
          active: "#4496a9",
        },
      },
      blue: {
        background: {
          "2": "#004377",
        },
        foreground: {
          "2": "#a9d3f2",
        },
        border: {
          active: "#5caae5",
        },
      },
      royal: {
        blue: {
          background: {
            "2": "#002c4e",
          },
          foreground: {
            "2": "#9abfdc",
          },
          border: {
            active: "#4a89ba",
          },
        },
      },
      cornflower: {
        background: {
          "2": "#2c3c85",
        },
        foreground: {
          "2": "#c8d1fa",
        },
        border: {
          active: "#93a4f4",
        },
      },
      navy: {
        background: {
          "2": "#001665",
        },
        foreground: {
          "2": "#a3b2e8",
        },
        border: {
          active: "#546fd2",
        },
      },
      lavender: {
        background: {
          "2": "#3f3682",
        },
        foreground: {
          "2": "#d2ccf8",
        },
        border: {
          active: "#a79cf1",
        },
      },
      purple: {
        background: {
          "2": "#341a51",
        },
        foreground: {
          "2": "#c6b1de",
        },
        border: {
          active: "#9470bd",
        },
      },
      grape: {
        background: {
          "2": "#4c0d55",
        },
        foreground: {
          "2": "#d9a7e0",
        },
        border: {
          active: "#b55fc1",
        },
      },
      lilac: {
        background: {
          "2": "#63276d",
        },
        foreground: {
          "2": "#e6bfed",
        },
        border: {
          active: "#cf87da",
        },
      },
      pink: {
        background: {
          "2": "#80215d",
        },
        foreground: {
          "2": "#f7c0e3",
        },
        border: {
          active: "#ef85c8",
        },
      },
      magenta: {
        background: {
          "2": "#6b0043",
        },
        foreground: {
          "2": "#eca5d1",
        },
        border: {
          active: "#d957a8",
        },
      },
      plum: {
        background: {
          "2": "#5a003b",
        },
        foreground: {
          "2": "#d696c0",
        },
        border: {
          active: "#ad4589",
        },
      },
      beige: {
        background: {
          "2": "#444241",
        },
        foreground: {
          "2": "#d7d4d4",
        },
        border: {
          active: "#afabaa",
        },
      },
      mink: {
        background: {
          "2": "#343231",
        },
        foreground: {
          "2": "#cecccb",
        },
        border: {
          active: "#9e9b99",
        },
      },
      platinum: {
        background: {
          "2": "#3b4447",
        },
        foreground: {
          "2": "#cdd6d8",
        },
        border: {
          active: "#a0adb2",
        },
      },
      anchor: {
        background: {
          "2": "#202427",
        },
        foreground: {
          "2": "#bcc3c7",
        },
        border: {
          active: "#808a90",
        },
      },
    },
    status: {
      success: {
        background: {
          "1": "#052505",
          "2": "#094509",
          "3": "#107c10",
        },
        foreground: {
          "1": "#54b054",
          "2": "#9fd89f",
          "3": "#9fd89f",
          inverted: "#0e700e",
        },
        border: {
          "1": "#107c10",
          "2": "#9fd89f",
          active: "#54b054",
        },
      },
      warning: {
        background: {
          "1": "#4a1e04",
          "2": "#8a3707",
          "3": "#f7630c",
        },
        foreground: {
          "1": "#faa06b",
          "2": "#fdcfb4",
          "3": "#f98845",
          inverted: "#bc4b09",
        },
        border: {
          "1": "#f7630c",
          "2": "#f98845",
          active: "#faa06b",
        },
      },
      danger: {
        background: {
          "1": "#3b0509",
          "2": "#6e0811",
          "3": {
            base: "#c50f1f",
            hover: "#b10e1c",
            pressed: "#960b18",
          },
        },
        foreground: {
          "1": "#dc626d",
          "2": "#eeacb2",
          "3": "#eeacb2",
          inverted: "#b10e1c",
        },
        border: {
          "1": "#c50f1f",
          "2": "#dc626d",
          active: "#dc626d",
        },
      },
    },
  },
  shadow: {
    "2": {
      base: "0 0 2px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.28)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.25)",
    },
    "4": {
      base: "0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.28)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.25)",
    },
    "8": {
      base: "0 0 2px rgba(0, 0, 0, 0.24), 0 4px 8px rgba(0, 0, 0, 0.28)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.25)",
    },
    "16": {
      base: "0 0 2px rgba(0, 0, 0, 0.24), 0 8px 16px rgba(0, 0, 0, 0.28)",
      brand: "0 0 2px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25)",
    },
    "28": {
      base: "0 0 8px rgba(0, 0, 0, 0.24), 0 14px 28px rgba(0, 0, 0, 0.28)",
      brand: "0 0 8px rgba(0, 0, 0, 0.3), 0 14px 28px rgba(0, 0, 0, 0.25)",
    },
    "64": {
      base: "0 0 8px rgba(0, 0, 0, 0.24), 0 32px 64px rgba(0, 0, 0, 0.28)",
      brand: "0 0 8px rgba(0, 0, 0, 0.3), 0 32px 64px rgba(0, 0, 0, 0.25)",
    },
  },
});
