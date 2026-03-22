'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ServicesHero: React.FC = () => {
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
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[400px] bg-primary/10 top-[-50px] right-[-100px] animate-pulse-glow" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="hero-animate">
          <span className="tag tag-primary mb-6">Our Services</span>
        </div>
        <h1 className="hero-animate font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight mt-4">
          Engineering Solutions<br />
          <span className="font-display italic text-gradient">From Concept to Cloud</span>
        </h1>
        <p className="hero-animate mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          We offer end-to-end software development services — from pixel-perfect interfaces to battle-tested backend infrastructure.
        </p>
        <div className="hero-animate flex flex-wrap gap-4 justify-center mt-10">
          <Link href="/contact" className="btn-primary shadow-primary">
            Discuss Your Project
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
          <Link href="/about" className="btn-secondary">
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;