import React from 'react';
import { motion } from 'motion/react';
import { CREDENTIALS } from '../constants';
import { Award, Calendar } from 'lucide-react';

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Verified <span className="neon-text-blue">Credentials</span></h2>
          <p className="text-gray-400">A timeline of my professional certifications and achievements.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {CREDENTIALS.map((cred, idx) => (
              <motion.div
                key={cred.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  'relative flex flex-col md:flex-row items-center gap-8',
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                )}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-neon-blue rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(0,245,255,0.8)] z-10 hidden md:block" />

                <div className="w-full md:w-1/2">
                  <div className="glass p-8 rounded-[32px] hover:neon-border transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                        <Award size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{cred.title}</h3>
                        <p className="text-sm text-neon-blue font-mono">{cred.issuer}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {cred.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                      <Calendar size={14} />
                      {cred.date}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from '../lib/utils';
