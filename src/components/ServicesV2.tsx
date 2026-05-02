'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Service {
  title: string;
  icon: string;
  desc: string;
  color: string;
  pathRadiusX: number;   // horizontal radius of ellipse
  pathRadiusY: number;   // vertical radius (for elliptical shape)
  orbitSpeed: number;    // seconds per full loop
  startAngle: number;    // initial position in degrees
  dashColor: string;     // path color
  bobDelay: number;      // stagger floating animation
}

const services: Service[] = [
  {
    title: "Brand Name Generator",
    icon: "✍️",
    desc: "AI-powered naming engine that creates memorable, domain-friendly brand identities in seconds — inspired by cosmic resonance.",
    color: "#40c0ff",
    pathRadiusX: 420,
    pathRadiusY: 280,
    orbitSpeed: 38,
    startAngle: 45,
    dashColor: "#40c0ff",
    bobDelay: 0,
  },
  {
    title: "AI Logo Studio",
    icon: "🎨",
    desc: "Instant vector logos with multiple style variants — color-coordinated, scalable, and ready for any cosmic brand launch.",
    color: "#b080ff",
    pathRadiusX: 380,
    pathRadiusY: 320,
    orbitSpeed: 46,
    startAngle: 160,
    dashColor: "#b080ff",
    bobDelay: 3,
  },
  {
    title: "Business Cards",
    icon: "💼",
    desc: "Live-preview designer with gradient physics — export print-ready cards that feel weightless yet powerful.",
    color: "#ff80c0",
    pathRadiusX: 450,
    pathRadiusY: 260,
    orbitSpeed: 52,
    startAngle: 280,
    dashColor: "#ff80c0",
    bobDelay: 6,
  },
  {
    title: "UI/UX Design",
    icon: "📱",
    desc: "Futuristic interfaces & user flows — from wireframes to interactive prototypes, built for speed and stellar experiences.",
    color: "#80ffaa",
    pathRadiusX: 400,
    pathRadiusY: 300,
    orbitSpeed: 42,
    startAngle: 340,
    dashColor: "#80ffaa",
    bobDelay: 9,
  },
];

interface ServicesProps {
  setActiveModal: (mode: 'name' | 'logo' | 'card' | null) => void;
}

export default function ServicesV2({ setActiveModal }: ServicesProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.016);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-5 py-lg-5 position-relative cosmic-radial-bg overflow-hidden">
      <div className="nebula-overlay opacity-40" />

      <div className="container position-relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold mb-5"
        >
          Instruments of Creation
        </motion.h2>

        {/* Main container for all orbits & planets */}
        <div
          className="position-relative mx-auto"
          style={{
            width: '1000px',
            height: '900px',
            maxWidth: '95vw',
            maxHeight: '90vh',
          }}
        >
          {services.map((s, i) => {
            // Calculate position on elliptical path
            const angle = (time * 360) / s.orbitSpeed + s.startAngle;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * s.pathRadiusX;
            const y = Math.sin(rad) * s.pathRadiusY;

            // SVG path definition (ellipse)
            const pathD = `
              M ${s.pathRadiusX} 0
              A ${s.pathRadiusX} ${s.pathRadiusY} 0 1 1 -${s.pathRadiusX} 0
              A ${s.pathRadiusX} ${s.pathRadiusY} 0 1 1 ${s.pathRadiusX} 0
            `;

            return (
              <div key={i} className="position-absolute top-50 start-50 translate-middle">
                {/* Faint sparkly orbit path */}
                <div
                  className="orbit-path"
                  style={{
                    width: `${s.pathRadiusX * 2 + 40}px`,
                    height: `${s.pathRadiusY * 2 + 40}px`,
                    transform: `translate(-50%, -50%) rotate(${s.startAngle}deg)`,
                    '--path-color': s.dashColor,
                  } as React.CSSProperties}
                >
                  <svg viewBox={`-${s.pathRadiusX + 20} -${s.pathRadiusY + 20} ${s.pathRadiusX * 2 + 40} ${s.pathRadiusY * 2 + 40}`}>
                    <path d={pathD} />
                  </svg>
                </div>

                {/* Planet */}
                <motion.div
                  className="planet"
                  animate={{
                    rotateY: [0, 360],           // slow self-rotation
                    y: [0, -18, 0],              // vertical bob
                  }}
                  transition={{
                    rotateY: { duration: 50 + i * 12, repeat: Infinity, ease: "linear" },
                    y: { duration: 8 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: s.bobDelay },
                  }}
                  whileHover={{
                    rotateY: 180,
                    scale: 1.14,
                    transition: { duration: 0.7, ease: "easeOut" },
                  }}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (s.title.includes("Name")) setActiveModal('name');
                    else if (s.title.includes("Logo")) setActiveModal('logo');
                    else if (s.title.includes("Card")) setActiveModal('card');
                    else alert("Reach out → hello@dotflex.space");
                  }}
                >
                  {/* Front */}
                  <div
                    className="planet-face planet-front"
                    style={{
                      background: `linear-gradient(145deg, #0f0820, #1a0f2e)`,
                      borderColor: `${s.color}44`,
                    }}
                  >
                    <div style={{ fontSize: '6rem', marginBottom: '1.2rem' }}>
                      {s.icon}
                    </div>
                    <div className="planet-title" style={{ color: s.color }}>
                      {s.title}
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="planet-face planet-back"
                    style={{
                      background: `linear-gradient(145deg, #080f20, #0f1a2e)`,
                      borderColor: `${s.color}66`,
                    }}
                  >
                    <div className="planet-desc px-4">
                      {s.desc}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <p className="text-secondary mt-5 fs-5 opacity-75">
          Hover planets to reveal details • Each follows its own cosmic trajectory
        </p>
      </div>
    </section>
  );
}