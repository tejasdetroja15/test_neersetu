import React from "react";
import "./Logos.css";

const logos = [
  {
    src: "https://framerusercontent.com/images/PzrWJG6xDSOzh5XrQ0cMqlq2yzE.svg",
    alt: "Partner 1",
    width: 158,
    height: 27,
  },
  {
    src: "https://framerusercontent.com/images/izhLqtCcZST33nDWalXCz3fQfM.svg",
    alt: "Partner 2",
    width: 162,
    height: 26,
  },
  {
    src: "https://framerusercontent.com/images/rnmwA5itzMDkq8CbVv4BeWB2EBk.svg",
    alt: "Partner 3",
    width: 166,
    height: 26,
  },
  {
    src: "https://framerusercontent.com/images/uWIpXolmyNxaQchiWTNQ8Jsj4Lc.svg",
    alt: "Partner 4",
    width: 156,
    height: 26,
  },
  {
    src: "https://framerusercontent.com/images/pNl9HJxLqmYeiIvOCB5aFNvRmg.svg",
    alt: "Partner 5",
    width: 146,
    height: 27,
  },
  {
    src: "https://framerusercontent.com/images/nR3vGOB0lkU1c6dvS5ABSYWqpEs.svg",
    alt: "Partner 6",
    width: 145,
    height: 26,
  },
];

const LogoList = () => (
  <ul className="companies-list" aria-hidden="true">
    {logos.map((logo, i) => (
      <li key={`logo-${i}`}>
        <div className="company-logo" style={{ flexShrink: 0 }}>
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "contain",
            }}
          />
        </div>
      </li>
    ))}
  </ul>
);

const Logos = () => {
  return (
    <section
      className="companies-section"
      id="companies"
      aria-label="Trusted partners"
    >
      <div className="companies-container">
        <p className="companies-kicker">Trusted by forward-thinking teams</p>
        <div
          className="companies-ticker"
          role="group"
          aria-label="Partner logos marquee"
        >
          <LogoList />
          <LogoList />
        </div>
      </div>
    </section>
  );
};

export default Logos;
