import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "BrandSetGo helped me launch my portfolio website quickly and professionally. I started getting interview calls within a week of sharing my new link.",
      author: "Sarah Jenkins",
      role: "Frontend Developer",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "The process was incredibly smooth. I just filled out a form, and 48 hours later, I had a stunning personal brand website that perfectly captures my consulting business.",
      author: "Michael Chen",
      role: "Management Consultant",
      image: "https://picsum.photos/seed/michael/100/100"
    },
    {
      quote: "As a designer, I'm very picky about aesthetics. BrandSetGo exceeded my expectations. The attention to detail and modern typography is top-notch.",
      author: "Elena Rodriguez",
      role: "UX/UI Designer",
      image: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Trusted by Professionals
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-light">
            See what our clients have to say about their new personal brand websites.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory hide-scrollbar gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-w-[320px] md:min-w-[400px] snap-center bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg relative hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex text-indigo-500 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-10 leading-relaxed text-lg font-light flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover mr-4 border border-slate-200 dark:border-slate-700 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
