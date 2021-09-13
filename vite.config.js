import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['jsuites'],
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
})
