import React, { useState, useEffect } from 'react'; 
import './ourResultSection.scss';

export const OurResultSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImagesCount, setVisibleImagesCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false); // To track mobile view

  const testimonials = [
    {
      name: 'Jessy K.',
      role: 'Front-End Developer',
      text: 'Great service and custom service! Perfect!',
      image: '/images/pro1.png',
    },
    {
      name: 'Marina J.',
      role: 'HR Officer',
      text: 'Perfect. Just perfect! I can’t say anything.',
      image: '/images/pro2.png',
    },
    {
      name: 'Marina J.',
      role: 'HR Officer',
      text: 'Perfect. Just perfect! I can’t say anything.',
      image: '/images/pro3.png',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && window.innerWidth <= 1215) {
        setVisibleImagesCount(2); 
        setIsMobile(true); // Tablet or small desktop view
      } else if (window.innerWidth <= 768) {
        setVisibleImagesCount(1); 
        setIsMobile(true); // Mobile view
      } else {
        setVisibleImagesCount(3); 
        setIsMobile(false); // Desktop view
      }
    };
    

    handleResize(); 
    window.addEventListener('resize', handleResize);

    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Only activate interval on mobile/tablet view
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      window.removeEventListener('resize', handleResize); // Clean up on unmount
    };
  }, [isMobile, testimonials.length]);

  const getVisibleImages = () => {
    return testimonials
      .slice(currentIndex, currentIndex + visibleImagesCount)
      .concat(
        testimonials.slice(0, Math.max(0, currentIndex + visibleImagesCount - testimonials.length))
      );
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleImagesCount : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };
  return (
    <div className="our-result-section">
      <div className="our-result-wrapper">
        <div className="result-header">
          <h2>
            <span className="section-number">04 |</span> OUR RESULTS
          </h2>
          <div className="gradient-line"></div>
        </div>

        <div className="result-content">
          <h2>Our Results.</h2>
          <span>Hear what our clients have to say about our team and services.</span>
          <div className="testimonials">
              <div className="prev-btn" onClick={handlePrevClick}>
              <img src="/images/prevbtn.png" alt="Previous" />
            </div>
            {getVisibleImages().map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <img className='profileimg' src={testimonial.image} alt={testimonial.name} />
                <div>
                  <img className='comma' src="/images/comma.png" alt="" />
                </div>
                <p className="quote">{testimonial.text}</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            ))}
            <div className="next-btn" onClick={handleNextClick}>
              <img src="/images/nextbtn.png" alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
