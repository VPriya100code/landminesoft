'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Value {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const VALUES: Value[] = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Integrity First',
    description: 'We say what we mean, ship what we promise, and tell you when something\'s wrong before you have to ask.',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: 'LightBulbIcon',
    title: 'Engineering Excellence',
    description: 'We write code we\'d be proud to show our grandchildren. Code reviews, testing, and documentation are non-negotiable.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Client Partnership',
    description: 'Your success is our success. We treat your product like it\'s our own startup — with the same urgency and care.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'Continuous Growth',
    description: 'We invest 20% of every engineer\'s time in learning, side projects, and open-source contributions.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Inclusive by Design',
    description: 'Every product we build meets WCAG 2.1 AA accessibility standards. Good software works for everyone.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: 'BoltIcon',
    title: 'Bias for Action',
    description: 'We ship MVPs in weeks, not months. Imperfect progress beats perfect paralysis every single time.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
];

const CoreValues: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.value-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="tag tag-primary mb-4">Core Values</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            What We{' '}
            <span className="font-display italic text-gradient">Stand For</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="value-card reveal group bg-background rounded-2xl border border-border p-8 card-hover"
            >
              <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={v.icon as Parameters<typeof Icon>[0]['name']} size={22} className={v.color} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;