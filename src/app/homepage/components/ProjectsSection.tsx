'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';


interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  span?: string;
}

const PROJECTS: Project[] = [
{
  title: 'FinTrack Pro',
  category: 'FinTech',
  description: 'Real-time portfolio analytics dashboard processing $2B+ in daily transactions for a Chicago-based investment firm.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e977dd3b-1772156938060.png",
  imageAlt: 'Financial analytics dashboard with charts and portfolio data on dark background',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  span: 'lg:col-span-2 lg:row-span-2'
},
{
  title: 'MediConnect',
  category: 'HealthTech',
  description: 'Telemedicine platform connecting 80,000+ patients with licensed physicians across 12 states.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1557a7efb-1768341023387.png",
  imageAlt: 'Doctor conducting video consultation on tablet with patient records visible',
  tags: ['React Native', 'AWS']
},
{
  title: 'ShopFlow',
  category: 'E-Commerce',
  description: 'Headless commerce engine powering 3 mid-market retail brands with 99.99% uptime.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b827d5b-1772246363615.png",
  imageAlt: 'E-commerce product page with clean white layout and shopping cart interface',
  tags: ['Next.js', 'GraphQL']
}];


const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.project-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <span className="tag tag-primary mb-4">Case Studies</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Work That{' '}
              <span className="font-display italic text-gradient">Speaks</span>
            </h2>
          </div>
          <p className="reveal text-muted max-w-sm text-sm leading-relaxed">
            A selection of products we've shipped for clients across finance, health, and retail.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {PROJECTS.map((project) =>
          <div
            key={project.title}
            className={`project-card reveal group relative overflow-hidden rounded-2xl border border-border bg-background ${project.span ?? ''}`}
            style={{ minHeight: project.span ? '400px' : '280px' }}>
            
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-end h-full p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag" style={{ background: 'rgba(56,189,248,0.15)', color: '#7DD3FC', border: '1px solid rgba(56,189,248,0.25)', fontSize: '10px' }}>
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) =>
                <span key={tag} className="text-2xs font-semibold text-white/70 bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      {tag}
                    </span>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProjectsSection;