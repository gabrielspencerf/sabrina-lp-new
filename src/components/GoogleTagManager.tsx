import React, { useEffect } from 'react';
import { APP_CONFIG } from '../config/appConfig';

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export const GoogleTagManager: React.FC = () => {
  useEffect(() => {
    if (!APP_CONFIG.gtmId || document.getElementById('gtm-script')) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${APP_CONFIG.gtmId}`;
    document.head.appendChild(script);

    const iframe = document.createElement('iframe');
    iframe.id = 'gtm-noscript';
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${APP_CONFIG.gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    iframe.setAttribute('aria-hidden', 'true');

    const noscript = document.createElement('noscript');
    noscript.id = 'gtm-noscript-container';
    noscript.appendChild(iframe);
    document.body.prepend(noscript);
  }, []);

  return null;
};
