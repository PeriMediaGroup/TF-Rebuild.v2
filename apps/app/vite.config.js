import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    historyApiFallback: true
  },
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@triggerfeed/ui": path.resolve(__dirname, "../../packages/ui"),
      "@triggerfeed/theme": path.resolve(__dirname, "../../packages/theme"),
      "@triggerfeed": path.resolve(__dirname, "../../"),
    },
  },
});