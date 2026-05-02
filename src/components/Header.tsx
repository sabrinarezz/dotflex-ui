'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top glass">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3" href="/">
          {/* <div
            className="rounded-circle d-flex align-items-center justify-content-center text-dark fw-bold"
            style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, #00d4ff, #c084fc, #ec4899)',
              boxShadow: '0 0 20px rgba(192,132,252,0.5)',
            }}
          >
            D
          </div> */}
          <div className="logo">
            <Image
              className="rounded-circle"
              src="/logo-dark-2.png"
              alt="Next.js logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="brandname">
            <span className="fw-bold">Dotflex</span>
            <span className="fw-normal">.UI</span>
          </div>
        </Link>

        <button className="navbar-toggler text-white" type="button" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item"><Link className="nav-link text-white hover-glow-cyan" href="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link text-white hover-glow-cyan" href="/tools">Tools</Link></li>
            <li className="nav-item"><Link className="nav-link text-white hover-glow-cyan" href="/process">Process</Link></li>
            <li className="nav-item"><Link className="nav-link text-white hover-glow-cyan" href="/contact">Contact</Link></li>
          </ul>

          <button
            onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-cosmic rounded-pill px-4 py-2 d-none d-lg-block fw-semibold"
          >
            Launch Orbit
          </button>
        </div>
      </div>
    </nav>
  );
}