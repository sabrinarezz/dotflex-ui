'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  onClose: () => void;
}

export default function CardDesigner({ onClose }: Props) {
  const [data, setData] = useState({
    company: 'NOVA FLOW',
    name: 'Shrey Orbit',
    title: 'Founder & Stargazer',
    email: 'shrey@novaflow.space',
    phone: '+91 99999 88888',
    color: '#7c3aed',
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 30 }}
      className="modal-content glass p-4 p-md-5"
      onClick={e => e.stopPropagation()}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="display-5 fw-bold">Business Card Fabricator</h3>
        <button className="btn-close btn-close-white" onClick={onClose} />
      </div>

      <div className="row g-5">
        <div className="col-lg-6">
          <input className="form-control form-control-lg bg-dark text-white border-secondary mb-3" placeholder="Company" value={data.company} onChange={e => setData({...data, company: e.target.value})} />
          <input className="form-control form-control-lg bg-dark text-white border-secondary mb-3" placeholder="Name" value={data.name} onChange={e => setData({...data, name: e.target.value})} />
          <input className="form-control form-control-lg bg-dark text-white border-secondary mb-3" placeholder="Title" value={data.title} onChange={e => setData({...data, title: e.target.value})} />
          <input className="form-control form-control-lg bg-dark text-white border-secondary mb-3" placeholder="Email" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
          <div className="row g-3">
            <div className="col-8">
              <input className="form-control form-control-lg bg-dark text-white border-secondary" placeholder="Phone" value={data.phone} onChange={e => setData({...data, phone: e.target.value})} />
            </div>
            <div className="col-4">
              <input type="color" value={data.color} onChange={e => setData({...data, color: e.target.value})} className="form-control form-control-color form-control-lg w-100 h-100" />
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div
            className="rounded-4 shadow-2xl position-relative overflow-hidden"
            style={{
              width: '420px',
              height: '240px',
              background: data.color,
            }}
          >
            <div className="h-100 d-flex flex-column justify-content-center px-5 text-white" style={{ background: 'rgba(0,0,0,0.65)' }}>
              <div className="fs-1 fw-bold">{data.company}</div>
              <div className="mt-4">
                <div className="fs-2 fw-bold">{data.name}</div>
                <div className="fs-4 opacity-75">{data.title}</div>
              </div>
              <div className="mt-auto pt-4 d-flex gap-4 small opacity-75">
                <div>{data.email}</div>
                <div>{data.phone}</div>
              </div>
            </div>
            <div className="position-absolute bottom-0 end-0 p-3 small opacity-40">DOTFLEX • {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}