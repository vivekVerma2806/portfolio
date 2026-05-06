import React from 'react';
import { Code2, ExternalLink, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="logo">Vivek<span>.</span></h2>
          <p>Building the future with code and AI.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Navigate</h4>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="link-group">
            <h4>Socials</h4>
            <a href="https://github.com/vivekVerma2806">GitHub</a>
            <a href="https://linkedin.com/in/vivek-verma-cse">LinkedIn</a>
            <a href="mailto:vivekcse44@gmail.com">Email</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vivek Kumar Verma. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
