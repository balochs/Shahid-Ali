import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Rocket, Mail } from 'lucide-react';

const TITLES = ['AI Automation Specialist', 'Cyber Security Expert', 'Data Analyst'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-blue font-mono tracking-widest mb-4 uppercase text-sm">
            Hi, I'm Shahid Ali
          </h2>
          <h1 
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight glitch-text"
            data-text="Building Intelligent Systems."
          >
            Building <span className="neon-text-blue">Intelligent</span> Systems.<br />
            Securing <span className="neon-text-purple">Digital</span> Futures.
          </h1>
          <div className="h-8 mb-10">
            <p className="text-gray-400 text-lg md:text-xl font-mono">
              {displayText}
              <span className="animate-pulse text-neon-blue">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-blue text-black font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] transition-all"
            >
              <Rocket size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 hover:border-neon-blue/50 rounded-full flex items-center gap-2 transition-all"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
