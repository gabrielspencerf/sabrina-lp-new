import { APP_CONFIG } from '../config/appConfig';

let isLoaded = false;

export const loadTypebot = () => {
  if (isLoaded) return;

  const script = document.createElement('script');
  script.type = 'module';
  script.innerHTML = `
    import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js'
    
    Typebot.initBubble({
      typebot: "${APP_CONFIG.typebotId}",
      apiHost: "${APP_CONFIG.typebotApiHost}",
      theme: {
        button: { backgroundColor: "#1c1917" }, // stone-900
        previewMessage: { backgroundColor: "#f4f2ed", textColor: "#1c1917" }
      },
    });
    
    window.Typebot = Typebot;
  `;

  document.body.appendChild(script);
  isLoaded = true;
};

export const openTypebot = () => {
  if (window.Typebot) {
    window.Typebot.open();
  }
};