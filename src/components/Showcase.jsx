import React from "react";
import "./Showcase.css";

const images = [
  "src/assets/Showcase/img1.png",
  "src/assets/Showcase/img2.png",
  "src/assets/Showcase/img3.png",
  "src/assets/Showcase/img4.png",
];

const Showcase = () => {
  return (
    <section className="showcase-section" id="gallery">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Gallery</h2>
          <p className="showcase-subtitle">A peek at what you can build.</p>
        </div>
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
  );
};

export default Showcase;
