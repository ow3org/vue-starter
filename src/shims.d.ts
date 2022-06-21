declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<any, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  // only `string` type here to avoid hard-to-debug cast problems in your components!
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_BUILD_EPOCH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
