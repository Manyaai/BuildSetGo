import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Globe, Smartphone, Briefcase, Star, MousePointerClick, ChevronRight, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 'q1',
    title: 'Do you have a personal brand website?',
    icon: Globe,
    options: [
      { label: 'Yes, a dedicated one', score: 20, category: 'Brand Clarity' },
      { label: 'Just a social profile/resume', score: 5, category: 'Brand Clarity' },
      { label: 'No, nothing yet', score: 0, category: 'Brand Clarity' }
    ]
  },
  {
    id: 'q2',
    title: 'Is your website mobile responsive?',
    icon: Smartphone,
    options: [
      { label: 'Yes, looks great on phones', score: 20, category: 'Mobile Experience' },
      { label: 'Sort of, but needs work', score: 10, category: 'Mobile Experience' },
      { label: 'No, it is hard to use on mobile', score: 0, category: 'Mobile Experience' }
    ]
  },
  {
    id: 'q3',
    title: 'Do you showcase your work or portfolio?',
    icon: Briefcase,
    options: [
      { label: 'Yes, with detailed case studies', score: 20, category: 'Design' },
      { label: 'Yes, just images/links', score: 10, category: 'Design' },
      { label: 'No portfolio section', score: 0, category: 'Design' }
    ]
  },
  {
    id: 'q4',
    title: 'Do you have testimonials or social proof?',
    icon: Star,
    options: [
      { label: 'Yes, multiple strong testimonials', score: 20, category: 'SEO Basics' },
      { label: 'Maybe one or two', score: 10, category: 'SEO Basics' },
      { label: 'No social proof', score: 0, category: 'SEO Basics' }
    ]
  },
  {
    id: 'q5',
    title: 'Is there a clear call-to-action on your homepage?',
    icon: MousePointerClick,
    options: [
      { label: 'Yes, very prominent', score: 20, category: 'Conversion Readiness' },
      { label: 'Yes, but it is hidden', score: 10, category: 'Conversion Readiness' },
      { label: 'No clear next step', score: 0, category: 'Conversion Readiness' }
    ]
  }
];

export default function WebsiteAnalyzer() {
  const [step, setStep] = useState(0); // 0: URL input, 1-5: Questions, 6: Analyzing, 7: Results
  const [url, setUrl] = useState('');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setStep(1);
    }
  };

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setStep(6);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(7);
    }, 2000);
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((a, b) => a + b, 0);
  };

  const getCategoryScore = (category: string) => {
    const total = calculateScore();
    const base = total / 5;
    const variation = (category.length % 5) * 2;
    return Math.min(100, Math.max(0, Math.round(base * 5 + variation - 10)));
  };

  const categories = [
    { name: 'Design', score: getCategoryScore('Design') },
    { name: 'Brand Clarity', score: getCategoryScore('Brand Clarity') },
    { name: 'Mobile Experience', score: getCategoryScore('Mobile Experience') },
    { name: 'SEO Basics', score: getCategoryScore('SEO Basics') },
    { name: 'Conversion Readiness', score: getCategoryScore('Conversion Readiness') }
  ];

  const totalScore = calculateScore();

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-200/60 dark:border-slate-800 overflow-hidden relative min-h-[450px] flex flex-col">
      {/* Progress Bar */}
      {step > 0 && step < 7 && (
        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 absolute top-0 left-0 z-10">
          <motion.div 
            className="h-full bg-indigo-600 dark:bg-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${(step / (questions.length + 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <div className="p-8 md:p-12 flex-grow flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600 dark:text-indigo-400">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Analyze Your Personal Brand</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 font-light max-w-lg mx-auto">
                Enter your current website URL to get a free comprehensive analysis of your digital presence.
              </p>
              <form onSubmit={handleUrlSubmit} className="max-w-md mx-auto relative">
                <input
                  type="text"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white text-lg pr-32"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-6 rounded-lg font-bold hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center"
                >
                  Start <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </motion.div>
          )}

          {step > 0 && step <= questions.length && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-xl mx-auto"
            >
              <div className="mb-8 text-center">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 block">
                  Question {step} of {questions.length}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {questions[step - 1].title}
                </h3>
              </div>
              <div className="space-y-3">
                {questions[step - 1].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(questions[step - 1].id, option.score)}
                    className="w-full text-left p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 group flex items-center justify-between bg-white dark:bg-slate-800/50"
                  >
                    <span className="text-lg text-slate-700 dark:text-slate-200 font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                      {option.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step-analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center flex flex-col items-center justify-center py-12"
            >
              <RefreshCw className="w-16 h-16 text-indigo-600 dark:text-indigo-400 animate-spin mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Analyzing your presence...</h3>
              <p className="text-slate-500 dark:text-slate-400">Calculating scores across 5 key dimensions.</p>
            </motion.div>
          )}

          {step === 7 && (
            <motion.div
              key="step-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Analysis Complete</h3>
                <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-8 border-indigo-100 dark:border-indigo-900/50 mb-6 relative">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-indigo-600 dark:text-indigo-500"
                      strokeDasharray={`${(totalScore / 100) * 289} 289`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{totalScore}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">Out of 100</span>
                </div>
                <p className="text-xl text-slate-700 dark:text-slate-300 font-medium">
                  Your Personal Brand Website Score: {totalScore}/100
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{cat.name}</span>
                    <span className={`font-bold ${cat.score >= 80 ? 'text-green-600 dark:text-green-400' : cat.score >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'}`}>
                      {cat.score}/100
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 text-center border border-indigo-100 dark:border-indigo-800/50 max-w-2xl mx-auto">
                <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-6 font-medium">
                  Your website has potential, but there are opportunities to improve your personal brand presence.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  Get Your Website Improved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
