import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import'

// See: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/] }),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: 'lodash', replacement: 'lodash-es' },
    ],
  },
  build: {
    target: 'es2015',
    outDir: './dist',
  },
  server: {
    port: 7300,
  },
})
