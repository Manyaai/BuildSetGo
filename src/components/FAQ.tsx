import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer: "Your website will be live within 48 hours after we receive your information and portfolio details."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "No, BrandSetGo handles everything from design to deployment. You just provide the content, and we do the heavy lifting."
    },
    {
      question: "Can I connect my own domain?",
      answer: "Yes, absolutely. We provide instructions on how to point your custom domain to your new website, or we can set it up for you."
    },
    {
      question: "What if I need to update my website later?",
      answer: "We build your site on user-friendly platforms, allowing you to easily make text and image updates yourself. We also offer maintenance packages if you prefer us to handle updates."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white dark:bg-slate-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl text-slate-500 dark:text-slate-400">
            Everything you need to know about our service.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-slate-900 border rounded-3xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-indigo-200 dark:border-indigo-800 shadow-lg' : 'border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
