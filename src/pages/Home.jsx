import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Rocket, ShieldCheck, Gauge, Palette, Headphones } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

const words = ['Businesses', 'Startups', 'Brands', 'Ideas'];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 60 : 110;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1200);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const whyChoose = [
  { icon: Rocket, title: 'Fast Delivery', desc: 'Projects shipped on schedule, without cutting corners.' },
  { icon: Gauge, title: 'Affordable Pricing', desc: 'Premium quality at market-competitive rates.' },
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable code that\u2019s a joy to extend.' },
  { icon: Palette, title: 'Modern UI', desc: 'Interfaces that feel current, polished and on-brand.' },
  { icon: ShieldCheck, title: 'SEO Friendly', desc: 'Built to rank, with performance baked in from day one.' },
  { icon: Headphones, title: 'Lifetime Support', desc: 'I stay reachable long after the final deployment.' },
];

export default function Home({ onOpenQuote }) {
  return (
    <>
      <Seo
        title="Frontend Web Developer & Digital Marketing"
        description="Sufyan Mughal — Frontend Web Developer building fast, modern, responsive websites, landing pages and business websites."
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <GradientBlobs />
        <div className="container-app relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Frontend Web Developer</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Building Modern Websites That Grow Your Business
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400">
                Hi, I'm Sufyan Mughal I help <Typewriter /> create beautiful, fast and responsive
                websites that turn visitors into customers.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-4">
              <button onClick={onOpenQuote} className="btn-primary">
                <Sparkles size={18} /> Hire Me
              </button>
              <Link to="/portfolio" className="btn-outline">
                View Portfolio <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="glass-card animate-float p-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mt-5 space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-primary/60 to-accent/60" />
                  <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-slate-200 dark:bg-white/10" />
                  <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
                  <div className="h-3 w-2/3 rounded-full bg-slate-200 dark:bg-white/10" />
                </div>
              </div>
              <div className="glass-card absolute -bottom-8 -left-8 hidden w-48 p-4 sm:block animate-float-slow">
                <p className="text-xs text-slate-500 dark:text-slate-400">Client Satisfaction</p>
                <p className="font-display text-2xl font-bold gradient-text">98%</p>
              </div>
              <div className="glass-card absolute -top-6 -right-6 hidden w-40 p-3 sm:block animate-float">
                <p className="text-xs text-slate-500 dark:text-slate-400">Delivery Speed</p>
                <p className="font-display text-lg font-bold text-success">On Time</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section border-y border-slate-100 dark:border-white/5">
        <div className="container-app grid grid-cols-2 gap-8 md:grid-cols-4">
          <Reveal><Counter value={70} suffix="+" label="Projects Completed" /></Reveal>
          <Reveal delay={0.1}><Counter value={45} suffix="+" label="Happy Clients" /></Reveal>
          <Reveal delay={0.2}><Counter value={3} suffix="+" label="Years Learning" /></Reveal>
          <Reveal delay={0.3}><Counter value={98} suffix="%" label="Client Satisfaction" /></Reveal>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="section">
        <div className="container-app">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Me</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              A partner invested in your results
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08} className="glass-card group p-6 transition-transform hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-slate-800 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-app">
          <Reveal className="glass-card relative overflow-hidden px-8 py-14 text-center md:px-16">
            <GradientBlobs />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Ready to grow your business online?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">
                Let's build something fast, beautiful and built to convert.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button onClick={onOpenQuote} className="btn-primary">
                  <Sparkles size={18} /> Get Free Quote
                </button>
                <Link to="/contact" className="btn-outline">
                  Contact Me <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
