import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use repo name for GitHub Pages, '/' for Vercel/localhost
  base: process.env.GITHUB_PAGES ? '/dararithportfolio/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons'],
          'fontawesome': [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/react-fontawesome'
          ],
          'lottie': [
            'lottie-react',
            'lottie-web',
            '@lottiefiles/dotlottie-react',
            '@lottiefiles/react-lottie-player'
          ],
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
