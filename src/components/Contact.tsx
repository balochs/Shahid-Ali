import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tighter">
              Let's Secure Your <span className="neon-text-blue">Digital Future</span>.
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Have a project in mind or want to discuss the latest in AI and security? Drop me a message and let's build something extraordinary together.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Email Me</p>
                  <a href="mailto:imshahidalibrohi@gmail.com" className="text-lg hover:text-neon-blue transition-colors">
                    imshahidalibrohi@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-neon-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Location</p>
                  <p className="text-lg">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', color: 'hover:text-white' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className={cn('w-12 h-12 glass rounded-2xl flex items-center justify-center transition-colors', social.color)}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[40px] neon-border"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-neon-blue/50 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-neon-blue text-black font-bold rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
