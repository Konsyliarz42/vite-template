import path from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, type PluginOption } from "vite";

export default defineConfig({
  plugins: [svelte() as PluginOption],
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
