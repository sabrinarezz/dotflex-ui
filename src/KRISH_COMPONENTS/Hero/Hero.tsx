"use client";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__gradient" />

      <div className="hero__container">

        <div className="hero__badge">
          Zero Friction AI Brand Identity
        </div>

        <h1 className="hero__title">
          Launch a Complete Brand Identity
          <br />
          in Under 10 Minutes
        </h1>

        <p className="hero__description">
          Dotflex.UI is a zero-friction AI-powered brand identity platform for Founders, Indie Hackers, and 
          agile teams --- generating names, logos, cards and UI kits with zero login required.
        </p>

        <div className="hero__buttons">
          <button className="hero__button hero__button--primary">
            Generate My Brand -- Free
          </button>

          <button className="hero__button hero__button--secondary">
            See How It Works
          </button>
        </div>

        <div className="hero__meta">
          <span>Zero login required</span>
          <span>•</span>
          <span>SVG & PNG exports</span>
          <span>•</span>
          <span>Production-ready in under 10 minutes</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;