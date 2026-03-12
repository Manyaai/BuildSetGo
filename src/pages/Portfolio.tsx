import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio() {
  return (
    <div className="pt-20 bg-white dark:bg-slate-950">
      <div className="bg-indigo-50 dark:bg-indigo-900/10 py-24 border-b border-indigo-100 dark:border-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Browse our collection of modern, conversion-optimized templates designed to make you stand out.
          </p>
        </div>
      </div>
      <PortfolioGrid />
    </div>
  );
}
