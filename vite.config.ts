import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 让项目启动时自动打开;配置能访问的IP;
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
  },
  // 配置别名,如常见的根目录别名@
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
