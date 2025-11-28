import React from 'react';
import creativeLaneLogo from '../assets/images/creative_lane_ltda.svg';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-brand-dark py-12 px-6 border-t border-stone-800">
      <div className="container mx-auto max-w-6xl">

        {/* Main Footer Content - Grid Layout on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Left Column: Brand Identity */}
          <div className="space-y-2 text-center">
            <h4 className="font-serif text-stone-200 text-2xl tracking-wide">Sabrina Gonzalez</h4>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-primary font-medium">Psicologia Clínica</p>
          </div>

          {/* Center Column: Creative Lane Badge */}
          <div className="flex items-center justify-center">
            <a
              href="https://creativelane.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16"
              aria-label="Creative Lane"
            >
              {/* Rotating circular text */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    />
                  </defs>
                  <text className="text-[7px] fill-stone-600 uppercase tracking-[0.25em] font-medium">
                    <textPath href="#circlePath" startOffset="0%">
                      ASSESSORADO POR • CREATIVE LANE •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center logo */}
              <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                <img
                  src={creativeLaneLogo}
                  alt="Creative Lane"
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-800"
                />
              </div>
            </a>
          </div>

          {/* Right Column: Navigation Links */}
          <nav className="flex flex-col gap-3 text-xs text-stone-500 font-light tracking-wide text-center">
            <a href="#faq" className="hover:text-stone-300 transition-colors duration-300">Dúvidas Frequentes</a>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-stone-300 transition-colors duration-300"
            >
              Política de Privacidade
            </button>
          </nav>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="max-w-3xl mx-auto space-y-4 pt-8 mt-8 border-t border-stone-800/40 text-center">
          <p className="text-[10px] text-stone-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Sabrina Gonzalez. Todos os direitos reservados.
          </p>

          <p className="text-[10px] text-stone-700 leading-relaxed">
            Este site tem caráter informativo e não substitui avaliação profissional.<br className="hidden sm:block" />
            Em caso de emergência ou risco à vida, ligue 188 (CVV) ou procure um hospital.
          </p>
        </div>

      </div>
    </footer>
  );
};
