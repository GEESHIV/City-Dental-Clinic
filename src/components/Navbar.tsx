import { useEffect, useState } from 'react';
import { Menu, Phone, Smile, X } from 'lucide-react';
import { ButtonLink } from '@/components/Button';
import { CLINIC } from '@/data/clinic';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#care', label: 'Dental Care' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-md shadow-teal-700/30">
            <Smile className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-navy">City Dental Clinic</span>
            <span className="block text-xs font-medium text-slate-600">Sector 66, Noida</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-semibold text-navy/80 transition-colors hover:text-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={CLINIC.phoneHref} variant="outline" icon={Phone} className="!px-5 !py-2.5">
            Call Now
          </ButtonLink>
          <ButtonLink href="#appointment" className="!px-5 !py-2.5">
            Book an Appointment
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-mist-100 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-navy transition-colors hover:bg-mist-100 hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto grid max-w-7xl gap-3 px-5 pb-6">
            <ButtonLink href={CLINIC.phoneHref} variant="outline" icon={Phone} onClick={closeMenu}>
              Call Now
            </ButtonLink>
            <ButtonLink href="#appointment" onClick={closeMenu}>
              Book an Appointment
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
