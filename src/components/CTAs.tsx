'use client';

import { motion } from 'framer-motion';

export default function CTAs() {
  return (
    <section id="process" className="py-5 border-top border-violet-subtle position-relative cosmic-radial-bg">
      <div className="container text-center position-relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold mb-4"
        >
          From thought to orbit — under 10 minutes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="lead text-secondary mb-5"
        >
          No meetings. No friction. Just escape velocity.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08, y: -8 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn btn-cosmic btn-lg px-5 py-4 fs-3 fw-bold rounded-pill shadow-lg"
        >
          Begin Launch Sequence →
        </motion.button>
      </div>
    </section>
  );
}