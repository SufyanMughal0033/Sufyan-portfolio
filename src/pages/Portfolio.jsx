import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

const projects = [
{
  title: 'TextUtils — Text Utility App',
  desc: 'Transform your text with features like uppercase, lowercase, word count, character count, and more. Built with React, it offers a fast, responsive, and user-friendly text editing experience.',
  tech: ['React', 'Bootstrap', 'JavaScript'],
  gradient: 'from-primary to-accent',
},
{
  title: 'WeatherSphere — Weather App',
  desc: 'A modern weather application that provides real-time weather updates, temperature, humidity, wind speed, and detailed forecasts for any city worldwide.',
  tech: ['React', 'OpenWeather API', 'Bootstrap'],
  gradient: 'from-accent to-success',
},
{
  title: 'TyreSpace — Premium Tyre Store',
  desc: 'A professional tyre store website with responsive design, product showcase, service booking, customer reviews, and contact features for a seamless user experience.',
  tech: ['React', 'Bootstrap', 'EmailJS'],
  gradient: 'from-success to-primary',
  upcoming: true,
},
{
  title: 'UpComing Launchpad SaaS Landing',
  desc: 'A high-converting landing page for a SaaS product launch, A/B tested for signups.',
  tech: ['React', 'Tailwind', 'Vercel'],
  gradient: 'from-primary to-secondary',
  upcoming: true,
},
{
  title: 'UpComing The Daily Brief — Blog Platform',
  desc: 'A modern, SEO-optimized blog and article platform with fast page loads.',
  tech: ['React', 'Markdown', 'SEO'],
  gradient: 'from-accent to-primary',
  upcoming: true,
},
{
  title: 'UpComing Urban Roast Coffee Co.',
  desc: 'A warm, image-driven business website for a specialty coffee brand.',
  tech: ['React', 'Tailwind', 'Framer Motion'],
  gradient: 'from-success to-accent',
  upcoming: true,
},
];

export default function Portfolio() {
  return (
    <>
      <Seo title="Portfolio" description="A showcase of websites and web applications built by Sufyan Mughal — business sites, e-commerce, landing pages and more." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">Selected Work</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">My Portfolio</h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              A sample of recent projects. Live demos are illustrative placeholders for this template.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className="glass-card group overflow-hidden transition-transform hover:-translate-y-1.5">
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <span className="font-display text-2xl font-bold text-white/90">{p.title.split(' ')[0]}</span>
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-slate-800 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-primary/10 dark:bg-accent/10 px-3 py-1 text-xs font-medium text-primary dark:text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  {/* <a href="#" onClick={(e) => e.preventDefault()} className="btn-outline !px-4 !py-2 text-xs flex-1">
                    <ExternalLink size={14} /> Live Demo
                  </a> */}
                  <a href="https://github.com/SufyanMughal0033" target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2 text-xs flex-1">
                    <FaGithub size={14} /> GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
