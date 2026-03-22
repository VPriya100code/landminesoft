'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const CultureSection: React.FC = () => {
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="reveal-left space-y-6">
            <span className="tag tag-primary">Our Culture</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              A Place Where<br />
              <span className="font-display italic text-gradient">Engineers Thrive</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              We believe the best software comes from teams that feel trusted, challenged, and supported. No micromanagement, no crunch culture — just meaningful work and room to grow.
            </p>
            <div className="space-y-4 pt-2">
              {[
              'Async-first, remote-friendly culture',
              '$3,000 annual learning & conference budget',
              'Quarterly offsites in cities worldwide',
              '20% time for open-source and side projects'].
              map((item) =>
              <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="reveal-right grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <AppImage
                  src="https://images.unsplash.com/photo-1632923946398-ca3c9837d75a"
                  alt="LandmineSoft team members collaborating at a standing desk in a modern coworking space"
                  fill={false}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-primary/8 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-primary">4.9</p>
                  <p className="text-sm text-muted mt-1">Glassdoor Rating</p>
                  <div className="flex gap-1 justify-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) =>
                    <span key={i} className="text-amber-400 text-sm">★</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1d18d7f13-1772098244809.png"
                  alt="Team members laughing and celebrating a product launch in a bright office environment"
                  fill={false}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ea53ed3e-1766837637029.png"
                  alt="Engineer presenting architecture diagram on whiteboard during team sprint planning session"
                  fill={false}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CultureSection;