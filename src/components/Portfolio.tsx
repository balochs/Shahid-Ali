import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'AI' | 'Security' | 'Data'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-cyber-navy/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Featured <span className="neon-text-blue">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore my latest work across AI automation, cybersecurity research, and data analytics.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'AI', 'Security', 'Data'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  filter === cat 
                    ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,245,255,0.4)]' 
                    : 'glass text-gray-400 hover:text-white'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-blue/50 transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-3xl overflow-hidden hover:neon-border transition-all duration-500 perspective-1000"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="neon-button flex items-center gap-2">
                      View Case Study <ExternalLink size={16} />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-neon-blue text-xs font-bold rounded-full border border-neon-blue/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-[10px] font-mono uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
