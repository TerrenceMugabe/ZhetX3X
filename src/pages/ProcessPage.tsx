import React from 'react';
import type { PageId } from '../App';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Process</h1>
      <p className="text-zinc-400 text-lg max-w-2xl">
        Architecting robust, scalable, and resilient systems tailored to complex technical challenges.
      </p>
    </div>
  );
}
