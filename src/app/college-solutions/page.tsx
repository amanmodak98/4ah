'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  GraduationCap, BookOpen, TrendingUp, Award, Star,
  CheckCircle, ArrowRight, ChevronRight, Users, Target, Zap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function CollegeSolutionsPage() {
  const heroRef = useRef(null);
  const journeyRef = useRef(null);
  const proofRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cs-hero > *',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      );

      gsap.from('.year-card', {
        opacity: 0, y: 60, scale: 0.93, stagger: 0.15, duration: 0.8, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: journeyRef.current, start: 'top 75%' },
      });

      gsap.from('.proof-item', {
        opacity: 0, x: -30, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: proofRef.current, start: 'top 80%' },
      });
    });
    return () => ctx.revert();
  }, []);

  const years = [
    {
      year: 'First Year',
      icon: BookOpen,
      number: '01',
      focus: 'Foundation & Confidence',
      color: '#10B981',
      gradientFrom: '#10B981',
      gradientTo: '#34D399',
      bg: 'from-emerald-50 to-teal-50',
      border: '#99f6e4',
      skills: [
        'Self-awareness & confidence building',
        'Communication fundamentals',
        'Grooming & professional behaviour',
        'Learning mindset & positive attitude',
        'Teamwork & collaboration',
      ],
    },
    {
      year: 'Second Year',
      icon: Target,
      number: '02',
      focus: 'Professional Development',
      color: '#0D9488',
      gradientFrom: '#0D9488',
      gradientTo: '#0284C7',
      bg: 'from-teal-50 to-blue-50',
      border: '#bae6fd',
      skills: [
        'Professional communication',
        'Adaptability & change management',
        'Problem solving & critical thinking',
        'Presentation skills',
        'Time management & workplace ethics',
      ],
    },
    {
      year: 'Third Year',
      icon: TrendingUp,
      number: '03',
      focus: 'Leadership & Growth',
      color: '#7C3AED',
      gradientFrom: '#7C3AED',
      gradientTo: '#EC4899',
      bg: 'from-purple-50 to-pink-50',
      border: '#ddd6fe',
      skills: [
        'Leadership development',
        'Emotional intelligence',
        'Stress management',
        'Group discussions mastery',
        'Decision making & conflict resolution',
      ],
    },
    {
      year: 'Final Year',
      icon: Award,
      number: '04',
      focus: 'Placement Excellence',
      color: '#F97316',
      gradientFrom: '#F97316',
      gradientTo: '#FBBF24',
      bg: 'from-orange-50 to-yellow-50',
      border: '#fed7aa',
      skills: [
        'Advanced aptitude & reasoning',
        'Resume building & LinkedIn',
        'Interview mastery',
        'Mock interviews with feedback',
        'Holistic personality development',
      ],
      highlight: true,
    },
  ];

  return (
    <div className="pt-20">
      {/* ═══════ HERO ═══════ */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D9488 0%, #0284C7 60%, #0F172A 100%)' }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.6), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"
             style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl cs-hero">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/15 backdrop-blur-sm border border-white/25">
              <GraduationCap className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">For Colleges & Universities</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              Year-Wise{' '}
              <span className="inline-block px-4 py-1 rounded-2xl text-white" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
                Learning Journey
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Employability is a journey — not a last-minute effort. We partner with institutions to build student competence progressively, from first year to final placement.
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
              <div className="flex items-center -space-x-1">
                {['🟢', '🔵', '🟣', '🟠'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs"
                       style={{ background: ['#10B981', '#0284C7', '#7C3AED', '#F97316'][i] }}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-white">4-Year Structured Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE PROBLEM ═══════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl border-2 border-red-200 bg-red-50">
                <div className="text-3xl mb-4">😟</div>
                <h3 className="text-2xl font-display font-bold text-red-700 mb-4">
                  The Problem Across Campuses
                </h3>
                <ul className="space-y-3">
                  {[
                    'Students start placement prep only in final year',
                    'Too much to master in too little time',
                    'Confidence gaps show up in interviews',
                    'Low aptitude scores and poor communication',
                  ].map(p => (
                    <li key={p} className="flex items-start gap-3 text-red-700">
                      <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✗</span>
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl border-2 bg-gradient-to-br from-orange/5 to-teal/5" style={{ borderColor: '#fed7aa' }}>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Our Solution
                </h3>
                <ul className="space-y-3">
                  {[
                    'Year-wise structured programs from Year 1',
                    'Skills built progressively over 4 years',
                    'Students arrive at placements already prepared',
                    'Higher confidence, better scores, better outcomes',
                  ].map(s => (
                    <li key={s} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ YEAR-WISE JOURNEY ═══════ */}
      <section ref={journeyRef} className="section" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Year-Wise Journey</div>
            <h2 className="text-headline text-gray-900 mb-3">
              4 Years. 4 Levels.{' '}
              <span className="gradient-text">1 Career-Ready Graduate.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Progressive skill building so your students arrive at placements with years of preparation — not just weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {years.map((y) => (
              <div
                key={y.year}
                className={`year-card relative overflow-hidden rounded-3xl border-2 p-8 bg-gradient-to-br ${y.bg} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${y.highlight ? 'ring-4 ring-orange/40' : ''}`}
                style={{ borderColor: y.border }}
              >
                {/* Number badge */}
                <div className="absolute top-6 right-6 text-7xl font-display font-black opacity-10"
                     style={{ color: y.gradientFrom }}>
                  {y.number}
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                       style={{ background: `linear-gradient(135deg, ${y.gradientFrom}, ${y.gradientTo})` }}>
                    <y.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-black text-gray-900">{y.year}</div>
                    <div className="text-sm font-bold" style={{ color: y.gradientFrom }}>{y.focus}</div>
                  </div>
                  {y.highlight && (
                    <div className="ml-auto">
                      <span className="badge badge-orange">Flagship</span>
                    </div>
                  )}
                </div>

                {/* Skills list */}
                <ul className="space-y-3">
                  {y.skills.map(skill => (
                    <li key={skill} className="flex items-start gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                           style={{ background: `linear-gradient(135deg, ${y.gradientFrom}, ${y.gradientTo})` }}>
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRANSFORMATION ═══════ */}
      <section ref={proofRef} className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-headline text-gray-900 mb-3">
              What <span className="gradient-text">Actually Changes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="font-display font-black text-red-500 text-xl mb-5 flex items-center gap-2">
                <span className="text-2xl">🔴</span> Before Training
              </h3>
              <div className="space-y-3">
                {[
                  'Knowledge remains largely academic',
                  'Limited exposure to recruitment formats',
                  'Low confidence under pressure',
                  'Uneven aptitude & communication skills',
                ].map((item, idx) => (
                  <div key={idx} className="proof-item flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                    <span className="text-red-400 font-bold text-lg flex-shrink-0">✗</span>
                    <span className="text-red-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-black text-teal text-xl mb-5 flex items-center gap-2">
                <span className="text-2xl">🟢</span> After Training
              </h3>
              <div className="space-y-3">
                {[
                  'GD/Interview performance significantly improved',
                  'Stronger recruitment process awareness',
                  'Confident & assertive — ready to work',
                  'Better aptitude scores & clear communication',
                ].map((item, idx) => (
                  <div key={idx} className="proof-item flex items-center gap-3 p-4 rounded-xl bg-teal-50 border border-teal-100">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-teal-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section text-white" style={{ background: 'linear-gradient(135deg, #0D9488 0%, #0284C7 100%)' }}>
        <div className="container text-center">
          <h2 className="text-5xl font-display font-black mb-6">
            Build a <span className="underline decoration-4 decoration-teal-200">Long-Term</span> Partnership
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's design a year-wise employability roadmap tailored to your institution's calendar and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-lg bg-white text-teal hover:bg-gray-50 shadow-2xl font-bold px-10">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/flagship-program" className="btn btn-ghost btn-lg px-10">
              View Final Year Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
