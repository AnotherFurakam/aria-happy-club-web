import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    {
      name: "babel",
      config: {
        presets: ["@babel/preset-env"],
      },
    },
    react(),
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ["@layouts","@mocks","@interfaces","@utils","@components"]
      }
    }
  },
});
