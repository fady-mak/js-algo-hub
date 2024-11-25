import { defineConfig } from "vitest/config";

export default defineConfig({
  // 测试完自动退出
  test: {
    ui: true,
  },
});
