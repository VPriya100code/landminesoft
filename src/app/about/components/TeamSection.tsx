'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  linkedin?: string;
  twitter?: string;
}

const TEAM: TeamMember[] = [
{
  name: 'Daniel Hartley',
  role: 'CEO & Co-Founder',
  bio: '12 years in enterprise software. Former VP Engineering at a Series B SaaS. Obsessed with developer experience.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  imageAlt: 'Daniel Hartley, CEO, professional headshot with neutral grey background and dark suit',
  linkedin: '#',
  twitter: '#'
},
{
  name: 'Sophia Chen',
  role: 'CTO & Co-Founder',
  bio: 'Ex-Google SWE. Architected distributed systems serving 500M+ requests/day. Loves Rust and long bike rides.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_193180e7a-1763297576058.png",
  imageAlt: 'Sophia Chen, CTO, professional headshot with soft blue background and professional attire',
  linkedin: '#'
},
{
  name: 'Marcus Okafor',
  role: 'Head of Design',
  bio: 'Former design lead at Figma. Believes great design is invisible. Has shipped 60+ design systems.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_112193a91-1763294779964.png",
  imageAlt: 'Marcus Okafor, Head of Design, casual professional photo with white background',
  linkedin: '#',
  twitter: '#'
},
{
  name: 'Priya Sharma',
  role: 'Head of Engineering',
  bio: 'Full-stack engineer turned engineering manager. Runs our agile delivery process and obsesses over code quality.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1213172e6-1763300659261.png",
  imageAlt: 'Priya Sharma, Head of Engineering, professional headshot with warm office background',
  linkedin: '#'
},
{
  name: 'James Kowalski',
  role: 'Lead Backend Engineer',
  bio: 'PostgreSQL wizard and cloud infrastructure specialist. If it runs on AWS, James built it.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc2c6b13-1763296937529.png",
  imageAlt: 'James Kowalski, Lead Backend Engineer, smiling headshot with casual professional attire',
  linkedin: '#'
},
{
  name: 'Aisha Williams',
  role: 'Senior Mobile Engineer',
  bio: '6 years in React Native. Has shipped 20+ apps to production with combined 5M+ downloads.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
  imageAlt: 'Aisha Williams, Senior Mobile Engineer, professional headshot with light background',
  twitter: '#'
}];


const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.team-card').forEach((el, i) => {
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

  return (
    <section className="section-py bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="tag tag-primary mb-4">The Team</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            The People Behind{' '}
            <span className="font-display italic text-gradient">the Code</span>
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            40+ engineers, designers, and strategists who care about what they build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) =>
          <div
            key={member.name}
            className="team-card reveal group bg-white rounded-2xl border border-border overflow-hidden card-hover">
            
              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social links on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {member.linkedin &&
                <a href={member.linkedin} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Icon name="LinkIcon" size={16} />
                    </a>
                }
                  {member.twitter &&
                <a href={member.twitter} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors" aria-label={`${member.name} Twitter`}>
                      <Icon name="AtSymbolIcon" size={16} />
                    </a>
                }
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{member.role}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamSection;