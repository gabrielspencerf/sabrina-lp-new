import React, { useEffect } from 'react';
import { loadTypebot } from '../lib/typebot';

export const FloatingChat: React.FC = () => {
  useEffect(() => {
    // Lazy load logic: Wait for 3 seconds OR user scroll
    const timer = setTimeout(() => {
      loadTypebot();
    }, 3500);

    const handleInteraction = () => {
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