import { Link } from 'react-router-dom';
import { Check, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function PricingCards() {
  const plans = [
    {
      name: 'Starter',
      price: '₹7,999',
      description: 'Perfect for students and early-career professionals.',
      features: ['1-page personal website', 'Mobile responsive', 'Basic SEO setup', 'Delivery in 5 days'],
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹14,999',
      description: 'Ideal for freelancers, designers, and developers.',
      features: ['5-page personal brand website', 'Portfolio section', 'SEO optimization', 'Social links integration', 'Delivery in 4 days'],
      popular: true,
    },
    {
      name: 'Authority',
      price: '₹29,999',
      description: 'For startup founders and established consultants.',
      features: ['Full personal brand website', 'Blog system', 'Advanced SEO', 'Custom design', 'Analytics integration', 'Delivery in 7 days'],
      popular: false,
    },
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50 dark:from-indigo-900/20 dark:via-slate-900 dark:to-slate-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-xl text-slate-500 dark:text-slate-400">
            Choose the perfect plan for your personal brand. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-sm border ${
                plan.popular ? 'border-indigo-500/30 dark:border-indigo-500/30 shadow-xl shadow-indigo-500/5 md:-translate-y-4 md:scale-105 z-10' : 'border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800'
              } hover:shadow-xl transition-all duration-300 group`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center shadow-md">
                  <Zap className="w-4 h-4 mr-1.5" /> Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{plan.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 h-10">{plan.description}</p>
              <div className="mb-10">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium ml-2">/one-time</span>
              </div>
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <div className={`rounded-full p-1 mr-4 flex-shrink-0 ${plan.popular ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block w-full text-center py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
