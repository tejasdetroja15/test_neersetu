import React from "react";
import "./Features.css";

const features = [
  {
    title: "AI Image Generation",
    desc: "High-quality outputs with fast inference.",
  },
  {
    title: "Style Presets",
    desc: "Choose from curated styles and palettes.",
  },
  {
    title: "Batch Exports",
    desc: "Export multiple sizes and formats at once.",
  },
  {
    title: "Cloud Sync",
    desc: "Access your creations anywhere.",
  },
];

const Features = () => {
  return (
    <section
      className="features-section"
      id="features"
      aria-label="Key features"
    >
      <div className="features-container">
        <header className="features-header">
          <p className="features-kicker">What you can do</p>
          <h2 className="features-title">Powerful features</h2>
          <p className="features-subtitle">
            Everything you need to showcase NeerSetu with clarity.
          </p>
        </header>

        <div className="features-grid" role="list">
          {features.map((feature, i) => (
            <article key={i} className="feature-card" role="listitem">
              <div className="feature-icon" aria-hidden="true">
                ✦
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
