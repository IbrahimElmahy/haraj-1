import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Pass the API_KEY from the build environment (Vercel) to the client code
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})