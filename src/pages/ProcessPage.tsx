@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Industry Tech - Light Mode */
    --bg: #f8f9fa;
    --surface: #ffffff;
    --surface-low: #f1f3f5;
    --surface-high: #e9ecef;
    --on-bg: #0c0e14;
    --on-surface: #0c0e14;
    --muted: #5e6578;
    --muted-light: #8b93a8;
    --border: rgba(0,0,0,0.07);
    --border-strong: rgba(0,0,0,0.13);
    --nav-bg: rgba(248,249,250,0.85);
    --footer-bg: #080a10;
    --footer-text: rgba(255,255,255,0.5);

    /* Primary Brand Color - Strict #ff3366 */
    --primary: #ff3366;
    --primary-dark: #e62958;
    --primary-light: rgba(255,51,102,0.12);
    --primary-mid: rgba(255,51,102,0.18);
    --primary-glow: rgba(255,51,102,0.35);

    /* System Status Colors */
    --green: #22c55e;
    --green-glow: rgba(34,197,94,0.35);
    --amber: #f59e0b;
    --amber-glow: rgba(245,158,11,0.35);
    --blue: #3b82f6;
    --blue-glow: rgba(59,130,246,0.35);
    --cyan: #06b6d4;
    --cyan-glow: rgba(6,182,212,0.35);

    /* Shadows */
    --shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
    --shadow-md: 0 6px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
    --shadow-lg: 0 16px 48px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06);
    --shadow-xl: 0 32px 80px rgba(0,0,0,0.12);
    --shadow-glow: 0 0 40px var(--primary-glow);

    /* Radius */
    --r-xs: 6px;
    --r-sm: 10px;
    --r-md: 14px;
    --r-lg: 20px;
    --r-xl: 28px;
    --r-pill: 999px;

    /* Timing */
    --ease: cubic-bezier(0.4,0,0.2,1);
    --ease-out: cubic-bezier(0,0,0.2,1);
    --ease-spring: cubic-bezier(0.34,1.56,0.64,1);
    --t: 0.22s;
    --t-md: 0.35s;
    --t-slow: 0.5s;

    /* Layout */
    --nav-h: 72px;
    --max-w: 1400px;
    --pad-x: 20px;

    /* shadcn overrides */
    --background: 210 20% 98%;
    --foreground: 220 20% 5%;
    --card: 0 0% 100%;
    --card-foreground: 220 20% 5%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 5%;
    --primary-hsl: 345 100% 60%;
    --primary-foreground: 0 0% 100%;
    --secondary: 210 15% 95%;
    --secondary-foreground: 220 20% 5%;
    --muted-hsl: 220 10% 45%;
    --muted-foreground: 220 10% 45%;
    --accent: 210 15% 95%;
    --accent-foreground: 220 20% 5%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border-hsl: 220 10% 90%;
    --input: 220 10% 90%;
    --ring: 345 100% 60%;
    --radius: 0.625rem;
  }

  .dark {
    /* Industry Tech - Dark Mode (Deep Slate) */
    --bg: #0b0e14;
    --surface: #161b22;
    --surface-low: #1c2128;
    --surface-high: #21262d;
    --on-bg: #eaedf5;
    --on-surface: #eaedf5;
    --muted: #7c85a0;
    --muted-light: #555e78;
    --border: rgba(255,255,255,0.07);
    --border-strong: rgba(255,255,255,0.13);
    --nav-bg: rgba(11,14,20,0.9);
    --footer-bg: #040408;
    --primary-light: rgba(255,51,102,0.15);
    --primary-mid: rgba(255,51,102,0.22);

    --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
    --shadow-md: 0 6px 24px rgba(0,0,0,0.5);
    --shadow-lg: 0 16px 48px rgba(0,0,0,0.6);
    --shadow-xl: 0 32px 80px rgba(0,0,0,0.7);

    --background: 220 25% 5%;
    --foreground: 220 20% 95%;
    --card: 220 20% 10%;
    --card-foreground: 220 20% 95%;
    --popover: 220 20% 10%;
    --popover-foreground: 220 20% 95%;
    --secondary: 220 15% 15%;
    --secondary-foreground: 220 20% 95%;
    --muted-hsl: 220 10% 55%;
    --muted-foreground: 220 10% 55%;
    --accent: 220 15% 15%;
    --accent-foreground: 220 20% 95%;
    --border-hsl: 220 15% 20%;
    --input: 220 15% 20%;
  }
}

@layer base {
  * {
    @apply border-border;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg);
    color: var(--on-surface);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background var(--t-md) var(--ease), color var(--t-md) var(--ease);
  }

  /* Minimum 44px touch targets */
  button, a, input, select, textarea, [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }

  /* Hardware-accelerated animations */
  .gpu-accelerated {
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
  }

  /* Selection */
  ::selection {
    background: var(--primary);
    color: #fff;
  }

  /* Scrollbar */
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
}

