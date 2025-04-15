import {
  createSignal,
  createContext,
  type ParentProps,
  useContext,
  onCleanup,
} from "solid-js";
import { darkTheme, lightTheme } from "./theme.css";

type ThemeContextType = {
  isDark: () => boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  themeClass: () => string;
};

const ThemeContext = createContext<ThemeContextType>();

export function ThemeProvider(props: ParentProps) {
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;

  const savedTheme = localStorage.getItem("theme");
  const initialIsDark = savedTheme ? savedTheme === "dark" : prefersDark;

  const [isDark, setIsDark] = createSignal(initialIsDark);

  const toggleTheme = () => {
    setIsDark(!isDark());
    localStorage.setItem("theme", isDark() ? "dark" : "light");
  };

  const setTheme = (dark: boolean) => {
    setIsDark(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const themeClass = () => (isDark() ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, setTheme, themeClass }}
    >
      <div class={themeClass()}>{props.children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeMediaQueryListener() {
  const { setTheme } = useTheme();

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches);
    }
  };

  mediaQuery.addEventListener("change", handleChange);

  onCleanup(() => {
    mediaQuery.removeEventListener("change", handleChange);
  });

  return null;
}
