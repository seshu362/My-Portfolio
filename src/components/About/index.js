import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import FadeIn from '../common/FadeIn';
import AnimatedText from '../common/AnimatedText';
import ContactButton from '../common/ContactButton';
import { FileDown, MapPin, User, GraduationCap, Briefcase } from 'lucide-react';
import './index.css';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const bioSummary =
    "I am a passionate Full Stack & MERN Developer with hands-on experience building dynamic single-page applications, scalable backend microservices, and interactive 3D web platforms for enterprise clients. Graduated with a B.Tech in Electrical and Electronics Engineering from RGUKT AP IIIT, RK Valley, I am currently engineering high-performance client applications at Parivartan Software & Multimedia Pvt. Ltd.";

  return (
    <section id="about" className="about-section relative w-full overflow-hidden select-none py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0C0C0C]">
      {/* 4 Decorative 3D Floating Elements in Corners */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0 animate-float-slow opacity-80">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[4%] left-[2%] sm:left-[4%] md:left-[6%] pointer-events-none z-0 animate-float-reverse opacity-75">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape"
            className="w-[80px] sm:w-[120px] md:w-[150px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0 animate-float-reverse opacity-80">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego"
            className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[4%] right-[2%] sm:right-[4%] md:right-[6%] pointer-events-none z-0 animate-float-slow opacity-75">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group"
            className="w-[110px] sm:w-[150px] md:w-[190px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium px-4 py-1.5 rounded-full border border-[#D7E2EA]/10 mb-4 inline-block">
            Professional Profile
          </span>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[11vw] sm:text-[9vw] md:text-[6.5rem]">
            ABOUT ME
          </h2>
        </div>

        {/* 3D Animated Scroll Bio Text */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <AnimatedText
            text={bioSummary}
            className="font-medium text-center leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Split Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Glassmorphic Details Card */}
          <motion.div
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <GlassmorphicCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <User className="text-purple-400" size={24} />
                  <h3 className="text-2xl font-bold uppercase text-white tracking-tight">
                    Who I Am
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed mb-6">
                  Experienced Full Stack Developer with deep hands-on expertise in React.js, Node.js, Express, and database engineering. Known for writing clean, modular code, designing responsive interfaces, and integrating complex APIs, payment systems, and interactive visualizations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-white/10 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-300">
                      <User size={16} />
                    </div>
                    <div>
                      <span className="text-xs text-[#D7E2EA]/50 block">Name</span>
                      <strong className="text-white">G Seshu</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-300">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <span className="text-xs text-[#D7E2EA]/50 block">Experience</span>
                      <strong className="text-white">Parivartan Software</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-300">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <span className="text-xs text-[#D7E2EA]/50 block">Education</span>
                      <strong className="text-white">B.Tech EEE (7.27 CGPA)</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-300">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-xs text-[#D7E2EA]/50 block">Location</span>
                      <strong className="text-white">Hyderabad, Telangana</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-8">
                <ContactButton text="Get In Touch" href="#contact" />
                <a
                  href="/Resume_Updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-7 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-white hover:bg-white/10 transition-all hover:scale-105"
                >
                  <FileDown size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* Right Core Tech Ecosystem Card */}
          <motion.div
            className="lg:col-span-5 h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassmorphicCard className="p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-2">
                  Core Technologies
                </h3>
                <p className="text-xs text-[#D7E2EA]/60 font-light mb-6">
                  Technologies and libraries used daily in production at Parivartan Software and client deliverables:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
                    { name: 'Node.js', icon: 'fab fa-node-js', color: '#68A063' },
                    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
                    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
                    { name: 'Express.js', icon: 'fas fa-server', color: '#E5E7EB' },
                    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
                    { name: 'MySQL/SQL', icon: 'fas fa-table', color: '#00758F' },
                    { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: '#38BDF8' },
                    { name: 'Three.js 3D', icon: 'fas fa-cube', color: '#A855F7' },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
                    >
                      <i className={`${tech.icon} text-2xl mb-1.5`} style={{ color: tech.color }}></i>
                      <span className="text-xs font-medium text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider block mb-2 font-medium">
                  Verified Specialized Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['JWT Auth', 'React Query', 'REST APIs', 'Stripe', 'Nodemailer', 'Leaflet', 'Recharts', 'jsPDF', 'Git/GitHub'].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-purple-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;