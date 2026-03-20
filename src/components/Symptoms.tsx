import React from 'react';
import { BatteryWarning, BrainCircuit, Frown, Coffee } from 'lucide-react';
import { SectionFade } from './SectionFade';
import { SectionHeader } from './SectionHeader';

const symptoms = [
  {
    icon: BatteryWarning,
    title: "Cansaço Crônico",
    description: "Um cansaço que não melhora, mesmo após o descanso de fim de semana ou férias curtas."
  },
  {
    icon: BrainCircuit,
    title: "Mente Acelerada",
    description: "Dificuldade de concentração, esquecimentos frequentes e sensação de 'travar' mentalmente."
  },
  {
    icon: Frown,
    title: "Irritabilidade",
    description: "Pavio curto com colegas e família, reagindo de forma desproporcional a pequenas situações."
  },
  {
    icon: Coffee,
    title: "Vazio e Desânimo",
    description: "Vontade de se afastar de tudo, perdendo o interesse em atividades que antes faziam sentido."
  }
];

export const Symptoms: React.FC = () => {
  return (
    <section id="sintomas" className="section-shell bg-white/70 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <SectionFade>
          <SectionHeader
            className="mb-20"
            title="Você sente que, apesar de tudo, algo ainda falta?"
            subtitle="Muitas vezes o corpo pede pausa e a alma pede sentido, mas continuamos no automático. Identificar a origem do desconforto é o primeiro passo."
          />
        </SectionFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {symptoms.map((item, index) => (
            <SectionFade key={index} delay={index * 100} className="h-full">
              <div className="group relative bg-brand-light/30 p-8 rounded-[2rem] hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 h-full border border-stone-100 hover:border-brand-primary/20 overflow-hidden">
                {/* Hover Gradient Bloom */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
                
                <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-brand-primary group-hover:scale-110 transition-transform duration-500 border border-brand-accent group-hover:border-brand-primary/50 group-hover:text-brand-dark">
                  <item.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                
                <h3 className="text-xl font-serif text-brand-dark mb-4 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
};