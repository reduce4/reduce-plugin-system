import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteRsw } from 'vite-plugin-rsw';
import path from 'path'
import toml from '@iarna/toml'
import fs from 'fs'
const configFile = fs.readFileSync('rps.toml', 'utf-8')
const config = toml.parse(configFile);


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
  },
  server: {
    port: config.web.port
  }

})
