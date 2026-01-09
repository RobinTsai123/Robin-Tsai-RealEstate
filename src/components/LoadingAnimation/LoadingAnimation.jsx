// ChineseNewYearAnimation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const medallionRef = useRef(null);
  const nameRef = useRef(null);
  const sloganRef = useRef(null);
  const greetingRef = useRef(null);
  const lanternRef = useRef(null);
  const petalsRef = useRef([]);
  const goldParticlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Create cherry blossom petals
    const petalCount = 30;
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = `${-10 + Math.random() * 20}%`;
      overlayRef.current.appendChild(petal);
      petalsRef.current.push(petal);
    }

    // Create golden particles
    const goldCount = 40;
    for (let i = 0; i < goldCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'gold-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      overlayRef.current.appendChild(particle);
      goldParticlesRef.current.push(particle);
    }

    // Animate cherry blossom petals falling and rotating
    petalsRef.current.forEach((petal, i) => {
      const randomDelay = Math.random() * 3;
      const randomDuration = 4 + Math.random() * 3;
      const randomX = Math.random() * 200 - 100;
      
      gsap.to(petal, {
        y: '120vh',
        x: randomX,
        rotation: 360 + Math.random() * 360,
        opacity: 0.8,
        duration: randomDuration,
        delay: randomDelay,
        ease: 'sine.inOut',
        onComplete: () => {
          // Reset and repeat
          gsap.set(petal, { y: '-10%', x: 0, rotation: 0 });
          gsap.to(petal, {
            y: '120vh',
            x: Math.random() * 200 - 100,
            rotation: 360 + Math.random() * 360,
            opacity: 0.8,
            duration: randomDuration,
            ease: 'sine.inOut',
            repeat: -1,
            repeatDelay: Math.random() * 2
          });
        }
      });
    });

    // Animate golden particles floating
    goldParticlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: `${Math.random() * 100 - 50}px`,
        x: `${Math.random() * 100 - 50}px`,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.4 + Math.random() * 0.4,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2
      });
    });

    // Main animation sequence
    tl.to(medallionRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: 'power3.out'
    })
    .to('.medallion-layer', {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: 'none',
      stagger: {
        each: 0.3,
        from: 'start'
      }
    }, 0)
    .to(lanternRef.current, {
      opacity: 1,
      y: -25,
      duration: 1.5,
      ease: 'elastic.out(1, 0.4)'
    }, 0.6)
    .to('.lantern-body', {
      scaleY: 0.98,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    }, 1.5)
    .to('.lantern-shine', {
      scale: 1.3,
      opacity: 0.9,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    }, 1.5)
    .fromTo(nameRef.current.children, {
      opacity: 0,
      y: -60,
      rotationX: 90,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: 1,
      stagger: 0.07,
      ease: 'back.out(2)'
    }, 1)
    .fromTo(sloganRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out'
    }, 2.3)
    .fromTo(greetingRef.current.children, {
      opacity: 0,
      scale: 0.7,
      y: 30
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.25,
      ease: 'elastic.out(1, 0.6)'
    }, 2.8);

    // Light rays rotation
    gsap.to('.light-ray', {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: 'none'
    });

    // Medallion center pulsing glow
    gsap.to('.medallion-center', {
      scale: 1.15,
      boxShadow: '0 0 70px rgba(251, 191, 36, 1), 0 0 140px rgba(251, 191, 36, 0.7), inset 0 0 40px rgba(255, 255, 255, 0.8)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Corner decorations subtle animation
    gsap.to('.corner-decoration', {
      scale: 1.1,
      opacity: 0.35,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    // Exit animation
    const exitTimer = setTimeout(() => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }
      });
    }, 6000);

    return () => {
      clearTimeout(exitTimer);
      tl.kill();
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-overlay" ref={overlayRef}>
      <div className="gradient-bg"></div>

      {/* Golden light rays */}
      <div className="light-rays">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="light-ray" style={{ '--ray-index': i }}></div>
        ))}
      </div>

      {/* Chinese Medallion */}
      <div className="medallion-container" ref={medallionRef}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="medallion-layer"></div>
        ))}
        <div className="medallion-center"></div>
      </div>

      {/* Premium Chinese Lantern */}
      <div className="premium-lantern" ref={lanternRef}>
        <div className="lantern-glow"></div>
        <div className="lantern-top"></div>
        <div className="lantern-body">
          <div className="lantern-shine"></div>
          <div className="lantern-pattern"></div>
        </div>
        <div className="lantern-bottom"></div>
        <div className="lantern-tassel"></div>
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
          <div className="main-greeting">恭喜发财</div>
          <div className="sub-greeting">May Prosperity Come Your Way</div>
        </div>
      </div>

      {/* Corner cloud decorations */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  );
};

export default LoadingAnimation;