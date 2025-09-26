// Features.jsx
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Features.css";

const features = [
  {
    title: "Real-Time Query Response",
    desc: "Citizens, departments, and agencies ask questions about water levels and get instant answers.",
    image: "https://framerusercontent.com/images/aETngQZb5HD3dGHusuL265Bu4.jpg",
  },
  {
    title: "Visualization",
    desc: "Get answers as bar, pie, line, and trend charts for easy data-driven decision-making.",
    image:
      "https://framerusercontent.com/images/KtfZCxElWCVxgRBmdYefVwMBB0.jpg",
  },
  {
    title: "Voice Assistance",
    desc: "Ask questions using your voice in multiple languages. Accessible for farmers, citizens",
    image:
      "https://framerusercontent.com/images/exQBhRyujmSH9PDM3AEuJx7hHJo.jpg",
  },
  {
    title: "Real-Time Data",
    desc: "Always updated with the latest groundwater readings for instant, reliable insights.",
    image:
      "https://framerusercontent.com/images/rCSj7pZYD6Rh3cSKprVJnoNl70.jpg",
  },
  {
    title: "3rd Party Integration",
    desc: "Connect seamlessly with GIS tools, gov portals, and apps already in use.",
    image: "https://framerusercontent.com/images/aETngQZb5HD3dGHusuL265Bu4.jpg",
  },
];

export default function Features() {
  const featuresPerView = 2;
  const maxIndex = Math.max(0, features.length - featuresPerView);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const gridRef = useRef(null);
  const firstCardRef = useRef(null);

  // Measure card width + gap to compute translate distance
  useEffect(() => {
    const grid = () => gridRef.current;
    const card = () => firstCardRef.current;

    if (!grid() || !card()) return;

    const update = () => {
      const g = grid();
      const c = card();
      if (!g || !c) return;

      const cardRect = c.getBoundingClientRect();
      const computed = window.getComputedStyle(g);
      // read gap (works in modern browsers)
      let gapVal =
        computed.getPropertyValue("gap") ||
        computed.getPropertyValue("column-gap") ||
        "24px";
      const gap = parseFloat(gapVal) || 0;
      // Use card width + gap (round to avoid tiny sub-pixel jitters)
      setSlideWidth(Math.round(cardRect.width + gap));
    };

    update();

    // ResizeObserver if available (better), otherwise fallback to window resize
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      // observe container and first card (cover layout changes)
      if (grid()) ro.observe(grid());
      if (card()) ro.observe(card());
    }

    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      if (ro) ro.disconnect();
    };
  }, []);

  // If the number of items / viewport changes, clamp the index
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((s) => Math.min(s + 1, maxIndex));
  };

  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((s) => Math.max(s - 1, 0));
  };

  // Remove animating flag when CSS transition ends
  const onTransitionEnd = (e) => {
    if (e.propertyName && e.propertyName !== "transform") return;
    setIsAnimating(false);
  };

  // Compute transform. If slideWidth isn't measured yet, keep it at 0.
  const translateX = slideWidth ? currentIndex * slideWidth : 0;

  return (
    <section
      className="features-section"
      id="features"
      aria-label="Key features"
    >
      <div className="features-container">
        <header className="features-header">
          <span className="features-pill">Features</span>
          <h2 className="features-title">AI-Powered Image Creation</h2>
          <p className="features-subtitle">
            Everything you need to showcase NeerSetu with clarity.
          </p>
        </header>

        <div className="features-carousel" aria-live="polite">
          <button
            className={`carousel-nav carousel-nav-left ${
              currentIndex === 0 ? "disabled" : ""
            }`}
            onClick={handlePrev}
            disabled={currentIndex === 0 || isAnimating}
            aria-label="Previous features"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="features-carousel-wrapper" aria-hidden={false}>
            <div
              ref={gridRef}
              role="list"
              className={`features-grid ${isAnimating ? "animating" : ""}`}
              // force left alignment for accurate sliding
              style={{
                transform: `translateX(-${translateX}px)`,
                justifyContent: "flex-start",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {features.map((feature, i) => (
                <article
                  key={i}
                  className="feature-card"
                  role="listitem"
                  // use first card as measurement anchor
                  ref={i === 0 ? firstCardRef : null}
                >
                  {feature.image ? (
                    <div className="feature-media">
                      <img src={feature.image} alt={feature.title} />
                    </div>
                  ) : (
                    <div className="feature-icon" aria-hidden="true">
                      ✦
                    </div>
                  )}
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className={`carousel-nav carousel-nav-right ${
              currentIndex >= maxIndex ? "disabled" : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex >= maxIndex || isAnimating}
            aria-label="Next features"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Uncomment if you want pagination later
        <div className="carousel-pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => { if (!isAnimating) setCurrentIndex(index); }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
