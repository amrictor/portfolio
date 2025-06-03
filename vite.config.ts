import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error no types for vite-plugin-eslint
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  }), eslint()],
});
