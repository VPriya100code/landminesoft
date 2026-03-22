'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const STATS = [
{ value: '150+', label: 'Projects Shipped' },
{ value: '8 yrs', label: 'Industry Experience' },
{ value: '98%', label: 'Client Satisfaction' }];


const HeroSection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const images = imagesRef.current;
    if (!content || !images) return;

    // Staggered entrance
    const elements = content.querySelectorAll<HTMLElement>('.hero-animate');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });

    images.style.opacity = '0';
    images.style.transform = 'translateX(32px)';
    setTimeout(() => {
      images.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
      images.style.opacity = '1';
      images.style.transform = 'translateX(0)';
    }, 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary/10 top-[-100px] right-[-100px] animate-pulse-glow" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/10 bottom-[-50px] left-[-50px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div ref={contentRef} className="lg:col-span-6 space-y-8">
          <div className="hero-animate">
            <span className="tag tag-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
              Trusted by 50+ Companies
            </span>
          </div>

          <h1 className="hero-animate font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground">
            We Build Software{' '}
            <span className="font-display italic text-gradient">That Scales</span>{' '}
            With Your Vision
          </h1>

          <p className="hero-animate text-lg text-muted leading-relaxed max-w-lg">
            From idea to production, LandmineSoft delivers full-stack web apps, mobile solutions, and robust APIs — on time, every time.
          </p>

          <div className="hero-animate flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary shadow-primary">
              Start a Project
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="hero-animate flex flex-wrap gap-8 pt-4 border-t border-border/60">
            {STATS.map((stat) =>
            <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted mt-0.5">{stat.label}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: overlapping image stack (Template 2 pattern) */}
        <div ref={imagesRef} className="lg:col-span-6 relative h-[520px] hidden md:block">
          {/* Top-right large image */}
          <div className="absolute top-0 right-0 w-[58%] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-white/80 z-10">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1d3ddda09-1766126692583.png"
              alt="LandmineSoft development team collaborating around a laptop in a modern office"
              fill
              className="object-cover"
              priority />
            
          </div>

          {/* Left-middle overlapping image */}
          <div className="absolute top-[18%] left-0 w-[50%] aspect-square rounded-3xl overflow-hidden shadow-xl border border-white/80 z-20 animate-float">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_17f563409-1773055025760.png"
              alt="Software engineers writing code on dual monitors with blue IDE theme"
              fill
              className="object-cover" />
            
          </div>

          {/* Bottom front floating card */}
          <div className="absolute bottom-[-4%] left-[22%] w-[42%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/80 z-30 animate-float" style={{ animationDelay: '1.5s' }}>
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1c73b9307-1772593173465.png"
              alt="Clean mobile app UI design on a smartphone showing dashboard analytics"
              fill
              className="object-cover" />
            
          </div>

          {/* Floating stat card */}
          <div className="absolute top-6 left-[8%] z-40 glass rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="CheckBadgeIcon" size={18} className="text-primary" variant="solid" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Project Delivered</p>
                <p className="text-2xs text-muted">On time · On budget</p>
              </div>
            </div>
          </div>

          {/* Tech stack badge */}
          <div className="absolute bottom-[18%] right-[-4%] z-40 glass rounded-2xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
            <p className="text-2xs text-muted uppercase tracking-wider font-semibold mb-1.5">Tech Stack</p>
            <div className="flex gap-1.5">
              {['React', 'Node', 'AWS'].map((t) =>
              <span key={t} className="text-2xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md">{t}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>);

};

export default HeroSection;