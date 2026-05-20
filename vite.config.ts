import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  clearScreen: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  server: {
    host: "localhost",
    port: 3002,
  },
  preview: {
    host: "0.0.0.0",
    port: 3002,
  },
});
