import React from 'react';
import './pIPSection.scss';

export const PIPSection = () => {
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
            <button className="prev-btn">{'<'}</button>
            <div className="project-cards">
              {[1, 2].map((card, index) => (
                <div className="project-card" key={index}>
                  <div>
                    <img
                      src="/images/pips.jpeg"
                      alt={`Project ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="next-btn">{'>'}</button>
          </div>
          <div className="cta-button">
            <button>Let’s Built Your Idea</button>
          </div>
        </div>
      </div>
    </div>
  );
};
