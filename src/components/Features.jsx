import React from "react";
import "./Features.css";

const features = [
  {
    title: "High-Resolution Downloads",
    desc: "Get high-quality images for any project.",
    img: "https://framerusercontent.com/images/GqF1bxKT4ppnDGx7QaIHibfvOE.png",
  },
  {
    title: "Smart Adjustments",
    desc: "Refine colors, styles, and details with ease.",
    img: "https://framerusercontent.com/images/wvjy5WvVPlfbuCfkTgb0orfHY.png",
  },
  {
    title: "Creative Showcase",
    desc: "Explore endless possibilities with AI-powered designs.",
    img: "https://framerusercontent.com/images/1tzMkxokqlBCHfDFSnBpmE1KwRo.jpg",
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <p className="features-label">Features</p>
        <h2 className="features-title">AI-Powered Image Creation</h2>
      </div>

      <div className="carousel">
        <ul className="carousel-track">
          {features.map((f, i) => (
            <li key={i} className="carousel-item">
              <div className="feature-card">
                <div className="feature-image">
                  <img src={f.img} alt={f.title} />
                </div>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
