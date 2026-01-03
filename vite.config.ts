import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  // ⚠️ client klasörünü root yaptığın için bu şart
  root: './client',

  // ⚠️ GitHub Pages için ZORUNLU
  base: '/digital-shield-project/',

  build: {
    outDir: '../dist',   // client/dist yerine repo kökünde dist
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
})
