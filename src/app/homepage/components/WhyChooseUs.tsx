'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: 'BoltIcon',
    title: 'Ship in Weeks, Not Months',
    description: 'Our agile process and pre-built component libraries cut development time by 40% without sacrificing quality.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Security-First Architecture',
    description: 'Every system is built with OWASP best practices, end-to-end encryption, and regular penetration testing.',
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'Scales as You Grow',
    description: 'Microservices, auto-scaling infrastructure, and load-tested code that handles 10x traffic spikes gracefully.',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Transparent Communication',
    description: 'Weekly progress calls, shared project boards, and direct Slack access to your engineering team.',
  },
];

const STATS = [
  { value: '150+', label: 'Projects Delivered', icon: 'RocketLaunchIcon' },
  { value: '50+', label: 'Happy Clients', icon: 'UserGroupIcon' },
  { value: '99%', label: 'On-Time Delivery', icon: 'ClockIcon' },
  { value: '8+', label: 'Years of Expertise', icon: 'AcademicCapIcon' },
];

const WhyChooseUs: React.FC = () => {
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
    <section className="section-py bg-foreground relative overflow-hidden" ref={sectionRef}>
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-100 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/20 top-[-100px] right-[-100px] animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="tag mb-4" style={{ background: 'rgba(56,189,248,0.12)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}>
            Why LandmineSoft
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mt-2">
            Built Different,{' '}
            <span className="font-display italic" style={{ background: 'linear-gradient(135deg, #38BDF8, #7DD3FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Delivered Better
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            We don't just write code — we engineer outcomes. Here's what sets us apart.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal group glass-dark rounded-2xl p-7 hover:border-primary/40 transition-all duration-300 card-hover"
            >
              <div className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Icon name={reason.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar — gap-border technique from Template 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="reveal bg-foreground/80 p-8 text-center hover:bg-white/5 transition-colors"
            >
              <Icon name={stat.icon as Parameters<typeof Icon>[0]['name']} size={24} className="text-accent mx-auto mb-3" />
              <p className="font-display text-4xl font-semibold text-white mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;