import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description="Terms and Conditions for services offered by Sufyan Mughal, including web development, pricing and support." />
      <section className="section pt-36 md:pt-44">
        <div className="container-app mx-auto max-w-3xl">
          <Reveal>
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Terms &amp; Conditions</h1>
            <p className="mt-2 text-sm text-slate-400">Last updated: January 2026</p>
          </Reveal>

          <Reveal delay={0.1} className="glass-card mt-8 space-y-6 p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <p>By engaging Sufyan Mughal for web development, design, or digital marketing services, you agree to the terms outlined below.</p>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Project Scope</h2>
              <p className="mt-2">All work is delivered according to the scope agreed upon at the time of booking. Changes outside the original scope may incur additional charges, communicated before any extra work begins.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Payment Terms</h2>
              <p className="mt-2">Projects typically require a deposit before work begins, with the remaining balance due upon delivery or as agreed in writing. Late payments may delay project delivery.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Revisions</h2>
              <p className="mt-2">Each package includes a set number of revision rounds, as described on the Pricing page. Additional revisions beyond this limit may be billed separately.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Intellectual Property</h2>
              <p className="mt-2">Upon final payment, ownership of the delivered website and its custom content transfers to the client. Reusable code components, tools, or templates developed independently remain the property of Sufyan Mughal.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Support & Maintenance</h2>
              <p className="mt-2">A limited support window is included after delivery for bug fixes related to the original scope. Ongoing maintenance is available under a separate agreement.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Limitation of Liability</h2>
              <p className="mt-2">While every effort is made to deliver reliable, high-quality work, Sufyan Mughal is not liable for indirect losses arising from the use of the delivered website, including third-party service outages.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Contact</h2>
              <p className="mt-2">For questions about these terms, contact sufyanasghar2468@gmail.com.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
