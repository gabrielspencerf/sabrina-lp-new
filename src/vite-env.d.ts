/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TYPEBOT_TAG?: string;
  readonly VITE_TYPEBOT_ID?: string;
  readonly VITE_TYPEBOT_API_HOST?: string;
  readonly VITE_GTM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  Typebot?: {
    open: () => void;
  };
}
