import { motion } from 'framer-motion';
import { Percent, Sparkles, Gift, Users } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const perks = [
  { icon: Percent, title: '15% Off Bundles', desc: 'Combine 2 or more services — like a website plus SEO — and save 15%.' },
  { icon: Users, title: 'Referral Rewards', desc: 'Refer a client and receive a discount on your next project.' },
  { icon: Gift, title: 'Priority Support', desc: 'Returning clients get priority scheduling and faster turnaround.' },
];

export default function Discounts({ onOpenQuote }) {
  return (
    <>
      <Seo title="Discount Offers" description="Loyal customer discounts on web development and digital marketing packages from Sufyan Mughal." />

      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Special Offer</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Loyal Customer Discount
            </h1>
            <p className="mt-5 text-lg text-slate-500 dark:text-slate-400">
              Customers who order multiple services receive exclusive discounts and priority support.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-success bg-[length:200%_100%]"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative flex flex-col items-center gap-3 px-8 py-10 text-center text-white">
              <Sparkles size={28} />
              <p className="font-display text-2xl font-bold sm:text-3xl">Save up to 15% on bundled services</p>
              <p className="max-w-md text-sm text-white/90">Book a website + SEO, or a store + marketing setup, and unlock loyalty pricing automatically.</p>
              <button onClick={onOpenQuote} className="mt-4 rounded-full bg-white px-7 py-3 font-semibold text-primary shadow-xl transition-transform hover:scale-105">
                Claim This Offer
              </button>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {perks.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1} className="glass-card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-slate-800 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
