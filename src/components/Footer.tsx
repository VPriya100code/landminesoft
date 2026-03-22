import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const LINKS_LEFT = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const LINKS_RIGHT = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const SOCIAL = [
  { icon: 'GlobeAltIcon', href: '#', label: 'Website' },
  { icon: 'EnvelopeIcon', href: 'mailto:hello@landminesoft.com', label: 'Email' },
  { icon: 'PhoneIcon', href: 'tel:+1234567890', label: 'Phone' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Logo + links row */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link href="/homepage" className="flex items-center gap-2">
            <AppLogo size={28} onClick={() => {}} />
            <span className="font-display font-semibold text-base text-foreground">LandmineSoft</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            {LINKS_LEFT.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-primary hover:bg-primary/8 transition-all"
              >
                <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted">
            {LINKS_RIGHT.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors font-medium">
                {l.label}
              </a>
            ))}
            <span>© 2026 LandmineSoft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;