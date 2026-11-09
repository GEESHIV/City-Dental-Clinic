import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { GALLERY_ITEMS } from '@/data/clinic';

export function Gallery() {
  return (
    <section id="gallery" className="bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Clinic Gallery"
            title="A calm, clean space to feel at ease"
            description="A look at the kind of calm, clean and friendly environment we aim to offer every patient."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 80} className={index === 0 ? 'col-span-2 lg:col-span-1' : ''}>
              <figure className="group relative h-full overflow-hidden rounded-3xl bg-navy shadow-sm">
                <img
                  src={item.src}
                  alt={item.title}
                  width={940}
                  height={650}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-5 pt-16 text-sm font-semibold text-white">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          The images shown are illustrative stock photographs and do not depict City Dental Clinic, its team or its
          patients.
        </p>
      </div>
    </section>
  );
}
