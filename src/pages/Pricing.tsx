import PricingCards from '../components/PricingCards';
import FAQ from '../components/FAQ';

export default function Pricing() {
  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      <div className="bg-indigo-50 dark:bg-indigo-900/10 py-24 border-b border-indigo-100 dark:border-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Transparent pricing for professional personal brand websites.
          </p>
        </div>
      </div>
      <PricingCards />
      <FAQ />
    </div>
  );
}
