import type { PageId } from '../App';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import {
  Store,
  Zap,
  TrendingUp,
  Headphones,
  CheckCircle,
  ArrowRight,
  Settings,
  LineChart
} from 'lucide-react';

interface ServicesPageProps {
  onShowPage: (id: PageId) => void;
}

const services = [
  {
    icon: Store,
    title: 'E-Commerce & Online Stores',
    description: 'Fast, beautiful online stores that turn browsers into buyers. We handle everything from product pages to checkout optimisation.',
    features: ['Shopify & WooCommerce', 'Headless Commerce Migrations', 'Conversion Rate Optimisation'],
    cta: 'Get Started'
  },
  {
    icon: Zap,
    title: 'Performance & System Fixes',
    description: 'Slow websites and broken workflows cost you money every day. We find every bottleneck and eliminate it fast.',
    features: ['Core Web Vitals Optimisation', 'Workflow Automation', 'Bug Fixes & Error Recovery'],
    cta: 'Get Started'
  },
  {
    icon: TrendingUp,
    title: 'Growth & Paid Advertising',
    description: 'Once your systems are solid, we pour fuel on the fire. Ads, SEO, and content that bring the right customers to your door.',
    features: ['Google & Meta Ads', 'SEO & Content Strategy', 'Analytics & Reporting'],
    cta: 'Get Started'
  },
  {
    icon: Headphones,
    title: 'Ongoing Maintenance & Support',
    description: 'We stay in your corner. Monthly retainer plans that keep your systems updated, secure, and growing.',
    features: ['Monthly Retainer Plans', 'Security & Updates', 'Priority Response'],
    cta: 'Get Started'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '4,999',
    period: '/once',
    description: 'Perfect for businesses getting started online',
    features: [
      'Professional Website (5 pages)',
      'Mobile-Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Free Support'
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Growth',
    price: '12,999',
    period: '/mo',
    description: 'For businesses ready to scale and convert',
    features: [
      'Everything in Starter',
      'E-Commerce Integration',
      'Google & Meta Ads Management',
      'Conversion Rate Optimisation',
      'Monthly Performance Reports',
      'Priority Support (48hr SLA)'
    ],
    cta: 'Get Started',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-scale digital infrastructure management',
    features: [
      'Everything in Growth',
      'Custom Integrations & Automation',
      'Dedicated Account Manager',
      '24hr Emergency Response',
      'Quarterly Business Reviews',
      'Bespoke Strategy & Roadmap'
    ],
    cta: 'Talk to Us',
    featured: false
  }
];

export function ServicesPage({ onShowPage }: ServicesPageProps) {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { containerRef: servicesRef, isVisible: servicesVisible } = useStaggerReveal();
  const { ref: pricingHeaderRef, isVisible: pricingHeaderVisible } = useReveal();
  const { containerRef: pricingRef, isVisible: pricingVisible } = useStaggerReveal();

  return (
    <div id="page-services">
      {/* Services Section */}
      <section className="section">
        <div className="container-main">
          <div
            ref={headerRef}
            className={`reveal ${headerVisible ? 'visible' : ''} section-header`}
          >
            <div className="chip-tech">
              <Settings className="w-3.5 h-3.5" />
              What We Offer
            </div>
            <h2 className="display display-lg">
              Services Built for <span className="text-[var(--primary)]">Real Results</span>
            </h2>
            <p className="section-desc">
              Every service is designed to remove friction, generate revenue, 
              and give you back your time.
            </p>
          </div>

          <div
            ref={servicesRef}
            className={`stagger-children grid md:grid-cols-2 gap-6 ${servicesVisible ? 'visible' : ''}`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-lg)] p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 hover:border-[var(--primary-mid)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-[var(--r-sm)] bg-[var(--primary-light)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>

                <h3 className="font-bold text-lg text-[var(--on-surface)] mb-3">
                  {service.title}
                </h3>

                <p className="body-md text-[var(--muted)] mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                      <CheckCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onShowPage('contact')}
                  className="btn-tech btn-primary-tech"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-[var(--surface)] border-y border-[var(--border)] relative overflow-hidden">
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-main relative">
          <div
            ref={pricingHeaderRef}
            className={`reveal ${pricingHeaderVisible ? 'visible' : ''} section-header`}
          >
            <div className="chip-tech">
              <LineChart className="w-3.5 h-3.5" />
              Transparent Pricing
            </div>
            <h2 className="display display-lg">
              Simple, <span className="text-[var(--primary)]">Honest Plans</span>
            </h2>
            <p className="section-desc">
              No hidden fees. No jargon. Pick the plan that fits your business stage.
            </p>
          </div>

          <div
            ref={pricingRef}
            className={`stagger-children grid md:grid-cols-3 gap-6 ${pricingVisible ? 'visible' : ''}`}
          >
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-[var(--surface)] border rounded-[var(--r-xl)] p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300 ${
                  plan.featured
                    ? 'border-[var(--primary)] shadow-[0_8px_32px_var(--primary-glow)]'
                    : 'border-[var(--border)]'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-[var(--primary)] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="label-sm text-[var(--muted)] mb-3">{plan.name}</div>

                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price !== 'Custom' && (
                    <span className="text-xl font-bold text-[var(--on-surface)]">R</span>
                  )}
                  <span className="display text-4xl font-black text-[var(--on-surface)]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[var(--muted)]">{plan.period}</span>
                  )}
                </div>

                <p className="body-sm text-[var(--muted)] mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                      <CheckCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onShowPage('contact')}
                  className={`w-full btn-tech ${
                    plan.featured ? 'btn-primary-tech' : 'btn-ghost-tech'
                  }`}
                >
                  {plan.cta}
                </button>
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
