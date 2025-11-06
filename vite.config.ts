import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/tram': {
        target: 'https://data.montpellier3m.fr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/tram/, '/TAM_MMM_GTFSRT')
      }
    }
  }
})
