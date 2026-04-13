// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://Tottibero.github.io',
  base: 'crucero',
  integrations: [
    AstroPWA({
      mode: 'production',
      base: '/crucero/',
      scope: '/crucero/',
      includeAssets: ['favicon.svg', 'favicon.ico'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Crucero Mediterráneo 2026',
        short_name: 'Crucero',
        description: 'Guía del crucero Mediterráneo Occidental · Mayo 2026',
        theme_color: '#1a3a5c',
        background_color: '#1a3a5c',
        display: 'standalone',
        start_url: '/crucero/',
        scope: '/crucero/',
        lang: 'es',
        icons: [
          {
            src: '/crucero/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/crucero/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/crucero/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/crucero/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico}'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
