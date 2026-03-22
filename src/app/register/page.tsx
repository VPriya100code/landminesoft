import React from 'react';
import RegisterForm from './components/RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 top-[-150px] left-[-150px] animate-pulse-glow" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/8 bottom-[-100px] right-[-100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <RegisterForm />
    </main>
  );
}
