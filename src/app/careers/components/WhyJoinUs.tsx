'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: 'CurrencyDollarIcon',
    title: 'Competitive Compensation',
    description: 'Top 10% market salaries with equity options, annual performance bonuses, and a 401(k) with 4% company match.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: 'HeartIcon',
    title: 'Full Health Coverage',
    description: 'Medical, dental, and vision for you and your dependents. 100% of premiums covered by LandmineSoft.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: 'HomeIcon',
    title: 'Remote-First',
    description: 'Work from anywhere. We provide a $1,200 home office setup stipend and pay for your coworking membership.',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Learning Budget',
    description: '$3,000/year for courses, conferences, and books. Plus paid time off to attend industry events.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: 'SunIcon',
    title: 'Unlimited PTO',
    description: 'We trust you to manage your time. Take the time you need — minimum 15 days required annually.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: 'RocketLaunchIcon',
    title: 'Growth Path',
    description: 'Clear engineering ladders, bi-annual reviews, and dedicated mentorship from senior engineers.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
];

const WhyJoinUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.benefit-card').forEach((el, i) => {
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
    <section className="section-py bg-gradient-hero" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="tag tag-primary mb-4">Benefits</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Why Engineers{' '}
            <span className="font-display italic text-gradient">Choose Us</span>
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            We believe happy engineers build better software. Here's what we offer beyond a paycheck.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="benefit-card reveal group bg-white rounded-2xl border border-border p-8 card-hover"
            >
              <div className={`w-12 h-12 rounded-xl ${b.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={b.icon as Parameters<typeof Icon>[0]['name']} size={24} className={b.color} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;