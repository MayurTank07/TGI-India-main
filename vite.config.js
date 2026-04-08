import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild for minification (faster, no extra dependency)
    minify: 'esbuild',
    // Drop console.logs and debugger in production
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  }
})
