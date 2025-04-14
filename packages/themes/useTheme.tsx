// ThemeProvider.tsx
import {
	createSignal,
	createContext,
	useContext,
	type ParentProps,
	onCleanup,
} from "solid-js";
import { lightTheme, darkTheme } from "./theme.css";

// 1. 创建主题上下文
type ThemeContextType = {
	isDark: () => boolean;
	toggleTheme: () => void;
	setTheme: (isDark: boolean) => void;
	themeClass: () => string;
};

const ThemeContext = createContext<ThemeContextType>();

// 2. 创建主题提供器组件
export function ThemeProvider(props: ParentProps) {
	// 检测系统主题偏好
	const prefersDark = window.matchMedia?.(
		"(prefers-color-scheme: dark)",
	).matches;

	// 尝试从 localStorage 读取用户设置的主题
	const savedTheme = localStorage.getItem("theme");
	const initialIsDark = savedTheme ? savedTheme === "dark" : prefersDark;

	const [isDark, setIsDark] = createSignal(initialIsDark);

	// 切换主题的函数
	const toggleTheme = () => {
		setIsDark(!isDark());
		localStorage.setItem("theme", isDark() ? "dark" : "light");
	};

	// 设置特定主题的函数
	const setTheme = (dark: boolean) => {
		setIsDark(dark);
		localStorage.setItem("theme", dark ? "dark" : "light");
	};

	// 返回当前主题的 CSS 类名
	const themeClass = () => (isDark() ? darkTheme : lightTheme);

	return (
		<ThemeContext.Provider
			value={{ isDark, toggleTheme, setTheme, themeClass }}
		>
			<div class={themeClass()}>{props.children}</div>
		</ThemeContext.Provider>
	);
}

// 3. 创建使用主题的钩子
export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

// 4. 创建主题切换组件
export function ThemeToggle() {
	const { isDark, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={isDark() ? "Switch to light theme" : "Switch to dark theme"}
			title={isDark() ? "Switch to light theme" : "Switch to dark theme"}
			class="theme-toggle"
		>
			{isDark() ? "🌞" : "🌙"}
		</button>
	);
}

// 5. 监听系统主题变化（可选）
export function ThemeMediaQueryListener() {
	const { setTheme } = useTheme();

	// 创建媒体查询监听
	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

	// 当系统主题变化时更新应用主题
	const handleChange = (e: MediaQueryListEvent) => {
		// 只有当没有本地存储的主题偏好时才跟随系统
		if (!localStorage.getItem("theme")) {
			setTheme(e.matches);
		}
	};

	// 添加监听器
	mediaQuery.addEventListener("change", handleChange);

	// 清理函数（Solid 会在组件卸载时调用）
	onCleanup(() => {
		mediaQuery.removeEventListener("change", handleChange);
	});

	return null;
}
