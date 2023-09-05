import { fileURLToPath, URL } from "node:url";
import LoginView from "@views/LoginView.vue";
// import { defineConfig } from "vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@views": "/path/to/your/views/directory",
    },
  },
});
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
