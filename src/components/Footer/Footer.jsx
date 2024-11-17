import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
         
            <img src="images/logo.png" alt="" className="footer-logo"/>
          
          <button className="cta-button">Let's Build Your Idea</button>
          <div className="social-icons">
            <a href="#!">
              <img src="images/Instagram.png" alt="" />
            </a>
            <a href="#!">
            <img src="images/Facebook.png" alt="" />
            </a>
            <a href="#!">
            <img src="images/ph_twitter-logo-fill.png" alt="" />
            </a>
            <a href="#!">
            <img src="images/ion_logo-github.png" alt="" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links">
            <a href="#!">Process</a>
            <a href="#!">Work</a>
            <a href="#!">Services</a>
            <a href="#!">About</a>
          </div>
          <div className="footer-links">
            <a href="#!">FAQs</a>
            <a href="#!">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2023 Maxwell Inc. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#!">Terms of Service</a>
          <a href="#!">Privacy Policy</a>
          <a href="#!">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
