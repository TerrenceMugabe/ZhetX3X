/* App-specific styles */

/* Page transition animations */
.page-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1), 
              transform 0.4s cubic-bezier(0, 0, 0.2, 1);
}

/* GPU acceleration for smooth animations */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-high);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

/* Selection color */
::selection {
  background: var(--primary);
  color: #fff;
}

/* Prevent text selection on interactive elements */
button,
[role="button"] {
  user-select: none;
}

/* Animation utilities */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px var(--primary-glow);
  }
  50% {
    box-shadow: 0 0 40px var(--primary-glow);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Responsive typography adjustments */
@media (max-width: 640px) {
  .display-xl {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  
  .display-lg {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }
}

/* Card hover effects */
.card-hover {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Button press effect */
.btn-press:active {
  transform: scale(0.97);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass morphism variants */
.glass-strong {
  background: rgba(var(--surface), 0.8);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
}

/* Loading spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 1s linear infinite;
}

/* Stagger animation delays */
.stagger-1 { animation-delay: 0.05s; }
.stagger-2 { animation-delay: 0.1s; }
.stagger-3 { animation-delay: 0.15s; }
.stagger-4 { animation-delay: 0.2s; }
.stagger-5 { animation-delay: 0.25s; }
.stagger-6 { animation-delay: 0.3s; }

/* Mobile menu animation */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu-enter {
  animation: slideDown 0.3s ease-out forwards;
}

/* Dropdown animation */
@keyframes dropdownIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.dropdown-enter {
  animation: dropdownIn 0.2s ease-out forwards;
}

/* Progress bar animation */
@keyframes progressFill {
  from {
    width: 0;
  }
}

.progress-animate {
  animation: progressFill 1s ease-out forwards;
}

/* Image hover zoom */
.img-zoom {
  overflow: hidden;
}

.img-zoom img {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.img-zoom:hover img {
  transform: scale(1.05);
}

/* Border glow on hover */
.border-glow:hover {
  border-color: var(--primary-mid);
  box-shadow: 0 0 20px var(--primary-glow);
}

/* Status indicators */
.status-pulse {
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Chart bar animation */
@keyframes barGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

.chart-bar {
  transform-origin: bottom;
  animation: barGrow 0.6s ease-out forwards;
}

/* Noise overlay */
.noise-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}

/* Ensure proper touch targets on mobile */
@media (pointer: coarse) {
  button,
  a,
  input,
  select,
  textarea {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}
