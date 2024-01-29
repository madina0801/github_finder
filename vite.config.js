import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.VITE_GITHUB_CLIENT_ID': JSON.stringify(env.VITE_GITHUB_CLIENT_ID),
//       VITE_GITHUB_CLIENT_SECRET: JSON.stringify(env.VITE_GITHUB_CLIENT_SECRET)
//     },
//     plugins: [react()],
//   }
// })