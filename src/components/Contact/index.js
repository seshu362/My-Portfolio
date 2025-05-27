// src/components/Contact/index.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import './index.css';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Message sent successfully! I will get back to you soon.' });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
    }, 5000);
  };
  
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'gseshu4028@gmail.com',
      link: 'mailto:gseshu4028@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91-8106458788',
      link: 'tel:+918106458788',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Andhra Pradesh, India',
      link: null,
    },
  ];
  
  const socialLinks = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/seshu362',
      label: 'GitHub',
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/seshu63',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-twitter',
      url: '#',
      label: 'Twitter',
    },
    {
      icon: 'fab fa-instagram',
      url: '#',
      label: 'Instagram',
    },
  ];
  
  return (
    <section id="contact" className="contact-section section-container" ref={ref}>
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicCard className="info-card">
            <h3>Contact Information</h3>
            <p className="contact-intro">
              Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
            </p>
            
            <ul className="info-list">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <div className="info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-details">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
        
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
        >
          <GlassmorphicCard className="form-card">
            <h3>Send Me a Message</h3>
            
            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </GlassmorphicCard>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>&copy; {new Date().getFullYear()} G Seshu. All Rights Reserved.</p>
      </motion.div>
    </section>
  );
}

export default Contact;