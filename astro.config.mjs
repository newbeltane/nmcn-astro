// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nmcn-nepal.org',

  // Fully static output — fast-loading, deployed to Cloudflare Workers
  // via Static Assets (see wrangler.toml). Interactive pieces use Astro
  // Islands (Preact) with client:* directives.
  output: 'static',

  integrations: [preact()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ne'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});