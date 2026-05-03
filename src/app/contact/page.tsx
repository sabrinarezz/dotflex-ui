'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, MapPin, Clock, Users, Star, Zap } from 'lucide-react';
import EmailModal from '@/components/modals/EmailModal';
import { sendWhatsAppMessage } from '@/services/waService';

export default function ContactPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const pricingPlans = [
    { planet: "MERCURY", title: "Launch", price: "Free", desc: "Basic branding tools", color: "#a0c0ff" },
    { planet: "VENUS", title: "Ignite", price: "$49/mo", desc: "Full AI toolkit", color: "#ff80c0" },
    { planet: "EARTH", title: "Ascend", price: "$99/mo", desc: "Complete brand system", color: "#80ffaa" },
    { planet: "JUPITER", title: "Galaxy", price: "Custom", desc: "Enterprise + dedicated support", color: "#b080ff" },
  ];

  const projects = [
    { name: "NEXORA", desc: "Fintech", color: "#40c0ff" },
    { name: "LUNARIS", desc: "Wellness", color: "#ff80c0" },
    { name: "QUASAR", desc: "AI SaaS", color: "#b080ff" },
    { name: "VORTEX", desc: "E-commerce", color: "#80ffaa" },
  ];

  const handleClick = () => {
    sendWhatsAppMessage({
      phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
      name: "Shreya",
      email: "shreya@email.com",
      project: "Dotflex Landing Page",
      message: "Need branding + frontend development.",
    });
  };

  return (
    <main className="min-vh-100 cosmic-bg overflow-hidden">

      {/* Parallax Space Layers + Aurora + Starfield */}
      <div className="parallax-space">
        <div className="aurora-bg" />
        <div className="starfield-canvas" />
        <div className="asteroids-layer" style={{ transform: `translate(${mousePos.x * -0.08}px, ${mousePos.y * -0.08}px)` }} />
        <div className="stars-layer" style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }} />
      </div>

      {/* Nebula Hero Banner */}
      {/* <section className="position-relative z-3 min-vh-100 d-flex align-items-center text-center">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-1 fw-bold mb-4"
          >
            Contact Mission Control
          </motion.h1>
          <p className="lead fs-3 text-secondary max-w-2xl mx-auto">
            Let's launch something extraordinary together.
          </p>
        </div>
      </section> */}

      {/* About DOTFLEX */}
      <section className="py-5 mt-5 position-relative z-3">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">About DOTFLEX</h2>
              <div className="fs-5 text-secondary">
                <p className="mb-4">
                  DOTFLEX is a futuristic branding studio that combines cutting-edge AI with human creativity to help startups build powerful, memorable brands at unprecedented speed.
                </p>
                <p>
                  We exist to remove the friction between great ideas and great execution. Our tools and process turn weeks of work into hours — giving founders more time to focus on what truly matters: building their vision.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-end gap-4">
              <div className="glass p-5 rounded-4 col-9 col-xl-7">
                <div className="row g-4">
                  <div className="d-flex align-items-center gap-3">
                    <Zap className="text-info" size={32} />
                    <div>
                      <div className="fw-bold">Lightning Fast</div>
                      <div className="small text-secondary">Average project: 3–7 days</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass p-5 rounded-4 col-9 col-xl-7">
                <div className="row g-4">
                  <div className="d-flex align-items-center gap-3">
                    <Star className="text-info" size={32} />
                    <div>
                      <div className="fw-bold">AI + Human</div>
                      <div className="small text-secondary">Best of both worlds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar System Pricing Plans */}
      <section className="py-5 position-relative z-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Choose Your Orbit</h2>
            <p className="text-secondary fs-4">Powerful plans for every stage of your journey</p>
          </div>

          <div className="row g-4 justify-content-center">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="col-lg-3 col-md-6"
              >
                <div className="glass p-5 rounded-4 text-center h-100 hover-glow-violet">
                  <div className="fs-2 fw-bold mb-2" style={{ color: plan.color }}>{plan.planet}</div>
                  <h3 className="fw-bold display-6">{plan.title}</h3>
                  <div className="display-5 fw-bold my-3" style={{ color: plan.color }}>{plan.price}</div>
                  <p className="text-secondary mb-4">{plan.desc}</p>
                  <button onClick={handleClick} className="btn btn-outline-light w-100 rounded-pill py-3">
                    Choose Orbit →
                  </button>

                  <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Constellation Gallery */}
      <section className="py-5 position-relative z-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Featured Constellations</h2>
            <p className="text-secondary">Brands we've helped launch into the stars</p>
          </div>

          <div className="row g-4">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="col-md-6 col-lg-3"
              >
                <div className="glass p-4 rounded-4 text-center h-100" style={{ border: `1px solid ${project.color}40` }}>
                  <div className="fs-1 mb-3" style={{ color: project.color }}>✦</div>
                  <h4 className="fw-bold">{project.name}</h4>
                  <p className="text-secondary">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 position-relative z-3">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="glass p-5 rounded-4">
                <h3 className="display-5 fw-bold mb-4">Send a Signal</h3>
                <form className="row g-4">
                  <div className="col-md-6"><input type="text" className="form-control form-control-lg bg-dark border-secondary" placeholder="Your Name" /></div>
                  <div className="col-md-6"><input type="email" className="form-control form-control-lg bg-dark border-secondary" placeholder="Email Address" /></div>
                  <div className="col-12"><input type="text" className="form-control form-control-lg bg-dark border-secondary" placeholder="What are you building?" /></div>
                  <div className="col-12">
                    <textarea className="form-control form-control-lg bg-dark border-secondary" rows={6} placeholder="Tell us about your vision, goals, and timeline..."></textarea>
                  </div>
                  <div className="col-12">
                    <button onClick={handleClick} type="submit" className="btn btn-cosmic w-100 py-4 fs-4 rounded-pill">
                      Transmit to Mission Control
                    </button>

                    {/* <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5 d-flex flex-column gap-4">
              <div className="glass p-5 rounded-4">
                <div className="space-y-4">
                  <div className="d-flex gap-3 align-items-center">
                    <Mail className="text-info mt-1" size={28} />
                    <div>
                      <div className="fw-medium">hello@dotflex.space</div>
                      <small className="text-secondary">We usually respond in under 2 hours</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass p-5 rounded-4">
                <div className="space-y-4">
                  <div className="d-flex gap-3 align-items-center">
                    <MapPin className="text-info mt-1" size={28} />
                    <div>Digital Nebula • Deep Space</div>
                  </div>
                </div>
              </div>
              <div className="glass p-5 rounded-4">
                <div className="space-y-4">
                  <div className="d-flex gap-3 align-items-center">
                    <Clock className="text-info mt-1" size={28} />
                    <div>24/7 across all timezones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}