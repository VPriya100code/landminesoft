import React from 'react';

const ContactHero: React.FC = () => (
  <section className="relative pt-32 pb-16 bg-gradient-hero overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <span className="tag tag-primary mb-6">Get in Touch</span>
      <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight mt-4">
        Let's Build Something{' '}
        <span className="font-display italic text-gradient">Together</span>
      </h1>
      <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
        Tell us about your project. We read every message and reply within 24 hours.
      </p>
    </div>
  </section>
);

export default ContactHero;