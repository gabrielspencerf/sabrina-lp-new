import React from 'react';
import heroImage from '../assets/images/hero-image.webp';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';
import { openTypebot } from '../lib/typebot';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center bg-brand-light overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white/60 to-transparent -skew-x-12 translate-x-1/3 z-0"></div>
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse duration-[5000ms]"></div>

            <div className="container mx-auto px-6 relative z-10 pt-20 pb-24 md:pt-16 md:pb-0">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-10 lg:gap-16">

                    {/* Content */}
                    <div className="w-full lg:w-3/5 space-y-6 md:space-y-8 animate-fade-in-up">

                        {/* Branding / Identity Block */}
                        <div className="flex flex-col items-start gap-1 mb-2">
                            <h2 className="font-serif text-3xl text-brand-dark tracking-tight">Sabrina Gonzalez</h2>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-primary font-bold">Psicologia Clínica • CRP 06/118764</span>
                        </div>

                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-slate">Psicoterapia Online</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] text-brand-dark tracking-tight">
                            Saia do ciclo de exaustão e reconstrua o <span className="italic text-brand-primary font-light">sentido</span> da sua vida.
                        </h1>

                        <p className="text-lg md:text-xl text-brand-slate max-w-lg leading-relaxed border-l border-brand-primary/30 pl-8">
                            Uma abordagem integrativa que une Logoterapia, Neurociência e Filosofia para quem busca mais do que apenas "funcionar".
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-2">
                            <Button onClick={openTypebot} className="gap-3 shadow-2xl shadow-stone-900/20">
                                <MessageCircle size={18} strokeWidth={2.5} />
                                Agendar Sessão
                            </Button>
                        </div>
                    </div>

                    {/* Image with Premium Frame */}
                    <div className="w-full lg:w-2/5 relative flex justify-center lg:justify-end">
                        <div className="relative z-10 rounded-t-full rounded-b-[10rem] overflow-hidden shadow-2xl shadow-stone-900/15 aspect-square md:aspect-[3/4] lg:aspect-[4/5] w-full max-w-[220px] sm:max-w-[260px] md:max-w-sm lg:max-w-[320px] transform transition-all duration-1000 border-[6px] border-white ring-1 ring-stone-100">
                            <img
                                src={heroImage}
                                alt="Ambiente terapêutico acolhedor"
                                className="w-full h-full object-cover sepia-[0.05] contrast-[0.95] hover:scale-110 transition-transform duration-[2s]"
                                loading="eager"
                            />
                            {/* Gradient overlay for text protection if needed, or just mood */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-40"></div>
                        </div>

                        {/* Abstract Outline Decoration - hidden on mobile */}
                        <div className="hidden lg:block absolute -z-10 top-12 right-0 lg:-right-8 w-full max-w-md h-full border-[1.5px] border-brand-primary/30 rounded-t-full rounded-b-[10rem] animate-float" style={{ animationDelay: '1s' }}></div>
                    </div>

                </div>
            </div>

            {/* Minimalist Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
                <div className="w-6 h-10 border-2 border-brand-dark rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-brand-dark rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};
