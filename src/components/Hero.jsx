import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-wrap" aria-label="NeerSetu hero section">
      <div className="hero-glows" aria-hidden="true">
        <div className="hero-glow-primary"></div>
        <div className="hero-glow-secondary"></div>
      </div>

      <div className="hero-content">
        <div className="hero-heading">
          <p className="hero-kicker">AI-powered water solutions</p>
          <h1 className="hero-title">NeerSetu</h1>
          <p className="hero-subtitle">
            Smarter water resource planning and insights. Forecast demand,
            monitor quality, and collaborate across stakeholders with clarity.
          </p>
        </div>

        <div className="hero-buttons" role="group" aria-label="Primary actions">
          <a
            href="http://localhost:3000"
            className="hero-button-primary"
            aria-label="Get started with NeerSetu"
            target="_blank"
            rel="noreferrer"
          >
            <span className="btn-icon" aria-hidden="true">
              ▶
            </span>
            Get Started
          </a>
          <a
            href="#learn-more"
            className="hero-button-secondary"
            aria-label="Learn more about NeerSetu"
          >
            <span className="btn-icon" aria-hidden="true">
              ℹ
            </span>
            Learn More
          </a>
        </div>

        <div className="hero-stats" aria-label="Key highlights">
          <div className="hero-stat">
            <span className="hero-stat-value">10k+</span>
            <span className="hero-stat-label">Communities served</span>
          </div>
          <div className="hero-divider" aria-hidden="true"></div>
          <div className="hero-stat">
            <span className="hero-stat-value">99.9%</span>
            <span className="hero-stat-label">Uptime</span>
          </div>
          <div className="hero-divider" aria-hidden="true"></div>
          <div className="hero-stat">
            <span className="hero-stat-value">ISO</span>
            <span className="hero-stat-label">Data security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
