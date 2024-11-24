import React, { useState } from 'react'; 
import './navbar.scss';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);  // Toggle the menu state
  };
  const close = () => {
    setMenuOpen(false);  // Toggle the menu state
  };
  return (
    <div className="main-navbar-container">
      <div className="main-navbar-wrapper">
        <div className="logo-container">
          <img src="/images/logo.png" alt="logo" />
        </div>

        {/* Hamburger Icon / Close Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          
            <img src="/images/hamburger.png" alt="hamburger icon" />
         
        </div>

        {/* Navigation Menu */}
        <div className={`menu-container ${menuOpen ? 'menu-open' : ''}`}>
        {menuOpen ? (<div className="close-icon" onClick={close}>
          <img src="/images/close.png" alt="" />
            </div>):""}
          <span>Process</span>
          <span>Work</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact Us</span>
          <span>FAQs</span>
        </div>

        <div className="header-button">
          <button>Let’s Build Your Idea</button>
        </div>
      </div>
    </div>
  );
}
