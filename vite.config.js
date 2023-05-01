import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteRsw } from 'vite-plugin-rsw';
import path from 'path'
import toml from '@iarna/toml'
import fs from 'fs'
const configFile = fs.readFileSync('rps.toml', 'utf-8')
const config = toml.parse(configFile);

export default defineConfig({
  plugins: [
    react(),
    ViteRsw(),

  ],
  resolve: {
    alias: {
      '@wasm': path.resolve(__dirname, './src/wasm/src_reduce_plugin_system.js'),
      '@css': path.resolve(__dirname, './src/assets/css'),
    }
  },
  server: {
    port: config.web.port,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  }
})
