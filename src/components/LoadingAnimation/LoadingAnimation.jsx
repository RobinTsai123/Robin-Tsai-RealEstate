// LoadingAnimation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const snowflakeRef = useRef(null);
  const nameRef = useRef(null);
  const sloganRef = useRef(null);
  const greetingRef = useRef(null);
  const ornamentRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Create snowflake particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      overlayRef.current.appendChild(particle);
      particlesRef.current.push(particle);
    }

    // Animate particles (snowflakes falling)
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: `${Math.random() * 200 + 100}px`,
        x: `${Math.random() * 100 - 50}px`,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        ease: 'sine.inOut',
        delay: Math.random() * 2
      });
    });

    // Main animation sequence
    tl.to(snowflakeRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out'
    })
    .to('.snowflake-layer', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      stagger: {
        each: 0.2,
        from: 'start'
      }
    }, 0)
    .to(ornamentRef.current, {
      opacity: 1,
      y: -20,
      duration: 1.2,
      ease: 'elastic.out(1, 0.3)'
    }, 0.5)
    .to('.ornament-shine', {
      scale: 1.2,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    }, 1)
    .fromTo(nameRef.current.children, {
      opacity: 0,
      y: -50,
      rotationX: 90
    }, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'back.out(1.7)'
    }, 0.8)
    .fromTo(sloganRef.current, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, 2)
    .fromTo(greetingRef.current.children, {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.5)'
    }, 2.5);

    // Light rays animation
    gsap.to('.light-ray', {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none'
    });

    // Exit animation
    const exitTimer = setTimeout(() => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }
      });
    }, 5000);

    return () => {
      clearTimeout(exitTimer);
      tl.kill();
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-overlay" ref={overlayRef}>
      <div className="gradient-bg"></div>

      {/* Light rays */}
      <div className="light-rays">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="light-ray" style={{ '--ray-index': i }}></div>
        ))}
      </div>

      {/* Geometric Snowflake */}
      <div className="snowflake-container" ref={snowflakeRef}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="snowflake-layer"></div>
        ))}
        <div className="snowflake-center"></div>
      </div>

      {/* Premium Christmas Ornament */}
      <div className="premium-ornament" ref={ornamentRef}>
        <div className="ornament-glow"></div>
        <div className="ornament-hanger"></div>
        <div className="ornament-ball">
          <div className="ornament-shine"></div>
          <div className="ornament-pattern"></div>
        </div>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <div className="name-container" ref={nameRef}>
          {['R', 'o', 'b', 'i', 'n', ' ', 'T', 's', 'a', 'i'].map((letter, i) => (
            <span key={i} className="name-letter">{letter}</span>
          ))}
        </div>

        <div className="slogan" ref={sloganRef}>
          Diagnosing your property goals, prescribing the right solutions
        </div>

        <div className="greeting-container" ref={greetingRef}>
          <div className="main-greeting">Merry Christmas</div>
          <div className="sub-greeting">& A Prosperous New Year</div>
        </div>
      </div>

      {/* Corner ornaments */}
      <div className="corner-ornament top-left"></div>
      <div className="corner-ornament top-right"></div>
      <div className="corner-ornament bottom-left"></div>
      <div className="corner-ornament bottom-right"></div>
    </div>
  );
};

export default LoadingAnimation;