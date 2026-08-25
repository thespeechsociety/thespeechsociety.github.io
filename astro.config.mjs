import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://thespeechsociety.github.io',
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
