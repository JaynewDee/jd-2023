import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compress";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compress()],
  assetsInclude: ["**/*.jpg", "./src/assets/*.pdf"],
});
