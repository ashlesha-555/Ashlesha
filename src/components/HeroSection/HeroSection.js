// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import profilePhoto from '../HeroSection/ashh.jpg'; // Import your profile photo
import backgroundImage from '../HeroSection/k.jpeg'; // Import your background image

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to my Portfolio</h1>
            <p>Hi, I'm Ashlesha Khanapure, a passionate Computer Science student with a keen interest in Artificial Intelligence and Front-End Development.</p>
          </div>
          <div className="hero-image">
            <img src={profilePhoto} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
