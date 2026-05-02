'use client';

import { motion } from 'framer-motion';
import { Sparkles, Palette, CreditCard, Monitor } from 'lucide-react';

export default function OrbitingPlanetHero() {
  return (
    <section className="min-vh-100 position-relative cosmic-bg flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 starfield" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-8 w-32 h-32 rounded-full border-4 border-cyan-400 flex items-center justify-center"
        >
          {/* <span className="text-6xl">D</span> */}
        </motion.div>

        {/* <h1 className="display-1 fw-bold mb-4 tracking-tighter">
          Instruments of Creation
        </h1>
        <p className="lead fs-3 text-secondary max-w-2xl mx-auto mb-10">
          Four powerful tools. One cosmic mission.<br />
          Build brands that feel born among the stars.
        </p> */}

        {/* <motion.button
          whileHover={{ scale: 1.08 }}
          className="btn btn-cosmic btn-lg px-8 py-4 rounded-full text-xl"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Tools
        </motion.button> */}
      </div>

      {/* Orbiting Feature Icons */}
      {[
        { icon: Sparkles, angle: 0, color: "#40c0ff" },
        { icon: Palette, angle: 90, color: "#b080ff" },
        { icon: CreditCard, angle: 180, color: "#ff80c0" },
        { icon: Monitor, angle: 270, color: "#80ffaa" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          animate={{
            rotate: [item.angle, item.angle + 360],
          }}
          transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
          style={{
            left: '50%',
            top: '48%',
            transformOrigin: '280px 0',
          }}
        >
          <div style={{ color: item.color }}>
            <item.icon size={42} />
          </div>
        </motion.div>
      ))}
    </section>
  );
}