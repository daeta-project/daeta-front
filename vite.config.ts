import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      disable: false,
      registerType: "autoUpdate",

      devOptions: {
        enabled: true,
      },

      includeAssets: ["로고(대형).svg"],

      manifest: {
        name: "Daeta",
        short_name: "Daeta",
        start_url: "/",
        theme_color: "#3F3F3F",
        background_color: "#3F3F3F",
        display: "fullscreen",
        icons: [
          {
            src: "로고(대형).svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "public/로고(대형).svg",
            sizes: "512x512",
            type: "image/svg",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
