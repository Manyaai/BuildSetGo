import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Monitor, Smartphone, Layout, Code, Briefcase, GraduationCap, ChevronRight, Zap, Search, PenTool, Rocket, Users, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import PortfolioGrid from '../components/PortfolioGrid';
import PricingCards from '../components/PricingCards';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LeadMagnet from '../components/LeadMagnet';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8"
              >
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Now accepting new projects</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05] mb-8"
              >
                Build a Personal Brand That Makes People Take You Seriously
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light max-w-lg"
              >
                We design powerful personal brand websites for founders, creators and professionals.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Your Website
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>
            
            {/* Right: Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-3 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/portfolio-mockup/800/600"
                  alt="Portfolio Dashboard Mockup"
                  className="rounded-xl w-full object-cover border border-slate-100 dark:border-slate-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 dark:text-white">Live in 48h</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Guaranteed Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
            Helping founders and creators build powerful personal brand websites
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Coaches', 'Creators', 'Consultants', 'Founders', 'Freelancers'].map((niche, i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Users className="w-4 h-4" />
                </div>
                {niche}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 lg:py-48 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden" id="services">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-[0.02] dark:opacity-[0.05] mix-blend-overlay z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
              Websites We Can Build For You
            </h2>
            <p className="mt-8 text-2xl text-slate-500 dark:text-slate-400 font-light">
              Tailored designs for every profession to highlight your unique strengths.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Developer Portfolio', icon: Code, desc: 'Showcase your GitHub projects, tech stack, and coding journey.', seed: 'code' },
              { title: 'Designer Portfolio', icon: Layout, desc: 'Beautifully display your case studies, UI/UX work, and creative process.', seed: 'design' },
              { title: 'Founder Website', icon: Briefcase, desc: 'Tell your startup story, share your vision, and attract investors.', seed: 'startup' },
              { title: 'Consultant Website', icon: Monitor, desc: 'Highlight your expertise, client testimonials, and book consultations.', seed: 'consulting' },
              { title: 'Student Portfolio', icon: GraduationCap, desc: 'Stand out to recruiters with your academic projects and internships.', seed: 'student' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">{item.desc}</p>
                <Link to="/portfolio" className="inline-flex items-center text-base font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:translate-x-2 transition-transform duration-300">
                  View Examples <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                Most professionals rely only on resumes and social profiles.
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-10">
                In a crowded digital world, a standard resume isn't enough. Professionals with dedicated personal websites stand out by showcasing their work, achievements, and personality in one cohesive place.
              </p>
              <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The BrandSetGo Advantage</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">We help you launch a premium, conversion-optimized website quickly and affordably, without the technical headache.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-fuchsia-500/10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://picsum.photos/seed/problem/800/800"
                alt="Professional working"
                className="rounded-[2rem] relative z-10 w-full object-cover shadow-xl border border-slate-200/50 dark:border-slate-700/50 group-hover:-translate-y-2 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">How BrandSetGo Works</h2>
            <p className="mt-6 text-xl text-slate-500 dark:text-slate-400 font-light">Three simple steps to your new online presence.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between relative gap-12 md:gap-0">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-200 dark:bg-slate-800 z-0"></div>
            
            {[
              { step: '01', title: 'Strategy', icon: PenTool, desc: 'Understand your personal brand, target audience, and specific goals.' },
              { step: '02', title: 'Design', icon: Layout, desc: 'Create a modern website designed for credibility and high conversion.' },
              { step: '03', title: 'Launch', icon: Rocket, desc: 'Deliver a fast, mobile-optimized website ready to grow your brand.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 px-4 group"
              >
                <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-indigo-200 dark:group-hover:border-indigo-800 transition-all duration-300 relative">
                  <item.icon className="w-8 h-8" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shadow-sm">{item.step}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyzer Section */}
      <section className="py-24 lg:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay z-0"></div>
        <div className="orb bg-indigo-500 w-96 h-96 top-0 right-0 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                How strong is your personal brand?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
                Take our free 2-minute assessment to analyze your current website's design, SEO, and conversion readiness. Get a personalized score and actionable feedback.
              </p>
              <Link
                to="/website-analyzer"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                Analyze My Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-[2rem] p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Website Analyzer</h3>
                      <p className="text-slate-400 text-sm">Live Assessment</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">Free Tool</div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-slate-700/50 rounded-full w-3/4"></div>
                  <div className="h-4 bg-slate-700/50 rounded-full w-full"></div>
                  <div className="h-4 bg-slate-700/50 rounded-full w-5/6"></div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Your Score:</span>
                  <span className="text-3xl font-extrabold text-white">92<span className="text-lg text-slate-500">/100</span></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">Meet the Founders</h2>
            <p className="mt-8 text-2xl text-slate-500 dark:text-slate-400 font-light max-w-3xl mx-auto">
              We're passionate about helping professionals build powerful digital identities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { name: 'Padmini', role: 'Co-Founder', image: 'https://picsum.photos/seed/padmini/400/400', bio: 'Tech enthusiast dedicated to building scalable and beautiful web experiences that convert visitors into clients.' },
              { name: 'Manya', role: 'Co-Founder', image: 'https://picsum.photos/seed/manya/400/400', bio: 'Passionate about design and helping individuals showcase their unique talents online through strategic branding.' }
            ].map((founder, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center p-8 gap-8 group"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-50 dark:border-indigo-900/30 shadow-sm group-hover:scale-105 transition-transform duration-500 flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{founder.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{founder.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <PortfolioGrid limit={3} />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full text-lg font-bold hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <PricingCards />
      <Testimonials />
      
      {/* Trust Indicators */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, text: 'Fast delivery' },
              { icon: Smartphone, text: 'Mobile optimized' },
              { icon: Search, text: 'SEO friendly' },
              { icon: Layout, text: 'Modern design' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-100 dark:group-hover:border-indigo-800 transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-bold tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <LeadMagnet />

      {/* Final CTA */}
      <section className="py-32 lg:py-56 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-10 mix-blend-overlay z-0"></div>
        <div className="orb bg-indigo-500 w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-10 leading-[1.1]">
            Ready to Build Your Personal Brand Website?
          </h2>
          <p className="text-2xl md:text-3xl text-indigo-100/80 mb-16 max-w-3xl mx-auto font-light">
            Launch a powerful website that builds credibility and attracts opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-slate-900 px-12 py-6 rounded-full text-2xl font-bold hover:bg-indigo-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:-translate-y-1 hover:scale-[1.02] active:scale-95 group"
          >
            Start Your Project
            <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
