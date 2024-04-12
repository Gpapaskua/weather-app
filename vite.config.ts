import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgr()],
  resolve: {
    alias: {
      "@/": resolve(__dirname, "./src"),
    },
  },
});
