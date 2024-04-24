// src/components/Header.js
import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ASHLESHA KHANAPURE</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#skills-and-interests">Skills & Interests</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certified-courses">Certificates</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

