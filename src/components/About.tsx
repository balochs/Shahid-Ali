import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Download, Brain, Shield, BarChart3 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Photo & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden neon-border aspect-square max-w-md mx-auto">
              <img
                src="https://picsum.photos/seed/shahid/600/600"
                alt="Shahid Ali"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-neon-blue" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-neon-purple" />
          </motion.div>

          {/* Right: Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tighter">
              Architecting <span className="neon-text-blue">Intelligent</span> Automation.
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              With a passion for building secure, intelligent systems, I specialize in bridging the gap between advanced AI automation and robust cyber security. My data-driven approach ensures that every solution is not just smart, but also resilient and strategically advantageous.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="glass p-4 rounded-2xl text-center">
                <Brain className="mx-auto mb-2 text-neon-blue" size={32} />
                <h3 className="text-sm font-bold uppercase tracking-wider">AI Expert</h3>
              </div>
              <div className="glass p-4 rounded-2xl text-center">
                <Shield className="mx-auto mb-2 text-neon-purple" size={32} />
                <h3 className="text-sm font-bold uppercase tracking-wider">Cyber Sec</h3>
              </div>
              <div className="glass p-4 rounded-2xl text-center">
                <BarChart3 className="mx-auto mb-2 text-neon-pink" size={32} />
                <h3 className="text-sm font-bold uppercase tracking-wider">Data Analyst</h3>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              {SKILLS.slice(0, 6).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-mono text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={cn(
                        'h-full rounded-full',
                        skill.category === 'AI' ? 'bg-neon-blue' : 
                        skill.category === 'Security' ? 'bg-neon-purple' : 'bg-neon-pink'
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 neon-button flex items-center gap-2"
            >
              <Download size={20} />
              Download Full Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
