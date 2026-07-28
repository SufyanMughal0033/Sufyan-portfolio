import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const reviews = [
  { name: 'Ayesha Khan', role: 'Founder, Urban Roast Coffee', rating: 5, text: 'Sufyan delivered our website ahead of schedule and it looks incredible. Sales from the site have gone up noticeably since launch.' },
  { name: 'Daniyal Ahmed', role: 'CEO, Meridian Consulting', rating: 5, text: 'Clear communication from start to finish. The site is fast, professional, and exactly matched our brand.' },
  { name: 'Sara Malik', role: 'Owner, NovaCart', rating: 5, text: 'Our Shopify store redesign paid for itself within the first month. Highly recommend for e-commerce work.' },
  { name: 'Bilal Hassan', role: 'Marketing Lead, Launchpad', rating: 4, text: 'Great attention to detail on the landing page. Conversion rate improved right after the relaunch.' },
  { name: 'Hina Raza', role: 'Creative Director, Pixelframe Studio', rating: 5, text: 'The animations and overall polish exceeded what we expected. Felt like working with a full design agency.' },
  { name: 'Omar Farooq', role: 'Editor, The Daily Brief', rating: 5, text: 'Reliable, responsive and genuinely cares about getting the details right. Our page speed scores improved a lot.' },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <>
      <Seo title="Customer Reviews" description="See what clients say about working with Sufyan Mughal on web development and design projects." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">What clients say</h1>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app mx-auto max-w-3xl">
          <div className="glass-card relative overflow-hidden p-8 md:p-12">
            <Quote className="absolute -top-2 left-6 text-primary/10 dark:text-accent/10" size={90} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative text-center"
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={18} className={s < reviews[index].rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
                  ))}
                </div>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">{reviews[index].text}</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display font-semibold text-white">
                    {reviews[index].name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-slate-800 dark:text-white">{reviews[index].name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{reviews[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous review" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-2 bg-slate-300 dark:bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next review" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 hover:border-primary hover:text-primary transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="container-app mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08} className="glass-card p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className={s < r.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 line-clamp-4">{r.text}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-white">
                  {r.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">{r.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{r.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
