import { MessageCircle, Smile } from 'lucide-react';
import { CLINIC } from '@/data/clinic';
import { SERVICES } from '@/data/services';
import { GREETING_WHATSAPP_URL } from '@/lib/whatsapp';

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#care', label: 'Dental Care Tips' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#appointment', label: 'Request an Appointment' },
  { href: '#contact', label: 'Contact' },
];

const FOOTER_SERVICES = SERVICES.slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white">
              <Smile className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold text-white">City Dental Clinic</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-[1.5] text-slate-300">
            A welcoming dental clinic in Sector 66, Noida, focused on patient comfort, clear communication and
            everyday oral health.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-teal-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Dental Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {FOOTER_SERVICES.map((service) => (
              <li key={service.id}>
                <a href="#services" className="transition-colors hover:text-teal-300">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={CLINIC.phoneHref} className="transition-colors hover:text-teal-300">
                {CLINIC.phone}
              </a>
            </li>
            <li className="leading-[1.5]">
              {CLINIC.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
            <li>
              <a
                href={GREETING_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-teal-300"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-300"
              >
                Google Business Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} City Dental Clinic. All rights reserved.</p>
          <p>Information on this website is general and is not a substitute for professional dental advice.</p>
        </div>
      </div>
    </footer>
  );
}
