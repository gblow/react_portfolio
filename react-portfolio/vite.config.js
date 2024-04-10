import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  },
  server: {
    host: '0.0.0.0', // Make the server accessible from other devices on the network
    port: 3000,
    open: true 
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    },
    outDir: 'dist'
  },
});
