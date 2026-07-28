import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const QUOTE_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || TEMPLATE_ID;

/**
 * Sends form data via EmailJS.
 * @param {Record<string, string>} templateParams
 * @param {string} [templateId] optional override, defaults to the contact template
 */
export async function sendEmail(templateParams, templateId = TEMPLATE_ID) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
    );
  }
  return emailjs.send(SERVICE_ID, templateId, templateParams, { publicKey: PUBLIC_KEY });
}

export { QUOTE_TEMPLATE_ID };
