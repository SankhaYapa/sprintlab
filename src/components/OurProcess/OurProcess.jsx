import React from 'react';
import './ourProcess.scss';

export const OurProcess = () => {
  return (
    <div className="our-process">
        <div className='our-process-wrapper'> 
        <div className="process-header">
        <h2>
          <span className="section-number">02 |</span> OUR PROCESS
        </h2>
        <div class="gradient-line"></div>
      </div>
     <div className='our-process-bottom'> 
        <h2>Our Process.</h2>
         <span>Reliable process for achieving distinctiveness.</span>
        <div className="process-steps">
            {[1, 2, 3, 4].map((step, index) => (
            <div className="process-step" key={index}>
                <h3>0{step}</h3>
                <h4>Discovery & Research</h4>
                <ul>
                <li>Conduct in-depth consultations to understand your needs.</li>
                <li>Identify project goals and requirements.</li>
                <li>Develop a detailed project plan and timeline.</li>
                </ul>
            </div>
            ))}
        </div>
     </div>

        </div>
    
    </div>
  );
};
