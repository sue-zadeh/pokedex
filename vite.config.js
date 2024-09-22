import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        // Proxy API calls to Flask's backend running on port 5000
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
