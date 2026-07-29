import { useRef, useEffect } from 'react';
import type { PageId } from '../App';
import {
  Rocket,
  Sun,
  Moon,
  ChevronDown,
  Store,
  Zap,
  TrendingUp,
  Headphones
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  isDark: boolean;
  isDropdownOpen: boolean;
  isMobileMenuOpen: boolean;
  onShowPage: (id: PageId) => void;
  onToggleTheme: () => void;
  onToggleDropdown: () => void;
  onOpenDropdownHover: () => void;
  onCloseDropdownHover: () => void;
  onToggleMobileMenu: () => void;
}

const serviceItems = [
  { icon: Store, label: 'Web & E-Commerce', page: 'services' as PageId },
  { icon: Zap, label: 'System Optimisation', page: 'services' as PageId },
  { icon: TrendingUp, label: 'Growth & Ads', page: 'services' as PageId },
  { icon: Headphones, label: 'Ongoing Support', page: 'services' as PageId },
];

const navLinks: { id: PageId; label: string }[] = [
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({
  currentPage,
  isDark,
  isDropdownOpen,
  isMobileMenuOpen,
  onShowPage,
  onToggleTheme,
  onToggleDropdown,
  onOpenDropdownHover,
  onCloseDropdownHover,
  onToggleMobileMenu,
}: NavbarProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation for dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDropdownOpen) {
        onToggleDropdown();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, onToggleDropdown]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-[500] h-[var(--nav-h)] glass gpu-accelerated"
    >
      <div className="nav-inner h-full flex items-center justify-between px-[var(--pad-x)] max-w-[var(--max-w)] mx-auto">
        {/* Logo */}
        <button
          onClick={() => onShowPage('home')}
          className="nav-logo flex items-center gap-0 font-extrabold text-2xl tracking-tight text-[var(--on-surface)] hover:opacity-80 transition-opacity"
          style={{ fontFamily: 'Inter, sans-serif' }}
          aria-label="Go to home"
        >
          Zhet<span className="text-[var(--primary)]">X</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            id="services-dropdown"
            className="relative"
            onMouseEnter={onOpenDropdownHover}
            onMouseLeave={onCloseDropdownHover}
          >
            <button
              onClick={onToggleDropdown}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-[var(--r-sm)] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                currentPage === 'services' || isDropdownOpen
                  ? 'text-[var(--primary)] bg-[var(--primary-light)]'
                  : 'text-[var(--muted)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-low)]'
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-250 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Panel - 360px wide */}
            <div
              className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[360px] bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-md)] shadow-[var(--shadow-lg)] p-2 transition-all duration-200 z-[600] ${
                isDropdownOpen
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
            >
              {/* Arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--surface)] border-l border-t border-[var(--border)] rotate-45" />

              <div className="relative z-10">
                {serviceItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onShowPage(item.page);
                      onToggleDropdown();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-[var(--r-sm)] text-sm font-semibold text-[var(--on-surface)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onShowPage(link.id)}
              className={`relative px-4 py-2.5 rounded-[var(--r-sm)] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                currentPage === link.id
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--muted)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-low)]'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--primary)] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="relative w-14 h-7 bg-[var(--surface-high)] border border-[var(--border)] rounded-full p-1 transition-colors duration-200"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <Moon className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div
              className={`w-5 h-5 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-full shadow-md transition-transform duration-300 ${
                isDark ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => onShowPage('contact')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white text-xs font-bold uppercase tracking-wider rounded-[var(--r-sm)] shadow-[0_2px_10px_var(--primary-glow)] hover:opacity-90 hover:shadow-[0_4px_20px_var(--primary-glow)] transition-all duration-200 active:scale-[0.97]"
          >
            <Rocket className="w-4 h-4" />
            Free System Audit
          </button>

          {/* Hamburger */}
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 bg-[var(--surface-low)] border border-[var(--border)] rounded-[var(--r-sm)] hover:bg-[var(--surface-high)] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-5 h-0.5 bg-[var(--on-surface)] rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--on-surface)] rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--on-surface)] rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
