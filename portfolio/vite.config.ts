import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // In production builds for GitHub Pages, use repository subpath; in dev mode, use root /
  base: process.env.NODE_ENV === "production" ? "/NikoleDixonPortfolio/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    historyApiFallback: true,
    host: true, // Listen on all local IP addresses (localhost, 127.0.0.1)
    port: 5173,
    strictPort: false,
  },
});
