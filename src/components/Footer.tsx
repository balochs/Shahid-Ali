import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter mb-2">
              <span className="text-neon-blue">SHAHID</span>
              <span className="text-white">ALI</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Architecting Intelligent Automation. Securing the Digital Future.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors"><Twitter size={20} /></a>
            <a href="mailto:imshahidalibrohi@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors"><Mail size={20} /></a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-neon-blue hover:neon-border transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Shahid Ali. All Rights Reserved. Built with Neon & Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
