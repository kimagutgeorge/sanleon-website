import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // true === 0.0.0.0 (listen on all interfaces)
    port: 5173,
    strictPort: false,
  },
  plugins: [vue()],
});
