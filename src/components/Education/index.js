// src/components/Education/index.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import './index.css';

function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Electrical and Electronics Engineering',
      institution: 'RGUKT AP IIIT, RK Valley',
      location: 'Andhra Pradesh, India',
      duration: '2020 - 2024',
      grade: 'CGPA: 7.27',
      icon: 'fas fa-graduation-cap',
    },
    {
      id: 2,
      degree: 'Inter MPC',
      field: '',
      institution: 'RGUKT AP IIIT, RK Valley',
      location: 'Andhra Pradesh, India',
      duration: '2018 - 2020',
      grade: 'CGPA: 7.78',
      icon: 'fas fa-university',
    },
    {
      id: 3,
      degree: '10th SSC',
      field: '',
      institution: 'ZP High School, 49.KPM',
      location: 'Chittoor, Andhra Pradesh',
      duration: '2017 - 2018',
      grade: 'GPA: 9.8',
      icon: 'fas fa-university',
    },
  ];
  
  return (
    <section id="education" className="education-section section-container" ref={ref}>
      <h2 className="section-title">Education</h2>
      
      <div className="education-timeline-container">
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="timeline-marker"></div>
              <GlassmorphicCard className="education-card">
                <div className="education-icon">
                  <i className={edu.icon}></i>
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  {edu.field && <h4>{edu.field}</h4>}
                  <div className="education-details">
                    <p>
                      <i className="fas fa-building"></i>
                      <span>{edu.institution}</span>
                    </p>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{edu.location}</span>
                    </p>
                    <p>
                      <i className="fas fa-calendar-alt"></i>
                      <span>{edu.duration}</span>
                    </p>
                    <p>
                      <i className="fas fa-star"></i>
                      <span>{edu.grade}</span>
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="education-certificates"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3>Certifications</h3>
        <div className="certificates-container">
          <GlassmorphicCard className="certificate-card">
            <div className="certificate-icon">
              <i className="fab fa-react"></i>
            </div>
            <div className="certificate-content">
              <h4>React JS</h4>
              <p>
                Obtained the NxtWave CCBP certificate focusing on React.js and related technologies. 
                Learned to build dynamic, interactive user interfaces and manage complex application states effectively.
              </p>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="certificate-card">
            <div className="certificate-icon">
              <i className="fab fa-node-js"></i>
            </div>
            <div className="certificate-content">
              <h4>Node.js</h4>
              <p>
                Completed NxtWave's Node.js certification program, gaining expertise in server-side JavaScript development, 
                RESTful API creation, and backend architecture with Express.js and middleware implementation.
              </p>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="certificate-card">
            <div className="certificate-icon">
              <i className="fab fa-html5"></i>
            </div>
            <div className="certificate-content">
              <h4>HTML and CSS</h4>
              <p>
                Earned NxtWave certification in HTML and CSS fundamentals, mastering responsive design principles, 
                flexbox, grid layouts, and modern CSS features to create visually appealing web interfaces.
              </p>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="certificate-card">
            <div className="certificate-icon">
              <i className="fab fa-python"></i>
            </div>
            <div className="certificate-content">
              <h4>Python</h4>
              <p>
                Received NxtWave Python certification covering core concepts, data structures, 
                object-oriented programming principles, and practical applications for backend development and automation.
              </p>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard className="certificate-card">
            <div className="certificate-icon">
              <i className="fab fa-js"></i>
            </div>
            <div className="certificate-content">
              <h4>JavaScript</h4>
              <p>
                Certified in JavaScript through NxtWave, demonstrating proficiency in ES6+ features, 
                asynchronous programming, DOM manipulation, and implementing modern development patterns.
              </p>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="certificate-card">
            <div className="certificate-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="certificate-content">
              <h4>Generative AI Mega Workshop</h4>
              <p>
                Completed an intensive workshop focused on Generative AI at NxtWave, 
                where I developed a Generative AI application and gained hands-on experience in AI concepts.
              </p>
            </div>
          </GlassmorphicCard>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;