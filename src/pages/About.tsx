import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20 pb-24 bg-white dark:bg-slate-950">
      {/* Brand Story */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-10">
            Our Story
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 font-light">
            BrandSetGo was founded by Manya Jain and Padmini to help professionals build powerful personal brands online. We believe every professional should have a powerful online presence beyond resumes and social profiles.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-10 md:p-16 border border-indigo-100 dark:border-indigo-800 shadow-sm">
            <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-100 mb-6">Our Mission</h2>
            <p className="text-xl text-indigo-800 dark:text-indigo-200 leading-relaxed font-light">
              Make professional websites fast, accessible, and affordable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Meet the Founders</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {[
              { name: 'Manya Jain', role: 'Co-Founder', image: 'https://picsum.photos/seed/manya/400/400', bio: 'Passionate about design and helping individuals showcase their unique talents online.' },
              { name: 'Padmini', role: 'Co-Founder', image: 'https://picsum.photos/seed/padmini/400/400', bio: 'Tech enthusiast dedicated to building scalable and beautiful web experiences.' }
            ].map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center p-12"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover mb-8 border-4 border-indigo-50 dark:border-indigo-900/30 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{founder.name}</h3>
                <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-6">{founder.role}</p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
