import React, { useState, useEffect } from 'react';
import profil from "../images/Jeannot.jpeg";


const ProgressBarImage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating progress increment
    const progressInterval = setInterval(() => {
      setProgress(progress + 100);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const progressBarStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
  };

  const progressBarFillStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    transition: 'width 1s ease-in-out',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={progressBarStyles}>
        <div style={progressBarFillStyles}></div>
      </div>
      <img src={profil} alt="image" />
    </div>
  );
};

export default ProgressBarImage;