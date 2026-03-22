'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  span?: string;
}

const SERVICES: Service[] = [
  {
    icon: 'ComputerDesktopIcon',
    title: 'Web Development',
    description: 'High-performance web applications built with React, Next.js, and modern backend frameworks. From MVPs to enterprise platforms.',
    color: 'text-primary',
    bgColor: 'bg-primary/8',
    span: 'lg:col-span-2',
  },
  {
    icon: 'DevicePhoneMobileIcon',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS & Android apps using React Native and Flutter. Native performance, shared codebase.',
    color: 'text-accent-dark',
    bgColor: 'bg-accent/10',
  },
  {
    icon: 'SwatchIcon',
    title: 'UI/UX Design',
    description: 'User-first interfaces with Figma prototyping, design systems, and usability testing that converts.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: 'ServerStackIcon',
    title: 'Backend & API Development',
    description: 'Scalable REST and GraphQL APIs, microservices architecture, database design, and cloud infrastructure on AWS, GCP, and Azure.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    span: 'lg:col-span-2',
  },
];

const ServicesOverview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>('.service-card');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 100);
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="tag tag-primary mb-4">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Services Built for{' '}
              <span className="font-display italic text-gradient">Modern Teams</span>
            </h2>
          </div>
          <Link href="/services" className="btn-secondary shrink-0">
            All Services
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`service-card reveal card-hover group bg-background rounded-2xl border border-border p-8 flex flex-col gap-5 ${service.span ?? ''}`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={24} className={service.color} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-auto">
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0`}
                >
                  Learn more <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;