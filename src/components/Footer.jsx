import React from 'react';

const Footer = ({ className='' }) => (
  <footer className={`site-footer ${className}`} id="contact">
    <div className="container footer-inner">
      <p>© Copyrights 2025 - {new Date().getFullYear()} Pasific Interactive. All rights reserved. Built with 💙 by Yudha Prasetiya</p>
      <div className="socials">
        {/* <a href="#" aria-label="github">GitHub</a>
        <a href="#" aria-label="twitter">Twitter</a> */}
      </div>
    </div>
  </footer>
);

export default Footer;
