import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: './client',

  // Working prototype /app altında yayınlanacak
  base: mode === 'production' ? '/digital-detective-academy/app/' : '/',

  build: {
    // dist yerine repoda app/ üret
    outDir: '../app',
    emptyOutDir: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
}))
