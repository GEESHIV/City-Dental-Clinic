interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && <p className="mt-4 text-base leading-[1.5] text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}
