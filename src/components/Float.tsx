'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Float() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 140 - 20,
      size: Math.random() * 3 + 0.6,
      delay: Math.random() * 25,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 pointer-events-none" style={{ zIndex: -2 }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="position-absolute rounded-circle bg-white"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: p.size,
            height: p.size,
            opacity: 0.4 + Math.random() * 0.4,
          }}
          animate={{
            y: ['0vh', '-140vh'],
            opacity: [0, 0.7, 0.2, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 18,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}