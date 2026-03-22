'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CareersHero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>('.hero-animate');
    els?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[400px] bg-primary/10 top-[-50px] right-[-100px] animate-pulse-glow" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="hero-animate">
          <span className="tag tag-primary mb-6">We're Hiring</span>
        </div>
        <h1 className="hero-animate font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight mt-4">
          Build the Future of<br />
          <span className="font-display italic text-gradient">Software, With Us</span>
        </h1>
        <p className="hero-animate mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          We're a remote-first team of 40+ engineers who care deeply about craft, collaboration, and shipping products that matter.
        </p>
        <div className="hero-animate flex flex-wrap gap-4 justify-center mt-10">
          <a href="#jobs" className="btn-primary shadow-primary">
            View Open Roles
            <Icon name="ArrowDownIcon" size={18} />
          </a>
          <Link href="/about" className="btn-secondary">
            Meet the Team
          </Link>
        </div>

        {/* Quick stats */}
        <div className="hero-animate flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-border/60">
          {[
            { value: '40+', label: 'Team Members' },
            { value: '100%', label: 'Remote-First' },
            { value: '18', label: 'Open Roles' },
            { value: '4.9★', label: 'Glassdoor Rating' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-primary">{s.value}</p>
              <p className="text-sm text-muted mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersHero;