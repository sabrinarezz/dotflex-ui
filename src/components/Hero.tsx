'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Float from './Float';
import Gravity from './Gravity';
import EmailModal from './modals/EmailModal';
import { useContactModal } from '@/hooks/useContactModal';
import { useState } from 'react';

export default function Hero() {
  // const { isOpen, openContactModal, closeContactModal } = useContactModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Gravity /> */}
      <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden cosmic-bg">
        <Float />
        <div className="nebula-overlay" />

        <div className="container position-relative text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          >
            <div className="d-inline-flex glow-shadow align-items-center gap-2 px-4 py-2 glass rounded-pill my-5">
              <Sparkles size={18} className="text-info" /> Cosmic Identity Lab
            </div>

            <h1 className="display-1 fw-bold mb-4" style={{ textShadow: '0 0 60px rgba(192,132,252,0.45)' }}>
              Your brand.<br />Born among stars.
            </h1>

            <p className="fs-4 text-secondary mb-5 opacity-90">
              Brandnames • Orbital Logos • Gravitational Cards • Interfaces From Light Years Ahead
            </p>

            <motion.button
              whileHover={{ scale: 1.07, y: -8 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsOpen(true)}
              // onClick={openContactModal}
              // onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-cosmic btn-lg px-5 py-2 fw-bold rounded-pill shadow-lg d-inline-flex align-items-center gap-2"
            >
              Enter Orbit <Sparkles size={22} />
            </motion.button>

            {/* <EmailModal isOpen={isOpen} onClose={closeContactModal} /> */}
            <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </motion.div>
        </div>
      </section>
    </>
  );
}