import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/m-rizwan/',
  build: {
    outDir: 'dist',
  },
});