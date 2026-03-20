const DEFAULTS = {
  typebotTag: "v1",
  typebotId: "sabrinagonzalezexterior",
  typebotApiHost: "https://flow.creativelane.com.br",
  gtmId: "GTM-W6LCKXWW",
} as const;

export const APP_CONFIG = {
  typebotTag: import.meta.env.VITE_TYPEBOT_TAG ?? DEFAULTS.typebotTag,
  typebotId: import.meta.env.VITE_TYPEBOT_ID ?? DEFAULTS.typebotId,
  typebotApiHost: import.meta.env.VITE_TYPEBOT_API_HOST ?? DEFAULTS.typebotApiHost,
  gtmId: import.meta.env.VITE_GTM_ID ?? DEFAULTS.gtmId,
} as const;
