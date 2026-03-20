import { useEffect } from 'react';

const isImageElement = (target: EventTarget | null): target is HTMLImageElement =>
  target instanceof HTMLImageElement;

export const useImageProtection = () => {
  useEffect(() => {
    const blockIfImage = (event: Event) => {
      if (!isImageElement(event.target)) return;
      event.preventDefault();
    };

    document.addEventListener('contextmenu', blockIfImage);
    document.addEventListener('dragstart', blockIfImage);

    return () => {
      document.removeEventListener('contextmenu', blockIfImage);
      document.removeEventListener('dragstart', blockIfImage);
    };
  }, []);
};
