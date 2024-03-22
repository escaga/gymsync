import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VuetifyResolver from "@vuetify/vite-plugin";

export default defineConfig({
  plugins: [vue(), VuetifyResolver()],
});
