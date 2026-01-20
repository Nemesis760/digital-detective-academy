import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: './client',

  // GitHub Pages prod'da gerekli
  base: mode === 'production' ? '/digital-detective-academy/' : '/',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
}))
git add vite.config.ts
git commit -m "Fix Vite base path for GitHub Pages"
git push origin main
