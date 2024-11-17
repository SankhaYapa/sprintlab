import React from 'react';
import './whyUsSection.scss';

export const WhyUsSection = () => {
  return (
    <div className="why-us">
      <div className="why-us-wrapper">
        {/* Section Header */}
        <div className="why-us-header">
          <h2>
            <span className="section-number">05 |</span> WHY US
          </h2>
          <div className="gradient-line"></div>
        </div>
        {/* Section Content */}
        <div className="why-us-content">
          <h2>Why Us</h2>
          <span>Hear what our clients have to say about our team and our services.</span>
          <div className="why-us-cards">
            {[1, 2, 3].map((_, index) => (
              <div className="why-us-card" key={index}>
                <h3>Impact Beyond Code</h3>
                <p>
                  Quickly receive a high-quality brand logo, representing your business vision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
