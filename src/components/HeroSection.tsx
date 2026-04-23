import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const roles = [
'Principal Engineer',
'Staff Engineer',
'Tech Lead',
'Game Developer',
'Content Creator',
'Mentor'];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <section className="bg-no-repeat bg-cover bg-center inset-0 absolute brightness-[.3] blur-sm" style={{ backgroundImage: 'url(/banner.jpg)'}}/>
      <div className="z-[9999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="z-[9999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none translate-x-20 translate-y-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="mb-8 p-4 pb-0 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
          
          <img
            src="/avatar.png"
            alt="Matheus Castiglioni Logo"
            className="h-96 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter mb-4">
          
          Matheus Castiglioni
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.4
          }}
          className="h-12 md:h-16 flex items-center justify-center">
          
          <div className="text-xl md:text-3xl font-light text-gray-300 flex items-center gap-2">
            <span>I am a</span>
            <div className="relative flex w-[200px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: -16
                  }}
                  exit={{
                    opacity: 0,
                    y: -20
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 font-medium text-gradient whitespace-nowrap">
                  
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl font-light">
          
          11+ years building software, structuring teams, and creating beautiful
          legacies.
        </motion.p>
      </div>
    </section>);

}