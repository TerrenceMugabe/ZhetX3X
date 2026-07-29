import type { PageId } from '../App';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import {
  Route,
  Search,
  Wrench,
  TrendingUp,
  Rocket,
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Clock,
  Shield,
  Users
} from 'lucide-react';

interface ProcessPageProps {
  onShowPage: (id: PageId) => void;
}

const steps = [
  {
    num: '01',
    title: 'Find the Problems',
    description: 'We check your website, online store, or business processes. Every slow point, every leak, every "oops" gets found. Think of it like a system audit — but for your business.',
    badge: { icon: Search, label: 'Deep System Audit' },
    details: [
      'Performance analysis',
      'Conversion funnel review',
      'Security assessment',
      'Competitor benchmarking'
    ]
  },
  {
    num: '02',
    title: 'Fix and Improve',
    description: 'We clean up the messy parts, make your workflows smooth, and set up systems that actually work. Your website loads fast, your business runs better, and you stop losing money to mistakes.',
    badge: { icon: Wrench, label: 'Clean & Optimise' },
    details: [
      'Code optimisation',
      'Workflow automation',
      'Security hardening',
      'Mobile responsiveness'
    ]
  },
  {
    num: '03',
    title: 'Grow Your Business',
    description: 'Once everything is solid, we help you scale. For online stores: more visitors, better content, and ads that sell. For other businesses: improved processes that turn effort into results.',
    badge: { icon: TrendingUp, label: 'Scale & Grow' },
    details: [
      'SEO & content strategy',
      'Paid advertising setup',
      'Analytics & reporting',
      'Continuous optimisation'
    ]
  }
];

export function ProcessPage({ onShowPage }: ProcessPageProps) {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { containerRef: stepsRef, isVisible: stepsVisible } = useStaggerReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useReveal();

  return (
    <div id="page-process">
      <section className="section">
        <div className="container-main">
          <div
            ref={headerRef}
            className={`reveal ${headerVisible ? 'visible' : ''} section-header`}
          >
            <div className="chip-tech">
              <Route className="w-3.5 h-3.5" />
              Our Process
            </div>
            <h2 className="display display-lg">
              How Does It Work? <span className="text-[var(--primary)]">Simple and Smart.</span>
            </h2>
            <p className="section-desc">
              Three clear steps from broken to booming — no jargon, no drama.
            </p>
          </div>

          {/* Steps Grid */}
          <div
            ref={stepsRef}
            className={`stagger-children grid md:grid-cols-3 gap-6 ${stepsVisible ? 'visible' : ''}`}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-lg)] p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 hover:border-[var(--primary-mid)] transition-all duration-300"
              >
                {/* Step Number */}
                <div className="text-5xl font-black text-[var(--primary-light)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {step.num}
                </div>

                <h3 className="font-bold text-lg text-[var(--on-surface)] mb-3">
                  {step.title}
                </h3>

                <p className="body-md text-[var(--muted)] mb-5">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6">
                  {step.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface-low)] border border-[var(--border)] rounded-full">
                  <step.badge.icon className="w-4 h-4 text-[var(--primary)]" />
                  <span className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider">
                    {step.badge.label}
                  </span>
                </div>

                {/* Connector Arrow (hidden on mobile, visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-[var(--surface)] border border-[var(--border)] rounded-full flex items-center justify-center shadow-[var(--shadow-sm)]">
                      <ArrowRight className="w-3 h-3 text-[var(--primary)]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div
            ref={ctaRef}
            className={`reveal ${ctaVisible ? 'visible' : ''} mt-16`}
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--surface-low)] to-[var(--surface)] border border-[var(--border)] rounded-[var(--r-xl)] p-10 lg:p-16 text-center">
              {/* Decorative glows */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--primary-mid)] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[var(--primary-mid)] blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="chip-tech mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  Start Today
                </div>

                <h2 className="display display-lg mb-5">
                  Ready to Start <span className="text-[var(--primary)]">Your Journey?</span>
                </h2>

                <p className="body-lg text-[var(--muted)] max-w-lg mx-auto mb-10">
                  Book your free system audit and we'll get started within 48 hours.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => onShowPage('contact')}
                    className="btn-tech btn-primary-tech lg:px-10 lg:py-4"
                  >
                    <Rocket className="w-4 h-4" />
                    Get My Free System Audit
                  </button>
                  <button
                    onClick={() => onShowPage('portfolio')}
                    className="btn-tech btn-ghost-tech"
                  >
                    See Our Work
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '48hr', label: 'Response Time' },
              { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
              { icon: BarChart3, value: '+140%', label: 'Avg Conversion' },
              { icon: Users, value: '50k+', label: 'Users Served' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[var(--surface-low)] border border-[var(--border)] rounded-[var(--r-lg)]"
              >
                <stat.icon className="w-6 h-6 text-[var(--primary)] mx-auto mb-3" />
                <div className="text-2xl font-black text-[var(--on-surface)] mb-1">{stat.value}</div>
                <div className="label-sm text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-16 px-[var(--pad-x)]">
        <div className="max-w-[var(--max-w)] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="text-2xl font-black text-white mb-2">
                Zhet<span className="text-[var(--primary)]">X</span>
              </div>
              <div className="label-sm text-[var(--primary)] mb-4">
                Systems That Work. Revenue That Grows.
              </div>
              <p className="body-sm text-[var(--footer-text)] max-w-xs">
                Helping South African SMBs fix, optimise, and grow their digital 
                infrastructure — without the stress.
              </p>
            </div>

            <div>
              <div className="label-sm text-white/30 mb-4">Navigate</div>
              <div className="space-y-2">
                {['portfolio', 'services', 'process', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => onShowPage(page as PageId)}
                    className="block body-sm text-[var(--footer-text)] hover:text-[var(--primary)] transition-colors capitalize"
                  >
                    {page === 'process' ? 'Our Process' : page}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="label-sm text-white/30 mb-4">Contact</div>
              <div className="space-y-2">
                <a href="mailto:hello@zhetx.co.za" className="block body-sm text-[var(--footer-text)] hover:text-[var(--primary)] transition-colors">
                  hello@zhetx.co.za
                </a>
                <a href="tel:+27655811001" className="block body-sm text-[var(--footer-text)] hover:text-[var(--primary)] transition-colors">
                  +27 65 581 1001
                </a>
              </div>
            </div>

            <div>
              <div className="label-sm text-white/30 mb-4">Legal</div>
              <div className="space-y-2">
                <a href="#" className="block body-sm text-[var(--footer-text)] hover:text-[var(--primary)] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block body-sm text-[var(--footer-text)] hover:text-[var(--primary)] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-white/25">© 2025 ZhetX. All rights reserved.</p>
            <p className="text-xs text-white/25">Systems That Work. Revenue That Grows.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
