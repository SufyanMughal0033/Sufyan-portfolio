import { useState } from 'react';
import { Phone, Mail, Loader2, Send, MapPin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';
import { sendEmail } from '../lib/emailjs.js';
import { useToast } from '../context/ToastContext.jsx';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    setSending(true);
    try {
      await sendEmail({
        from_name: form.name,
        reply_to: form.email,
        phone: form.phone || 'N/A',
        message: form.message,
      });
      showToast("Message sent! I'll reply as soon as possible.", 'success');
      setForm(initialForm);
    } catch (err) {
      showToast(err.message || 'Failed to send message. Please try again.', 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Seo title="Contact" description="Get in touch with Sufyan Mughal for your next website or digital marketing project." />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <span className="eyebrow">Let's Talk</span>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Get In Touch</h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              Have a project in mind? Send a message and I'll get back to you within a day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-app grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 glass-card p-8">
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <button type="submit" disabled={sending} className="btn-primary sm:col-span-2 w-full disabled:cursor-not-allowed disabled:opacity-60">
                {sending ? (<><Loader2 size={18} className="animate-spin" /> Sending...</>) : (<><Send size={18} /> Send Message</>)}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-slate-800 dark:text-white">Contact Information</h3>
              <div className="mt-4 space-y-4 text-sm">
                <a href="tel:+923172257608" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"><Phone size={16} /></span>
                  0317 2257608
                </a>
                <a href="mailto:sufyanasghar2468@gmail.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"><Mail size={16} /></span>
                  sufyanasghar2468@gmail.com
                </a>
                <a href="https://github.com/SufyanMughal0033" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"><FaGithub size={16} /></span>
                  github.com/SufyanMughal0033
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a href="tel:+923172257608" className="btn-outline !px-3 !py-2.5 text-xs">Call Now</a>
                <a href="mailto:sufyanasghar2468@gmail.com" className="btn-outline !px-3 !py-2.5 text-xs">Email Me</a>
                <a href="https://github.com/SufyanMughal0033" target="_blank" rel="noopener noreferrer" className="btn-outline !px-3 !py-2.5 text-xs">Visit GitHub</a>
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <div className="flex h-56 items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-400 gap-2">
                <MapPin size={20} /> <span className="text-sm">Map placeholder — embed Google Maps here</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
