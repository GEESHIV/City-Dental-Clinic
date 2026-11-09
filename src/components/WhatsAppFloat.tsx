import { MessageCircle } from 'lucide-react';
import { GREETING_WHATSAPP_URL } from '@/lib/whatsapp';

export function WhatsAppFloat() {
  return (
    <a
      href={GREETING_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with City Dental Clinic on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg shadow-teal-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-400/60 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-teal-500/40" aria-hidden="true" />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
        Chat with us
      </span>
    </a>
  );
}
