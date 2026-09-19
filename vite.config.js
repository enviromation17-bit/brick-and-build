import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base defaults to '/' for local dev and most hosts (Netlify/Vercel).
// For GitHub Pages project sites (https://username.github.io/repo-name/),
// the deploy workflow sets VITE_BASE=/repo-name/ automatically at build time.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
