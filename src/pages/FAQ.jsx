import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const faqs = [
  { q: 'How much does a website cost?', a: 'Pricing depends on scope and features. My packages start at $149 for a simple starter site, with most business websites falling between $349–$699. Check the Pricing page for details, or request a free custom quote.' },
  { q: 'How long does delivery take?', a: 'A starter website typically takes about 7 days, professional packages around 14 days, and larger business builds around 30 days, depending on how quickly content and feedback are provided.' },
  { q: 'Do you provide ongoing support after launch?', a: 'Yes. Every project includes a support window after delivery, and I offer ongoing maintenance plans for updates, backups and monitoring.' },
  { q: 'What if I need changes after the site is live?', a: 'Minor fixes are covered under your support window. For larger changes or new features, I offer affordable maintenance and update packages.' },
  { q: 'What payment methods do you accept?', a: 'I accept bank transfer and major digital payment methods. Projects typically start with a deposit, with the remaining balance due on delivery.' },
  { q: 'Do you offer discounts for multiple services?', a: 'Yes — clients who bundle services like a website with SEO or marketing setup receive a loyalty discount. See the Discount Offers page for details.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <Seo title="FAQ" description="Answers to common questions about pricing, delivery time, support, maintenance and payment for web development services." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Frequently Asked Questions</h1>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app mx-auto max-w-3xl space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-slate-800 dark:text-white">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={20} className="text-primary dark:text-accent shrink-0" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
