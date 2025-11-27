import React from 'react';
import { Button } from './Button';
import { openTypebot } from '../lib/typebot';
import { SectionFade } from './SectionFade';
import { Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-light text-center px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/50 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionFade>

          {/* Header Block */}
          <div className="mb-16">
            <span className="text-brand-primary font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
              Tese Central
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-6 leading-[1.15]">
              O sentido é a estrutura para <br />
              a superação do <span className="italic text-brand-primary">caos.</span>
            </h2>
            <p className="text-brand-slate text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Sem uma bússola interna, qualquer caminho leva à exaustão. Convido você a assumir o leme e navegar com direção e consciência.
            </p>
          </div>

          {/* White Card Container */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-stone-200/40 border border-white/80 mb-12">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 text-left">

              {/* Item 1 */}
              <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0 text-brand-primary border border-brand-primary/20">
                  <Compass size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-dark mb-3">Clareza e Direção</h3>
                  <p className="text-brand-slate font-light text-sm leading-relaxed">
                    Saia do piloto automático e tome decisões alinhadas aos seus valores reais, eliminando o ruído mental.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0 text-brand-primary border border-brand-primary/20">
                  <ShieldCheck size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-dark mb-3">Resiliência Real</h3>
                  <p className="text-brand-slate font-light text-sm leading-relaxed">
                    Aprenda a encontrar sentido e crescimento mesmo nas adversidades, fortalecendo sua estrutura emocional.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Action Block */}
          <div className="flex flex-col items-center gap-6">
            <Button onClick={openTypebot} variant="primary" className="text-base md:text-lg px-10 py-5 shadow-2xl shadow-stone-900/10 rounded-full group">
              QUERO INICIAR MEU PROCESSO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
              Atendimento Particular • Compromisso com Resultado
            </p>
          </div>

        </SectionFade>
      </div>
    </section>
  );
};