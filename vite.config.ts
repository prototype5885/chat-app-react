import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const backendAddress = "http://127.0.0.1:8000";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
  server: {
    host: "127.0.0.1",
    port: 80,
    proxy: {
      "/api": {
        target: backendAddress,
      },
      "/cdn": {
        target: backendAddress,
      },
      "/ws": {
        target: backendAddress,
        ws: true,
      },
    },
  },
})
