 import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This allows access to 0.0.0.0
    port: process.env.PORT || 3000, // Render's PORT will be used
  },
  build: {
    outDir: 'build', // Set the output directory for static files
  },
});
