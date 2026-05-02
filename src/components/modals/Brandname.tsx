'use client';

import { motion } from 'framer-motion';
import { Copy, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onClose: () => void;
}

export default function Brandname({ onClose }: Props) {
  const [names, setNames] = useState<string[]>([]);

  const generate = () => {
    const pre = ['Astro', 'Nebula', 'Quasar', 'Void', 'Nova', 'Orbit', 'Pulse', 'Lunar', 'Cosmo', 'Stellar', 'Grav', 'Echo'];
    const suf = ['ix', 'ara', 'on', 'ex', 'flow', 'link', 'core', 'drift', 'forge', 'wave', 'peak', 'void'];
    setNames(Array.from({ length: 8 }, () => pre[Math.floor(Math.random()*pre.length)] + suf[Math.floor(Math.random()*suf.length)]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 30 }}
      className="modal-content glass p-4 p-md-5"
      onClick={e => e.stopPropagation()}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="display-5 fw-bold d-flex align-items-center gap-3">
          Name Generator <Sparkles className="text-info" />
        </h3>
        <button className="btn-close btn-close-white" onClick={onClose} />
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <input type="text" className="form-control form-control-lg bg-dark border-secondary mb-3" placeholder="Industry or feeling..." />
          <button onClick={generate} className="btn btn-cosmic btn-lg w-100">
            Summon Names
          </button>
        </div>

        <div className="col-md-6">
          <div className="row g-3">
            {names.map((n, i) => (
              <div key={i} className="col-6">
                <div className="d-flex align-items-center justify-content-between glass p-3 rounded">
                  <span className="fw-medium">{n}</span>
                  <button className="btn btn-sm btn-outline-light" onClick={() => navigator.clipboard.writeText(n)}>
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}