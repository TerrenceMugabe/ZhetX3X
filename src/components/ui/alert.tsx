import type { PageId } from '../App';
import {
  Store,
  Zap,
  TrendingUp,
  Headphones,
  Image,
  Route,
  Mail,
  X
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  currentPage: PageId;
  onShowPage: (id: PageId) => void;
  onClose: () => void;
}

const serviceItems = [
  { icon: Store, label: 'Web & E-Commerce', page: 'services' as PageId },
  { icon: Zap, label: 'System Optimisation', page: 'services' as PageId },
  { icon: TrendingUp, label: 'Growth & Ads', page: 'services' as PageId },
  { icon: Headphones, label: 'Ongoing Support', page: 'services' as PageId },
];

const navItems = [
  { icon: Image, label: 'Portfolio', page: 'portfolio' as PageId },
  { icon: Route, label: 'Our Process', page: 'process' as PageId },
  { icon: Mail, label: 'Contact', page: 'contact' as PageId },
];

export function MobileMenu({ isOpen, currentPage, onShowPage, onClose }: MobileMenuProps) {
  const handlePageClick = (page: PageId) => {
    onShowPage(page);
    onClose();
  };

  return (
    <div
      id="mobile-menu"
      className={`fixed top-[var(--nav-h)] left-0 right-0 bg-[var(--surface)] border-b border-[var(--border)] shadow-[var(--shadow-md)] z-[490] overflow-hidden transition-all duration-300 md:hidden ${
        isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="p-5 pb-8">
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-[var(--r-sm)] bg-[var(--surface-low)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--on-surface)] hover:bg-[var(--surface-high)] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <div className="label-sm text-[var(--muted)] mb-3 px-1">Services</div>
          <div className="space-y-1">
            {serviceItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(item.page)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-[var(--r-sm)] text-sm font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'text-[var(--primary)] bg-[var(--primary-light)]'
                    : 'text-[var(--on-surface)] hover:bg-[var(--surface-low)]'
                }`}
              >
                <item.icon className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div className="mb-6">
          <div className="label-sm text-[var(--muted)] mb-3 px-1">Navigate</div>
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(item.page)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-[var(--r-sm)] text-sm font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'text-[var(--primary)] bg-[var(--primary-light)]'
                    : 'text-[var(--on-surface)] hover:bg-[var(--surface-low)]'
                }`}
              >
                <item.icon className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handlePageClick('contact')}
          className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-[var(--primary)] text-white text-sm font-bold uppercase tracking-wider rounded-[var(--r-sm)] shadow-[0_2px_10px_var(--primary-glow)] hover:opacity-90 transition-opacity"
        >
          Get Free System Audit
        </button>
      </div>
    </div>
  );
}
