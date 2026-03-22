'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './components/ServicesHero';
import ServiceCards from './components/ServiceCards';
import ProcessSection from './components/ProcessSection';
import ServicesCTA from './components/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServiceCards />
      <ProcessSection />
      <ServicesCTA />
      <Footer />
    </main>
  );
}