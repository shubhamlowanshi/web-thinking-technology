import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-logo">
          <img src={logo} alt="Thinking Web Technology" />
        </div>
        <p className="footer-text">
          Let’s establish your brand’s online presence & scale it to new heights!
        </p>
        <ul className="footer-links">
          <li><Link to="/homes">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
        </ul>

      
        <p className="footer-copyright">© 2025 Thinkingweb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
