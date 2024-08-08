import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dengtab.com",
  integrations: [react({
    experimentalReactChildren: true
  }), tailwind({
    applyBaseStyles: false
  }), mdx(), sitemap()]
});