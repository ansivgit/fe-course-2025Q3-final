import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

/* biome-ignore lint/style/noDefaultExport: Vite requires default export */
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
});
