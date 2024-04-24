// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Research at AI-ML, KLETECH, Hubli</h3>
          <p>Conducted extensive research focused on optimizing neural networks for enhanced efficiency and performance, machine learning.</p>
        </div>
        <div className="experience-item">
          <h3>Hackathon</h3>
          <p>Smart India Hackathon India 2023</p>
          <p>Developed a software application for Doctor appointment system.</p>
          <p>TECH stack used was MEAN.</p>
        </div>
        <div className="experience-item">
          <h3>Online Courses</h3>
          <p>Complete Web Development Udemy India 2023-24</p>
          <p>100 days of code: The Complete Python Pro Bootcamp Udemy India 2023-24</p>
          <p>Machine Learning A-Z Udemy India 2023-24</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </section>
  );
};

export default Experience;
