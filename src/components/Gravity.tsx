'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
};

export default function Gravity() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const particleCount = 80;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 400 - 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.2 + 0.6,
      });
    }
    particlesRef.current = particles;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const gravityStrength = 120; 

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.fillStyle = 'rgba(5, 3, 15, 0.08)'; 
      // ctx.fillStyle = 'rgba(18, 5, 31, 0.08)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(110, 60, 180, 0.12)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + (centerX - x) * 0.15, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + (centerY - y) * 0.12);
        ctx.stroke();
      }

      particles.forEach(p => {
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 1; 
        const force = gravityStrength / (dist * dist);

        p.vx += (dx / dist) * force * 0.008;
        p.vy += (dy / dist) * force * 0.008;

        p.vx += (Math.random() - 0.5) * 0.6;
        p.vy += (Math.random() - 0.5) * 0.6;

        p.vx *= 0.992;
        p.vy *= 0.992;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const depthScale = (p.z + 200) / 400; 
        const alpha = 0.15 + depthScale * 0.45;
        const size = p.size * (0.6 + depthScale * 0.8);

        ctx.fillStyle = `rgba(180, 160, 240, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 8;
        // ctx.shadowColor = 'rgba(140, 120, 220, 0.4)';
        ctx.shadowColor = '#05030f';
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      // opacity: 0.6,
    }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}