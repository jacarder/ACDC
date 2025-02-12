// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import path from 'path'


// https://astro.build/config
export default defineConfig({
  base: '/',
  vite: {
    resolve: {
      alias: {
        // your aliases should mirror the ones defined in your tsconfig.json
        // i'll re-use the ones in the official docs:
        "@/*": path.resolve(path.dirname(''), './src/*'),
      }
    },
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: '87t9hq25',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react()
  ]
});