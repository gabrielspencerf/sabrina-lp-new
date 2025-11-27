import React from 'react';
import { Lock, Compass, Sun } from 'lucide-react';
import { SectionFade } from './SectionFade';

const steps = [
  {
    icon: Lock,
    title: "Fase 1: A Prisão (O Caos)",
    description: "Você sente que está no piloto automático. O excesso de demandas e a falta de clareza geram exaustão. Aqui, o foco é diagnosticar padrões e reconhecer que a insatisfação vem da desconexão interna, não apenas do trabalho."
  },
  {
    icon: Compass,
    title: "Fase 2: O Processo (A Bússola)",
    description: "Hora de ordenar a vida. Trabalhamos autoconsciência, resgate de valores elevados e reestruturação da identidade. Criamos rotinas que sustentam o sentido, equilibrando ordem e flexibilidade."
  },
  {
    icon: Sun,
    title: "Fase 3: A Liberdade (O Sentido)",
    description: "Você deixa de ser coadjuvante e assume o leme. A vida ganha intencionalidade. As decisões passam a ser alinhadas com um propósito maior, gerando resiliência e realização que não dependem de validação externa."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="py-32 bg-brand-dark text-stone-100 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionFade>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 border-b border-stone-800 pb-12">
             <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-brand-primary"></span>
                  <span className="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase">As 3 Fases da Transformação</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-none">
                  Método da <br/> <span className="italic text-brand-primary font-light">Bússola Interna</span>
                </h2>
             </div>
             <p className="text-stone-400 max-w-md text-right md:text-left text-lg font-light leading-relaxed">
                Um processo estruturado que conduz você da exaustão à clareza, unindo Ciência e Alma.
             </p>
          </div>
        </SectionFade>

        <div className="grid md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-stone-800 via-brand-primary/30 to-stone-800 z-0"></div>

          {steps.map((step, index) => (
            <SectionFade key={index} delay={index * 200} className="relative z-10">
              <div className="bg-stone-900 p-10 rounded-[2.5rem] hover:bg-stone-800/80 transition-all duration-500 h-full group border border-stone-800 hover:border-brand-primary/30 hover:-translate-y-2 shadow-2xl shadow-black/20 flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-stone-950 rounded-2xl flex items-center justify-center text-brand-primary font-serif font-bold text-xl border border-stone-800 shadow-inner group-hover:scale-110 transition-transform duration-500 relative shrink-0">
                     {/* Icon Overlay */}
                     <step.icon className="absolute w-6 h-6 opacity-20 text-white" />
                     <span className="relative z-10">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-brand-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed text-base font-light">{step.description}</p>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
};