'use client';

import { motion } from 'framer-motion';
import CosmicCard from './CosmicCard';

interface ServicesProps {
  setActiveModal: (mode: 'name' | 'logo' | 'card' | null) => void;
}

export default function Services({ setActiveModal }: ServicesProps) {
  const items = [
    { title: "Brand Name Generator", desc: "Names that echo through the cosmos", icon: "✍️", mode: 'name' },
    { title: "AI Logo Studio", desc: "Visual identities pulled from the void", icon: "🎨", mode: 'logo' },
    { title: "Business Cards", desc: "Cards floating in zero gravity", icon: "💼", mode: 'card' },
    { title: "UI/UX Design", desc: "Interfaces from parallel dimensions", icon: "📱", mode: null },
  ];

  return (
    <section id="services" className="py-5 py-lg-5 position-relative cosmic-bg starfield-canvas opacity-10">
      <div className="nebula-overlay opacity-40" />
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <CosmicCard variant="stars" title="BRANDS" subtitle="Shapes • Space • Shades" />
          </div>
          <div className="col-lg-4 col-md-6">
            <CosmicCard variant="saturn" title="DESIGNS" subtitle="Calm • Clean • Considered" />
          </div>
          <div className="col-lg-4 col-md-6">
            <CosmicCard variant="moons" title="INTERFACES" subtitle="Soft • Sharp • Subtle" />
          </div>
        </div>
      </div>
      {/* <div className="container position-relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold text-center mb-5"
        >
          Instruments of Creation
        </motion.h2>

        <div className="row g-4">
          {items.map((item, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.4, duration: 0.8 }}
                whileHover={{ y: -14, scale: 1.04 }}
                onClick={() => {
                  if (item.mode) setActiveModal(item.mode as any);
                  else alert("Coming soon — hello@dotflex.space");
                }}
                className="glass p-4 p-lg-5 rounded-4 text-center cursor-pointer h-100 border border-violet-subtle hover-glow-violet"
              >
                <div className="display-1 mb-4">{item.icon}</div>
                <h3 className="h4 fw-semibold mb-3">{item.title}</h3>
                <p className="text-secondary">{item.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}