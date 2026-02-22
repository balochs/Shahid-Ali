import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-cyber-navy/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">Insights & <span className="neon-text-pink">Articles</span></h2>
            <p className="text-gray-400 max-w-xl">Sharing my thoughts on the intersection of AI, security, and data privacy.</p>
          </div>
          <button className="text-neon-pink hover:underline flex items-center gap-2 font-bold">
            View All Posts <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-neon-pink/50 transition-all duration-500"
            >
              <div className="aspect-[2/1] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-neon-pink text-black text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4 font-mono">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-pink transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
