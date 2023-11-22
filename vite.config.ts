/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      extension: ['ts', 'tsx'],
      include: ['src'],
      all: true,
      exclude: ['**/*.type.ts', '**/*.d.ts', '**/*.interface.ts'],
    },
  },
});
