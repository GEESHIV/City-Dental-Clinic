import { CalendarHeart, Droplets, Sprout, Stethoscope } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const CARE_TIPS = [
  {
    icon: Droplets,
    title: 'Daily Oral Hygiene',
    description:
      'Brushing twice a day with fluoride toothpaste, and cleaning between your teeth with floss or interdental brushes, helps keep plaque under control. Consistent daily habits make a real difference.',
  },
  {
    icon: Stethoscope,
    title: 'Regular Dental Check-ups',
    description:
      'Routine visits give a dental professional the chance to assess your oral health, spot concerns early and advise on the care that suits you. Ask your dentist how often you should visit.',
  },
  {
    icon: Sprout,
    title: 'Healthy Dental Habits',
    description:
      'Limit sugary snacks and drinks, drink water through the day, avoid tobacco, and replace your toothbrush when the bristles look worn.',
  },
];

export function CareInfo() {
  return (
    <section id="care" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Oral Health Education"
            title="Take Care of Your Smile"
            description="Simple, everyday habits can support your teeth and gums. This guidance is general information and does not replace advice from a dental professional."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARE_TIPS.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 100}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-soft">
                <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mist-100 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="relative mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Tip {index + 1}
                </span>
                <h3 className="relative mt-2 text-xl font-bold">{title}</h3>
                <p className="relative mt-3 text-sm leading-[1.5] text-slate-600">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl bg-mist-100 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                <CalendarHeart className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="text-base font-semibold text-navy">Due for a check-up? Let us help you plan your next visit.</p>
            </div>
            <a
              href="#appointment"
              className="inline-flex shrink-0 items-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800"
            >
              Request an Appointment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
