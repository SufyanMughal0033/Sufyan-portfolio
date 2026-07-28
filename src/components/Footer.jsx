import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useToast } from '../context/ToastContext.jsx';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast("You're subscribed! Watch your inbox for updates.", 'success');
    setEmail('');
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-secondary/60">
      <div className="container-app grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-slate-800 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">SM</span>
            Sufyan Mughal
          </Link>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Frontend Web Developer helping businesses grow with beautiful, fast and responsive websites.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/SufyanMughal0033', label: 'GitHub' },
              { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
              { icon: FaTwitter, href: '#', label: 'Twitter' },
              { icon: FaFacebook, href: '#', label: 'Facebook' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-accent dark:hover:text-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-slate-800 dark:text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
            {['/about:About', '/services:Services', '/portfolio:Portfolio', '/pricing:Pricing', '/faq:FAQ'].map((item) => {
              const [to, label] = item.split(':');
              return (
                <li key={to}>
                  <Link to={to} className="hover:text-primary dark:hover:text-accent transition-colors">{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-slate-800 dark:text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
            <li>Business Websites</li>
            <li>Landing Pages</li>
            <li>React.js Development</li>
            <li>Shopify Store Development</li>
            <li>SEO & Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-slate-800 dark:text-white">Stay Updated</h4>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Get occasional tips on web performance and design.</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="w-full rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button type="submit" aria-label="Subscribe" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white">
              <Send size={16} />
            </button>
          </form>
          <div className="mt-5 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <a href="tel:+923172257608" className="flex items-center gap-2 hover:text-primary dark:hover:text-accent"><Phone size={14} /> 0317 2257608</a>
            <a href="mailto:sufyanasghar2468@gmail.com" className="flex items-center gap-2 hover:text-primary dark:hover:text-accent"><Mail size={14} /> sufyanasghar2468@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10 py-6">
        <div className="container-app flex flex-col-reverse items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 md:flex-row">
          <p>&copy; 2026 Sufyan Mughal. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-primary dark:hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary dark:hover:text-accent">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
