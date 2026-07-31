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

    live: '',
    github: 'https://github.com/SufyanMughal0033/TextUtils',
  },

  {
    title: 'WeatherSphere — Weather App',
    desc: 'A modern weather application that provides real-time weather updates, temperature, humidity, wind speed, and detailed forecasts for any city worldwide.',
    tech: ['React', 'OpenWeather API', 'Bootstrap'],
    gradient: 'from-accent to-success',

    live: 'https://illustrious-lebkuchen-94478f.netlify.app//',
    github: 'https://github.com/SufyanMughal0033/WeatherSphere',
  },

 {
    title: 'Gym Management — Gym App',
    desc: 'A complete gym management system to track members, attendance, memberships, and monthly fee payments with ease Designed to help gym owners manage client records, renewals, and daily operations from one dashboard.',
    tech: ['React', 'OpenWeather API', 'Bootstrap'],
    gradient: 'from-accent to-success',

    live: 'https://fanciful-shortbread-389d9f.netlify.app/',
    github: 'https://github.com/SufyanMughal0033/Gym-management',
  },
   {
    title: 'E—Mart - E-commerce store',
    desc: 'A modern e-commerce platform for browsing products, managing carts, and placing secure online orders.',
    tech: ['React', 'OpenWeather API', 'Bootstrap'],
    gradient: 'from-accent to-success',

    live: 'https://chimerical-douhua-9b6dbe.netlify.app/',
    github: 'https://github.com/SufyanMughal0033/e-mart-sufyan',
  },

  {
    title: 'TyreSpace — Premium Tyre Store',
    desc: 'A professional tyre store website with responsive design, product showcase, service booking, customer reviews, and contact features for a seamless user experience.',
    tech: ['React', 'Bootstrap', 'EmailJS'],
    gradient: 'from-success to-primary',

    live: 'https://moonlit-cucurucho-03d49a.netlify.app//',
    github: 'https://github.com/SufyanMughal0033/tyre-website',
  },

  {
    title: 'Coffee Co.',
    desc: 'A warm, image-driven business website for a specialty coffee brand.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    gradient: 'from-success to-accent',

    live: 'https://superlative-bienenstitch-f4b316.netlify.app/',
    github: 'https://github.com/SufyanMughal0033/coffee.co',
  },

  {
    title: 'UpComing Launchpad SaaS Landing',
    desc: 'A high-converting landing page for a SaaS product launch, A/B tested for signups.',
    tech: ['React', 'Tailwind', 'Vercel'],
    gradient: 'from-primary to-secondary',

    live: '',
    github: '',
  },

  {
    title: 'UpComing The Daily Brief — Blog Platform',
    desc: 'A modern, SEO-optimized blog and article platform with fast page loads.',
    tech: ['React', 'Markdown', 'SEO'],
    gradient: 'from-accent to-primary',

    live: '',
    github: '',
  },
];

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="A showcase of websites and web applications built by Sufyan Mughal — business sites, e-commerce, landing pages and more."
      />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />

        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">Selected Work</span>

            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              My Portfolio
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              A collection of my recent web development projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 0.08}
              className="glass-card group overflow-hidden transition-transform hover:-translate-y-1.5"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
              >
                <span className="font-display text-2xl font-bold text-white/90">
                  {p.title.split(' ')[0]}
                </span>

                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-slate-800 dark:text-white">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 dark:bg-accent/10 px-3 py-1 text-xs font-medium text-primary dark:text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              <div className="mt-5 flex gap-3">

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline !px-4 !py-2 text-xs flex-1 flex items-center justify-center gap-2"
    >
      <ExternalLink size={14} />
      Live Demo
    </a>
  )}

  {p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline !px-4 !py-2 text-xs flex-1 flex items-center justify-center gap-2"
    >
      <FaGithub size={14} />
      GitHub
    </a>
  )}

</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}