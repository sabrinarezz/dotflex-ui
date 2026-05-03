'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';
import EmailModal from './modals/EmailModal';
import { useState } from 'react';

export default function LaunchCTASection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="process" className="py-5 py-lg-6 position-relative cosmic-bg overflow-hidden border-top border-violet-subtle">
      <div className="nebula-overlay opacity-60" />

      {/* Floating background elements */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="position-absolute"
          style={{ top: '20%', left: '12%', fontSize: '6rem', opacity: 0.07 }}
        >
          🪐
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="position-absolute"
          style={{ bottom: '25%', right: '15%', fontSize: '4.5rem', opacity: 0.08 }}
        >
          ⭐
        </motion.div>
      </div>

      <div className="container position-relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          <h2 className="display-3 fw-bold mb-4">
            From thought to orbit —<br />
            <span className="text-info">under 10 minutes</span>
          </h2>

          <p className="lead text-secondary fs-3 mb-5 max-w-2xl mx-auto">
            No meetings. No revisions. No earthly delays.<br />
            Just pure cosmic velocity.
          </p>

          <motion.button
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(true)}
            // onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-cosmic btn-lg px-5 py-4 fs-3 fw-bold rounded-pill d-inline-flex align-items-center gap-3 shadow-lg"
          >
            Begin Launch Sequence 
            <Rocket size={28} />
            <ArrowRight size={28} />
          </motion.button>

          <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

          <div className="mt-5 d-flex justify-content-center gap-5 text-secondary small">
            <div className="d-flex align-items-center gap-2">
              <Sparkles size={18} /> Instant Names
            </div>
            <div className="d-flex align-items-center gap-2">
              <Sparkles size={18} /> AI Logos
            </div>
            <div className="d-flex align-items-center gap-2">
              <Sparkles size={18} /> Zero-Gravity Cards
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}