import { ENV_CONFIG } from '../constants';

let isLoaded = false;

export const loadTypebot = () => {
  if (isLoaded) return;

  const script = document.createElement('script');
  script.type = 'module';
  script.innerHTML = `
    import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js'
    
    Typebot.initBubble({
      typebot: "${ENV_CONFIG.TYPEBOT_ID}",
      apiHost: "${ENV_CONFIG.TYPEBOT_API_HOST}",
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
  // @ts-ignore - Typebot is loaded dynamically
  if (window.Typebot) {
    // @ts-ignore
    window.Typebot.open();
  }
};