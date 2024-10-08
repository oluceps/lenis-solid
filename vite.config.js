import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

import dts from 'vite-plugin-dts'

import Package from './package.json';

export default defineConfig({
  plugins: [solid(), dts()],
  build: {
    lib: {
      name: Package.name,
      entry: 'src/index.tsx',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['solid-js', 'lenis', '@darkroom.engineering/tempus'],
    },
  },
})
