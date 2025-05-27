// src/components/Hero/index.js
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../UI/ParticleBackground';
import AnimatedText from '../UI/AnimatedText';
import './index.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Hello, I'm</h3>
          <h1>
            <AnimatedText text="G Seshu" />
          </h1>
          <h2>
            <AnimatedText 
              text="Full Stack Developer" 
              delay={0.2}
            />
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Dedicated and motivated developer with expertise in building dynamic and responsive web applications.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glassmorphic profile-card">
            <div className="profile-placeholder">
              <img src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1748283967/ChatGPT_Image_May_26_2025_11_53_31_PM_xkpofe.png" alt="G Seshu" />
            </div>
            <div className="social-links">
              <a href="https://github.com/seshu362" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/seshu63" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:gseshu4028@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
}

export default Hero;