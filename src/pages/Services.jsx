import {
  Layout, Briefcase, FileText, Wand2, Code2, Newspaper, Search,
  ShoppingBag, Megaphone, Wrench, Gauge, Bug, RefreshCw, Sparkles,
} from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const services = [
  { icon: Layout, title: 'Responsive Website Development', desc: 'Websites that look flawless on every device, from mobile to ultra-wide displays.' },
  { icon: Briefcase, title: 'Business Websites', desc: 'Professional websites that build trust and turn visitors into customers.' },
  { icon: FileText, title: 'Portfolio Websites', desc: 'Showcase your work with a portfolio that reflects your personal brand.' },
  { icon: Wand2, title: 'Landing Pages', desc: 'High-converting landing pages built for a single, focused goal.' },
  { icon: Code2, title: 'React.js Development', desc: 'Modern, component-based web apps built for performance and scale.' },
  { icon: Newspaper, title: 'Blog & Article Website Development', desc: 'We can also provide professionally written blog posts and articles for your website.' },
  { icon: Search, title: 'SEO Friendly Websites', desc: 'Built with search engines in mind, from structure to page speed.' },
  { icon: ShoppingBag, title: 'Shopify Store Development', desc: 'Custom Shopify stores ready to sell from day one.' },
  { icon: Megaphone, title: 'Google Ads Setup', desc: 'We offer Google Ads, Facebook Marketing and Shopify Store Development at affordable market competitive prices.' },
  { icon: FaFacebook, title: 'Facebook Marketing', desc: 'Targeted campaigns that put your brand in front of the right audience.' },
  { icon: Wrench, title: 'Website Maintenance', desc: 'Ongoing updates, backups and monitoring so your site stays reliable.' },
  { icon: Gauge, title: 'Website Speed Optimization', desc: 'Faster load times for better rankings and happier visitors.' },
  { icon: Bug, title: 'Bug Fixing', desc: 'Quick, careful fixes for issues on your existing website.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'A modern refresh for outdated sites — same content, new experience.' },
];

export default function Services({ onOpenQuote }) {
  return (
    <>
      <Seo title="Services" description="Explore web development, design and digital marketing services offered by Sufyan Mughal, including React.js, SEO and Shopify development." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">What I Offer</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Services built to grow your business
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              From first pixel to final deployment — and the marketing that gets you found.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 6) * 0.06} className="glass-card group relative overflow-hidden p-6 transition-transform hover:-translate-y-1.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow transition-transform group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-slate-800 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="glass-card mt-14 flex flex-col items-center gap-5 p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white">Not sure which service fits?</h3>
          <p className="max-w-xl text-slate-500 dark:text-slate-400">Tell me about your project and I'll recommend the right approach — free of charge.</p>
          <button onClick={onOpenQuote} className="btn-primary">
            <Sparkles size={18} /> Get Free Quote
          </button>
        </Reveal>
      </section>
    </>
  );
}
