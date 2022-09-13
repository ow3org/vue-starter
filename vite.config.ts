import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import { Stacks, componentsBuildOptions as vueComponents } from '@ow3/stacks'

const config: UserConfig = {
  resolve: {
    dedupe: ['vue', 'cac'],
  },

  plugins: [
    Stacks()
  ],

  build: vueComponents(),
}

// https://vitejs.dev/config
export default defineConfig(({ command }) => {
  if (command === 'serve')
    return config

  // command === 'build'
  return config
})
