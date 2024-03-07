import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import WindiCSS from 'vite-plugin-windicss'
dotenv.config({
  path: [
    resolve(__dirname, '.env'),
    resolve(__dirname, '.env.development'),
    resolve(__dirname, '.env.production')
  ]
})

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), WindiCSS()]
  }
})
