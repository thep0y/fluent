import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "node:path";
import typescript from "@rollup/plugin-typescript";
import dts from "vite-plugin-dts";

function resolve(str: string) {
	return path.resolve(__dirname, str);
}

export default defineConfig({
	resolve: {
		alias: {
			"~/": `${resolve("packages")}/`,
		},
	},

	plugins: [
		solid(),
		vanillaExtractPlugin(),
		dts({ tsconfigPath: "./tsconfig.app.json" }),
		typescript({
			target: "es2020",
			rootDir: resolve("packages/"),
			declaration: true,
			declarationDir: resolve("lib"),
			exclude: resolve("node_modules/**"),
			allowSyntheticDefaultImports: true,
		}),
	],

	build: {
		cssCodeSplit: true,
		outDir: "lib",
		lib: {
			entry: resolve("packages/index.ts"),
			name: "@fluentui/solid",
		},

		rollupOptions: {
			external: [
				"solid-js",
				"solid-js/web",
				"solid-js/store",
				"solid-icons/ai",
				"solid-icons/vs",
				"solid-icons/tb",
				/^@vanilla-extract\/.*$/,
			],
			preserveEntrySignatures: "strict",
			input: ["packages/index.ts"],
			output: [
				{
					preserveModules: true,
					format: "es",
					entryFileNames: "[name].js",
					dir: "lib",
					preserveModulesRoot: "packages",
				},
			],
		},
	},
});
