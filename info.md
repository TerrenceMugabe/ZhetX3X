import { useState } from 'react';
import type { PageId } from '../App';
import { useReveal } from '../hooks/useReveal';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  Loader2,
  Linkedin,
  Twitter
} from 'lucide-react';

interface ContactPageProps {
  onShowPage: (id: PageId) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  businessType?: string;
  message?: string;
}

const businessTypes = [
  { value: '', label: 'Select your business type' },
  { value: 'ecommerce', label: 'Online Store / E-Commerce' },
  { value: 'service', label: 'Service Business' },
  { value: 'restaurant', label: 'Restaurant / Hospitality' },
  { value: 'saas', label: 'Tech / SaaS' },
  { value: 'other', label: 'Other' },
];

const nextSteps = [
  'We review your business situation',
  'You get a free system audit report within 48hrs',
  'We discuss clear, jargon-free solutions',
];

export function ContactPage({ onShowPage }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: formRef, isVisible: formVisible } = useReveal();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      newErrors.message = 'Please describe your problem (at least 20 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div id="page-contact">
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
            ref={headerRef}
            className={`reveal ${headerVisible ? 'visible' : ''} section-header`}
          >
            <div className="chip-tech">
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </div>
            <h2 className="display display-lg">
              Let's Fix Your Business <span className="text-[var(--primary)]">Together</span>
            </h2>
            <p className="section-desc">
              Send us a message or reach out directly. We respond within 48 hours — 
              with real answers, not auto-replies.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct Contact */}
              <div className="reveal visible bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-xl)] p-6 shadow-[var(--shadow-sm)]">
                <h3 className="font-bold text-lg text-[var(--on-surface)] mb-5">
                  Direct Contact
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@zhetx.co.za"
                    className="flex items-center gap-4 p-3 -mx-3 rounded-[var(--r-sm)] hover:bg-[var(--surface-low)] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="label-sm text-[var(--muted)]">Email Us</div>
                      <div className="font-semibold text-[var(--on-surface)] group-hover:text-[var(--primary)] transition-colors">
                        hello@zhetx.co.za
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+27655811001"
                    className="flex items-center gap-4 p-3 -mx-3 rounded-[var(--r-sm)] hover:bg-[var(--surface-low)] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-[var(--r-sm)] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="label-sm text-[var(--muted)]">Call Us</div>
                      <div className="font-semibold text-[var(--on-surface)] group-hover:text-[var(--primary)] transition-colors">
                        +27 65 581 1001
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 -mx-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                      <div>
                        <div className="label-sm text-[var(--muted)]">Response Time</div>
                        <div className="font-semibold text-[var(--on-surface)]">
                          Within 48 hours, guaranteed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="reveal visible bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-xl)] p-6 shadow-[var(--shadow-sm)]">
                <div className="label-sm text-[var(--muted)] mb-5">What Happens Next</div>
                <ol className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      <span className="body-sm text-[var(--muted)] pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Social Links */}
              <div className="reveal visible bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-xl)] p-6 shadow-[var(--shadow-sm)]">
                <div className="label-sm text-[var(--muted)] mb-4">Follow Us</div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-[var(--r-sm)] bg-[var(--surface-low)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-[var(--r-sm)] bg-[var(--surface-low)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              ref={formRef}
              className={`reveal ${formVisible ? 'visible' : ''} lg:col-span-3`}
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--r-xl)] p-6 lg:p-8 shadow-[var(--shadow-sm)]">
                <h3 className="font-bold text-lg text-[var(--on-surface)] mb-6">
                  Request Your Free System Audit
                </h3>

                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[var(--green)]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[var(--green)]" />
                    </div>
                    <h4 className="font-bold text-xl text-[var(--on-surface)] mb-2">
                      Message Sent!
                    </h4>
                    <p className="body-md text-[var(--muted)]">
                      We'll get back to you within 48 hours with your free system audit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label-text text-[var(--on-surface)] mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={`w-full px-4 py-3 bg-[var(--surface-low)] border rounded-[var(--r-sm)] text-[var(--on-surface)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-mid)] transition-all ${
                            errors.name ? 'border-red-500' : 'border-[var(--border)]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="label-text text-[var(--on-surface)] mb-2 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={`w-full px-4 py-3 bg-[var(--surface-low)] border rounded-[var(--r-sm)] text-[var(--on-surface)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-mid)] transition-all ${
                            errors.email ? 'border-red-500' : 'border-[var(--border)]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="label-text text-[var(--on-surface)] mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 65 000 0000"
                        className="w-full px-4 py-3 bg-[var(--surface-low)] border border-[var(--border)] rounded-[var(--r-sm)] text-[var(--on-surface)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-mid)] transition-all"
                      />
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className="label-text text-[var(--on-surface)] mb-2 block">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[var(--surface-low)] border rounded-[var(--r-sm)] text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-mid)] transition-all appearance-none cursor-pointer ${
                          errors.businessType ? 'border-red-500' : 'border-[var(--border)]'
                        } ${!formData.businessType ? 'text-[var(--muted)]' : ''}`}
                      >
                        {businessTypes.map((type) => (
                          <option
                            key={type.value}
                            value={type.value}
                            disabled={!type.value}
                            className="bg-[var(--surface)] text-[var(--on-surface)]"
                          >
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.businessType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="label-text text-[var(--on-surface)] mb-2 block">
                        What's broken? Tell us your biggest problem. *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. My website is slow, I'm losing cart abandonments, my booking system is broken..."
                        rows={4}
                        className={`w-full px-4 py-3 bg-[var(--surface-low)] border rounded-[var(--r-sm)] text-[var(--on-surface)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-mid)] transition-all resize-y min-h-[110px] ${
                          errors.message ? 'border-red-500' : 'border-[var(--border)]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-tech btn-primary-tech disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send My Request
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-[var(--muted)]">
                      No spam. No hidden fees. Just clear solutions. — <strong>ZhetX</strong>
                    </p>
                  </form>
                )}
              </div>
            </div>
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
