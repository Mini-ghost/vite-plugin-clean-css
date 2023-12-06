import { defineConfig } from 'vite'
import CleanCss from 'vite-plugin-clean-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    CleanCss({
      level: {
        2: {
          mergeSemantically: true,
          restructureRules: true,
        },
      },
    }),
  ],
})
