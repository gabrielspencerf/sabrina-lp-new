import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  center = true,
  className = '',
}) => {
  const alignment = center ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl mb-16 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-5 leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-brand-slate text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};
