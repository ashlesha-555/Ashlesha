// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import CertifiedCourses from '../src/components/CertifiedCourses/CertifiedCourses';
import SkillsAndInterests from './components/SkillsAndInterests/SkillsAndInterests';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import FollowCursor from './components/FollowCursor/FollowCursor';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic loading time
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading && <Loading />} {/* Render Loading component while loading is true */}
      {!loading && (
        <>
          <Header />
          <HeroSection />
          <FollowCursor />
          <SkillsAndInterests />
          <Education />
          <Experience />
          <CertifiedCourses />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
