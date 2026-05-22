import path from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
  clearScreen: false,
  plugins: [svelte() as PluginOption],
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
