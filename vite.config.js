import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@styles/tokens/typography-primitives" as *;
        @use "@styles/base/colors" as *;
        @use "@styles/base/typography" as *;
        @use "@styles/base/mixins" as *;
        @use "@styles/base/spacing" as *;
        @use "@styles/utils/layout" as *;
        @use "@styles/utils/structure" as *;
        `,
      },
    },
  },
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
