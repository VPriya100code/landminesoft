'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  skills: string[];
}

const JOBS: Job[] = [
  {
    id: 'swe-fe-1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote (US)',
    experience: '4+ years',
    description: 'Build pixel-perfect, performant React/Next.js applications for our enterprise clients. You\'ll own features end-to-end and mentor junior engineers.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'swe-be-1',
    title: 'Backend Engineer (Node.js)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Global)',
    experience: '3+ years',
    description: 'Design and build scalable REST and GraphQL APIs. Work with PostgreSQL, Redis, and AWS to power products used by millions.',
    skills: ['Node.js', 'PostgreSQL', 'GraphQL', 'AWS'],
  },
  {
    id: 'mob-1',
    title: 'React Native Engineer',
    department: 'Mobile',
    type: 'Full-time',
    location: 'Remote (US/EU)',
    experience: '3+ years',
    description: 'Develop cross-platform mobile apps with React Native. You\'ll own the mobile stack for two client products from architecture to App Store submission.',
    skills: ['React Native', 'TypeScript', 'Expo', 'iOS/Android'],
  },
  {
    id: 'des-1',
    title: 'Product Designer (UI/UX)',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote (Global)',
    experience: '3+ years',
    description: 'Create intuitive, beautiful interfaces for complex SaaS products. From user research and wireframes to polished Figma prototypes and design systems.',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
  },
  {
    id: 'devops-1',
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote (US)',
    experience: '4+ years',
    description: 'Build and maintain CI/CD pipelines, Kubernetes clusters, and monitoring infrastructure. Enable our engineering teams to ship faster and safer.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'pm-1',
    title: 'Technical Project Manager',
    department: 'Delivery',
    type: 'Full-time',
    location: 'Remote (US)',
    experience: '5+ years',
    description: 'Own project delivery for 3–4 concurrent client engagements. You\'ll run agile ceremonies, manage timelines, and serve as the primary client point of contact.',
    skills: ['Agile/Scrum', 'Jira', 'Client Management', 'Technical Background'],
  },
];

const DEPARTMENTS = ['All', 'Engineering', 'Mobile', 'Design', 'Infrastructure', 'Delivery'];

const JobListings: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'All' ? JOBS : JOBS.filter((j) => j.department === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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

  return (
    <section id="jobs" className="section-py bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="reveal">
            <span className="tag tag-primary mb-4">Open Positions</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Find Your{' '}
              <span className="font-display italic text-gradient">Role</span>
            </h2>
          </div>
          <p className="reveal text-muted text-sm">{JOBS.length} open positions across {DEPARTMENTS.length - 1} departments</p>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === dept
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-background border border-border text-muted hover:text-foreground hover:border-primary/30'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job cards */}
        <div className="space-y-3">
          {filtered.map((job) => {
            const isExpanded = expandedJob === job.id;
            return (
              <div
                key={job.id}
                className="reveal bg-background rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                {/* Job header */}
                <button
                  onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-wrap items-center gap-4 flex-1">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <Icon name="BriefcaseIcon" size={13} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <Icon name="MapPinIcon" size={13} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <Icon name="ClockIcon" size={13} />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <Icon name="StarIcon" size={13} />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <Icon name="ChevronDownIcon" size={18} className="text-primary" />
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-border pt-5">
                    <p className="text-muted text-sm leading-relaxed mb-5">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill) => (
                        <span key={skill} className="tag tag-primary text-xs">{skill}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="btn-primary text-sm py-2.5 px-6 shadow-primary"
                      >
                        Apply for This Role
                        <Icon name="ArrowRightIcon" size={16} />
                      </Link>
                      <button className="btn-secondary text-sm py-2.5 px-6">
                        Save Job
                        <Icon name="BookmarkIcon" size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted">
            <Icon name="MagnifyingGlassIcon" size={40} className="mx-auto mb-4 opacity-40" />
            <p className="font-semibold text-foreground">No roles in {activeFilter} right now</p>
            <p className="text-sm mt-1">Check back soon or send us your CV anyway.</p>
          </div>
        )}

        {/* Open application CTA */}
        <div className="mt-12 reveal bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-foreground text-xl">Don't see your role?</h3>
            <p className="text-muted text-sm mt-1">Send us your CV and tell us what you're great at. We hire for talent, not just open reqs.</p>
          </div>
          <Link href="/contact" className="btn-primary shadow-primary shrink-0">
            Send Open Application
            <Icon name="PaperAirplaneIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings;