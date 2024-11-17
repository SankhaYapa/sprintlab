import React, { useState } from 'react';
import './faqSSection.scss';

export const FAQSSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
      answer: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus 
        ultrices. Ac pharetra ultrices consectetur consequat tellus massa. 
        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula 
        ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing.`,
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
      answer: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus 
        ultrices. Ac pharetra ultrices consectetur consequat tellus massa. 
        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula 
        ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing.`,
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
      answer: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus 
        ultrices. Ac pharetra ultrices consectetur consequat tellus massa. 
        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula 
        ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing.`,
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
      answer: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus 
        ultrices. Ac pharetra ultrices consectetur consequat tellus massa. 
        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula 
        ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing.`,
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
      answer: `Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus 
        ultrices. Ac pharetra ultrices consectetur consequat tellus massa. 
        Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula 
        ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing.`,
    },
  ];

  return (
    <div className="faq-section">
      <div className='faq-section-wrapper'>
        <div className="faq-header-container">
          <h2>
            <span className="section-number">07 |</span> FAQs
          </h2>
          <div className="gradient-line"></div>  
        </div>

      <div className="faqs-container">
      <h2>FAQs</h2>
      <span>Hear what our clients have to say about out team and our services.</span>
        <div className='faqs-container-sections'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="faq-question">{faq.question}</div>
              <div className="faq-toggle"  style={{
      backgroundColor: activeIndex === index ? 'rgba(79, 169, 226, 1)' : 'rgba(255, 255, 255, 0.1)', // Dynamic background color
    }}>
                {activeIndex === index ? '–' : '+'}
              </div>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
        </div>
        <button>Let’s Built Your Idea</button>
      </div>
      </div>
    </div>
  );
};
