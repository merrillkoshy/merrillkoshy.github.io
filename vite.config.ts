import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import { VitePluginRadar } from "vite-plugin-radar";
import manifest from "./public/manifest.json";

const manifestForPWA = manifest as Partial<ManifestOptions>;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: process.env.VITE_GA ?? "",
      },
    }),
    VitePWA({
      manifest: manifestForPWA,
    }),
  ],
});
