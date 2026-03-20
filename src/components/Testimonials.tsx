import React from 'react';
import { SectionFade } from './SectionFade';
import { Quote } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const cases = [
  {
    role: "O Líder (45 anos)",
    problem: "Empresário admirado, mas exausto. Sentia que a vida era um fardo de obrigações.",
    solution: "Reconectou-se com sua missão, aprendeu a equilibrar exigência e significado e passou a tomar decisões alinhadas."
  },
  {
    role: "A Advogada (38 anos)",
    problem: "Bem-sucedida, mas desconectada de si. Quando parava de trabalhar, sentia um enorme vazio.",
    solution: "Resgatou sua identidade além do crachá e construiu relações genuínas, saindo do isolamento emocional."
  },
  {
    role: "O Médico (40 anos)",
    problem: "Obcecado por eficiência, frustrado por sentir que 'nada era suficiente'.",
    solution: "Entendeu que produtividade sem sentido gera exaustão. Redefiniu seu propósito para além da performance."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="section-shell bg-white/75">
      <div className="section-container text-center">
        <SectionFade>
          <SectionHeader
            title="Histórias de Transformação"
            subtitle="Casos reais ilustrativos (Identidades preservadas)"
          />
        </SectionFade>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <SectionFade key={i} delay={i * 100} className="h-full">
              <div className="p-8 text-left h-full flex flex-col items-start border-l border-brand-light hover:border-brand-primary transition-colors duration-300 bg-stone-50/50 rounded-r-3xl">
                <Quote className="text-brand-primary/20 mb-4 w-10 h-10 fill-brand-primary/20" />
                <div className="mb-6 flex-grow">
                    <p className="text-brand-slate text-lg italic mb-2 leading-relaxed">
                    "{c.problem}"
                    </p>
                    <p className="text-brand-dark font-medium text-base border-t border-stone-200 pt-2 mt-4">
                        Resultado: {c.solution}
                    </p>
                </div>
                <div className="mt-auto">
                    <p className="font-bold text-brand-primary text-sm uppercase tracking-wider">{c.role}</p>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
};