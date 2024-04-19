//vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 4048,
    assetsDir: "assets",
  },
  optimizeDeps: {
    include: ["./src/assets/benefits/*.svg"],
  },
});
