import React, { useState, useEffect } from 'react';
import './headerSection.scss';

export const HeaderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImagesCount, setVisibleImagesCount] = useState(5);

  const images = [
    '/images/Group 622.png',
    '/images/vue.png',
    '/images/Figma.png',
    '/images/js.png',
    '/images/ts.png',
    '/images/Figma.png',
    '/images/js.png',
    '/images/Figma.png'
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleImagesCount(4); // Show 4 images on mobile devices
      } else {
        setVisibleImagesCount(5); // Show 5 images on larger screens
      }
    };

    handleResize(); // Set initial count based on the current screen width
    window.addEventListener('resize', handleResize); // Update count on resize

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize); // Clean up on unmount
    };
  }, [images.length]);

  const getVisibleImages = () => {
    return images
      .slice(currentIndex, currentIndex + visibleImagesCount)
      .concat(
        images.slice(0, Math.max(0, currentIndex + visibleImagesCount - images.length))
      );
  };

  return (
    <div className="header-section">
      <h1>Masterfully Crafting World-Class Custom Software</h1>
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
          {getVisibleImages().map((img, index) => (
            <img key={index} src={img} alt={`icon-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
