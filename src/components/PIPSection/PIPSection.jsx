import React, { useState, useEffect } from 'react';
import './pIPSection.scss';

export const PIPSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImagesCount, setVisibleImagesCount] = useState(5);

  const images = [
    '/images/pips.jpeg',
    '/images/team2.jpeg',
    '/images/pips.jpeg',
    '/images/team2.jpeg',
    '/images/pips.jpeg',
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1215) {
        setVisibleImagesCount(1); // Show fewer images on smaller screens
      } else {
        setVisibleImagesCount(2); // Show more images on larger screens
      }
    };

    handleResize(); // Set initial count based on the current screen width
    window.addEventListener('resize', handleResize); // Update count on resize

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Slide every 3 seconds

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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleImagesCount : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="pip-section">
      <div className="pip-wrapper">
        <div className="pip-header">
          <h2>
            <span className="section-number">03 |</span> PROJECTS IN PROGRESS
          </h2>
          <div className="gradient-line"></div>
        </div>

        <div className="pip-bottom">
          <h2>Project In Progress.</h2>
          <span>
            Discover our expertly developed software solutions, designed to
            deliver efficiency and innovation. Our product engineering team's
            expertise ensures top-notch quality and performance every time.
          </span>

          <div className="pip-content">
            <div className="prev-btn" onClick={handlePrevClick}>
              <img src="/images/prevbtn.png" alt="Previous" />
            </div>
            <div className="project-cards">
              <div className="project-card">
                {getVisibleImages().map((img, index) => (
                  <img key={index} src={img} alt={`icon-${index}`} />
                ))}
              </div>
            </div>
            <div className="next-btn" onClick={handleNextClick}>
              <img src="/images/nextbtn.png" alt="Next" />
            </div>
          </div>
          <div className="cta-button">
            <button>Let’s Built Your Idea</button>
          </div>
        </div>
      </div>
    </div>
  );
};
