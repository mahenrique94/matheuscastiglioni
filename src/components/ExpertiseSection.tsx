import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Server,
  Layout,
  Smartphone,
  Gamepad2,
  Users2 } from
'lucide-react';
const skills = [
{
  title: 'Software Architecture',
  description:
  'Designing scalable, resilient, and maintainable systems for enterprise applications.',
  icon: Layers
},
{
  title: 'Backend Development',
  description:
  'Building robust APIs, microservices, and database structures that power complex platforms.',
  icon: Server
},
{
  title: 'Frontend Development',
  description:
  'Crafting beautiful, responsive, and highly interactive user interfaces.',
  icon: Layout
},
{
  title: 'Mobile Development',
  description:
  'Creating seamless native and cross-platform mobile experiences.',
  icon: Smartphone
},
{
  title: 'Game Development',
  description:
  'Applying engineering principles to game logic, physics, and interactive entertainment.',
  icon: Gamepad2
},
{
  title: 'Leadership & Mentoring',
  description:
  'Structuring teams, coaching engineers, and driving technical excellence.',
  icon: Users2
}];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 relative z-10 bg-brand-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Areas of{' '}
            <span className="font-medium text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical knowledge spanning across the entire
            software development lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="group relative p-[1px] rounded-2xl overflow-hidden">
                
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-brand-card p-8 rounded-2xl border border-white/5 group-hover:border-transparent transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-brand-green transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}