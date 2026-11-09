import { Clock3, HandHeart, Heart, MapPin, MessageSquareText, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const REASONS = [
  {
    icon: HandHeart,
    title: 'Patient-Focused Approach',
    description: 'We listen first, so every conversation starts with your concerns and questions.',
  },
  {
    icon: MessageSquareText,
    title: 'Dental Care Enquiries',
    description: 'Send an enquiry in a few taps and our team will get back to you.',
  },
  {
    icon: Sparkles,
    title: 'Comfortable Clinic Experience',
    description: 'A calm, welcoming environment where you can talk openly about your dental needs.',
  },
  {
    icon: MapPin,
    title: 'Convenient Sector 66 Location',
    description: 'Easy to find in Sector 66, Noida, with directions available with a single tap.',
  },
  {
    icon: Clock3,
    title: 'Easy Appointment Enquiries',
    description: 'Request an appointment online and continue on WhatsApp. No app download needed.',
  },
  {
    icon: Heart,
    title: 'Focus on Oral Health Awareness',
    description: 'We share simple, practical guidance to help you look after your teeth and gums every day.',
  },
];

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[2.75rem]">
            A patient-first clinic in the heart of Sector 66
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 80}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.08]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-[1.5] text-slate-300">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
