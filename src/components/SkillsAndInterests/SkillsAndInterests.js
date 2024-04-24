// src/components/SkillsAndInterests.js
import React from 'react';
import './SkillsAndInterests.css';

const SkillsAndInterests = () => {
  return (
    <section id="skills-and-interests" className="skills-interests-section">
      <div className="container">
        <div className="about-me-box">
          <h2>About Me</h2>
          <p>Hello there! I'm Ashlesha, a proficient Computer Science Engineering student deeply immersed in the realms of machine learning and Front-End Development. With a knack for merging technological innovation with user-centric design, I excel in MERN stack development, alongside a solid foundation in algorithms and data structures. Beyond coding, I possess a talent for project management, guiding initiatives from conception to completion. Committed to lifelong learning, I eagerly absorb insights from industry leaders to continually enhance my skills. Outside the tech sphere, I'm a passionate photographer capturing life's beauty, an advocate for embracing creativity, and a dedicated lifelong learner eager to share stories and discoveries. Let's connect! 📸🎨🌱</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li><div className="skill-box">Python</div></li>
            <li><div className="skill-box">React</div></li>
            <li><div className="skill-box">C++</div></li>
            <li><div className="skill-box">Data Structures & Algorithms</div></li>
            <li><div className="skill-box">Object-Oriented Programming</div></li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <ul>
            <li><div className="interest-box">Photography</div></li>
            <li><div className="interest-box">Designing</div></li>
            <li><div className="interest-box">Dancing</div></li>
            {/* Add more interests as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndInterests;
