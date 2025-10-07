import React, { useState, useEffect } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay ${!isVisible ? 'hidden' : ''}`}>
      <div className="rangoli-pattern"></div>

      <div className="fireworks-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="firework"></div>
        ))}
      </div>

      <div className="diyas-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="diya">
            <div className="diya-base"></div>
            <div className="diya-flame"></div>
          </div>
        ))}
      </div>

      <div className="petals-container">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="petal"></div>
        ))}
      </div>

      <div className="sparkles-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="sparkle"></div>
        ))}
      </div>

      <div className="signature-container">
        <div className="signature-text">
          {['R', 'o', 'b', 'i', 'n', '\u00A0', 'T', 's', 'a', 'i'].map((letter, i) => (
            <span key={i} className="letter">{letter}</span>
          ))}
        </div>
        <div className="slogan-text">
          Diagnosing your property goals, prescribing the right solutions
        </div>
        <div className="blessing-text">
          <div className="hindi-blessing">शुभ दीपावली</div>
          <div className="english-blessing">Happy Deepavali</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;