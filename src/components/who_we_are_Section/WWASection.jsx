import React from 'react';
import './wWASection.scss';

export const WWASection = () => {
  return (
    <div className="wwa-section">
       
        <div className='wwa-section-wrapper'>
            
                <div className='wwa-section-wrapper-header'>
                    <h2>
                    <span className="section-number">01   |</span> WHO WE ARE
                    </h2>
                    <div class="gradient-line"></div>
                </div>
                <div className='wwa-section-wrapper-details'>
                    <div className="wwa-text">
                    
                    <h3>
                    We revolutionized building compliance and asset management with our
                    flagship product
                    </h3>
                    <p>
                    A Tight-Knit Team with 20+ Years of Expertise, Turning Your Ideas into
                    Powerful Software Solutions. We Blend Code, Skill, and Innovation to
                    Create Software That’s Nothing Short of Art.
                    </p>
                    <button className="cta-button">Let’s Build Your Idea</button>
                    </div>
                    <div className="wwa-image">
                        <img src='/images/wwa.png' alt="Team Working" />
                    </div>
                </div>
              
        </div>
      
    </div>
  );
};
