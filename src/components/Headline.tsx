'use client';

import { motion } from 'framer-motion';

export default function Headline() {
  return (
    <section id="tools" className="py-5 bg-black text-center position-relative">
      <div className="nebula-overlay opacity-30" />
      <div className="container position-relative">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="display-4 fw-bold mb-3"
        >
          Live Tools — No Gravity Required
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="lead text-secondary"
        >
          Zero login. Zero cost. Pure cosmic creation.
        </motion.p>
      </div>
    </section>
  );
}