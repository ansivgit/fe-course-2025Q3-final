import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/* biome-ignore lint/style/noDefaultExport: Vite requires default export */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
});
