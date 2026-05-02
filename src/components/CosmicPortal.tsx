// app/contact/components/CosmicPortalHero.tsx
'use client';

import { motion } from 'framer-motion';

export default function CosmicPortalHero() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Portal */}
      <div className="relative w-96 h-96">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/40 animate-spin-slow" 
             style={{ animationDuration: '30s' }} />
        
        <div className="absolute inset-8 rounded-full border border-purple-400/60 animate-spin" 
             style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

        {/* Inner Glow Portal */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="text-[120px] drop-shadow-2xl"
          >
            🌌
          </motion.div>
        </div>
      </div>

      <div className="absolute text-center z-20">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Step Into The Portal
        </h1>
        <p className="text-2xl text-gray-300 mb-12 max-w-md mx-auto">
          Let's create something cosmic together
        </p>

        <motion.a
          href="#contact-form"
          whileHover={{ scale: 1.08 }}
          className="inline-block px-14 py-7 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl text-xl font-medium hover:bg-white/20 transition-all duration-300"
        >
          Open Wormhole →
        </motion.a>
      </div>
    </div>
  );
}