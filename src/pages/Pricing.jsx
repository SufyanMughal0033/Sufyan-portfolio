import { Check, Sparkles } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const plans = [
  {
    name: 'Starter',
    price: '$149',
    desc: 'For individuals and small businesses needing an online presence fast.',
    features: ['Up to 3 pages', 'Responsive design', 'Basic SEO setup', 'Contact form', '1 round of revisions', '7 days delivery'],
  },
  {
    name: 'Professional',
    price: '$349',
    popular: true,
    desc: 'For growing businesses that need a complete, polished website.',
    features: ['Up to 7 pages', 'Custom UI/UX design', 'Advanced SEO setup', 'EmailJS contact & quote forms', '3 rounds of revisions', 'Performance optimization', '14 days delivery'],
  },
  {
    name: 'Business',
    price: '$699',
    desc: 'For established brands needing a full digital presence.',
    features: ['Unlimited pages', 'React.js web app', 'E-commerce / Shopify setup', 'Google Ads & Facebook setup', 'Unlimited revisions', 'Priority support', '30 days delivery'],
  },
];

export default function Pricing({ onOpenQuote }) {
  return (
    <>
      <Seo title="Pricing" description="Transparent, affordable pricing packages for website development, from starter to full business builds." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">Pricing Plans</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Simple, transparent pricing</h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              Choose the package that fits your goals. Every plan can be tailored to your project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.1}
              className={`glass-card relative flex flex-col p-8 ${plan.popular ? 'lg:-translate-y-4 border-2 border-primary shadow-glow' : ''}`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold text-white shadow-glow">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-slate-800 dark:text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{plan.desc}</p>
              <p className="mt-6 font-display text-4xl font-bold text-slate-900 dark:text-white">
                {plan.price}<span className="text-base font-normal text-slate-400"> / project</span>
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenQuote}
                className={`mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                <Sparkles size={16} /> Choose {plan.name}
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">
          Prices are starting estimates and vary by project scope. Contact me for an exact quote.
        </p>
      </section>
    </>
  );
}
