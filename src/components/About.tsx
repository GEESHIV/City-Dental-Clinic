import { CheckCircle2, MapPin, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CLINIC, IMAGES } from '@/data/clinic';

const POINTS = [
  'Easy enquiries by phone or WhatsApp',
  'A welcoming space to talk through your needs',
  'Convenient to reach in Sector 66, Noida',
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-mist-200 sm:-left-6 sm:-top-6" aria-hidden="true" />
          <img
            src={IMAGES.about}
            alt="Dentist consulting a patient at a modern dental clinic reception"
            width={940}
            height={650}
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-navy">Sector 66, Noida</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">About Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-[2.75rem]">
            Welcome to City Dental Clinic
          </h2>
          <p className="mt-6 text-base leading-[1.5] text-slate-600 sm:text-lg">
            At City Dental Clinic, we believe that a healthy smile plays an important role in everyday life. Our aim is
            to make dental care enquiries simple and provide patients with a welcoming environment to discuss their oral
            health needs.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base font-medium text-navy">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href={CLINIC.phoneHref}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-navy/10 bg-mist-50 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-700/30 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Call the clinic</span>
              <span className="block text-lg font-bold text-navy">{CLINIC.phone}</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
