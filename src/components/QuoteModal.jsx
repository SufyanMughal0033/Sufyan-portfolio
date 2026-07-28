import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Loader2, Send } from 'lucide-react';
import { sendEmail, QUOTE_TEMPLATE_ID } from '../lib/emailjs.js';
import { useToast } from '../context/ToastContext.jsx';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  deadline: '',
  description: '',
};

const services = [
  'Business Website',
  'Portfolio Website',
  'Landing Page',
  'React.js Development',
  'Shopify Store',
  'SEO / Digital Marketing',
  'Website Maintenance',
  'Other',
];

export default function QuoteModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const { showToast } = useToast();

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service || !form.description) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    setSending(true);
    try {
      await sendEmail(
        {
          full_name: form.name,
          company_name: form.company || 'N/A',
          email: form.email,
          phone: form.phone,
          service_required: form.service,
          budget: form.budget || 'Not specified',
          deadline: form.deadline || 'Not specified',
          description: form.description,
        },
        QUOTE_TEMPLATE_ID
      );
      showToast("Your enquiry was sent! I'll get back to you shortly.", 'success');
      setForm(initialForm);
      onClose();
    } catch (err) {
      showToast(err.message || 'Something went wrong sending your enquiry. Please try again.', 'error');
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[110] flex items-center justify-center bg-secondary/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white dark:bg-secondary p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <button
            onClick={onClose}
            aria-label="Close quote form"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-500 hover:text-primary"
          >
            <X size={18} />
          </button>

          <span className="eyebrow">Free Quote</span>
          <h3 id="quote-modal-title" className="mt-3 font-display text-2xl font-bold text-slate-800 dark:text-white">
            Tell me about your project
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Fill this out and I'll send you a tailored quote within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Company Name" name="company" value={form.company} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <Field label="Phone / WhatsApp" name="phone" value={form.phone} onChange={handleChange} required />

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
                Service Required <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <Field label="Budget (optional)" name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. $500 - $1000" />
            <Field label="Project Deadline (optional)" name="deadline" type="date" value={form.deadline} onChange={handleChange} className="sm:col-span-1" />

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me a bit about what you need..."
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <button type="submit" disabled={sending} className="btn-primary sm:col-span-2 w-full disabled:cursor-not-allowed disabled:opacity-60">
              {sending ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Submit Enquiry
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false, placeholder = '', className = '' }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
