import React from 'react'
import './navbar.scss'

export default function NavBar() {
  return (
    <div className='main-navbar-container'>
        <div className='main-navbar-wrapper'>
            <div className='logo-container'>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className='menu-container'>
            <span>Process</span>
            <span>Work</span>
            <span>Services</span>
            <span>About</span>
            <span>Contact Us</span>
            <span>FAQs</span>
            </div>
            <div className='header-button'>
                <button>Let’s Built Your Idea</button>
            </div>
        </div>
       
    </div>
  )
}
