import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { microWebPlugin } from '@micro-web/vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), microWebPlugin({ styleAppendTo: 'document.head' })],
  server: {
    headers: {
      'Cross-Origin-Resource-Policy': 'cross-origin'
    },
  }
})
