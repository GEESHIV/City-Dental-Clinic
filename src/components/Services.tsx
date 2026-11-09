import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SERVICES } from '@/data/services';

interface ServicesProps {
  onEnquire: (serviceTitle: string) => void;
}

export function Services({ onEnquire }: ServicesProps) {
  return (
    <section id="services" className="bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Dental Services"
            title="Care for every stage of your oral health"
            description="Browse the dental services we are happy to discuss. Each treatment is confirmed with you after a consultation."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={(index % 3) * 80}>
                <article className="group flex h-full flex-col rounded-3xl border border-white bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-md shadow-teal-700/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-snug">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.5] text-slate-600">{service.description}</p>
                  <a
                    href="#appointment"
                    onClick={() => onEnquire(service.title)}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-mist-100 px-4 py-2 text-sm font-semibold text-teal-700 transition-all duration-300 hover:gap-3 hover:bg-teal-700 hover:text-white"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          This list describes the general dental services our clinic is happy to discuss. It is not a promise of any
          specific outcome. Please speak to a dental professional for advice about your own needs.
        </p>
      </div>
    </section>
  );
}
