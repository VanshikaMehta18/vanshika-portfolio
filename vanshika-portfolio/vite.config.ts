import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default base for local/dev usage
const base = '/';

export default defineConfig({
  base: '/vanshika-portfolio/',
  plugins: [react()],
})

