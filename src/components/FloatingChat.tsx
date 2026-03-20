import React, { useEffect } from 'react';
import { loadTypebot } from '../lib/typebot';

export const FloatingChat: React.FC = () => {
  useEffect(() => {
    // Lazy load logic: wait for timer or first user interaction.
    const timer = setTimeout(() => {
      loadTypebot();
    }, 3500);

    const handleInteraction = () => {
      clearTimeout(timer);
      loadTypebot();
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('click', handleInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  return null; // The script injection handles the UI rendering (bubble)
};