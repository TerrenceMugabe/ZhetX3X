import React from 'react';
import type { PageId } from '../App';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          ZHET<span className="text-zinc-500">X</span>
        </button>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
