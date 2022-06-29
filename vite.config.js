import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@component': resolve(__dirname, 'src/components'),
      '@asset': resolve(__dirname, 'src/assets'),
      '@content': resolve(__dirname, 'src/contents')
    }
  },
  define: {
    'process.env': {}
  }
})
