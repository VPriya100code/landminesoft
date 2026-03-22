'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  imageUrl: string;
  imageAlt: string;
}

const SERVICES: ServiceDetail[] = [
{
  icon: 'ComputerDesktopIcon',
  title: 'Web Development',
  description: 'We build fast, accessible, SEO-optimized web applications that users love and engineers are proud of. From marketing sites to complex SaaS platforms.',
  features: [
  'React / Next.js / TypeScript',
  'Server-side rendering & static generation',
  'Core Web Vitals optimization',
  'Headless CMS integration',
  'CI/CD pipeline setup'],

  color: 'text-primary',
  bgColor: 'bg-primary/6',
  borderColor: 'border-primary/20',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_153ae58e0-1766470511581.png",
  imageAlt: 'Web developer coding a React application on a large curved monitor'
},
{
  icon: 'DevicePhoneMobileIcon',
  title: 'Mobile App Development',
  description: 'Cross-platform iOS and Android applications with native performance. We ship to both app stores from a single, maintainable codebase.',
  features: [
  'React Native & Flutter',
  'App Store & Play Store submission',
  'Push notifications & deep linking',
  'Offline-first architecture',
  'Biometric authentication'],

  color: 'text-sky-600',
  bgColor: 'bg-sky-50',
  borderColor: 'border-sky-200',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8301bba-1772624075748.png",
  imageAlt: 'Person holding smartphone showing a clean mobile app interface with blue accents'
},
{
  icon: 'SwatchIcon',
  title: 'UI/UX Design',
  description: 'Research-driven design that converts. We prototype, test, and iterate until every interaction feels effortless and every screen earns its place.',
  features: [
  'User research & persona mapping',
  'Figma prototyping & design systems',
  'Usability testing',
  'Accessibility (WCAG 2.1 AA)',
  'Motion design & micro-interactions'],

  color: 'text-violet-600',
  bgColor: 'bg-violet-50',
  borderColor: 'border-violet-200',
  imageUrl: "https://img.rocket.new/generatedImages/rocket_gen_img_17a4d94f8-1773204330326.png",
  imageAlt: 'UX designer sketching wireframes on paper with Figma open on laptop screen beside'
},
{
  icon: 'ServerStackIcon',
  title: 'Backend & API Development',
  description: 'Robust, scalable server infrastructure that handles millions of requests. We architect systems that grow with your business without surprise downtime.',
  features: [
  'REST & GraphQL API design',
  'Microservices architecture',
  'PostgreSQL, MongoDB, Redis',
  'AWS / GCP / Azure deployment',
  'Load testing & performance tuning'],

  color: 'text-emerald-600',
  bgColor: 'bg-emerald-50',
  borderColor: 'border-emerald-200',
  imageUrl: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a",
  imageAlt: 'Server room with blue LED lighting showing rack-mounted servers and network cables'
}];


const ServiceCards: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.svc-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {SERVICES.map((service, i) =>
        <div
          key={service.title}
          className={`svc-card reveal group grid md:grid-cols-2 gap-0 rounded-2xl border ${service.borderColor} overflow-hidden bg-background ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
          
            {/* Image side */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
              src={service.imageUrl}
              alt={service.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            
              <div className={`absolute inset-0 ${service.bgColor} opacity-20`} />
            </div>

            {/* Content side */}
            <div className={`p-8 md:p-12 flex flex-col gap-6 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
              <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={24} className={service.color} />
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-3">{service.title}</h2>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-2.5">
                {service.features.map((f) =>
              <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <Icon name="CheckCircleIcon" size={18} className={service.color} variant="solid" />
                    {f}
                  </li>
              )}
              </ul>
              <div className="mt-auto">
                <Link href="/contact" className="btn-primary text-sm py-2.5 px-5 shadow-primary">
                  Get a Quote
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

};

export default ServiceCards;