import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change `base` to your repo name when deploying to GitHub Pages.
// Example: if your repo is named "portfolio", set base to '/portfolio/'.
// If your repo is named "<username>.github.io", set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
