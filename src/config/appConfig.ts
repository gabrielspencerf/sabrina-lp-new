const DEFAULTS = {
  typebotTag: "v1",
  typebotId: "sabrina",
  typebotApiHost: "https://flow.creativelane.com.br",
  gtmId: "GTMKTV4W9H6",
} as const;

export const APP_CONFIG = {
  typebotTag: import.meta.env.VITE_TYPEBOT_TAG ?? DEFAULTS.typebotTag,
  typebotId: import.meta.env.VITE_TYPEBOT_ID ?? DEFAULTS.typebotId,
  typebotApiHost: import.meta.env.VITE_TYPEBOT_API_HOST ?? DEFAULTS.typebotApiHost,
  gtmId: import.meta.env.VITE_GTM_ID ?? DEFAULTS.gtmId,
} as const;
