import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Needed when deploying to GitHub Pages at https://<user>.github.io/<repo>/
  // Change this to your repo name if needed, e.g. base: '/portfolio/'
  base: '/',
})
