'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined, general: undefined }));
  };

  return (
    <div className="relative z-10 w-full max-w-md">
      {/* Card */}
      <div className="bg-white rounded-3xl border border-border shadow-xl p-8 md:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/homepage" className="flex items-center gap-2.5">
            <AppLogo size={36} onClick={() => {}} />
            <span className="font-display font-semibold text-xl text-foreground">LandmineSoft</span>
          </Link>
        </div>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
              <Icon name="CheckCircleIcon" size={32} className="text-emerald-500" variant="solid" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Welcome Back!</h2>
            <p className="text-muted text-sm">You've successfully signed in. Redirecting to your dashboard...</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-semibold text-foreground">Sign In</h1>
              <p className="text-muted text-sm mt-2">Enter your credentials to access your account</p>
            </div>

            {errors.general && (
              <div className="mb-5 flex items-center gap-3 bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-700">
                <Icon name="ExclamationCircleIcon" size={18} className="text-rose-500 shrink-0" />
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Icon name="EnvelopeIcon" size={18} className="text-muted" />
                  </div>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="you@company.com"
                    autoComplete="email"
                    className={`input-field pl-10 ${errors.email ? 'error' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={13} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-foreground">Password</label>
                  <button
                    type="button"
                    className="text-xs text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Icon name="LockClosedIcon" size={18} className="text-muted" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange('password')}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className={`input-field pl-10 pr-11 ${errors.password ? 'error' : ''}`}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted hover:text-foreground transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={13} />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember me */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-4 h-4 rounded border-2 border-border peer-checked:bg-primary peer-checked:border-primary transition-all group-hover:border-primary/50" />
                  <Icon name="CheckIcon" size={10} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm text-muted">Remember me for 30 days</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center shadow-primary text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <Icon name="ArrowRightIcon" size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted font-medium">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* SSO */}
            <button
              type="button"
              className="btn-secondary w-full justify-center text-sm py-3"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="text-center text-sm text-muted mt-6">
              Don't have an account?{' '}
              <Link href="/contact" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                Contact Us
              </Link>
            </p>
          </>
        )}
      </div>

      {/* Back to home */}
      <div className="text-center mt-6">
        <Link href="/homepage" className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5">
          <Icon name="ArrowLeftIcon" size={14} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;