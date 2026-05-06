'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Rocket, Sparkles, Palette, CreditCard, Monitor, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import EmailModal from '@/components/modals/EmailModal';

export default function ProcessPage() {
    const [showWarp, setShowWarp] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Hide warp effect after 2.2 seconds
        const timer = setTimeout(() => setShowWarp(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            number: "01",
            title: "Discovery & Vision",
            icon: Sparkles,
            desc: "We begin by deeply understanding your brand vision, target audience, values, and competitive landscape.",
            details: "Through a guided cosmic brief, we extract the essence of your startup — what makes it unique in the universe.",
            duration: "1–2 days",
            color: "#40c0ff"
        },
        {
            number: "02",
            title: "Cosmic Generation",
            icon: Palette,
            desc: "Our AI engines generate brand names, logo variations, business cards, and UI concepts simultaneously.",
            details: "Multiple creative directions are created in parallel using advanced generative models trained on successful brands.",
            duration: "Instant to 4 hours",
            color: "#b080ff"
        },
        {
            number: "03",
            title: "Refinement Orbit",
            icon: Monitor,
            desc: "You review, iterate, and refine the generated assets in real-time with live previews.",
            details: "Our collaborative workspace allows instant feedback loops. Every change feels like adjusting trajectory in space.",
            duration: "1–3 days",
            color: "#80ffaa"
        },
        {
            number: "04",
            title: "Final Assembly & Launch",
            icon: Rocket,
            desc: "We deliver complete brand assets, including source files, guidelines, and implementation support.",
            details: "You receive everything needed to launch: logos, brand book, business cards, UI kits, and more — all production-ready.",
            duration: "1 day",
            color: "#ff80c0"
        }
    ];

    return (
        <main className="min-vh-100 cosmic-bg overflow-hidden">

            {/* Nebula Hero Banner */}
            {/* <section className="nebula-hero position-relative d-flex align-items-center justify-content-center text-center min-vh-100">
                <div className="nebula-bg" />
                <div className="floating-stars" />

                <div className="container position-relative z-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="display-1 fw-bold mb-4"
                    >
                        The DOTFLEX Process
                    </motion.h1>
                    <p className="lead fs-3 text-secondary mb-5 max-w-2xl mx-auto">
                        From stardust to fully formed brand — a journey through the cosmos in record time.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="btn btn-cosmic btn-lg px-5 py-3 rounded-pill fs-4"
                    // onClick={() => document.getElementById('orbit-intro')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Begin Your Journey <ArrowRight className="ms-2" />
                    </motion.button>

                </div>
            </section> */}

            {/* Warp Speed Entrance Effect */}
            {showWarp && (
                <div className="warp-speed">
                    <div className="warp-stars" />
                </div>
            )}

            {/* Planet Orbit Intro */}
            <section id="orbit-intro" className="py-5 mt-5 starfield-canvas opacity-100 position-relative">
                <div className="container d-md-flex align-items-center">
                    <div className="text-center mb-5 col-md-5">
                        <h2 className="display-4 fw-bold mb-3">Your Brand’s Cosmic Journey</h2>
                        <p className="fs-4 text-secondary">Four powerful phases. Zero friction.</p>
                    </div>

                    {/* Central Logo with Orbiting Planets */}
                    <div className="orbit-intro-container mx-auto position-relative" style={{ height: '520px', maxWidth: '520px' }}>
                        <div className="central-logo">
                            <div className="logo-inner">
                                <span className="fs-1 fw-bold text-info">D</span>
                            </div>
                        </div>

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="orbit-planet"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 15 + i * 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    transformOrigin: 'center',
                                    left: '50%',
                                    top: '50%',
                                }}
                            >
                                <div className="planet" style={{ backgroundColor: step.color + '22', borderColor: step.color }}>
                                    <step.icon size={28} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Process Steps */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-5">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="col-lg-6"
                            >
                                <div className="glass p-5 rounded-4 h-100">
                                    <div className="d-flex align-items-center gap-4 mb-4">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: '72px',
                                                height: '72px',
                                                backgroundColor: `${step.color}22`,
                                                border: `2px solid ${step.color}`
                                            }}
                                        >
                                            <step.icon size={36} color={step.color} />
                                        </div>
                                        <div>
                                            <div className="text-info fw-mono fs-5">{step.number}</div>
                                            <h3 className="fw-bold display-6 mb-1">{step.title}</h3>
                                            <div className="text-secondary small">{step.duration}</div>
                                        </div>
                                    </div>

                                    <p className="fs-5 text-secondary mb-4">{step.desc}</p>
                                    <p className="text-white-50">{step.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Moonrise Text Reveal Section */}
            <section className="moonrise-section py-5 position-relative">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                    >
                        <h2 className="display-3 fw-bold mb-4">
                            Your brand doesn’t wait.<br />
                            <span className="text-info">Neither should you.</span>
                        </h2>
                        <p className="fs-3 text-secondary max-w-xl mx-auto">
                            In the time it takes most agencies to schedule a meeting,
                            you can have a complete, launch-ready brand identity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-5">
                <div className="container text-center">
                    <div className="glass p-5 rounded-4 d-inline-block">
                        <h3 className="display-5 fw-bold mb-4">Ready to launch your brand into orbit?</h3>
                        <button
                            onClick={() => window.location.href = '/tools'}
                            className="btn btn-cosmic btn-lg px-5 py-4 fs-3 rounded-pill"
                        >
                            Start Building Now <Rocket className="ms-3" />
                        </button>
                    </div>
                </div>
            </section>

            <EmailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </main>
    );
}