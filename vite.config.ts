import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/capstone-aerospace/",  // repo name
  plugins: [react()],
});