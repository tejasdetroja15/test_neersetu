import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          © {new Date().getFullYear()} NeerSetu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


