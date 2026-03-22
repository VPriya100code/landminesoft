'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py bg-white" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-12 md:p-20 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
          <div className="glow-orb w-[400px] h-[400px] bg-primary/30 top-[-100px] left-1/2 -translate-x-1/2 animate-pulse-glow" />

          <div className="relative z-10">
            <div className="reveal">
              <span className="tag mb-6" style={{ background: 'rgba(56,189,248,0.12)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}>
                Ready to Build?
              </span>
            </div>
            <h2 className="reveal font-display text-4xl md:text-6xl font-semibold text-white leading-tight mt-4">
              Your Next Product<br />
              <span className="font-display italic" style={{ background: 'linear-gradient(135deg, #38BDF8, #7DD3FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Starts Here
              </span>
            </h2>
            <p className="reveal mt-6 text-slate-400 text-lg max-w-xl mx-auto">
              Tell us what you're building. We'll respond within 24 hours with a project brief and timeline.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact" className="btn-primary shadow-primary text-base py-3.5 px-8">
                Start a Conversation
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link href="/services" className="btn-secondary text-base py-3.5 px-8" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                Explore Services
              </Link>
            </div>
            <p className="reveal mt-6 text-slate-500 text-sm">
              No commitment required · Free project scoping call
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;