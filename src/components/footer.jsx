"use client";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-brand">

          <div className="logo">
            <div className="logo-circle">D</div>
            <span>Dotflex.UI</span>
          </div>

          <p className="tagline">
            Brands born among the stars.
            <br />
            Your identity,
            <br />
            launched from deep space.
          </p>

          <div className="social-icons">
            <a href="#">tw</a>
            <a href="#">in</a>
            <a href="#">ig</a>
          </div>

        </div>

        {/* Services */}
        <div className="footer-column">

          <h3>SERVICES</h3>

          <ul>
            <li><a href="#">Brand Identity</a></li>
            <li><a href="#">AI Logo Studio</a></li>
            <li><a href="#">Business Cards</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>

        </div>

        {/* Tools */}
        <div className="footer-column">

          <h3>TOOLS</h3>

          <ul>
            <li><a href="#">Name Generator</a></li>
            <li><a href="#">Logo Builder</a></li>
            <li><a href="#">Card Maker</a></li>
            <li><a href="#">UI Launchpad</a></li>
          </ul>

        </div>

        {/* Company */}
        <div className="footer-column">

          <h3>COMPANY</h3>

          <ul>
            <li><a href="#">Process</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Launch Orbit</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom"></div>

    </footer>
  );
}
