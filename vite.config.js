import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["prop-types"],
  },
  resolve: {
    alias: {
      "prop-types": "prop-types/prop-types.js",
    },
  },
});
