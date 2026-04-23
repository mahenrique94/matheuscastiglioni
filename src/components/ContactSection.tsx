import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Mail, Instagram, Twitch, XIcon } from 'lucide-react';
export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Let's Build Something{' '}
            <span className="font-medium text-gradient">Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
            Available for consulting, freelance projects, and mentoring. Whether
            you need architectural guidance or a technical leader, I'm here to
            help.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-brand-dark font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,194,203,0.3)]">
            
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>

          <div className="mt-16 flex items-center justify-center gap-6">
            {[
            {
              icon: Github,
              href: 'https://github.com/mahenrique94'
            },
            {
              icon: Instagram,
              href: 'https://www.instagram.com/mahenrique94/'
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/matheus-castiglioni-7aa105114/'
            },
            {
              icon: Twitch,
              href: 'https://www.twitch.tv/mahenrique94'
            },
            {
              icon: XIcon,
              href: 'https://twitter.com/mahenrique94'
            },
            {
              icon: Youtube,
              href: 'https://www.youtube.com/MatheusCastiglioni'
            }
            ].
            map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-brand-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  
                  <Icon className="w-5 h-5" />
                </a>);

            })}
          </div>
        </motion.div>
      </div>
    </section>);

}