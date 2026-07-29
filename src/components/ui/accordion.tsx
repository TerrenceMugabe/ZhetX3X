import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';

export type PageId = 'home' | 'services' | 'portfolio' | 'process' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownLocked, setIsDropdownLocked] = useState(false);
  const scrollYRef = useRef(0);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem('zhetx-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('zhetx-theme', newDark ? 'dark' : 'light');
  }, [isDark]);

  // Show page with scroll reset and menu cleanup
  const showPage = useCallback((id: PageId) => {
    if (currentPage === id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Close all menus
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsDropdownLocked(false);

    // Change page
    setCurrentPage(id);

    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Toggle dropdown (hybrid hover + click)
  const toggleDropdown = useCallback(() => {
    setIsDropdownLocked(prev => {
      const newLocked = !prev;
      setIsDropdownOpen(newLocked);
      return newLocked;
    });
  }, []);

  // Open dropdown on hover (only if not locked)
  const openDropdownHover = useCallback(() => {
    if (!isDropdownLocked) {
      setIsDropdownOpen(true);
    }
  }, [isDropdownLocked]);

  // Close dropdown on hover out (only if not locked)
  const closeDropdownHover = useCallback(() => {
    if (!isDropdownLocked) {
      setIsDropdownOpen(false);
    }
  }, [isDropdownLocked]);

  // Close dropdown completely
  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
    setIsDropdownLocked(false);
  }, []);

  // Close on scroll (after 20px) and click outside
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - scrollYRef.current);

      // Close dropdown after scrolling 20px
      if (scrollDelta > 20) {
        closeDropdown();
      }

      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }

      scrollYRef.current = currentScrollY;
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#services-dropdown') && !target.closest('#mobile-menu') && !target.closest('.hamburger')) {
        closeDropdown();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeDropdown, isMobileMenuOpen, closeMobileMenu]);

  // Close mobile menu on overlay tap
  const handleOverlayClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        closeDropdown();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMobileMenu, closeDropdown]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--on-surface)] transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        isDark={isDark}
        isDropdownOpen={isDropdownOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        onShowPage={showPage}
        onToggleTheme={toggleTheme}
        onToggleDropdown={toggleDropdown}
        onOpenDropdownHover={openDropdownHover}
        onCloseDropdownHover={closeDropdownHover}
        onToggleMobileMenu={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        currentPage={currentPage}
        onShowPage={showPage}
        onClose={closeMobileMenu}
      />

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[480] backdrop-blur-sm"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main className="pt-[var(--nav-h)]">
        <div
          key={currentPage}
          className="page-enter page-enter-active"
        >
          {currentPage === 'home' && <HomePage onShowPage={showPage} />}
          {currentPage === 'services' && <ServicesPage onShowPage={showPage} />}
          {currentPage === 'portfolio' && <PortfolioPage onShowPage={showPage} />}
          {currentPage === 'process' && <ProcessPage onShowPage={showPage} />}
          {currentPage === 'contact' && <ContactPage onShowPage={showPage} />}
        </div>
      </main>
    </div>
  );
}

export default App;
