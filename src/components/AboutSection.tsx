import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket } from 'lucide-react';
export function AboutSection() {
  const stats = [
  {
    icon: Code2,
    label: '10+ Years',
    sub: 'Engineering Experience'
  },
  {
    icon: Users,
    label: 'Multiple',
    sub: 'Leadership Roles'
  },
  {
    icon: Rocket,
    label: 'Full-Stack',
    sub: 'Deep Expertise'
  }];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Building{' '}
              <span className="font-medium text-gradient">Legacies</span>{' '}
              Through Code
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Over the past 11 years, I've navigated the ever-evolving
                landscape of software engineering. From hands-on development to
                strategic leadership, my journey has been driven by a passion
                for creating robust, scalable systems.
              </p>
              <p>
                I thrive in fast-paced, adaptive, and agile environments.
                Whether acting as a Principal Engineer, Staff Engineer, or Tech
                Lead, my goal remains the same: to become a technical reference
                for my team and help companies accomplish their most ambitious
                goals.
              </p>
              <p>
                Beyond writing code, I focus on structuring and mentoring
                engineering teams, fostering a culture of excellence, and
                building solutions that stand the test of time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  className={`p-6 rounded-2xl bg-brand-card border border-white/5 hover:border-brand-cyan/30 transition-colors ${index === 2 ? 'sm:col-span-2' : ''}`}>
                  
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-gray-500 text-sm">{stat.sub}</p>
                </motion.div>);

            })}
          </div>
        </motion.div>
      </div>
    </section>);

}