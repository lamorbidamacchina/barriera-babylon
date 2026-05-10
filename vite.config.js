import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites live under /<repo-name>/; asset URLs must match.
  base: '/barriera-babylon/',
})



