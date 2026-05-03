'use client';

import { motion } from 'framer-motion';
import { Sparkles, Palette, CreditCard, Monitor } from 'lucide-react';
import './Components.css'
import Image from 'next/image';

export default function OrbitingPlanetHero() {
  return (
    <section className="min-vh-100 position-relative d-flex align-items-center justify-content-center overflow-hidden mt-5">

      {/* Starfield Background */}
      <div className="position-absolute inset-0 starfield" />

      <div className="container position-relative z-3 text-center">
        <div className="row justify-content-between">
          <div className="col-lg-10 col-xl-8">

            {/* Central DOTFLEX Core */}
            {/* Main Heading */}
            {/* <h1 className="display-1 fw-bold text-white mb-4 tracking-tighter">
              Instruments of Creation
            </h1> */}

            <p className="display-3 mb-5 max-w-2xl mx-auto">
              Four powerful tools.<br />
              One cosmic mission.
            </p>

            <p className="fs-4 text-secondary mb-5">
              Build brands that feel born among the stars.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-cosmic btn-lg px-5 py-4 fs-4 fw-semibold rounded-pill d-inline-flex align-items-center gap-3 shadow-lg"
            >
              Explore Our Tools
              <Sparkles size={26} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Orbiting Feature Icons (Planets) */}
      <div className="orbiting-planets-container d-none d-md-block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-5 d-flex align-items-center justify-content-between"
          style={{
            // width: '160px',
            // height: '160px',
            border: '4px solid #40c0ff',
            borderRadius: '50%',
            background: 'rgba(10, 8, 35, 0.85)',
            boxShadow: '0 0 60px rgba(64, 192, 255, 0.5)'
          }}
        >
          {/* <span className="display-1 fw-bold text-info">D</span> */}
          <span className='logo'>
            <Image
              className="rounded-circle"
              src="/logo-dark-2.png"
              alt="Next.js logo"
              width={100}
              height={100}
              priority
            />
          </span>
        </motion.div>

        <div className="orbiting-planets-wrapper position-absolute" style={{ top: "50%", right: "25%" }}>
          {[
            { icon: Sparkles, angle: 0, color: "#40c0ff", label: "Naming" },
            { icon: Palette, angle: 90, color: "#b080ff", label: "Logo" },
            { icon: CreditCard, angle: 180, color: "#ff80c0", label: "Cards" },
            { icon: Monitor, angle: 270, color: "#80ffaa", label: "UI/UX" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="position-absolute text-center"
              animate={{
                rotate: [item.angle, item.angle + 360],
              }}
              transition={{
                duration: 28 + i * 6,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: '50%',
                top: '48%',
                transformOrigin: '300px 0px',
              }}
            >
              <div
                className="glass rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                style={{
                  width: '78px',
                  height: '78px',
                  border: `2px solid ${item.color}`,
                  background: 'rgba(15, 12, 40, 0.8)'
                }}
              >
                <item.icon size={36} style={{ color: item.color }} />
              </div>
              <small className="text-white-50 fw-medium" style={{ fontSize: '0.9rem' }}>
                {item.label}
              </small>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}