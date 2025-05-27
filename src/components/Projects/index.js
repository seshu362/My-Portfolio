// src/components/Projects/index.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import './index.css';

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
    const projects = [
    {
        id: 1,
        title: 'Loan Management System',
        description: 'This Loan Management System provides a platform for users to apply for loans, verifiers to verify applications, and administrators to manage the overall system. The system handles loan applications, verification processes, approvals/rejections, and tracking of repayments.',
        technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'SQLite', 'JWT authentication', 'bcrypt for password hashing', 'React Router'],
        liveDemo: 'https://seshu-creditsea-loan-management.netlify.app/login',
        github: 'https://github.com/seshu362/CreditSea-Loan-Manager-frontend',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748284567/Screenshot_2025-05-27_000544_qop06c.png',
    },
    {
        id: 2,
        title: 'JobStation – Job Listing Platform',
        description: 'A full-stack Job Listing Platform, allowing users to browse, post, bookmark jobs, and manage personal dashboards.',
        technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'React Router'],
        liveDemo: 'https://seshu-job-listing-platform.netlify.app/',
        github: 'https://github.com/seshu362/Mark-Anthony-JobStation',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748278490/Screenshot_2025-05-26_222401_oue348.png',
    },
    {
        id: 3,
        title: 'Tasty Kitchens (Swiggy/Zomato Clone)',
        description: 'An intuitive Online Food Ordering Platform similar to Swiggy/Zomato, enabling users to explore restaurants, manage food items in cart, and navigate payment options.',
        technologies: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React Slick', 'Figma'],
        liveDemo: 'https://seshutastykchn.ccbp.tech/',
        github: 'https://github.com/seshu362/Tasty-Kitchens',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748278791/Screenshot_2025-05-26_222823_xrdccl.png',
    },
    {
        id: 4,
        title: 'NXT WATCH (YouTube Clone)',
        description: 'A YouTube-inspired application where users can access various video categories such as Trending, Gaming, and Saved videos, and search for specific content.',
        technologies: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'REST API', 'JWT Token'],
        liveDemo: 'https://seshunxtwatch.ccbp.tech/login',
        github: 'https://github.com/seshu362/Nxt-Watch',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748278794/Screenshot_2025-05-26_222901_jw9qyv.png',
    },
    {
        id: 5,
        title: 'NXT ASSESS App',
        description: 'An online exam platform enabling users to log in, view assessments, attempt quizzes, and review results with a dynamic and responsive interface.',
        technologies: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API', 'JWT Token'],
        liveDemo: 'https://seshunxtaccess.ccbp.tech/login',
        github: 'https://github.com/seshu362/Nxt-Assess-App',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748278793/Screenshot_2025-05-26_222921_v7hgd9.png',
    },
    {
        id: 6,
        title: 'Spotify Clone',
        description: 'A Spotify-inspired music streaming platform with search functionality, full music controls, and dynamic background gradients that adjust to the song\'s cover image.',
        technologies: ['React JS', 'JavaScript', 'CSS', 'REST API', 'Local Storage'],
        liveDemo: 'https://seshusamesp.ccbp.tech/',
        github: 'https://github.com/seshu362/SeshuSameSpace',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748278794/Screenshot_2025-05-26_222937_k1sjot.png',
    },
    {
          id: 7,
          title: 'Tanishq Diamonds - Luxury Jewelry Website',
          description: 'An elegant and sophisticated jewelry showcase website featuring premium diamond collections, interactive galleries, video testimonials, and immersive user experience with smooth animations and modern design aesthetics.',
          technologies: ['React JS', 'JavaScript', 'CSS', 'React Icons', 'Responsive Design', 'Interactive UI Components'],
          liveDemo: "https://seshu-tanishq-assignment.netlify.app/",
          github: 'https://github.com/seshu362/TANISHQ-Project/',
          image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748316456/Screenshot_2025-05-27_085019_fxhuy0.png',
        },
        {
        id: 8,
        title: 'React Lykke Travel Website',
        description: 'A modern and responsive travel website built with React. This project allows users to explore popular destinations, customize their trips, and get in touch with travel experts.',
        technologies: ['React JS', 'JavaScript', 'CSS', 'React Icons', 'Responsive Design', 'React Router', 'Fetch API', 'Interactive UI Components'],
        liveDemo: "https://seshu-lykke-travels.netlify.app/",
        github: 'https://github.com/seshu362/Lykke-travel-Assignment',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748316613/Screenshot_2025-05-27_090004_zyml71.png',
      },
       {
        id: 8,
        title: 'PropVista - Real Estate Platform',
        description: 'A comprehensive real estate platform showcasing properties in Gurgaon with interactive locality exploration, apartment listings, trending residential and commercial projects, investment opportunities, and integrated services like home loans and property management.',
        technologies: ['React JS', 'JavaScript', 'CSS', 'Component-based Architecture', 'Responsive Design', 'Interactive Carousels'],
        liveDemo: 'https://seshuacredge.netlify.app/',
        github: 'https://github.com/seshu362/Seshu-Acredge/',
        image: 'https://res.cloudinary.com/dw7dhefpb/image/upload/v1748317383/Screenshot_2025-05-27_090728_owtzol.png',
      }
  ];
  
  return (
    <section id="projects" className="projects-section section-container" ref={ref}>
      <h2 className="section-title">My Projects</h2>
      
      <motion.div 
        className="projects-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          Here are some of the projects I've worked on. Each project showcases different skills and technologies
          that I've mastered throughout my journey as a developer.
        </p>
      </motion.div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            inView={inView} 
          />
        ))}
      </div>
      
      <motion.div 
        className="more-projects"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a href="https://www.linkedin.com/in/seshu63/" target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-linkedin"></i>
          <span>View More on LinkedIn</span>
        </a>
      </motion.div>
      
    </section>
  );
}

export default Projects;