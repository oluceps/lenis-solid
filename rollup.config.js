import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import solid from 'vite-plugin-solid';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/bundle.mjs',
      format: 'esm',
      strict: true,
      sourcemap: true,
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'solid-lenis',
      globals: {
        'solid-js': 'solidJs',
        'lenis': 'Lenis',
        '@darkroom.engineering/tempus': 'Tempus',
      },
    },
  ],
  plugins: [
    resolve(),
    typescript(),
    solid()
  ],
  external: ['solid-js', 'lenis', '@darkroom.engineering/tempus',]
};

