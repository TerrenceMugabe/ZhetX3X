import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';

export type PageId = 'home' | 'portfolio' | 'process';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={setCurrentPage} />}
        {currentPage === 'process' && <ProcessPage onNavigate={setCurrentPage} />}
      </main>
    </div>
  );
}
