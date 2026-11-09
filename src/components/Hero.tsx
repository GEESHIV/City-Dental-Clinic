import { CalendarCheck, MapPin, Phone, ShieldCheck, Smile } from 'lucide-react';
import { ButtonLink } from '@/components/Button';
import { CLINIC, IMAGES } from '@/data/clinic';

const TRUST_POINTS = [
  { icon: Smile, label: 'Patient-focused care' },
  { icon: MapPin, label: 'Sector 66, Noida' },
  { icon: ShieldCheck, label: 'Enquire via WhatsApp' },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mist-100 via-white to-white pt-28 lg:pt-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden="true" />
            {CLINIC.category} in Sector 66, Noida
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-6xl">
            Your Smile Deserves the <span className="text-teal-700">Best Care.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-[1.5] text-slate-600 sm:text-lg">
            Welcome to City Dental Clinic, where your oral health and confident smile matter. Explore our dental care
            services and get in touch to book an appointment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#appointment" icon={CalendarCheck}>
              Book an Appointment
            </ButtonLink>
            <ButtonLink href="#services" variant="outline">
              Explore Our Services
            </ButtonLink>
            <ButtonLink href={CLINIC.phoneHref} variant="outline" icon={Phone}>
              Call Now
            </ButtonLink>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-semibold text-navy">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={IMAGES.hero}
              alt="Dentist consulting with a patient in a modern dental clinic"
              width={940}
              height={650}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft sm:left-auto sm:right-8 sm:w-72">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Speak to our team</p>
              <a href={CLINIC.phoneHref} className="text-base font-bold text-navy transition-colors hover:text-teal-700">
                {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
