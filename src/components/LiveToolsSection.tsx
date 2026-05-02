'use client';

import { motion } from 'framer-motion';
import { Sparkles, Rocket, Palette, CreditCard } from 'lucide-react';

export default function LiveToolsSection() {
  const tools = [
    { icon: <Sparkles size={42} />, label: "Name Generator", color: "#40c0ff" },
    { icon: <Palette size={42} />, label: "AI Logo Studio", color: "#b080ff" },
    { icon: <CreditCard size={42} />, label: "Business Cards", color: "#ff80c0" },
    { icon: <Rocket size={42} />, label: "UI/UX Launchpad", color: "#80ffaa" },
  ];

  return (
    <section id="tools" className="py-5 py-lg-6 position-relative cosmic-bg overflow-hidden">
      <div className="nebula-overlay opacity-50" />

      <div className="container position-relative">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="display-4 fw-bold mb-3">
              Live Tools — <span className="text-info">No Gravity Required</span>
            </h2>
            <p className="lead text-secondary fs-3">
              Instant cosmic creation. Zero login. Pure velocity.
            </p>
          </motion.div>
        </div>

        <div className="row g-4 justify-content-center">
          {tools.map((tool, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.9 }}
                whileHover={{ y: -20, scale: 1.08 }}
                className="glass p-5 rounded-4 text-center h-100 d-flex flex-column align-items-center justify-content-center border border-violet-subtle"
              >
                <div 
                  className="mb-4 p-4 rounded-circle"
                  style={{ 
                    background: `rgba(255,255,255,0.06)`, 
                    color: tool.color,
                    boxShadow: `0 0 40px ${tool.color}40` 
                  }}
                >
                  {tool.icon}
                </div>
                <h4 className="fw-semibold fs-4 mb-2">{tool.label}</h4>
                <p className="text-secondary small">Instant • Live • Cosmic</p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-secondary fs-5">
            Click any planet in the Instruments section above to begin
          </p>
        </div>
      </div>
    </section>
  );
}