import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="Privacy Policy for the Sufyan Mughal website — how information submitted through contact and quote forms is handled." />
      <section className="section pt-36 md:pt-44">
        <div className="container-app mx-auto max-w-3xl">
          <Reveal>
            <span className="eyebrow">Legal</span>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-slate-400">Last updated: January 2026</p>
          </Reveal>

          <Reveal delay={0.1} className="glass-card mt-8 space-y-6 p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <p>This Privacy Policy explains how information is collected and used when you visit this website or submit a form, such as the contact form or the "Get Free Quote" request.</p>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Information We Collect</h2>
              <p className="mt-2">When you submit a form, we may collect your name, email address, phone number, company name, and details about your project, including budget and timeline where provided.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">How We Use Your Information</h2>
              <p className="mt-2">Submitted information is sent directly to our email via a third-party service (EmailJS) and is used solely to respond to your enquiry, provide a quote, or discuss a potential project. We do not sell or share your information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Cookies & Local Storage</h2>
              <p className="mt-2">This site may store your dark/light mode preference in your browser's local storage. No tracking cookies are used beyond what is required for basic site functionality.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Third-Party Services</h2>
              <p className="mt-2">Contact and quote forms are processed using EmailJS, a third-party email delivery service. Please review EmailJS's own privacy policy for details on how they handle data in transit.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Your Rights</h2>
              <p className="mt-2">You may request that any information you've submitted be deleted from our records at any time by contacting us at sufyanasghar2468@gmail.com.</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-slate-800 dark:text-white">Contact</h2>
              <p className="mt-2">Questions about this policy can be directed to sufyanasghar2468@gmail.com.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
