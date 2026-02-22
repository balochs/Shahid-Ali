import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Client <span className="neon-text-purple">Testimonials</span></h2>
        </div>

        <div className="relative glass p-8 md:p-12 rounded-[40px] neon-border">
          <Quote className="absolute top-8 left-8 text-neon-purple/20" size={80} />
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-neon-purple p-1"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-white">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-sm text-neon-purple">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prev}
              className="p-2 glass rounded-full text-white hover:text-neon-purple transition-colors pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-2 glass rounded-full text-white hover:text-neon-purple transition-colors pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                currentIndex === idx ? 'w-8 bg-neon-purple' : 'bg-white/20'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
