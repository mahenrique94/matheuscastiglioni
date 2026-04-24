import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Youtube, Mic, IterationCcw, GraduationCap, BookIcon } from 'lucide-react';
const contentTypes = [
{
  title: 'Tech Blog',
  description:
  'In-depth articles covering software architecture, engineering practices, and technical deep-dives.',
  icon: BookOpen,
  link: 'https://blog.matheuscastiglioni.com.br/',
  linkText: 'Read Articles'
},
{
  title: 'YouTube Channel',
  description:
  'Video tutorials, architectural breakdowns, and discussions on modern software development.',
  icon: Youtube,
  link: 'https://www.youtube.com/MatheusCastiglioni',
  linkText: 'Watch Videos'
},
{
  title: 'Public Speaking',
  description:
  'Sharing knowledge and experiences at tech conferences, meetups, and industry events.',
  icon: Mic,
},
{
  title: 'Online Education',
  description:
  'Creating and delivering courses and workshops on software engineering and related topics.',
  icon: GraduationCap,
  link: 'https://academy.matheuscastiglioni.com.br/',
  linkText: 'Explore Courses'
},
{
  title: 'Book Writing',
  description:
  'Authoring books and technical publications on software engineering and related topics.',
  icon: BookIcon,
  link: 'https://www.casadocodigo.com.br/',
  linkText: 'Explore Books'
}
];

export function ContentSection() {
  return (
    <section id="content" className="py-24 relative z-10">
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
          className="mb-16">
          
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Beyond the <span className="font-medium text-gradient">Code</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            I believe in giving back to the community through education, content
            creation, and sharing experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.95
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
                className="flex flex-col p-8 rounded-3xl bg-brand-card border border-white/5 hover:bg-white/[0.02] transition-colors group">
                
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-green/20 flex items-center justify-center mb-8">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-8 flex-grow">
                  {item.description}
                </p>
                {item.link && item.linkText ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-brand-cyan group-hover:text-brand-green transition-colors">
                  
                  {item.linkText}
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    
                  </svg>
                </a>
                ):null}
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}