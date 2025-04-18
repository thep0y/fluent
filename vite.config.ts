import { defineConfig } from "vite";
import path from "node:path";
import solid from "vite-plugin-solid";
import typescript from "@rollup/plugin-typescript";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { exec } from "node:child_process";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

const tscAlias = () => {
  return {
    name: "tsAlias",
    writeBundle: (): Promise<void> => {
      return new Promise((resolve, reject) => {
        exec("tsc-alias", function callback(error, _, stderr) {
          if (stderr || error) {
            reject(stderr || error);
          } else {
            resolve();
          }
        });
      });
    },
  };
};

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve("packages")}/`,
    },
  },

  plugins: [
    solid(),
    vanillaExtractPlugin(),
    typescript({
      target: "es2020",
      rootDir: resolve("packages/"),
      declaration: true,
      declarationDir: resolve("lib"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
    }),

    tscAlias(),

    {
      name: "vite:import-css",
      apply: "build",
      enforce: "post",
      renderChunk(code, chunk) {
        const { fileName, name, imports } = chunk;
        if (
          fileName === "index.js" ||
          (fileName.startsWith("components/") && !name.endsWith(".scss"))
        ) {
          const importedCss = imports.filter((s) => s.indexOf("scss") > -1);
          if (importedCss.length === 0) {
            return;
          }

          const cssName = path.basename(importedCss[0]).split(".")[0];

          const importCode = `import "./${cssName}.css"`;

          const addedCssCode = `${importCode}\n${code}`;

          return { code: addedCssCode, map: null };
        }
      },
    },
  ],

  // optimizeDeps: {
  //   exclude: ["solid-js", "solid-icons"],
  // },

  build: {
    cssCodeSplit: true,
    // 打包输出的目录
    outDir: "lib",
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    // cssTarget: "chrome61",
    lib: {
      // 组件库源码的入口文件
      entry: resolve("packages/index.ts"),
      // 组件库名称
      // name: "alley-components",
      // 文件名称, 打包结果举例: my-packages.umd.cjs
      // fileName: "alley",
      // formats: ["es", "umd"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "solid-icons/ai",
        "solid-icons/vs",
        "solid-icons/tb",
        "tslib",
      ],
      // plugins: [
      //   externalGlobals({
      //     "solid-js": "solid-js",
      //     "solid-icons": "solid-icons",
      //   }),
      // ],
      input: ["packages/index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "lib",
          preserveModulesRoot: "packages",
        },
        // {
        //   format: "cjs",
        //   entryFileNames: "[name].js",
        //   preserveModules: true,
        //   dir: "lib",
        //   preserveModulesRoot: "",
        // },
      ],
      // output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      // globals: {
      //   react: "react",
      //   "react-dom": "react-dom",
      // },
      // },
    },
  },
});
