// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-item">
          <h3>BTECH in Computer Science and Artificial Intelligence</h3>
          <p>KLE Technological University. 2021–present</p>
          <p>CGPA: 7.80</p>
        </div>
        <div className="education-item">
          <h3>PUC Science PCMB</h3>
          <p>KLE Prerana PU college, Hubli. 2019–2021</p>
          <p>Percentage(Overall): 90</p>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};

export default Education;
