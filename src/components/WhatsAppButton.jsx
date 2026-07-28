import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_LINK =
  "https://wa.me/923172257608?text=" +
  encodeURIComponent("Hi Sufyan, I visited your website and I'm interested in your services. I'd like to discuss my project.");

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-[80] flex items-center"
    >
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-pulse-ring" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/90 backdrop-blur-md shadow-xl shadow-[#25D366]/30 border border-white/30 transition-transform duration-300 group-hover:scale-110 animate-float">
        <FaWhatsapp className="text-white" size={28} />
      </span>
    </a>
  );
}
