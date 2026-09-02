import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {lingui} from "@lingui/vite-plugin"

export default defineConfig(() => {
  return {
    plugins: [react({
      babel: {
        plugins: [
          '@lingui/babel-plugin-lingui-macro'
        ]
      }
    }), tailwindcss(), lingui()],
    base: "/portf-lio-fullstack"
  };
});
