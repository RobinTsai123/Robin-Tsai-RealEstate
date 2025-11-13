// Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'appraisal'];
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      
      // Use the same offset logic as navigation
      let extraOffset;
      if (window.innerWidth < 768) {
        extraOffset = 120; // Mobile offset (positive for scroll detection)
      } else {
        extraOffset = 120; // Desktop/Tablet offset (positive for scroll detection)
      }
      
      const scrollPosition = window.scrollY + headerHeight + extraOffset;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const header = document.querySelector('header');
    
    if (section && header) {
      const headerHeight = header.offsetHeight;
      
      // Responsive offset based on screen width
      let extraOffset;
      if (window.innerWidth < 768) {
        extraOffset = -120; // Mobile
      } else {
        extraOffset = -120; // Desktop/Tablet
      }
      
      const targetPosition = section.offsetTop - headerHeight - extraOffset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/images/PageLogo.png`} alt="Real Estate Logo" />
            <div className="logo-text">
              <h1 className="name">Robin Tsai</h1>
            </div>
          </div>
          
          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={activeSection === 'services' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'services')}
              >
                My Services
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                New Launch Project
              </a>
            </li>
            <li>
              <a 
                href="#appraisal" 
                className={activeSection === 'appraisal' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'appraisal')}
              >
                Appraisal
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;