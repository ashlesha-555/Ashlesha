// src/components/Footer.js
import React from 'react';
import resumePdf from '../Footer/Ashlesha_Khanapure_Resume.pdf'; // Import your resume PDF file
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <h3>Contact</h3>
          <p>📞 Phone: 8123244077</p>
          <p>✉️ Email: ashleshakhanapure1@gmail.com</p>
          <p>🏠 Address: Nipani, Karnataka</p>
        </div>
        <div className="social-links">
          <h3>Connect with me</h3>
          <ul>
            <li>LinkedIn - <a href="https://linkedin.com/in/ashlesha-khanapure-b68b35236" target="_blank" rel="noopener noreferrer">ashlesha-khanapure</a></li>
            <li>Instagram - <a href="https://www.instagram.com/ashlesha_khanapure?igsh=MTJ1MjZ5cmV3YXZxYQ==" target="_blank" rel="noopener noreferrer">ashlesha_khanapure</a></li> {/* Add your Instagram ID */}
            <li>GitHub - <a href="https://github.com/ashlesha-555" target="_blank" rel="noopener noreferrer">ashlesha-555</a></li> {/* Add your GitHub ID */}
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
      <div className="download-resume">
        <a href={resumePdf} download="Ashlesha_Khanapure_Resume.pdf" className="resume-button">Download Resume</a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Ashlesha Khanapure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
