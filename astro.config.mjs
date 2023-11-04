import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://hk-protrain-demo.netlify.app',
  integrations: [sitemap(), react(), tailwind()]
});