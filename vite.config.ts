import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), alias()],
  resolve:{
    alias:{
      'src': path.resolve(__dirname, './src'),
      'ui': path.resolve(__dirname, './src/ui')
    },
  },
})
