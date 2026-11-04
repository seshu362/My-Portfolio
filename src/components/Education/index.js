import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import FadeIn from '../common/FadeIn';
import { GraduationCap, Award, ExternalLink, MapPin } from 'lucide-react';
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
      duration: '2020 – 2024',
      grade: 'CGPA: 7.27',
      icon: 'fas fa-graduation-cap',
    },
    {
      id: 2,
      degree: 'Pre-University Course (Inter MPC)',
      field: 'Mathematics, Physics & Chemistry',
      institution: 'RGUKT AP IIIT, RK Valley',
      location: 'Andhra Pradesh, India',
      duration: '2018 – 2020',
      grade: 'CGPA: 7.78',
      icon: 'fas fa-university',
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      field: '10th Standard',
      institution: 'ZP High School, 49.KPM',
      location: 'Chittoor, Andhra Pradesh, India',
      duration: '2017 – 2018',
      grade: 'GPA: 9.8',
      icon: 'fas fa-school',
    },
  ];

  const certificationsData = [
    {
      title: 'React JS Certification',
      issuer: 'NxtWave CCBP 4.0',
      desc: 'Deep specialization in modern React.js, component lifecycle, custom hooks, state management, and building production-grade single-page applications.',
      icon: 'fab fa-react',
      color: '#61DAFB',
    },
    {
      title: 'Generative AI Mega Workshop',
      issuer: 'NxtWave',
      desc: 'Intensive workshop exploring Generative AI architectures, prompt engineering, LLM integration into modern web apps, and machine learning principles.',
      icon: 'fas fa-brain',
      color: '#A855F7',
      certUrl: 'https://drive.google.com/file/d/1RDFCw-fcjsFVH4kAoHu4dFHj17KPJMHy/view?pli=1',
    },
    {
      title: 'Node.js & Backend Architecture',
      issuer: 'NxtWave CCBP',
      desc: 'Expertise in server-side JavaScript development, RESTful API design, Express.js middleware, and asynchronous event loops.',
      icon: 'fab fa-node-js',
      color: '#68A063',
    },
    {
      title: 'Python Programming',
      issuer: 'NxtWave CCBP',
      desc: 'Core Python concepts, data structures, object-oriented programming, and practical script development for backend services.',
      icon: 'fab fa-python',
      color: '#3776AB',
    },
    {
      title: 'JavaScript (ES6+)',
      issuer: 'NxtWave CCBP',
      desc: 'Comprehensive ES6+ features, asynchronous programming with Promises & async/await, DOM manipulation, and modern web APIs.',
      icon: 'fab fa-js',
      color: '#F7DF1E',
    },
    {
      title: 'Responsive Web Design (HTML5 & CSS3)',
      issuer: 'NxtWave CCBP',
      desc: 'Responsive web design, Flexbox, CSS Grid layouts, and modern CSS features for cross-device consistency.',
      icon: 'fab fa-html5',
      color: '#E34F26',
    },
  ];

  return (
    <section id="education" className="education-section py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0C0C0C] select-none" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium px-4 py-1.5 rounded-full border border-[#D7E2EA]/10 mb-4 inline-block">
              Academic &amp; Professional Growth
            </span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[11vw] sm:text-[9vw] md:text-[6.5rem]">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto font-light mt-3">
              Rigorous engineering education and verified industry credentials in full stack web development and generative AI.
            </p>
          </div>
        </FadeIn>

        {/* 1. Academic Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <GraduationCap size={22} className="text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GlassmorphicCard className="p-7 h-full flex flex-col justify-between hover:border-purple-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-purple-300 font-semibold">
                        {edu.grade}
                      </span>
                      <span className="text-xs text-[#D7E2EA]/50 font-mono">
                        {edu.duration}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-1">
                      {edu.degree}
                    </h4>
                    {edu.field && (
                      <p className="text-xs text-purple-300 font-medium mb-3">
                        {edu.field}
                      </p>
                    )}

                    <div className="text-xs text-[#D7E2EA]/70 space-y-1.5 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-university text-purple-400"></i>
                        <span className="text-white font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-[#D7E2EA]/40" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Industry Certifications Grid */}
        <div>
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Award size={22} className="text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Verified Industry Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <GlassmorphicCard className="p-7 h-full flex flex-col justify-between hover:border-purple-500/40 transition-all hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl" style={{ color: cert.color }}>
                        <i className={cert.icon}></i>
                      </div>
                      <span className="text-[11px] font-mono text-[#D7E2EA]/50 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed mb-4">
                      {cert.desc}
                    </p>
                  </div>

                  {cert.certUrl && (
                    <div className="pt-3 border-t border-white/5">
                      <a
                        href={cert.certUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;