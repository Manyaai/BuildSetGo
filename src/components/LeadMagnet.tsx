import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, CheckCircle2, FileText, LayoutTemplate, PenTool, Image } from 'lucide-react';

export default function LeadMagnet() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      // Simulate API call
      setTimeout(() => setIsSubmitted(true), 600);
    }
  };

  const kitContents = [
    { icon: FileText, text: 'Personal brand positioning worksheet' },
    { icon: LayoutTemplate, text: 'Website page structure template' },
    { icon: PenTool, text: 'Homepage copywriting formula' },
    { icon: Image, text: 'Portfolio layout examples' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-200/60 dark:border-slate-800 overflow-hidden relative">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/10 via-fuchsia-500/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-400/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Left Column: Content & Form */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide uppercase mb-8 w-max">
                Free Resource
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                Build Your Personal Brand Website the Right Way
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
                Download our free <strong className="font-semibold text-slate-900 dark:text-white">Personal Brand Website Starter Kit</strong> and learn the exact structure used by founders and creators to build a powerful online presence.
              </p>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Success!</h3>
                  <p className="text-green-800 dark:text-green-200 text-lg">
                    Your Starter Kit is on the way! Check your email.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="kit-name" className="sr-only">First Name</label>
                      <input
                        type="text"
                        id="kit-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white text-lg"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="kit-email" className="sr-only">Email Address</label>
                      <input
                        type="email"
                        id="kit-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white text-lg"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-indigo-600 dark:hover:bg-slate-100 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center group"
                  >
                    Download the Free Kit
                    <Download className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-4">
                    100% free. No spam, ever. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Visual Card */}
            <div className="bg-indigo-50 dark:bg-slate-800/50 p-10 md:p-16 lg:p-20 flex items-center justify-center relative border-l border-slate-100 dark:border-slate-800">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/grid/1000/1000')] opacity-5 mix-blend-overlay"></div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700 p-8 transform hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Kit Cover Mockup */}
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 mb-8 p-6 flex flex-col justify-between shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="text-white/80 font-medium text-sm tracking-widest uppercase">BrandSetGo</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight mb-2">Personal Brand Website Starter Kit</h3>
                    <p className="text-indigo-100 text-sm">The ultimate guide for founders & creators.</p>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">What's inside:</h4>
                <ul className="space-y-4">
                  {kitContents.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg mr-3 flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
