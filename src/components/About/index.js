// src/components/About/index.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import './index.css';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <section id="about" className="about-section section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content" ref={ref}>
        <GlassmorphicCard className="about-card">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Who I Am</h3>
           <p>
                I am a recently graduated Full Stack Developer with a solid understanding of both frontend 
                and backend technologies. I have experience in building dynamic and responsive web applications, 
                with a passion for creating intuitive and engaging user interfaces.
                </p>
                <p>
                I recently completed my Bachelor of Technology in Electrical and Electronics Engineering 
                from RGUKT AP IIIT, RK Valley in 2024, where I maintained a CGPA of 7.27. I'm seeking an opportunity 
                to leverage my skills in a challenging role to contribute to impactful projects and further 
                develop my expertise.
                </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span>G Seshu</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span>gseshu4028@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span>+91-8106458788</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#contact" className="contact-btn">Get In Touch</a>
              <a 
                href="https://drive.google.com/file/d/1NDqatUKwIBm3Ejuv2nyKK2ch2YoY8Ces/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-btn"
                >
                Download CV
                </a>
            </div>
          </motion.div>
        </GlassmorphicCard>
        
        <motion.div 
          className="tech-stack"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>My Tech Stack</h3>
          <div className="tech-icons">
            <div className="tech-icon">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-angular"></i>
              <span>Angular</span>
            </div>
            <div className="tech-icon">
              <i className="fab fa-python"></i>
              <span>Python</span>
            </div>
            <div className="tech-icon">
              <i className="fas fa-database"></i>
              <span>MongoDB</span>
            </div>
            <div className="tech-icon">
              <i className="fas fa-database"></i>
              <span>SQL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;