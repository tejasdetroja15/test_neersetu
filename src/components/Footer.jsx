import React from "react";
import "./Footer.css";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        {/* <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="contact-list">
            <li>
              <a
                href="https://www.google.co.in/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="icon" />
                <span>1234 Main Street, Suite 100</span>
              </a>
            </li>
            <li>
              <a href="tel:(123)456-7890">
                <Phone className="icon" />
                <span>(123) 456-7890</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@example.com">
                <Mail className="icon" />
                <span>info@example.com</span>
              </a>
            </li>
          </ul>
        </div> */}

        {/* Legal */}
        <div className="footer-section">
          <h4 className="footer-title">Legal</h4>
          <ul>
            <li>
              <a href="./legal/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="./legal/term-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-socials">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </div>

      {/* Branding */}
      <div className="footer-branding">
        <h1 className="footer-logo"> NeerSetu</h1>
        <p>© 2025 NeerSetu</p>
      </div>
    </footer>
  );
};

export default Footer;
