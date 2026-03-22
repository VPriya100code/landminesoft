'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SERVICES = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Backend & API Development',
  'Not sure yet',
];

const CONTACT_DETAILS = [
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'hello@landminesoft.com',
    href: 'mailto:hello@landminesoft.com',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+1 (415) 555-0182',
    href: 'tel:+14155550182',
  },
  {
    icon: 'MapPinIcon',
    label: 'Office',
    value: '340 Pine St, Suite 800\nSan Francisco, CA 94104',
    href: '#',
  },
  {
    icon: 'ClockIcon',
    label: 'Hours',
    value: 'Mon–Fri, 9am–6pm PST',
    href: '#',
  },
];

const ContactContent: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="section-py bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Form */}
        <div className="lg:col-span-7 reveal-left">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
                <Icon name="CheckCircleIcon" size={40} className="text-emerald-500" variant="solid" />
              </div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Message Sent!</h2>
              <p className="text-muted max-w-sm">
                Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }); }}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Tell Us About Your Project</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Daniel Hartley"
                    className={`input-field ${errors.name ? 'error' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="daniel@company.com"
                    className={`input-field ${errors.email ? 'error' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Company (optional)</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={handleChange('company')}
                    placeholder="Acme Inc."
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={handleChange('service')}
                    className="input-field bg-white"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange('message')}
                  rows={6}
                  placeholder="Describe your project, timeline, and any specific requirements..."
                  className={`input-field resize-none ${errors.message ? 'error' : ''}`}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={14} />
                    {errors.message}
                  </p>
                )}
                <p className="text-xs text-muted mt-1.5">{form.message.length} characters</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full sm:w-auto justify-center shadow-primary text-base py-3.5 px-10 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Icon name="PaperAirplaneIcon" size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact details */}
        <div className="lg:col-span-5 reveal-right space-y-6">
          <div className="bg-background rounded-2xl border border-border p-8">
            <h3 className="font-semibold text-foreground text-xl mb-6">Contact Information</h3>
            <div className="space-y-5">
              {CONTACT_DETAILS.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors mt-0.5">
                    <Icon name={detail.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-1">{detail.label}</p>
                    <p className="text-sm font-medium text-foreground whitespace-pre-line group-hover:text-primary transition-colors">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative h-52 rounded-2xl overflow-hidden border border-border bg-muted-bg">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
              <Icon name="MapPinIcon" size={32} className="text-primary" variant="solid" />
              <p className="font-semiibold text-sm text-foreground">340 Pine St, San Francisco</p>
              <p className="text-xs text-muted">View on Google Maps</p>
            </div>
          </div>

          {/* Response time badge */}
          <div className="glass rounded-2xl border border-border p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">We're Online</p>
              <p className="text-xs text-muted">Typical response time: under 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;