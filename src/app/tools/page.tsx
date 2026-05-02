'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Palette, CreditCard, Monitor, Rocket, CheckCircle, Zap, Globe, Download } from 'lucide-react';

export default function ToolsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTool, setActiveTool] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Cursor Glow + Gravity Effect
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Scroll-based Star Trails
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tools = [
    {
      id: 0,
      icon: Sparkles,
      title: "Brand Name Generator",
      desc: "Instantly generate powerful, memorable, and domain-available brand names using cosmic AI intelligence.",
      longDesc: "Our proprietary AI analyzes your industry, values, and vibe to create hundreds of unique name suggestions in seconds. Every name is checked for domain availability and trademark potential.",
      features: ["Domain availability checker", "Trademark screening", "Tone & vibe matching", "Unlimited generations", "Export as brand kit"],
      benefits: "Save weeks of brainstorming. Launch with a name that already feels iconic.",
      color: "#40c0ff"
    },
    {
      id: 1,
      icon: Palette,
      title: "AI Logo Studio",
      desc: "Create professional, scalable logos in multiple styles with perfect color harmony.",
      longDesc: "Choose your brand name and preferred style. Our AI generates 4 unique logo directions instantly — geometric, organic, minimalist, or futuristic. Fully editable SVG output.",
      features: ["4 style variations", "Color palette suggestions", "SVG + PNG + Figma export", "Brand guideline auto-generation"],
      benefits: "No designer needed. Get logo-ready assets in under 60 seconds.",
      color: "#b080ff"
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Business Cards",
      desc: "Design elegant, modern business cards with live preview and instant PDF export.",
      longDesc: "Real-time 3D preview. Choose layouts, colors, and typography. Add QR codes, social links, or NFC-ready fields. Export print-ready files for any printer.",
      features: ["Live 3D preview", "Multiple templates", "QR code + contact integration", "Print-ready PDF in 1 click"],
      benefits: "Professional cards that make a cosmic first impression — delivered instantly.",
      color: "#ff80c0"
    },
    {
      id: 3,
      icon: Monitor,
      title: "UI/UX Launchpad",
      desc: "Build futuristic, high-converting user interfaces and seamless user experiences.",
      longDesc: "From wireframes to interactive prototypes. Our AI-assisted tools help you design pixel-perfect, responsive interfaces with micro-animations and user flow mapping.",
      features: ["Figma-ready prototypes", "Auto-responsive layouts", "Micro-animation library", "User journey mapping"],
      benefits: "Move from idea to clickable prototype in minutes, not weeks.",
      color: "#80ffaa"
    }
  ];

  return (
    <>
      {/* <Navbar /> */}

      <main className="min-vh-100 position-relative cosmic-bg overflow-hidden">
        
        {/* Cursor Glow + Gravity Effect */}
        <div 
          className="cursor-glow"
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
        />

        {/* Scroll-based Star Trails */}
        <div 
          className="star-trails" 
          style={{ opacity: Math.min(scrollY / 1200, 0.85) }}
        />

        {/* Hero Section */}
        <div className="position-relative z-3 pt-5 mt-5 pb-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="display-1 fw-bold mb-4">
              Live Cosmic Tools
            </h1>
            <p className="lead text-secondary fs-3 max-w-3xl mx-auto">
              No sign-up. No credit card. No earthly limitations.<br />
              Just powerful AI-driven branding tools that feel like they were born in deep space.
            </p>
            <div className="d-flex justify-content-center gap-4 mt-5 text-secondary">
              <div className="d-flex align-items-center gap-2"><Zap size={20} /> Instant</div>
              <div className="d-flex align-items-center gap-2"><Globe size={20} /> AI-Powered</div>
              <div className="d-flex align-items-center gap-2"><Download size={20} /> Export-Ready</div>
            </div>
          </motion.div>
        </div>

        {/* Orbiting Circular Navigation */}
        <div className="orbit-wrapper d-none d-md-block">
          <div className="orbit-container mx-auto">
            {tools.map((tool, index) => {
              const angle = (index * 90) - (activeTool * 90);
              const isActive = activeTool === index;

              return (
                <motion.div
                  key={index}
                  className="orbit-item"
                  initial={false}                    // ← Prevents initial animation
                  animate={{
                    transform: `rotate(${angle}deg) translate(-15%, -100%) rotate(${-angle}deg)`,
                    scale: isActive ? 1.28 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 22,
                    mass: 1.2
                  }}
                  whileHover={{ scale: isActive ? 1.35 : 1.15 }}
                  onClick={() => setActiveTool(index)}
                >
                  <div 
                    className="glass orbit-card text-center" 
                    style={{ borderColor: `${tool.color}66` }}
                  >
                    <div style={{ color: tool.color }} className="mb-4">
                      <tool.icon size={58} />
                    </div>
                    <h5 className="fw-bold mb-1">{tool.title}</h5>
                    <p className="text-secondary small mb-0">{tool.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

            {/* Central Core */}
            <div className="central-core">
              <div className="core-inner d-flex flex-column align-items-center">
                <Rocket size={54} className="text-info" />
                <p className="mt-3 mb-0 fw-semibold text-info">CORE</p>
              </div>
            </div>
        </div>

        {/* Active Tool Expanded Content */}
        <div className="container position-relative z-3 pb-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTool}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="glass p-5 rounded-4"
            >
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="display-5 fw-bold mb-3" style={{ color: tools[activeTool].color }}>
                    {tools[activeTool].title}
                  </h2>
                  <p className="fs-4 text-secondary mb-5">{tools[activeTool].longDesc}</p>

                  <h6 className="text-info mb-3">KEY FEATURES</h6>
                  <div className="row g-3">
                    {tools[activeTool].features.map((feature, i) => (
                      <div key={i} className="col-md-6 d-flex align-items-start gap-3">
                        <CheckCircle size={22} className="text-info mt-1" />
                        <span className="fs-5">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="bg-black/40 rounded-3 p-4 h-100">
                    <h6 className="text-info mb-3">WHY BRANDS LOVE IT</h6>
                    <p className="text-white fs-5">{tools[activeTool].benefits}</p>
                    <div className="mt-auto pt-5">
                      <button 
                        onClick={() => alert(`Launching ${tools[activeTool].title} live demo...`)}
                        className="btn btn-cosmic w-100 py-3 fs-5 rounded-pill"
                      >
                        Try It Live Now →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Why DOTFLEX Tools Section */}
        <div className="container position-relative z-3 py-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Built for Speed. Designed for the Stars.</h2>
          </div>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="glass p-5 rounded-4 text-center h-100">
                <Zap className="text-info mb-4" size={48} />
                <h4>Lightning Fast</h4>
                <p className="text-secondary">Most tools deliver results in under 8 seconds. No waiting for designers or meetings.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="glass p-5 rounded-4 text-center h-100">
                <Globe className="text-info mb-4" size={48} />
                <h4>AI That Understands You</h4>
                <p className="text-secondary">Our models are trained on thousands of successful startup brands to match your exact vision.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="glass p-5 rounded-4 text-center h-100">
                <Download className="text-info mb-4" size={48} />
                <h4>Export-Ready Assets</h4>
                <p className="text-secondary">Everything you generate is production-ready — SVG, PDF, Figma files, and brand kits.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container position-relative z-3 py-5 text-center">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="glass p-5 rounded-4 d-inline-block max-w-2xl"
          >
            <h3 className="display-5 fw-bold mb-3">Ready to build your brand at light speed?</h3>
            <p className="fs-4 text-secondary">All tools are completely free to try right now.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="btn btn-cosmic btn-lg px-5 py-4 fs-4 rounded-pill mt-4"
            >
              Explore All Tools <Rocket className="ms-3" />
            </button>
          </motion.div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

