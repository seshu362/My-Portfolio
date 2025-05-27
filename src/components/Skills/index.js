// src/components/Skills/index.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import './index.css';

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'Angular', level: 75 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'SQLite & SQL', level: 80 },
    { name: 'MongoDB', level: 30 },
  ];
  
  const SkillBar = ({ skill, delay }) => (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay }}
          style={{
            background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`
          }}
        ></motion.div>
      </div>
    </div>
  );
  
  return (
    <section id="skills" className="skills-section section-container" ref={ref}>
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-container">
        <motion.div 
          className="skills-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Technical Proficiency</h3>
          <p>
            With a strong foundation in both frontend and backend technologies, I create responsive, 
            user-friendly applications with clean, maintainable code. I'm constantly learning and 
            adapting to new technologies to expand my skill set.
          </p>
        </motion.div>
        
        <div className="skills-grid">
          <GlassmorphicCard className="skills-card">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={0.2 + (index * 0.1)} />
              ))}
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="skills-card">
            <h3>Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={0.2 + (index * 0.1)} />
              ))}
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="skills-card wide-card">
            <h3>Other Skills</h3>
            <div className="other-skills">
              {['REST APIs', 'React Hooks', 'JWT Authentication', 'Git/GitHub', 'React Router', 'CRUD Operations', 'Figma', 'Responsive Design', 'State Management', 'Problem Solving'].map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="other-skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
}

export default Skills;