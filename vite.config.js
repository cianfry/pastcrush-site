import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


// 🧭 Update this only if your GitHub repo name changes
// For example, if your repo is github.com/cianfry/pastcrush
// then `base: "/pastcrush/"` ensures correct asset paths on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ important for custom domains like pastcrush.shop
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
   }
});

