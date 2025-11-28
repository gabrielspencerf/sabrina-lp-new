import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Symptoms } from './components/Symptoms';
import { About } from './components/About';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col relative">
      {/* Noise Texture Overlay for Premium Feel */}
      <div className="bg-noise"></div>

      <main className="flex-grow relative z-0">
        <Hero />
        <Symptoms />
        <About />
        <Methodology />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <FloatingChat />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
};

export default App;