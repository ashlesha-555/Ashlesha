// src/components/CertifiedCourses.js
import React from 'react';
import './CertifiedCourses.css';
import certificateImage1 from '../CertifiedCourses/WEB.jpeg'; // Import certificate images
import certificateImage2 from '../CertifiedCourses/PYTHON.jpeg';
import certificateImage3 from '../CertifiedCourses/ML.png';
import certificateImage4 from '../CertifiedCourses/INCOFT.jpeg';

const CertifiedCourses = () => {
  // Function to handle certificate click
  const handleCertificateClick = (certificateImage) => {
    window.open(certificateImage, '_blank');
  };

  return (
    <section id="certified-courses" className="certified-courses-section">
      <div className="container">
        <h2>Certificates</h2>
        <div className="course" onClick={() => handleCertificateClick(certificateImage1)}>
          <h3>Complete Web Development Udemy India</h3>
          <p>2023-24</p>
        </div>
        <div className="course" onClick={() => handleCertificateClick(certificateImage2)}>
          <h3>100 days of code: The Complete Python Pro Bootcamp Udemy India</h3>
          <p>2023-24</p>
        </div>
        <div className="course" onClick={() => handleCertificateClick(certificateImage3)}>
          <h3>Machine Learning A-Z Udemy India</h3>
          <p>2023-24</p>
        </div>
        <div className="course" onClick={() => handleCertificateClick(certificateImage4)}>
          <h3>International Conference on Futuristic Technologies (INCOFT)</h3>
          <p>2023</p>
        </div>
      </div>
    </section>
  );
};

export default CertifiedCourses;
