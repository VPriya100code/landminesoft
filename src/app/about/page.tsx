'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import TeamSection from './components/TeamSection';
import AboutStats from './components/AboutStats';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <VisionMission />
      <AboutStats />
      <CoreValues />
      <TeamSection />
      <Footer />
    </main>
  );
}