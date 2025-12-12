import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),         // Tailwind plugin goes here 👈
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler']
        ],
      },
    }),
  ],
})
