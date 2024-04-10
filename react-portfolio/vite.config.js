import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from 'express'; // Import Express

const app = express(); // Create Express app instance

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  },
  server: {
    port: 3003,
    open: true 
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    },
    outDir: 'dist'
  },
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

