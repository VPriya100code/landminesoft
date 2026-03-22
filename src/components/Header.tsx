'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/homepage' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-sm border-b border-border/50'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2.5 group">
          <AppLogo
            size={36}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-semibold text-xl text-foreground tracking-tight">
            LandmineSoft
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? 'text-primary bg-primary/8' :'text-muted hover:text-foreground hover:bg-muted-bg'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="btn-secondary text-sm py-2 px-5"
          >
            Sign Up
          </Link>
          <Link
            href="/contact"
            className="btn-primary text-sm py-2 px-5"
          >
            Get Started
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-muted-bg transition-colors"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={isMobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-xl z-40 flex flex-col p-6 border-t border-border">
          <nav className="flex flex-col gap-1 mt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-xl transition-all ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/8' :'text-foreground hover:bg-muted-bg'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border">
            <Link
              href="/login"
              className="btn-secondary text-center justify-center"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="btn-secondary text-center justify-center"
            >
              Sign Up
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-center justify-center"
            >
              Get Started
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;