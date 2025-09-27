import React from "react";
import "./Hero.css";
import "./Showcase.css";

const images = [
  "src/assets/Showcase/img1.png",
  "src/assets/Showcase/img2.png",
  "src/assets/Showcase/img3.png",
  "src/assets/Showcase/img4.png",
];

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="hero-wrap"
        aria-label="NeerSetu hero section"
      >
        <div className="hero-glows" aria-hidden="true">
          <div className="hero-glow-primary"></div>
          <div className="hero-glow-secondary"></div>
        </div>

        <div class="hero-particles">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>

        <div className="hero-content">
          <div className="hero-heading">
            {/* <p className="hero-kicker">AI-powered water solutions</p> */}
            <h1 className="hero-title">NeerSetu-Groundwater Chatbot</h1>
            <h1 className="hero-title">At Your Fingertips</h1>
            <p className="hero-subtitle">
              AI chatbot for instant analytics & predictions on groundwater
              levels, based on Real-Time Govt Verified Data
            </p>
          </div>

          <div
            className="hero-buttons"
            role="group"
            aria-label="Primary actions"
          >
            <a
              href="http://localhost:3000"
              className="hero-button-primary"
              aria-label="Get started with NeerSetu"
              target="_blank"
              rel="noreferrer"
            >
              Chat now
            </a>
            {/* <a
            href="#learn-more"
            className="hero-button-secondary"
            aria-label="Learn more about NeerSetu"
          >
            <span className="btn-icon" aria-hidden="true">
              ℹ
            </span>
            Learn More
          </a> */}
          </div>

          {/* <div className="hero-stats" aria-label="Key highlights">
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
        </div> */}
        </div>
      </section>

      <section className="showcase-section" id="gallery">
        <div className="showcase-container">
          {/* Mobile hero image */}
          {/* <div className="mobile-hero">
            <img
              src="https://framerusercontent.com/images/lN9vLOVnPrNHWk33J7bz1ahyxXs.png?scale-down-to=1024"
              alt="Mobile app showcase"
            />
          </div> */}

          <div className="showcase-marquee" aria-label="Scrolling gallery">
            <div className="marquee-track">
              {[...images, ...images].map((src, i) => (
                <div key={i} className="showcase-item">
                  <img
                    src={src}
                    alt={`Showcase ${(i % images.length) + 1}`}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
