import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mysten/sui', 'poseidon-lite'],
  },
  resolve: {
    alias: {
      '@mysten/sui': '@mysten/sui/client',
    },
    mainFields: ['module', 'main'],
    conditions: ['import', 'module', 'browser', 'default'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
})