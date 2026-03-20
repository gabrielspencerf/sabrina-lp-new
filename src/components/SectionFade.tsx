import React, { useEffect, useRef, useState } from 'react';

interface SectionFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SectionFade: React.FC<SectionFadeProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutIds: number[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timeoutId = window.setTimeout(() => setIsVisible(true), delay);
          timeoutIds.push(timeoutId);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      timeoutIds.forEach(window.clearTimeout);
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};