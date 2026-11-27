import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use the exact capitalization of your repository name
    base: command === 'build' ? '/Portfolio/' : '/', 
  }
});