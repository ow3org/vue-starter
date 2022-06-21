import { defineConfig } from 'vite'
import { Stacks, alias, buildVueComponents as vueComponents } from '@ow3/stacks'

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    dedupe: ['vue'],
    alias,
  },

  plugins: [
    Stacks(),
  ],

  build: vueComponents(),

  // sourcemap: true,
  // minify: false,

  test: {
    include: ['tests/**/*.test.ts'],
    // environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse/core', 'vue-demi'],
    },
  },
}

// https://vitejs.dev/config
export default defineConfig(({ command }) => {
  if (command === 'serve')
    return config

  // command === 'build'
  return config
})
