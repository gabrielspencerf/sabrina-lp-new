import React, { useState } from 'react';
import { SectionFade } from './SectionFade';
import { Plus, Minus } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { openTypebot } from '../lib/typebot';

const faqs = [
  {
    question: "Não tenho tempo para terapia ou reflexões profundas.",
    answer: "O autoconhecimento não é sobre gastar tempo, mas economizá-lo. Decisões desalinhadas custam caro e geram retrabalho e estresse. O processo é estruturado para se integrar à sua rotina, evitando que você gaste energia com o que não importa."
  },
  {
    question: "Prefiro algo mais prático. Isso funciona?",
    answer: "Sim. A metodologia da Bússola Interna conecta propósito a resultados práticos. Não ficamos apenas na teoria abstrata; focamos em alinhar sua tomada de decisão, liderança e inteligência emocional para resultados concretos no dia a dia."
  },
  {
    question: "Só preciso ser mais produtivo, não de terapia.",
    answer: "Muitas vezes, a falta de produtividade é sintoma de falta de sentido. Se produtividade resolvesse, você já teria saído dessa. Sem clareza de propósito, a produtividade vira apenas um caminho mais rápido para o esgotamento."
  },
  {
    question: "Como funciona o atendimento?",
    answer: "As sessões são 100% online (videochamada), com duração de 50 minutos. Ofereço um espaço de sigilo absoluto e ética rigorosa, onde unimos acolhimento humano com profundidade técnica."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-shell-tight bg-brand-light/85 border-t border-stone-200">
      <div className="section-container max-w-3xl">
        <SectionFade>
          <SectionHeader
            title="Dúvidas Frequentes"
            subtitle="Esclareça questões comuns sobre o processo."
          />
        </SectionFade>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionFade key={index} delay={index * 50}>
              <div 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-brand-primary shadow-lg shadow-brand-primary/5' : 'border-transparent shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-serif text-lg ${openIndex === index ? 'text-brand-primary' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-stone-100 text-brand-slate'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  aria-hidden={openIndex !== index}
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-brand-slate font-light leading-relaxed">
                      {faq.answer}
                      <div className="pt-4">
                        <Button onClick={openTypebot} variant="secondary" className="w-full sm:w-auto">
                          Quero agendar minha sessão
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
};