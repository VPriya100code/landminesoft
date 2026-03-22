'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersHero from './components/CareersHero';
import CultureSection from './components/CultureSection';
import WhyJoinUs from './components/WhyJoinUs';
import JobListings from './components/JobListings';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CareersHero />
      <CultureSection />
      <WhyJoinUs />
      <JobListings />
      <Footer />
    </main>
  );
}