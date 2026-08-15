import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  clearScreen: false,
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
    port: 3002,
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@public": path.resolve(import.meta.dirname, "./public"),
    },
  },
  server: {
    host: "localhost",
    port: 3002,
  },
});
