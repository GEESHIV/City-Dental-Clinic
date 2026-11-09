import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'light';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/40 active:scale-[0.98]';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-teal-700 text-white shadow-lg shadow-teal-700/25 hover:-translate-y-0.5 hover:bg-teal-800',
  secondary: 'bg-navy text-white hover:-translate-y-0.5 hover:bg-navy-700',
  outline: 'border border-navy/15 bg-white text-navy hover:-translate-y-0.5 hover:border-teal-700 hover:text-teal-700',
  light: 'bg-white text-navy hover:-translate-y-0.5 hover:bg-mist-100',
};

interface ButtonStyleOptions {
  variant?: Variant;
  className?: string;
}

export function buttonStyles({ variant = 'primary', className = '' }: ButtonStyleOptions = {}) {
  return `${BASE} ${VARIANTS[variant]} ${className}`;
}

interface ButtonLinkProps extends ButtonStyleOptions {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  external?: boolean;
  onClick?: () => void;
}

export function ButtonLink({ href, children, icon: Icon, external, onClick, variant, className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={buttonStyles({ variant, className })}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}
