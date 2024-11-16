import React from 'react';
import './headerSection.scss';

export const HeaderSection = () => {
  return (
    <div className="header-section">
      <h1>Masterfully Crafting World-Class <br /> Custom Software</h1>
      <p>
        A Tight-Knit Team with 20+ Years of Expertise, Turning Your Ideas into
        Powerful Software Solutions. We Blend Code, Skill, and Innovation to
        Create Software That’s Nothing Short of Art.
      </p>
      <div className="header-buttons">
        <button className="build-idea-button">Let's Build Your Idea</button>
        <div>
        <button className="watch-video-button">
        <img src="/images/play.png" alt="ts" />
        </button>
        <span>Watch Video</span>
        </div>

      </div>
      <div className="tech-icons">
        <div className="icon">
        <img src="/images/Group 622.png" alt="Group 622" />
        <img src="/images/vue.png" alt="vue" />
        <img src="/images/js.png" alt="js" />
        <img src="/images/ts.png" alt="ts" />
        <img src="/images/Figma.png" alt="figma" />
        </div>
       
      </div>
    </div>
  );
};
