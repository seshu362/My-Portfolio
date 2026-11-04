import React, { useState } from 'react';
import FadeIn from './common/FadeIn';
import ContactButton from './common/ContactButton';
import { Mail, Phone, MapPin, FileDown, CheckCircle2, AlertCircle } from 'lucide-react';

const LinkedinIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
  </svg>
);

const GithubIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '39538c01-0a73-4b68-bc30-78ab5d2aa77f',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name || 'Portfolio Visitor',
          subject: `Portfolio Inquiry from ${formData.name || formData.email}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please email me directly at gseshu4028@gmail.com.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or email me directly at gseshu4028@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] py-24 sm:py-32 px-5 sm:px-8 md:px-12 select-none border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium px-4 py-1.5 rounded-full border border-[#D7E2EA]/10 mb-4 inline-block">
              Let&apos;s Connect
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
            >
              CONTACT ME
            </h2>
            <p className="text-[#D7E2EA]/70 font-light max-w-lg mx-auto text-sm sm:text-base">
              Available for full stack engineering opportunities, innovative client products, and 3D web collaborations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Direct Info & Resume */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <FadeIn delay={0.1} y={20}>
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
                  Direct Contact
                </h3>

                <a
                  href="mailto:gseshu4028@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D7E2EA]/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider block">Email</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#BBCCD7]">
                      gseshu4028@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+918106458788"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D7E2EA]/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider block">Phone</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#BBCCD7]">
                      +91-8106458788
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#141414] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-medium text-white">
                      Hyderabad, Telangana, India
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Social & Resume Download */}
            <FadeIn delay={0.2} y={20}>
              <div id="resume" className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                  Verified Profiles &amp; Resume
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/seshu63"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181818] border border-white/10 hover:border-white text-xs uppercase font-medium text-white transition-all hover:scale-105"
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/seshu362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#181818] border border-white/10 hover:border-white text-xs uppercase font-medium text-white transition-all hover:scale-105"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="/Resume_Updated.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 text-xs uppercase font-medium text-white transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
                  >
                    <FileDown size={15} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <FadeIn delay={0.15} y={20}>
              <div className="p-7 sm:p-9 rounded-[35px] bg-[#121212] border border-white/10">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <div className="p-8 text-center rounded-2xl bg-purple-950/30 border border-purple-500/40">
                    <CheckCircle2 size={40} className="text-green-400 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-white mb-1">Message Sent!</h4>
                    <p className="text-xs text-[#D7E2EA]/70 mb-5">
                      Thank you for reaching out. Your message has been sent directly to my inbox and I will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs uppercase tracking-wider text-purple-300 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-200 text-xs">
                        <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#BBCCD7] transition-colors text-sm disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#BBCCD7] transition-colors text-sm disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 block mb-2 font-medium">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, timeline, or inquiry..."
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#BBCCD7] transition-colors text-sm resize-none disabled:opacity-50"
                      />
                    </div>

                    <div className="pt-2">
                      <ContactButton
                        type="submit"
                        disabled={isSubmitting}
                        text={isSubmitting ? "Sending..." : "Send Message"}
                      />
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
