import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ServicesCTA: React.FC = () => (
  <section className="section-py bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
        Not Sure Which Service You Need?
      </h2>
      <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
        Book a free 30-minute scoping call. We'll listen, ask the right questions, and tell you exactly what we'd recommend.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/contact" className="btn-primary shadow-primary text-base py-3.5 px-8">
          Book a Free Call
          <Icon name="CalendarDaysIcon" size={18} />
        </Link>
        <Link href="/about" className="btn-secondary text-base py-3.5 px-8">
          Learn About Us
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesCTA;