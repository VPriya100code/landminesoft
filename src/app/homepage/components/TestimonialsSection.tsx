'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  imageAlt: string;
  thumbAlt: string;
}

const TESTIMONIALS: Testimonial[] = [
{
  id: 1,
  name: 'Marcus Webb',
  role: 'CTO',
  company: 'FinTrack',
  quote: 'LandmineSoft delivered a production-grade trading dashboard in 11 weeks. Their team felt like a true extension of ours — proactive, communicative, and technically excellent.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  imageAlt: 'Marcus Webb, CTO of FinTrack, professional headshot in office setting',
  thumbAlt: 'Small thumbnail of Marcus Webb'
},
{
  id: 2,
  name: 'Priya Nair',
  role: 'Product Manager',
  company: 'MediConnect',
  quote: 'From wireframes to App Store launch in 14 weeks. The React Native app handles 80,000 daily users without a single crash. Exceptional work.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b6b3a45-1763296171775.png",
  imageAlt: 'Priya Nair, Product Manager at MediConnect, smiling headshot with neutral background',
  thumbAlt: 'Small thumbnail of Priya Nair'
},
{
  id: 3,
  name: 'Jordan Cole',
  role: 'Founder',
  company: 'ShopFlow',
  quote: 'We needed a headless e-commerce engine that could handle Black Friday traffic. LandmineSoft built it with 99.99% uptime. Best engineering investment we\'ve made.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_121ef5054-1773069022805.png",
  imageAlt: 'Jordan Cole, Founder of ShopFlow, casual professional photo outdoors',
  thumbAlt: 'Small thumbnail of Jordan Cole'
},
{
  id: 4,
  name: 'Amara Osei',
  role: 'VP Engineering',
  company: 'LogiCore',
  quote: 'The API architecture they designed handles 50M requests/day with sub-100ms latency. The documentation is pristine. I\'d hire them again without hesitation.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b37c900e-1763300423322.png",
  imageAlt: 'Amara Osei, VP Engineering at LogiCore, professional headshot with blue background',
  thumbAlt: 'Small thumbnail of Amara Osei'
}];


const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const autoPlayRef = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % TESTIMONIALS.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, 'prev');
  }, [current, goTo]);

  useEffect(() => {
    autoPlayRef.current = setTimeout(next, 5000);
    return () => clearTimeout(autoPlayRef.current);
  }, [current, next]);

  const review = TESTIMONIALS[current];

  return (
    <section className="section-py bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="tag tag-primary mb-4">Client Stories</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            What Our{' '}
            <span className="font-display italic text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Slider — adapted from Template 1 GSAP pattern in pure React */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left: thumbnail nav + pagination */}
          <div className="md:col-span-3 flex md:flex-col gap-4 items-center md:items-start">
            <span className="text-sm text-muted font-mono">
              {String(current + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
            <div className="flex md:flex-col gap-2">
              {TESTIMONIALS.filter((_, i) => i !== current).slice(0, 3).map((t) =>
              <button
                key={t.id}
                onClick={() => goTo(TESTIMONIALS.indexOf(t), TESTIMONIALS.indexOf(t) > current ? 'next' : 'prev')}
                className="w-14 h-16 md:w-16 md:h-20 rounded-xl overflow-hidden opacity-50 hover:opacity-90 transition-opacity duration-300 shrink-0 border border-border"
                aria-label={`View ${t.name}'s testimonial`}>
                
                  <AppImage
                  src={t.image}
                  alt={t.thumbAlt}
                  width={64}
                  height={80}
                  className="w-full h-full object-cover" />
                
                </button>
              )}
            </div>
          </div>

          {/* Center: main image */}
          <div className="md:col-span-4 relative h-72 md:h-[440px] rounded-3xl overflow-hidden border border-border shadow-xl">
            <AppImage
              src={review.image}
              alt={review.imageAlt}
              fill
              className={`object-cover transition-all duration-500 ${
              isAnimating ?
              direction === 'next' ? 'opacity-0 scale-105' : 'opacity-0 scale-95' : 'opacity-100 scale-100'}`
              } />
            
          </div>

          {/* Right: quote + navigation */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8 md:pl-6">
            <div
              className={`transition-all duration-400 ${
              isAnimating ?
              direction === 'next' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`
              }>
              
              <p className="text-xs uppercase tracking-widest font-semibold text-muted mb-1">{review.company}</p>
              <h3 className="text-xl font-semibold text-foreground mb-1">{review.name}</h3>
              <p className="text-sm text-muted mb-6">{review.role}</p>
              <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground leading-snug italic">
                "{review.quote}"
              </blockquote>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) =>
              <Icon key={i} name="StarIcon" size={18} className="text-amber-400" variant="solid" />
              )}
            </div>

            {/* Nav buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-200"
                aria-label="Previous testimonial">
                
                <Icon name="ArrowLeftIcon" size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-200 shadow-primary"
                aria-label="Next testimonial">
                
                <Icon name="ArrowRightIcon" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;