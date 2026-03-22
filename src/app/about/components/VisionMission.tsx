'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="reveal-left group bg-background rounded-2xl border border-border p-10 card-hover">
          <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
            <Icon name="EyeIcon" size={24} className="text-primary" />
          </div>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Our Vision</h2>
          <p className="text-muted leading-relaxed text-lg">
            To be the engineering partner that every ambitious company turns to when they need software done right — the first time, every time.
          </p>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted italic">
              "We measure success by how long our clients stay, not how many we sign."
            </p>
            <p className="text-sm font-semibold text-foreground mt-2">— Daniel Hartley, CEO</p>
          </div>
        </div>

        {/* Mission */}
        <div className="reveal-right group bg-foreground rounded-2xl border border-foreground p-10 card-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark opacity-100 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
              <Icon name="FlagIcon" size={24} className="text-accent" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              To deliver software that solves real problems, ships on schedule, and becomes the backbone of our clients' businesses for years to come.
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-3">
                {['Quality over velocity', 'Long-term partnerships', 'Radical transparency'].map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <Icon name="CheckCircleIcon" size={18} className="text-accent" variant="solid" />
                    <span className="text-sm text-slate-300 font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;