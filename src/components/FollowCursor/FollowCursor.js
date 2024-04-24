// FollowCursor.js
import React, { useEffect, useState } from 'react';
import './FollowCursor.css';

const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      // Update the position with a slight delay
      setTimeout(() => {
        setPosition({ x: clientX, y: clientY });
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="follow-icon star" style={{ left: position.x, top: position.y }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2l2.328 7.15h7.44l-6 4.364 2.328 7.136-6-4.364-6 4.364 2.328-7.136-6-4.364h7.44z"/>
      </svg>
    </div>
  );
};

export default FollowCursor;
