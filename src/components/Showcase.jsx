import React from "react";
import "./Showcase.css";

const images = [
  "https://framerusercontent.com/images/KtfZCxElWCVxgRBmdYefVwMBB0.jpg",
  "https://framerusercontent.com/images/aHsoNTKCgqSSLEuwADCGE1eBk.jpg",
  "https://framerusercontent.com/images/aETngQZb5HD3dGHusuL265Bu4.jpg",
  "https://framerusercontent.com/images/exQBhRyujmSH9PDM3AEuJx7hHJo.jpg",
  "https://framerusercontent.com/images/rCSj7pZYD6Rh3cSKprVJnoNl70.jpg",
];

const Showcase = () => {
  return (
    <section className="showcase-section" id="gallery">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Gallery</h2>
          <p className="showcase-subtitle">A peek at what you can build.</p>
        </div>
        <div className="showcase-grid">
          {images.map((src, i) => (
            <div key={i} className="showcase-item">
              <img
                src={src}
                alt={`Showcase ${i + 1}`}
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
    </section>
  );
};

export default Showcase;
