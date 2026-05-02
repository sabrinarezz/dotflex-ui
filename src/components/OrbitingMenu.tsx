'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface Tool {
  id: number;
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

interface OrbitingMenuProps {
  tools: Tool[];
  activeTool: number;
  setActiveTool: (id: number) => void;
}

export default function OrbitingMenu({ tools, activeTool, setActiveTool }: OrbitingMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(260);

  // Dynamically calculate radius based on container size
  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // Responsive radius: smaller on mobile, larger on desktop
        const newRadius = Math.min(Math.max(width * 0.38, 180), 280);
        setRadius(newRadius);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div ref={containerRef} className="orbit-wrapper py-5" style={{ height: '720px', position: 'relative' }}>
      <div className="orbit-container mx-auto" style={{ maxWidth: '860px', height: '100%', position: 'relative' }}>
        
        {tools.map((tool, index) => {
          const angle = (index * 90) - (activeTool * 90);
          const isActive = activeTool === index;

          return (
            <motion.div
              key={index}
              className="orbit-item"
              animate={{
                rotate: `${angle}deg`,
                scale: isActive ? 1.22 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                mass: 1.1,
              }}
              whileHover={{
                scale: isActive ? 1.32 : 1.18,
              }}
              onClick={() => setActiveTool(index)}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transformOrigin: 'center',
                width: '220px',
                cursor: 'pointer',
              }}
            >
              {/* This inner div counters the rotation so text stays upright */}
              <div
                style={{
                  transform: `rotate(${-angle}deg)`,
                  width: '100%',
                  height: '100%',
                }}
              >
                <div 
                  className="glass orbit-card text-center h-100 p-4 rounded-4"
                  style={{ 
                    borderColor: `${tool.color}66`,
                    background: isActive ? 'rgba(20, 15, 45, 0.95)' : 'rgba(15, 12, 35, 0.85)'
                  }}
                >
                  <div style={{ color: tool.color }} className="mb-4">
                    <tool.icon size={54} />
                  </div>
                  <h5 className="fw-bold mb-2">{tool.title}</h5>
                  <p className="text-secondary small mb-0 px-2">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Central Core */}
        <div className="central-core">
          <div className="core-inner">
            <Rocket size={56} className="text-info" />
            <p className="mt-3 mb-0 fw-semibold text-info small">DOTFLEX CORE</p>
          </div>
        </div>
      </div>
    </div>
  );
}