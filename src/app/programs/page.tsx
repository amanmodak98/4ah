'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  MessageSquare, Brain, Users, Target, Briefcase, Code,
  Award, Zap, ArrowRight, CheckCircle, ChevronRight, Sparkles
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function ProgramsPage() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const methodRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prog-hero > *', { opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power3.out' });

      gsap.from('.prog-card', {
        opacity: 0, y: 60, scale: 0.93, stagger: 0.1, duration: 0.7, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 78%' },
      });

      gsap.from('.method-step', {
        opacity: 0, x: -40, stagger: 0.12, duration: 0.6,
        scrollTrigger: { trigger: methodRef.current, start: 'top 80%' },
      });
    });
    return () => ctx.revert();
  }, []);

  const programs = [
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      tag: 'All Years',
      tagColor: 'badge-orange',
      gradient: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
      light: 'from-orange/5 to-yellow/5',
      border: '#fed7aa',
      highlights: ['Verbal & Non-Verbal', 'Public Speaking', 'Vocabulary Enhancement', 'Corporate Correspondence'],
      href: '/programs#communication',
    },
    {
      icon: Brain,
      title: 'Quantitative Aptitude',
      tag: '60 hrs',
      tagColor: 'badge-purple',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
      light: 'from-purple/5 to-purple-light/5',
      border: '#ddd6fe',
      highlights: ['Number Systems', 'Percentages & Profit', 'Time-Speed-Distance', 'Data Interpretation'],
      href: '/programs#aptitude',
    },
    {
      icon: Target,
      title: 'Logical Reasoning',
      tag: '60 hrs combined',
      tagColor: 'badge-teal',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #34D399 100%)',
      light: 'from-teal/5 to-emerald-400/5',
      border: '#99f6e4',
      highlights: ['Series & Patterns', 'Puzzles & Arrangements', 'Syllogism', 'Critical Thinking'],
      href: '/programs#reasoning',
    },
    {
      icon: Users,
      title: 'Soft Skills & Personality',
      tag: 'Year-wise',
      tagColor: 'badge-orange',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F97316 100%)',
      light: 'from-pink-400/5 to-orange/5',
      border: '#fbcfe8',
      highlights: ['Leadership & Teamwork', 'Emotional Intelligence', 'Time Management', 'Professional Grooming'],
      href: '/programs#soft-skills',
    },
    {
      icon: Code,
      title: 'Technical Training',
      tag: 'Domain-specific',
      tagColor: 'badge-teal',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
      light: 'from-blue-500/5 to-cyan-400/5',
      border: '#bae6fd',
      highlights: ['Programming Fundamentals', 'Industry Tools', 'Domain Knowledge', 'Hands-on Projects'],
      href: '/programs#technical',
    },
    {
      icon: Award,
      title: 'Placement Readiness',
      tag: 'Final Year',
      tagColor: 'badge-purple',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      light: 'from-purple/5 to-pink-400/5',
      border: '#ddd6fe',
      highlights: ['Resume & LinkedIn', 'Group Discussions', 'Mock Interviews', 'Personal Branding'],
      href: '/programs#placement',
    },
    {
      icon: Briefcase,
      title: 'Corporate Training',
      tag: 'Enterprise',
      tagColor: 'badge-teal',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #0284C7 100%)',
      light: 'from-teal/5 to-blue-500/5',
      border: '#99f6e4',
      highlights: ['Employee Upskilling', 'Leadership Programs', 'Change Management', 'Performance Enhancement'],
      href: '/corporate-solutions',
    },
    {
      icon: Sparkles,
      title: 'Flagship 90-Hour Program',
      tag: '⭐ Most Popular',
      tagColor: 'badge-orange',
      gradient: 'linear-gradient(135deg, #F97316 0%, #7C3AED 100%)',
      light: 'from-orange/5 to-purple/5',
      border: '#fed7aa',
      highlights: ['60 hrs Aptitude', '30 hrs Soft Skills', 'Complete Mock Process', 'Individual Feedback'],
      href: '/flagship-program',
      featured: true,
    },
  ];

  const methodology = [
    { step: '01', title: 'Assess', desc: 'Pre-training diagnostic to understand baseline skills and gaps', color: '#F97316' },
    { step: '02', title: 'Learn', desc: 'Structured modules with concept clarity, examples and guided practice', color: '#7C3AED' },
    { step: '03', title: 'Practise', desc: 'Worksheets, simulations, role-plays and group activities', color: '#0D9488' },
    { step: '04', title: 'Feedback', desc: 'Personalised feedback reports and improvement guidance per learner', color: '#EC4899' },
    { step: '05', title: 'Improve', desc: 'Progressive tests, assignments and ongoing mentorship support', color: '#F97316' },
  ];

  return (
    <div className="pt-20">
      {/* ═══════ HERO ═══════ */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%)' }}
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.5), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl prog-hero">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/20 backdrop-blur-sm border border-white/30">
              <Target className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Training Programs</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              Programs That
              <br />
              <span className="text-yellow-300">Create Careers</span>
            </h1>
            <p className="text-xl text-purple-50 leading-relaxed max-w-2xl">
              From aptitude to soft skills, from fresher to professional — every competency covered with proven, hands-on methodology.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ PROGRAMS GRID ═══════ */}
      <section className="section bg-white" ref={cardsRef}>
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-headline text-gray-900 mb-3">
              All <span className="gradient-text">Training Programs</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Industry-aligned curricula designed with employer inputs — practical, progressive, and measurable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className={`prog-card group relative overflow-hidden rounded-3xl border-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${p.light} ${p.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                style={{ borderColor: p.border }}
              >
                {/* Top gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                     style={{ background: p.gradient }} />

                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                       style={{ background: p.gradient }}>
                    <p.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`badge ${p.tagColor}`}>{p.tag}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors relative z-10">
                  {p.title}
                </h3>

                <ul className="space-y-2 flex-1 relative z-10">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                           style={{ background: p.gradient.includes('#F97316') ? '#F97316' : p.gradient.includes('#7C3AED') ? '#7C3AED' : '#0D9488' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 mt-5 font-bold text-sm text-gray-500 group-hover:text-gray-900 transition-colors relative z-10">
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Custom Program Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ METHODOLOGY ═══════ */}
      <section ref={methodRef} className="section" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-orange/15 border border-orange/25">
              <Zap className="w-4 h-4 text-orange" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange">Our Approach</span>
            </div>
            <h2 className="text-headline text-white mb-3">
              The 5-Step <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every module follows this proven cycle — because learning is only valuable when it's applied.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch">
            {methodology.map((m, idx) => (
              <div key={m.step} className="method-step flex-1 relative">
                {/* Connector arrow */}
                {idx < methodology.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 bg-white/10 rounded-full items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className="h-full rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/25">
                  <div className="text-5xl font-display font-black mb-3" style={{ color: m.color, opacity: 0.3 }}>
                    {m.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2" style={{ color: m.color }}>
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-14 p-10 rounded-3xl border border-white/10 text-center"
               style={{ background: 'rgba(249,115,22,0.08)' }}>
            <p className="text-xl text-white font-semibold">
              "The learner is <span className="text-orange">not a passive participant</span> — every module creates opportunities to apply, receive feedback and improve."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="rounded-3xl p-12 md:p-16 text-center" style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
              Ready to Build Industry-Ready Graduates?
            </h2>
            <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
              Let's design a customised training program tailored to your institution's calendar and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-lg bg-white text-orange hover:bg-gray-50 shadow-2xl font-bold px-10">
                Request Proposal
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/flagship-program" className="btn btn-ghost btn-lg px-10">
                Flagship 90-Hour Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
