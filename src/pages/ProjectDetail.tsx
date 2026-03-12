import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Project not found</h1>
          <Link to="/portfolio" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="orb bg-indigo-500 w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-indigo-200 hover:text-white mb-10 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-bold uppercase tracking-wider rounded-full shadow-sm mb-6">
                {project.client}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-indigo-100/80 leading-relaxed font-light max-w-xl">
                {project.goal}
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Project Overview</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  <p className="mb-6">
                    <strong>The Challenge:</strong> {project.goal}
                  </p>
                  <p className="mb-6">
                    <strong>Our Solution:</strong> {project.solution}
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 mt-8">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-4 flex items-center">
                      <Star className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
                      The Result
                    </h3>
                    <p className="text-lg text-indigo-800 dark:text-indigo-200 font-medium">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Design Highlights</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {project.highlights}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Features Implemented</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-8 rounded-3xl text-white text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Want a website like this?</h3>
                <p className="text-indigo-100 mb-8 font-light">
                  Let's build your personal brand website in just 48 hours.
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full bg-white text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 hover:scale-[1.02] active:scale-95 hover:shadow-lg transition-all duration-300 shadow-md"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
