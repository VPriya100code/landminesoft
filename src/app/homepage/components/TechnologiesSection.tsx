'use client';

import React, { useEffect, useRef } from 'react';

interface Tech {
  name: string;
  category: string;
  color: string;
}

const TECHNOLOGIES: Tech[] = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'Python', category: 'Backend', color: '#3776AB' },
  { name: 'React Native', category: 'Mobile', color: '#61DAFB' },
  { name: 'Flutter', category: 'Mobile', color: '#02569B' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED' },
  { name: 'GraphQL', category: 'API', color: '#E10098' },
];

const TechnologiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.tech-item').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
              }, i * 60);
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
    <section className="section-py bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="tag tag-primary mb-4">Tech Stack</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Powered by{' '}
            <span className="font-display italic text-gradient">Modern Tools</span>
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            We use battle-tested, cutting-edge technologies to build future-proof software.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="tech-item group flex items-center gap-2.5 bg-white border border-border rounded-xl px-4 py-3 cursor-default transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1"
              style={{
                opacity: 0,
                transform: 'translateY(16px) scale(0.96)',
                transition: 'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
                style={{ background: tech.color }}
              />
              <span className="text-sm font-semibold text-foreground">{tech.name}</span>
              <span className="text-2xs text-muted bg-muted-bg px-2 py-0.5 rounded-md font-medium">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;