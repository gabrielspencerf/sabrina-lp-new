import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-brand-light w-full max-w-2xl max-h-[90vh] md:max-h-[85vh] flex flex-col rounded-3xl shadow-2xl relative animate-fade-in-up border border-white/50"
        onClick={e => e.stopPropagation()}
      >
        {/* Header - Always visible */}
        <div className="shrink-0 bg-brand-light/95 backdrop-blur px-6 py-4 md:px-8 md:py-6 flex justify-between items-center border-b border-brand-accent rounded-t-3xl z-10">
          <h2 className="text-xl md:text-2xl font-serif text-brand-dark flex items-center gap-3">
            <ShieldCheck className="text-brand-primary shrink-0" size={24}/>
            <span className="truncate">Política de Privacidade</span>
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 -mr-2 text-brand-muted hover:text-brand-dark transition-colors rounded-full hover:bg-stone-200/50"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content - Scrollable Area */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6 md:space-y-8 text-brand-slate leading-relaxed text-sm md:text-base overscroll-contain">
          <p>
            A sua privacidade é fundamental. Esta política descreve como tratamos as informações neste site, reforçando nosso compromisso com a ética e o sigilo profissional.
          </p>

          <section>
            <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2 font-serif">1. Sigilo e Ética Profissional</h3>
            <p>
              Como Psicóloga Clínica, sigo rigorosamente o <strong>Código de Ética Profissional do Psicólogo</strong>. Todas as informações trocadas durante as sessões de terapia são protegidas por sigilo absoluto, não sendo compartilhadas com terceiros sem o seu consentimento, exceto em casos extremos previstos em lei (risco iminente à vida).
            </p>
          </section>

          <section>
            <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2 font-serif">2. Coleta de Dados no Site</h3>
            <p>
              Este site não coleta dados pessoais de forma automática para fins comerciais. As informações (como nome e telefone) são coletadas apenas quando você as fornece voluntariamente através de:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 md:space-y-2 marker:text-brand-primary">
              <li>Botões de contato direto (WhatsApp);</li>
              <li>Formulários de agendamento;</li>
              <li>Chat interativo.</li>
            </ul>
            <p className="mt-2">
              A finalidade única desses dados é possibilitar o retorno do seu contato e o agendamento de consultas.
            </p>
          </section>

          <section>
            <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2 font-serif">3. Uso de Ferramentas de Chat (Typebot)</h3>
            <p>
              Utilizamos a ferramenta <strong>Typebot</strong> para facilitar o atendimento inicial e triagem. As interações realizadas no chat automatizado são processadas pela plataforma do Typebot seguindo rigorosos padrões de segurança.
            </p>
            <div className="mt-3 bg-white p-4 rounded-xl border border-brand-primary/20 text-xs leading-relaxed">
              <span className="font-bold text-brand-dark block mb-1">Nota importante:</span>
              Embora o ambiente seja seguro, recomendamos que <strong>não compartilhe detalhes profundos ou sensíveis da sua intimidade no chat inicial</strong>. Deixe para aprofundar essas questões no ambiente criptografado e sigiloso da videochamada durante a consulta.
            </div>
          </section>

          <section>
            <h3 className="text-base md:text-lg font-bold text-brand-dark mb-2 font-serif">4. Cookies</h3>
            <p>
              Podemos utilizar cookies técnicos essenciais para o funcionamento correto do site. Não vendemos dados de navegação para terceiros.
            </p>
          </section>
        </div>
        
        {/* Footer - Always visible */}
        <div className="shrink-0 p-5 md:p-6 bg-brand-light border-t border-brand-accent flex justify-end rounded-b-3xl z-10">
          <Button 
            onClick={onClose}
            variant="outline"
            className="w-full md:w-auto px-8 py-3"
          >
            Entendi
          </Button>
        </div>
      </div>
    </div>
  );
};