@layer components {
  /* Typography */
  .display {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.05;
    color: var(--on-surface);
  }

  .display-xl { font-size: clamp(2.6rem, 6.5vw, 5.5rem); }
  .display-lg { font-size: clamp(2rem, 4.5vw, 3.5rem); }
  .display-md { font-size: clamp(1.5rem, 3vw, 2.4rem); }
  .display-sm { font-size: clamp(1.2rem, 2.5vw, 1.8rem); }

  .body-lg { font-size: 1.05rem; line-height: 1.75; }
  .body-md { font-size: 0.92rem; line-height: 1.7; }
  .body-sm { font-size: 0.82rem; line-height: 1.65; }

  .label-text {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .label-sm {
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .mono {
    font-family: 'JetBrains Mono', monospace;
  }

  /* Container */
  .container-main {
    max-width: var(--max-w);
    margin: 0 auto;
    padding-left: var(--pad-x);
    padding-right: var(--pad-x);
  }

  @media (min-width: 640px) {
    :root { --pad-x: 32px; }
  }
  @media (min-width: 1024px) {
    :root { --pad-x: 56px; }
  }

  /* Section */
  .section {
    padding: 88px 0;
  }
  @media (min-width: 1024px) {
    .section { padding: 120px 0; }
  }

  /* Glassmorphism */
  .glass {
    background: var(--nav-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--border);
  }

  /* Cards */
  .card-tech {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 32px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--t), transform var(--t), border-color var(--t);
  }

  .card-tech:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
    border-color: var(--primary-mid);
  }

  /* Buttons */
  .btn-tech {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-radius: var(--r-sm);
    cursor: pointer;
    border: none;
    transition: opacity var(--t), transform var(--t), box-shadow var(--t), background var(--t), color var(--t), border-color var(--t);
    min-height: 44px;
    padding: 12px 28px;
  }

  .btn-tech:active {
    transform: scale(0.97);
  }

  .btn-primary-tech {
    background: var(--primary);
    color: #fff;
    font-size: 0.78rem;
    box-shadow: 0 3px 14px var(--primary-glow);
  }

  .btn-primary-tech:hover {
    opacity: 0.9;
    box-shadow: 0 5px 22px var(--primary-glow);
  }

  .btn-ghost-tech {
    background: transparent;
    color: var(--on-surface);
    font-size: 0.85rem;
    border: 1.5px solid var(--border-strong);
    border-radius: var(--r-md);
    padding: 14px 32px;
  }

  .btn-ghost-tech:hover {
    background: var(--surface-low);
    border-color: var(--primary);
    color: var(--primary);
  }

  /* Chips */
  .chip-tech {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--primary-light);
    color: var(--primary);
    padding: 6px 14px;
    border-radius: var(--r-pill);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  /* Status indicators */
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  .status-online { background: var(--green); box-shadow: 0 0 8px var(--green-glow); }
  .status-warning { background: var(--amber); box-shadow: 0 0 8px var(--amber-glow); }
  .status-active { background: var(--primary); box-shadow: 0 0 8px var(--primary-glow); }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* Reveal animations */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-delay-1 { transition-delay: 0.08s; }
  .reveal-delay-2 { transition-delay: 0.16s; }
  .reveal-delay-3 { transition-delay: 0.24s; }
  .reveal-delay-4 { transition-delay: 0.32s; }
  .reveal-delay-5 { transition-delay: 0.4s; }

  /* Stagger children */
  .stagger-children > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out);
  }

  .stagger-children.visible > *:nth-child(1) { transition-delay: 0.05s; }
  .stagger-children.visible > *:nth-child(2) { transition-delay: 0.1s; }
  .stagger-children.visible > *:nth-child(3) { transition-delay: 0.15s; }
  .stagger-children.visible > *:nth-child(4) { transition-delay: 0.2s; }
  .stagger-children.visible > *:nth-child(5) { transition-delay: 0.25s; }
  .stagger-children.visible > *:nth-child(6) { transition-delay: 0.3s; }
  .stagger-children.visible > *:nth-child(7) { transition-delay: 0.35s; }
  .stagger-children.visible > *:nth-child(8) { transition-delay: 0.4s; }
  .stagger-children.visible > *:nth-child(9) { transition-delay: 0.45s; }
  .stagger-children.visible > *:nth-child(10) { transition-delay: 0.5s; }

  .stagger-children.visible > * {
    opacity: 1;
    transform: translateY(0);
  }

  /* Page transitions */
  .page-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out);
  }

  /* Grid helpers */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media (min-width: 640px) {
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media (min-width: 768px) {
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
  }

  .grid-4 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media (min-width: 640px) {
    .grid-4 { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 1024px) {
    .grid-4 { grid-template-columns: repeat(4, 1fr); }
  }

  /* Float animation */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .animate-float {
    animation: float 5s ease-in-out infinite;
  }

  /* Glow effects */
  .glow-primary {
    box-shadow: 0 0 40px var(--primary-glow);
  }

  .glow-green {
    box-shadow: 0 0 20px var(--green-glow);
  }

  /* Progress bars */
  .progress-bar {
    height: 4px;
    background: var(--surface-high);
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--primary-dark));
    border-radius: 2px;
    transition: width 1s var(--ease-out);
  }

  /* Code/tech styling */
  .code-block {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    background: var(--surface-low);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    padding: 12px 16px;
    color: var(--muted);
  }

  /* Section header */
  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-header .chip-tech {
    margin-bottom: 20px;
  }

  .section-header .display-lg {
    margin-bottom: 16px;
  }

  .section-desc {
    font-size: 1rem;
    color: var(--muted);
    line-height: 1.75;
    max-width: 540px;
    margin: 0 auto;
  }
}

@layer utilities {
  .text-muted { color: var(--muted); }
  .text-primary { color: var(--primary); }
  .bg-surface { background: var(--surface); }
  .bg-surface-low { background: var(--surface-low); }
  .border-tech { border-color: var(--border); }
}
