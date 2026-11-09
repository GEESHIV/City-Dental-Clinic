import { Clock3, MapPin, Navigation, Phone } from 'lucide-react';
import { ButtonLink } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { GREETING_WHATSAPP_URL } from '@/lib/whatsapp';
import { CLINIC } from '@/data/clinic';

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Visit, call or message City Dental Clinic"
            description="We are located in Sector 66, Noida. Reach out by phone or WhatsApp, or get directions to the clinic."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-navy p-8 text-white shadow-soft sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">{CLINIC.name}</p>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Phone</p>
                    <a href={CLINIC.phoneHref} className="mt-1 block text-lg font-bold text-white transition-colors hover:text-teal-300">
                      {CLINIC.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Address</p>
                    <address className="mt-1 not-italic text-base leading-[1.5] text-white">
                      {CLINIC.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Clinic Timings</p>
                    <p className="mt-1 text-sm leading-[1.5] text-slate-200">
                      Please call or message us on WhatsApp to confirm our current timings.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-mist-50 p-8 sm:p-10">
              <div>
                <h3 className="text-2xl font-bold">Get in touch</h3>
                <p className="mt-3 text-base leading-[1.5] text-slate-600">
                  Choose the option that suits you best and we will be happy to help with your enquiry.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <ButtonLink href={CLINIC.phoneHref} variant="outline" icon={Phone} className="w-full">
                  Call Clinic
                </ButtonLink>
                <ButtonLink href={GREETING_WHATSAPP_URL} variant="primary" external className="w-full">
                  WhatsApp Us
                </ButtonLink>
                <ButtonLink href={CLINIC.mapsUrl} variant="secondary" icon={Navigation} external className="w-full">
                  Get Directions
                </ButtonLink>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-[1.5] text-slate-600 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <span>
                  Use the directions button to open our Google Business Profile in Maps and plan your route to{' '}
                  <span className="font-semibold text-navy">{CLINIC.address}</span>.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
