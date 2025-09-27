import React from "react";
import "./Tech.css";

const icons = [
  {
    id: "chart",
    svg: (
      <svg viewBox="0 0 256 256">
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z" />
      </svg>
    ),
    className: "icon-chart",
  },
  {
    id: "email",
    svg: (
      <svg viewBox="0 0 256 256">
        <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z" />
      </svg>
    ),
    className: "icon-email",
  },
  {
    id: "calendar",
    svg: (
      <svg viewBox="0 0 256 256">
        <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z" />
      </svg>
    ),
    className: "icon-calendar",
  },
  {
    id: "growth",
    svg: (
      <svg viewBox="0 0 256 256">
        <path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" />
      </svg>
    ),
    className: "icon-growth",
  },
];

const Tech = () => {
  return (
    <section className="tech-section">
      <h3 className="tech-heading">Boost Your Business with Custom Imagery</h3>

      <div className="icon-loop">
        {icons.map((icon) => (
          <div key={icon.id} className={`icon-container ${icon.className}`}>
            {icon.svg}
          </div>
        ))}
      </div>

      <div className="color-blur"></div>

      <div className="branding">Template by Hossein</div>
    </section>
  );
};

export default Tech;
