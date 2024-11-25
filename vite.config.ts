import { defineConfig } from "vite";

import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  envDir: "../",
  server: { host: true, port: 6200 },
  plugins: [
    UnoCSS(),
    AutoImport({
      vueTemplate: true,
      imports: ["vue", "@vueuse/core", "vitepress"],
      dts: "../typings/auto-imports.d.ts",
    }),
  ],
});
