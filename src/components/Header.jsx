import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrap">
      <nav className="header-nav">
        <div className="header-nav-item">
          <a href="#hero" className="header-nav-link">
            Home
          </a>
        </div>
        <div className="header-nav-separator"></div>
        <div className="header-nav-item">
          <a href="#features" className="header-nav-link">
            Features
          </a>
        </div>
        <a
          href="./"
          className="header-logo"
          data-framer-page-link-current="true"
        >
          <img
            src="https://framerusercontent.com/images/RYJ3bCIn0muya9k3TyVsZn6vK8.png"
            alt="NeerSetu Logo"
          />
        </a>
        <div className="header-nav-item">
          <a href="#gallery" className="header-nav-link">
            Gallery
          </a>
        </div>
        <div className="header-nav-separator"></div>
        <div className="header-nav-item">
          <a href="#pricing" className="header-nav-link">
            Pricing
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
