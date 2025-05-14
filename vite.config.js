import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/trendy-wear-admin/',
  resolve: {
    alias: {
    
      'lottie-react': 'lottie-react'
    }
  }
})


