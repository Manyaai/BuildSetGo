import React from 'react';
import { motion } from 'motion/react';
import WebsiteAnalyzer from '../components/WebsiteAnalyzer';

export default function Analyzer() {
  return (
    <div className="pt-20 bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col">
      <section className="relative pt-24 pb-32 overflow-hidden flex-grow flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay z-0"></div>
        <div className="orb bg-indigo-500 w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
            >
              Personal Brand Website Analyzer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-400 font-light"
            >
              Discover how well your current digital presence is performing and uncover opportunities for growth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <WebsiteAnalyzer />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
