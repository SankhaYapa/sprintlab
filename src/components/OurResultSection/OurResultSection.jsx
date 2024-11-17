import React from 'react';
import './ourResultSection.scss';

export const OurResultSection = () => {
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
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <img className='profileimg' src={testimonial.image} alt={testimonial.name} />
              
                <div>
                      <img  className='comma'src="/images/comma.png" alt="" />
                </div>
                <p className="quote">{testimonial.text}</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
