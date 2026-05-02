// app/services/components/BlackHoleHero.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BlackHole() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      containerRef.current.style.setProperty('--mouse-x', `${x * 20}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 20}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Black Hole Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a0033_0%,#000_70%)]" />

      {/* Accretion Disk */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-purple-500/30 animate-spin-slow"
           style={{ animationDuration: '25s' }} />

      {/* Central Black Hole */}
      <div className="absolute w-32 h-32 rounded-full bg-black border-8 border-purple-400 shadow-[0_0_80px_#a855f7] z-10" />

      {/* Floating Stars with Gravity Effect */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            left: `calc(50% + var(--mouse-x))`,
            top: `calc(50% + var(--mouse-y))`,
            scale: [1, 0.6, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-bold text-white tracking-tighter mb-6"
          style={{ textShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
        >
          Services that<br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Pull Results
          </span>
        </motion.h1>

        <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          We create digital experiences with gravitational force.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="group relative px-10 py-6 text-lg font-semibold rounded-2xl overflow-hidden border border-purple-500/50 bg-black/70 backdrop-blur-xl hover:border-purple-400 transition-all"
        >
          <span className="relative z-10">Explore Our Services</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity" />
        </motion.button>
      </div>

      <div className="absolute bottom-10 text-white/50 text-sm tracking-widest animate-pulse">
        SCROLL TO ENTER THE GRAVITY WELL ↓
      </div>
    </div>
  );
}