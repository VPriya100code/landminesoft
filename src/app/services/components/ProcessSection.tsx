'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: 'MagnifyingGlassIcon',
    title: 'Discovery & Scoping',
    description: 'We map your requirements, identify technical risks, and produce a detailed project brief with timeline and cost estimate.',
  },
  {
    number: '02',
    icon: 'PencilSquareIcon',
    title: 'Design & Architecture',
    description: 'UX wireframes, system design docs, and database schemas are approved before a single line of production code is written.',
  },
  {
    number: '03',
    icon: 'CodeBracketIcon',
    title: 'Agile Development',
    description: '2-week sprints with demo calls, shared Jira boards, and daily async standups. You see progress every day.',
  },
  {
    number: '04',
    icon: 'RocketLaunchIcon',
    title: 'Launch & Support',
    description: 'Zero-downtime deployment, 30-day post-launch monitoring, and optional long-term retainer for ongoing features.',
  },
];

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.step-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
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
          <span className="tag tag-primary mb-4">How We Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Our Delivery{' '}
            <span className="font-display italic text-gradient">Process</span>
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            A repeatable process that's shipped 150+ projects without missing a deadline.
          </p>
        </div>

        {/* Asymmetric grid — not a numbered timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="step-card reveal group relative bg-white rounded-2xl border border-border p-8 overflow-hidden card-hover"
            >
              {/* Large number background */}
              <span className="absolute top-4 right-5 font-display text-7xl font-semibold text-border/60 select-none pointer-events-none leading-none">
                {step.number}
              </span>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon name={step.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-border z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;