import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/Recipe-page",
  plugins: [vue()],
  server:{
    port: 3000,
  }
});
