'use client';

import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onClose: () => void;
}

export default function Logo({ onClose }: Props) {
  const [inputs, setInputs] = useState({ name: '', slogan: '', color: '#00d4ff' });
  const [logos, setLogos] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);

  const generate = () => {
    if (!inputs.name) return;
    setGenerating(true);

    setTimeout(() => {
      const variants = [
        `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="82" fill="none" stroke="${inputs.color}" stroke-width="10"/><text x="100" y="118" text-anchor="middle" fill="white" font-size="48" font-weight="bold">${inputs.name.slice(0,5)}</text></svg>`,
        `<svg viewBox="0 0 200 200"><rect x="28" y="28" width="144" height="144" rx="28" fill="none" stroke="${inputs.color}" stroke-width="12"/><text x="100" y="128" text-anchor="middle" fill="white" font-size="42">${inputs.name}</text></svg>`,
        `<svg viewBox="0 0 200 200"><path d="M30 100 Q100 20 170 100 Q100 180 30 100" fill="none" stroke="${inputs.color}" stroke-width="16"/><text x="100" y="130" text-anchor="middle" fill="white" font-size="36">${inputs.name}</text></svg>`,
        `<svg viewBox="0 0 200 200"><circle cx="70" cy="70" r="40" fill="${inputs.color}40"/><circle cx="130" cy="130" r="40" fill="${inputs.color}40"/><text x="100" y="125" text-anchor="middle" fill="white" font-size="40">${inputs.name}</text></svg>`,
      ];
      setLogos(variants);
      setGenerating(false);
    }, 1400);
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
          Logo Studio <Sparkles className="text-info" />
        </h3>
        <button className="btn-close btn-close-white" onClick={onClose} />
      </div>

      <div className="row g-5">
        <div className="col-md-6">
          <input
            className="form-control form-control-lg bg-dark text-white border-secondary mb-3"
            placeholder="Brand name"
            value={inputs.name}
            onChange={e => setInputs({ ...inputs, name: e.target.value })}
          />
          <input
            className="form-control form-control-lg bg-dark text-white border-secondary mb-4"
            placeholder="Slogan (optional)"
            value={inputs.slogan}
            onChange={e => setInputs({ ...inputs, slogan: e.target.value })}
          />
          <div className="d-flex align-items-center gap-3">
            <input
              type="color"
              value={inputs.color}
              onChange={e => setInputs({ ...inputs, color: e.target.value })}
              className="form-control form-control-color form-control-lg"
            />
            <span className="text-secondary">Core color</span>
          </div>

          <button
            onClick={generate}
            disabled={generating || !inputs.name.trim()}
            className="btn btn-cosmic btn-lg w-100 mt-4 d-flex align-items-center justify-content-center gap-2"
          >
            {generating && <Loader2 className="animate-spin" size={20} />}
            Generate Logos
          </button>
        </div>

        <div className="col-md-6">
          <div className="row g-3">
            {logos.map((svg, i) => (
              <div key={i} className="col-6">
                <div className="bg-black rounded-3 p-4 border border-secondary ratio ratio-1x1 d-flex align-items-center justify-content-center" dangerouslySetInnerHTML={{ __html: svg }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}