'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS: Stat[] = [
  { value: 150, suffix: '+', label: 'Projects Shipped', description: 'Across web, mobile, and API' },
  { value: 50, suffix: '+', label: 'Clients Worldwide', description: 'US, EU, and APAC markets' },
  { value: 8, suffix: ' yrs', label: 'In Business', description: 'Founded in San Francisco, 2016' },
  { value: 99, suffix: '%', label: 'On-Time Delivery', description: 'Across all engagements' },
];

const AboutStats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            STATS.forEach((stat, i) => {
              let start = 0;
              const duration = 1500;
              const step = stat.value / (duration / 16);
              const timer = setInterval(() => {
                start = Math.min(start + step, stat.value);
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = Math.floor(start);
                  return next;
                });
                if (start >= stat.value) clearInterval(timer);
              }, 16);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section className="section-py bg-gradient-hero" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Gap-border grid technique from Template 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="bg-white p-10 text-center hover:bg-primary/3 transition-colors">
              <p className="font-display text-5xl font-semibold text-primary">
                {counts[i]}{stat.suffix}
              </p>
              <p className="font-semibold text-foreground mt-2">{stat.label}</p>
              <p className="text-sm text-muted mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;