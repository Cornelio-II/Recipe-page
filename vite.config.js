import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: '/RecipePage',
  plugins: [vue()],
  server:{
    port: 3000,
  }
});
