import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-brand-dark py-16 px-6 border-t border-stone-800">
      <div className="container mx-auto flex flex-col items-center text-center gap-10">
        
        {/* Brand Identity */}
        <div className="space-y-2">
          <h4 className="font-serif text-stone-200 text-2xl tracking-wide">Sabrina Gonzalez</h4>
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-primary font-medium">Psicologia Clínica</p>
        </div>

        {/* Minimal Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs text-stone-500 font-light tracking-wide">
           <a href="#faq" className="hover:text-stone-300 transition-colors duration-300">Dúvidas Frequentes</a>
           <span className="text-stone-700 select-none">•</span>
           <button 
              onClick={onOpenPrivacy}
              className="hover:text-stone-300 transition-colors duration-300"
           >
              Política de Privacidade
           </button>
        </nav>

        {/* Copyright & Legal */}
        <div className="max-w-xl mx-auto space-y-4 pt-6 border-t border-stone-800/40 w-full">
           <p className="text-[10px] text-stone-600 uppercase tracking-widest">
              © {new Date().getFullYear()} Sabrina Gonzalez. Todos os direitos reservados.
           </p>
           
           <p className="text-[10px] text-stone-700 leading-relaxed">
             Este site tem caráter informativo e não substitui avaliação profissional.<br className="hidden sm:block"/>
             Em caso de emergência ou risco à vida, ligue 188 (CVV) ou procure um hospital.
           </p>
        </div>

      </div>
    </footer>
  );
};