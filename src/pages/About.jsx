import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Search, Briefcase, Wrench } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const specialties = [
  { icon: Code, label: 'Frontend Web Development' },
  { icon: Smartphone, label: 'Responsive Websites' },
  { icon: Layout, label: 'Landing Pages' },
  { icon: Briefcase, label: 'Business Websites' },
  { icon: Layout, label: 'Portfolio Websites' },
  { icon: Search, label: 'SEO & UI/UX Improvements' },
  { icon: Wrench, label: 'Website Optimization' },
];

const skills = [
  { label: 'React.js / JavaScript', value: 92 },
  { label: 'HTML5 & CSS3 / Tailwind', value: 95 },
  { label: 'UI/UX Design', value: 85 },
  { label: 'SEO Optimization', value: 80 },
  { label: 'Shopify Development', value: 78 },
  { label: 'Digital Marketing', value: 75 },
];

export default function About() {
  return (
    <>
      <Seo title="About" description="Learn about Sufyan Mughal — Frontend Web Developer specializing in responsive websites, landing pages and UI/UX." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">About Me</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              The developer behind your next website
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold text-slate-800 dark:text-white">Hi, I'm Sufyan Mughal</h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                I'm a frontend web developer focused on building fast, accessible and visually refined
                websites for businesses and startups. Over the last few years I've combined solid engineering
                with a design-first mindset — every project starts with your goals, not a template.
              </p>
              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                Beyond code, I help clients get found — with SEO-friendly builds, Google Ads setup, and
                Shopify storefronts that are ready to sell from day one.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {specialties.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 px-4 py-3">
                    <Icon size={18} className="text-primary dark:text-accent shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold text-slate-800 dark:text-white">My Skills</h2>
              <div className="mt-6 space-y-6">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-2 flex justify-between text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
