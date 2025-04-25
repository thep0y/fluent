import path from "node:path";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${resolve("../lib")}/`,
    },
  },

  plugins: [solid(), vanillaExtractPlugin()],
});
