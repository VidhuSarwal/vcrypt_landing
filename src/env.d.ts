/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GET_STARTED_URL: string
  readonly VITE_GITHUB_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
