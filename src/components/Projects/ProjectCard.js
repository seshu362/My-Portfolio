import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '../UI/GlassmorphicCard';

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5, 
        delay: Math.min(0.1 * index, 0.5) // Cap delay to 0.5s max
      }}
      className="project-card-wrapper"
    >
      <GlassmorphicCard className="project-card">
        <div className="project-image">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
          <div className="project-links">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i>
              <span>Live Demo</span>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
                    <div className="project-tech">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );
}

export default ProjectCard;