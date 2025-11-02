import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      babelrc: false,
      configFile: false,
      presets: [
        ['@babel/preset-react', {
          runtime: 'automatic',
          importSource: 'react'
        }]
      ],
      plugins: []
    }
  })],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      jsx: 'automatic',
      jsxImportSource: 'react'
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
