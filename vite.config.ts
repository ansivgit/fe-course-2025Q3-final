import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

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
