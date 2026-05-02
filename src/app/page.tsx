'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Headline from '@/components/Headline';
import CTAs from '@/components/CTAs';
// import Footer from '@/components/Footer';
import Brandname from '@/components/modals/Brandname';
import Logo from '@/components/modals/Logo';
import CardDesigner from '@/components/modals/CardDesigner';
import Gravity from '@/components/Gravity';
import LiveToolsSection from '@/components/LiveToolsSection';
import LaunchCTASection from '@/components/LaunchCTASection';

export default function Home() {
  const [modal, setModal] = useState<'name' | 'logo' | 'card' | null>(null);

  return (
    <>
      {/* <Header /> */}
      <Gravity />
      <main>
        {/* <CosmicCard title="SPACE" accentColor="#6ba0d4"/> */}
        {/* <Gravity /> */}
        <Hero />
        <Services setActiveModal={setModal} />
        <LiveToolsSection />
        <LaunchCTASection />
        {/* <ServicesV2 setActiveModal={setModal} /> */}
        {/* <Headline /> */}
        {/* <CTAs /> */}
      </main>

      {/* <Footer /> */}

      <AnimatePresence>
        {modal && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: 'rgba(10,0,21,0.94)', zIndex: 2000 }}
            onClick={() => setModal(null)}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              {modal === 'name' && <Brandname onClose={() => setModal(null)} />}
              {modal === 'logo' && <Logo onClose={() => setModal(null)} />}
              {modal === 'card' && <CardDesigner onClose={() => setModal(null)} />}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}