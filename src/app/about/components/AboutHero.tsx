'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const AboutHero: React.FC = () => {
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
    <section className="relative pt-32 pb-0 bg-gradient-hero overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="hero-animate">
            <span className="tag tag-primary mb-6">About LandmineSoft</span>
          </div>
          <h1 className="hero-animate font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight mt-4">
            Engineering Software<br />
            <span className="font-display italic text-gradient">Since 2016</span>
          </h1>
          <p className="hero-animate mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We're a team of 40+ engineers, designers, and product thinkers who've spent 8 years building software that users return to every day.
          </p>
        </div>

        {/* Full-width image */}
        <div className="hero-animate relative h-[400px] md:h-[520px] rounded-t-3xl overflow-hidden border border-b-0 border-border">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_194df3c5b-1772192500613.png"
            alt="LandmineSoft team collaborating in a bright open-plan office with whiteboards and laptops"
            fill
            className="object-cover"
            priority />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>);

};

export default AboutHero;