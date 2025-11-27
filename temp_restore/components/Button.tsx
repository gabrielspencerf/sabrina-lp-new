import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 active:translate-y-0 overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-dark text-white shadow-xl shadow-stone-900/10 hover:shadow-2xl hover:shadow-stone-900/20 border border-transparent",
    secondary: "bg-brand-primary text-white hover:bg-brand-primaryLight hover:shadow-lg border border-transparent",
    outline: "border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white backdrop-blur-sm",
    ghost: "text-brand-dark hover:bg-stone-200/50 hover:text-brand-dark bg-transparent px-6"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  // Shimmer effect element for primary buttons
  const shimmer = variant === 'primary' ? (
    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
  ) : null;

  const content = (
    <>
      {shimmer}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};