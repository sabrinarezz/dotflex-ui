// app/process/components/SpaceshipLaunchHero.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SpaceshipLaunchHero() {
  const [launched, setLaunched] = useState(false);

  const handleLaunch = () => {
    setLaunched(true);
    setTimeout(() => setLaunched(false), 4000);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:50px_50px]" />

      {/* Rocket */}
      <motion.div
        animate={launched ? { y: -1200, rotate: -8 } : { y: 0, rotate: 0 }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
        className="relative z-20"
      >
        <div className="text-[180px] leading-none">🚀</div>
      </motion.div>

      <div className="relative z-30 text-center px-6">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
          Our Process
        </h1>
        <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-12">
          From Idea to Orbit
        </p>

        <motion.button
          onClick={handleLaunch}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-6 bg-white text-black rounded-2xl text-xl font-semibold flex items-center gap-4 group"
        >
          Begin Launch Sequence
          <span className="group-hover:rotate-45 transition-transform">→</span>
        </motion.button>
      </div>

      {/* Smoke Effect */}
      {launched && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          className="absolute bottom-40 left-1/2 -translate-x-1/2 text-8xl"
        >
          🔥💨
        </motion.div>
      )}
    </div>
  );
}