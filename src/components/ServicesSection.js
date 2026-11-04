import React from 'react';
import FadeIn from './common/FadeIn';

const servicesData = [
  {
    num: '01',
    name: 'Full Stack Engineering',
    desc: 'End-to-end web applications engineered with React 19, Vite, Node.js, and Express. Delivering single-page applications with clean modular architecture, 100% mobile responsiveness, and high speed.',
  },
  {
    num: '02',
    name: '3D & Interactive Experiences',
    desc: 'Cutting-edge digital experiences combining Three.js 3D models, smooth Framer Motion micro-interactions, magnetic cursors, and D3-Geo interactive global visualizations.',
  },
  {
    num: '03',
    name: 'Backend & RESTful Microservices',
    desc: 'Scalable server-side systems, custom Express middlewares, secure token-based JWT authentication with HTTP-only cookies, and automated email delivery workflows with Nodemailer.',
  },
  {
    num: '04',
    name: 'Database Architecture & Data Pipelines',
    desc: 'Relational & NoSQL database management spanning MongoDB, MySQL, and SQLite. Designing structured schemas, foreign-key relations, automated seed scripts, and reliable CRUD pipelines.',
  },
  {
    num: '05',
    name: 'Enterprise Portals & FinTech Solutions',
    desc: 'Custom enterprise software including GST statutory tax engines (GSTR-1, GSTR-3B), Stripe payment processing, SheetJS/XLSX spreadsheet data pipelines, and Recharts analytics dashboards.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 z-20 select-none shadow-[0_-25px_50px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={35}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            SERVICES
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {servicesData.map((item, index) => (
            <FadeIn key={item.num} delay={index * 0.1} y={30}>
              <div
                className={`flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 ${
                  index !== 0 ? 'border-t border-[#0C0C0C]/15' : ''
                } transition-all duration-300 hover:pl-2 group`}
              >
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none mb-4 md:mb-0 md:min-w-[180px] lg:min-w-[220px] transition-transform duration-300 group-hover:scale-105"
                  style={{ fontSize: 'clamp(3rem, 9vw, 130px)' }}
                >
                  {item.num}
                </div>

                {/* Name & Desc */}
                <div className="flex flex-col md:max-w-2xl">
                  <h3
                    className="font-medium uppercase tracking-tight text-[#0C0C0C] mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/70"
                    style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1.18rem)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
