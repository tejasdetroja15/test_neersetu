import React from "react";
import "./Logos.css";

const logos = [
  "https://framerusercontent.com/images/PzrWJG6xDSOzh5XrQ0cMqlq2yzE.svg",
  "https://framerusercontent.com/images/izhLqtCcZST33nDWalXCz3fQfM.svg",
  "https://framerusercontent.com/images/rnmwA5itzMDkq8CbVv4BeWB2EBk.svg",
  "https://framerusercontent.com/images/uWIpXolmyNxaQchiWTNQ8Jsj4Lc.svg",
  "https://framerusercontent.com/images/pNl9HJxLqmYeiIvOCB5aFNvRmg.svg",
  "https://framerusercontent.com/images/nR3vGOB0lkU1c6dvS5ABSYWqpEs.svg",
];

const Logos = () => {
  // Duplicate the array so it loops smoothly
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <section className="companies-section" id="companies">
      <div className="companies-wrapper">
        <ul className="companies-list">
          {loopLogos.map((logo, i) => (
            <li key={i} className="company-logo">
              <img src={logo} alt={`Company ${i}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Logos;
