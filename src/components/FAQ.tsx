import React, { useState } from 'react';
import { SectionFade } from './SectionFade';
import { Plus, Minus } from 'lucide-react';

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
    <section id="faq" className="py-24 bg-brand-light border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionFade>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">Dúvidas Frequentes</h2>
            <p className="text-brand-slate font-light">
              Esclareça questões comuns sobre o processo.
            </p>
          </div>
        </SectionFade>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionFade key={index} delay={index * 50}>
              <div 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-brand-primary shadow-lg shadow-brand-primary/5' : 'border-transparent shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-serif text-lg ${openIndex === index ? 'text-brand-primary' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-stone-100 text-brand-slate'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                
                <div 
                  className={`px-6 text-brand-slate font-light leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
};