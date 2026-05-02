'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CosmicPlanetCardProps {
  variant: 'stars' | 'saturn' | 'moons';
  title: string;
  subtitle?: string;
}

export default function CosmicCard({ variant, title, subtitle = "UNIVERSE" }: CosmicPlanetCardProps) {
  return (
    <motion.div
      className="cosmic-planet-card cosmic-radial-bg"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ y: -18, scale: 1.04 }}
    >
      {/* Space Background */}
      <div className="cosmic-radial-bg" />

      {/* SVG Canvas - All shining outlines + animations */}
      <svg className="cosmic-svg" viewBox="0 0 320 460" xmlns="http://www.w3.org/2000/svg">
        
        {/* Central Planet Outline (common to all cards) */}
        <circle 
          cx="160" cy="220" r="78" 
          fill="none" 
          stroke="#a8d0ff" 
          strokeWidth="3" 
          strokeDasharray="8 6"
          className="planet-glow"
        />

        {/* Variant 1: Twinkling Stars */}
        {variant === 'stars' && (
          <>
            <circle cx="68" cy="92" r="2.5" className="twinkle" />
            <circle cx="238" cy="78" r="3" className="twinkle" style={{ animationDelay: '0.8s' }} />
            <circle cx="42" cy="312" r="2" className="twinkle" style={{ animationDelay: '1.6s' }} />
            <circle cx="275" cy="298" r="2.8" className="twinkle" style={{ animationDelay: '2.4s' }} />
            <circle cx="108" cy="148" r="1.8" className="twinkle" style={{ animationDelay: '3.1s' }} />
            <circle cx="212" cy="362" r="2.2" className="twinkle" style={{ animationDelay: '0.4s' }} />
          </>
        )}

        {/* Variant 2: Saturn-style Ring + Orbiting Moon */}
        {variant === 'saturn' && (
          <>
            {/* Shiny Ring (elliptical path with dash animation) */}
            <ellipse 
              cx="160" cy="218" rx="118" ry="28" 
              fill="none" 
              stroke="#c8e0ff" 
              strokeWidth="3.5" 
              strokeDasharray="12 18"
              className="ring-shine"
            />
            {/* Orbiting Moon (small shiny dot) */}
            <g className="moon-stationary">
              <circle cx="160" cy="218" r="3.5" fill="#f0f8ff" />
            </g>
          </>
        )}

        {/* Variant 3: Multiple Orbiting Moons */}
        {variant === 'moons' && (
          <>
            {/* First moon orbit path (shiny dashed) */}
            <ellipse 
              cx="160" cy="220" rx="102" ry="24" 
              fill="none" stroke="#b0d8ff" strokeWidth="2" 
              strokeDasharray="6 12" className="ring-shine" 
              style={{ animationDelay: '0s' }}
            />
            {/* Second moon orbit path */}
            <ellipse 
              cx="160" cy="220" rx="124" ry="32" 
              fill="none" stroke="#a0c8ff" strokeWidth="1.8" 
              strokeDasharray="8 14" className="ring-shine" 
              style={{ animationDelay: '1.2s' }}
            />
            
            {/* 3 Orbiting Moons */}
            <g className="moon-infinity" style={{ animationDelay: '0s' }}>
              <circle cx="160" cy="220" r="4" fill="#e8f0ff" />
            </g>
            <g className="moon-infinity" style={{ animationDelay: '1s' }}>
              <circle cx="160" cy="220" r="3" fill="#e0f0ff" />
            </g>
            <g className="moon-infinity" style={{ animationDelay: '2s' }}>
              <circle cx="160" cy="220" r="2.5" fill="#f0f8ff" />
            </g>
            <g className="moon-infinity" style={{ animationDelay: '3s' }}>
              <circle cx="160" cy="220" r="2" fill="#f0f8ff" />
            </g>
            <g className="moon-infinity" style={{ animationDelay: '4s' }}>
              <circle cx="160" cy="220" r="1.5" fill="#f0f8ff" />
            </g>
            <g className="moon-infinity" style={{ animationDelay: '5s' }}>
              <circle cx="160" cy="220" r="1" fill="#f0f8ff" />
            </g>
            <g className="moon-infinity" style={{ animationDelay: '6s' }}>
              <circle cx="160" cy="220" r="0.75" fill="#f0f8ff" />
            </g>
          </>
        )}

        {/* Subtle nebula glow behind planet */}
        <circle 
          cx="160" cy="220" r="102" 
          fill="none" 
          stroke="#4a8cff" 
          strokeWidth="28" 
          opacity="0.08" 
        />
      </svg>

      {/* Text Overlay */}
      <div className="cosmic-text">
        <h4 className="cosmic-title text-uppercase">{title}</h4>
        {subtitle && <p className="cosmic-subtitle base text-center">{subtitle}</p>}
      </div>
    </motion.div>
  );
}