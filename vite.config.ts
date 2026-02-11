import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/* biome-ignore lint/style/noDefaultExport: to run react */
export default defineConfig({
  plugins: [react()],
});
