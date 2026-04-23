import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Expertise',
    href: '#expertise'
  },
  {
    name: 'Content',
    href: '#content'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/favicon.png"
            alt="MC Logo"
            className="w-8 h-8 rounded-md transition-transform group-hover:scale-105" />
          
          <span className="text-white font-medium tracking-wide hidden sm:block">
            Matheus Castiglioni
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            
              {link.name}
            </a>
          )}
        </div>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors relative overflow-hidden group">
          
          <span className="relative z-10">Let's Talk</span>
          <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>
      </div>
    </motion.nav>);

}