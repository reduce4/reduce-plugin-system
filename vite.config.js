import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteRsw } from 'vite-plugin-rsw';
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRsw(),
  ],
  resolve: {
    alias: {
      '@wasm': path.resolve(__dirname, './src/wasm/src_reduce_plugin_system.js')
    }
  }

})
