import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/OTP-login/',
  plugins: [react(), tailwindcss(),],

})

// export default defineConfig({
//   base: '/OTP-login/', // ✅ This is CRITICAL
//   plugins: [react()],
// });