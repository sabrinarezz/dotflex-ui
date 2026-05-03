'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicCard from '@/components/CosmicCard';
import { Sparkles, Palette, CreditCard, Monitor, Rocket, Clock } from 'lucide-react';
import EmailModal from '@/components/modals/EmailModal';
import OrbitingPlanetHero from '@/components/OrbitingPlanet';

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.028,
        y: (e.clientY - window.innerHeight / 2) * 0.028,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const servicesData = [
    {
      variant: 'stars' as const,
      title: "Brand Name Generator",
      subtitle: "NAME FORGING",
      icon: Sparkles,
      desc: "Our AI instantly generates powerful, memorable, and domain-available brand names tailored to your vision and industry.",
      features: ["Smart domain check", "Trademark-friendly", "Multiple styles", "Instant availability"],
      color: "#40c0ff"
    },
    {
      variant: 'saturn' as const,
      title: "AI Logo Studio",
      subtitle: "VISUAL IDENTITY",
      icon: Palette,
      desc: "Generate stunning, professional logos in multiple styles with perfect color harmony and scalable vector output.",
      features: ["4 unique styles", "Color variations", "SVG + PNG export", "Brand kit ready"],
      color: "#b080ff"
    },
    {
      variant: 'moons' as const,
      title: "Business Cards",
      subtitle: "ZERO-GRAVITY CARDS",
      icon: CreditCard,
      desc: "Design elegant, modern business cards with live preview and one-click PDF export for premium printing.",
      features: ["Live editor", "Multiple layouts", "QR code integration", "Print-ready PDF"],
      color: "#ff80c0"
    },
    {
      title: "UI/UX Design",
      subtitle: "STELLAR INTERFACES",
      icon: Monitor,
      desc: "Pixel-perfect, futuristic user interfaces and seamless user experiences designed for startups that move at light speed.",
      features: ["Figma prototypes", "User flow mapping", "Responsive design", "Animation systems"],
      color: "#80ffaa"
    }
  ];

  return (
    <>
      {/* <Header /> */}

      <main className="min-vh-100 position-relative cosmic-bg overflow-hidden">

        {/* <BlackHole /> */}
        <div className="parallax-container">
          <div className="parallax-layer stars-layer" style={{ transform: `translate(${mousePosition.x * 1.9}px, ${mousePosition.y * 1.9}px)` }} />
          <div className="parallax-layer nebula-layer" style={{ transform: `translate(${mousePosition.x * 0.65}px, ${mousePosition.y * 0.65}px)` }} />
          <div className="parallax-layer planets-layer" style={{ transform: `translate(${mousePosition.x * 0.28}px, ${mousePosition.y * 0.28}px)` }} />
        </div>

        <OrbitingPlanetHero />

        {/* Hero Section */}
        <div className="position-relative z-3">
          <div className="container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-1 fw-bold mb-3"
            >
              Instruments of Creation
            </motion.h1>
            <p className="lead text-secondary fs-3 max-w-2xl mx-auto">
              From cosmic naming to stellar interfaces — we craft brands that feel born among the stars.
              <br />
            </p>
          </div>
        </div>

        {/* Interactive Cosmic Cards */}
        <div className="container position-relative z-3 pb-5">
          <div className="row g-5 justify-content-center">
            {servicesData.map((service, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <CosmicCard
                  variant={service.variant || 'stars'}
                  title={service.title.split(' ')[0]}
                  subtitle={service.subtitle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <BlackHole /> */}
        {/* <OrbitingPlanetHero /> */}
        {/* <SpaceshipLaunchHero /> */}
        {/* <CosmicPortalHero /> */}

        <div className="py-5 cosmic-bg">
          <h1 className="display-5 text-center w-75 fw-normal mx-auto" style={{ textShadow: '0 0 60px rgba(192,132,252,0.45)' }}>
            We help brands go from <br /> Invisible → Credible → Desirable.
          </h1>
        </div>

        {/* Detailed Services */}
        <div className="container position-relative z-3 py-5">
          <div className="row g-5">
            {servicesData.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-lg-6"
              >
                <div className="glass p-5 rounded-4 h-100">
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="p-3 rounded-circle" style={{ background: `rgba(255,255,255,0.07)`, color: service.color }}>
                      <service.icon size={42} />
                    </div>
                    <div>
                      <h3 className="fw-bold fs-2">{service.title}</h3>
                      <p className="text-info mb-0">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-secondary fs-5 mb-4">{service.desc}</p>

                  <div className="row g-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="col-6 d-flex align-items-center gap-2 text-secondary">
                        <span className="text-info">•</span> {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="container position-relative z-3 py-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">From Idea to Orbit in Minutes</h2>
            <p className="text-secondary fs-4">Our cosmic workflow</p>
          </div>

          <div className="row g-4 text-center">
            {[
              { step: "01", title: "Define Your Vision", desc: "Tell us your idea, industry, and vibe" },
              { step: "02", title: "Cosmic Generation", desc: "AI creates names, logos & designs instantly" },
              { step: "03", title: "Refine & Export", desc: "Live preview, tweak, and download assets" },
              { step: "04", title: "Launch into Space", desc: "Your brand is ready for the universe" }
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="glass p-4 rounded-4 h-100"
                >
                  <div className="text-info fw-bold fs-5 mb-3">{item.step}</div>
                  <h5 className="fw-semibold mb-3">{item.title}</h5>
                  <p className="text-secondary">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="container position-relative z-3 py-5 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass p-5 rounded-4 d-inline-block"
          >
            <h3 className="display-5 fw-bold mb-3">Ready to launch your brand?</h3>
            <p className="fs-4 text-secondary mb-4">Join the brands already orbiting success</p>
            <button
              // onClick={() => window.location.href = '/'}
              onClick={() => setIsOpen(true)}
              className="btn btn-cosmic btn-lg px-5 py-3 fs-4 rounded-pill"
            >
              Start Your Journey Now <Rocket className="ms-2" />
            </button>

            {/* <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
          </motion.div>
        </div>

        <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </main>

      {/* <Footer /> */}
    </>
  );
}