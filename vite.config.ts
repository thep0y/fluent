import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import path from "node:path";
import { readdirSync } from "node:fs";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

function getEntries() {
  const dirs = [
    path.resolve(__dirname, "packages/components"),
    path.resolve(__dirname, "packages/themes"),
  ];
  const entries: Record<string, string> = {
    index: path.resolve(__dirname, "packages/index.ts"),
  };

  function walk(dir: string, parent: string, prefix = "") {
    const items = readdirSync(dir, { withFileTypes: true });
    items.forEach((item) => {
      const fullPath = path.resolve(dir, item.name);
      const relativePath = prefix ? `${prefix}/${item.name}` : item.name;

      if (item.isDirectory()) {
        walk(fullPath, parent, relativePath);
      } else if (
        item.isFile() &&
        item.name.endsWith(".ts") &&
        !item.name.endsWith(".d.ts") &&
        !item.name.endsWith(".types.ts")
      ) {
        const name = relativePath.replace(/\.ts$/, "");
        entries[`${parent}/${name}`] = fullPath;
      }
    });
  }

  try {
    dirs.forEach((dir) => {
      const parent = path.basename(dir);
      walk(dir, parent);
    });
  } catch (error) {
    console.warn("Components directory not found", error);
  }

  return entries;
}

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      "~/": `${resolve("packages")}/`,
    },
  },

  plugins: [
    solid(),
    vanillaExtractPlugin({
      identifiers: mode === "staging" ? "debug" : "short",
    }),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      rollupTypes: false,
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
      entry: getEntries(),
      formats: ["es"],
      name: "fluent-solid",
    },

    rollupOptions: {
      external: [
        "tabster",
        /^@vanilla-extract\/.*$/,
        /^solid-js(\/.*)?$/,
        /^solid-icons\/.*$/,
      ],
      output: {
        entryFileNames: "[name].js",
        dir: "lib",
        preserveModules: true,
        preserveModulesRoot: "packages",
        assetFileNames: ({ names }) => {
          const filename = path
            .basename(names[0])
            .replace(".ts.vanilla.css", "");
          const dir = path.parse(names[0]).dir;
          return `${dir}/styles/${filename}`;
        },
      },
    },
  },
}));
