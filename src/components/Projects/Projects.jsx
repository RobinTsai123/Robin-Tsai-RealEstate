import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2>New Launch Project</h2>
      <h3>Upcoming New Launches 2025</h3>
      <img src={`${process.env.PUBLIC_URL}/images/project2025.jpg`} alt="New Launch Projects" />
    </section>
  );
};

export default Projects;