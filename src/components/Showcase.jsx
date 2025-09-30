import React from "react";
import "./Showcase.css";
import Logos from "./Logos.jsx";

const images = [
  "src/assets/Showcase/img1.png",
  "src/assets/Showcase/img2.png",
  "src/assets/Showcase/img3.png",
  "src/assets/Showcase/img4.png",
];

const Showcase = () => {
  return (
    <>
      <section className="showcase-section" id="gallery">
        <div className="showcase-container">
          {/* Mobile hero image */}
          <div className="mobile-hero">
            <img
              src="https://framerusercontent.com/images/lN9vLOVnPrNHWk33J7bz1ahyxXs.png?scale-down-to=1024"
              alt="Mobile app showcase"
            />
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
      <Logos />
    </>
  );
};

export default Showcase;
