import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import path from "node:path";
import { existsSync, writeFileSync } from "node:fs";

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
    vanillaExtractPlugin({ identifiers: "short" }),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      beforeWriteFile(filePath, content) {
        const filename = path.basename(filePath);
        const dir = path.dirname(filePath);
        const indexFilePath = path.join(dir, "index.js");
        if (
          existsSync(indexFilePath) ||
          !existsSync(dir) ||
          (filePath.indexOf("/components/") === -1 &&
            filePath.indexOf("/themes/") === -1 &&
            filePath.indexOf("/hooks/") === -1) ||
          filename !== "index.d.ts"
        ) {
          return { filePath, content };
        }
        const lines = content
          .split("\n")
          .filter(
            (line) =>
              !line.startsWith("export type") && !line.endsWith(".types';"),
          );

        writeFileSync(indexFilePath, lines.join("\n"));
        return { filePath, content };
      },
    }),

    {
      name: "vite:import-css",
      apply: "build",
      enforce: "post",
      renderChunk(code, chunk) {
        const { fileName } = chunk;

        if (fileName.startsWith("components/")) {
          const dir = path.dirname(fileName);
          const componentDir = path.basename(dir);
          const componentFileName = `${componentDir.charAt(0).toUpperCase() + componentDir.slice(1)}`;
          if (
            !fileName.toLocaleLowerCase().includes("context") &&
            fileName.endsWith(`${componentFileName}.js`)
          ) {
            const importCode = `import "./styles/${componentFileName}.css"`;

            const addedCssCode = `${importCode}\n${code}`;

            return { code: addedCssCode, map: null };
          }
        }
        if (fileName === "index.js") {
          const importCode = `import "./themes/styles/var.css"\nimport "./themes/styles/theme.css"`;

          const addedCssCode = `${importCode}\n${code}`;

          return { code: addedCssCode, map: null };
        }
      },
    },
  ],

  build: {
    cssCodeSplit: true,
    cssMinify: true,
    outDir: "lib",
    lib: {
      entry: resolve("packages/index.ts"),
      name: "fluent-solid",
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
          assetFileNames: ({ names }) => {
            const filename = path
              .basename(names[0])
              .replace(".ts.vanilla.css", "");
            const dir = path.parse(names[0]).dir;
            return `${dir}/styles/${filename}`;
          },
        },
      ],
    },
  },
});
