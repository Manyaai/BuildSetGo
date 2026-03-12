import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

interface PortfolioGridProps {
  limit?: number;
}

export default function PortfolioGrid({ limit }: PortfolioGridProps) {
  const displayedProjects = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <section className={`bg-slate-50 dark:bg-slate-900/50 relative ${limit ? 'pt-24 pb-32 lg:pt-32 lg:pb-48' : 'py-24 lg:py-32'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Client Case Studies
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-light">
            See how we've helped professionals build authority and generate opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold flex items-center shadow-lg hover:scale-[1.02] active:scale-95"
                  >
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {project.client}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col relative">
                {/* Subtle gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
                  {project.title}
                </h3>
                
                <div className="space-y-4 flex-grow relative z-10">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Goal</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.goal}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
