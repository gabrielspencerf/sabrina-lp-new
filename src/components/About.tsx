import React from 'react';
import aboutImage from '../assets/images/about-image.webp';
import { SectionFade } from './SectionFade';
import { Quote, GraduationCap, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="section-shell bg-brand-light/80 relative">
      <div className="section-container">
        <div className="surface-soft p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

          <div className="w-full lg:w-5/12 relative order-2 lg:order-1">
            <SectionFade>
              <div className="relative">
                {/* Modern abstract shape image mask */}
                <div className="aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-900/10">
                  <img
                    src={aboutImage}
                    alt="Sabrina Gonzalez, Psicóloga"
                    className="protected-media w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out sepia-[0.15]"
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(event) => event.preventDefault()}
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-stone-100">
                  <p className="font-serif text-brand-dark text-lg italic">
                    "A psicóloga do propósito."
                  </p>
                  <p className="text-xs font-bold text-brand-primary mt-2 uppercase tracking-wider">Sabrina Gonzalez</p>
                </div>
              </div>
            </SectionFade>
          </div>

          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <SectionFade delay={200}>
              <div className="mb-8">
                <h3 className="text-brand-dark font-bold tracking-widest text-sm uppercase mb-2">Sobre Mim</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">
                  Ciência e <span className="italic">Alma</span>
                </h2>
              </div>

              <div className="space-y-6 text-brand-slate text-lg leading-relaxed font-light">
                <p>
                  Muitos profissionais tentam encaixar o paciente em uma única abordagem. Minha prática clínica vai na contramão: utilizo uma <strong>metodologia integrativa</strong> que personaliza o processo para a complexidade da sua história.
                </p>
                <div>
                  <a
                    href="#metodo"
                    className="inline-flex items-center text-base font-medium text-brand-primary hover:text-brand-dark transition-colors"
                  >
                    Ver as 3 fases da metodologia
                  </a>
                </div>
                <p>
                  Sou Sabrina Gonzalez (<strong className="text-brand-dark">CRP 06/118764</strong>). Graduada pela Faculdade de Ciências Médicas da Santa Casa de SP e pós-graduada em Psicologia Clínica pelo CEPSIC/HC-USP.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4 mb-6">
                  <div className="bg-white/60 p-4 rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="text-brand-primary w-5 h-5" />
                      <span className="font-serif font-bold text-brand-dark">Formação Sólida</span>
                    </div>
                    <p className="text-sm">Santa Casa de SP & USP. Neurociência aplicada à clínica.</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="text-brand-primary w-5 h-5" />
                      <span className="font-serif font-bold text-brand-dark">Base Teórica</span>
                    </div>
                    <p className="text-sm">Viktor Frankl (Logoterapia), Psicanálise e Filosofia Existencial.</p>
                  </div>
                </div>

                <p>
                  Meu trabalho não é apenas tratar sintomas, mas a questão central: a falta de sentido. Ajudo profissionais exaustos a transformarem o caos interno em uma estrutura de vida coerente.
                </p>

                <div className="bg-white p-8 rounded-2xl border-l-2 border-brand-primary shadow-sm mt-8">
                  <Quote className="text-brand-primary w-8 h-8 mb-4 opacity-50" />
                  <p className="text-brand-dark font-medium italic">
                    "O sofrimento não precisa ser um fim, mas pode ser o solo fértil para o seu maior recomeço."
                  </p>
                </div>
              </div>
            </SectionFade>
          </div>

        </div>
      </div>
    </section>
  );
};