/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Credentials from './components/Credentials';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';
import CustomCursor from './components/CustomCursor';
import MatrixBackground from './components/MatrixBackground';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue z-[60] origin-left"
        style={{ scaleX }}
      />

      <MatrixBackground />
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Credentials />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <AIChatbot />

      {/* Background Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] overflow-hidden">
        <div className="w-full h-1 bg-white animate-[scanline_8s_linear_infinite]" />
      </div>
    </div>
  );
}
