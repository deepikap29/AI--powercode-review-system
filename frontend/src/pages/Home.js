import React from 'react';
import Hero from '../components/Hero';
import AnalyzerCard from '../components/AnalyzerCard';
import Onboarding from '../components/Onboarding';

export default function Home() {
  return (
    <div>
      <Onboarding />
      <Hero />
      <AnalyzerCard />
    </div>
  );
}
