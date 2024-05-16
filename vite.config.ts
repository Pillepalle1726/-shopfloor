import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  base: "/build/",
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  build: {
    // Specify the directory to output build files
    outDir: 'build',
  }
})
