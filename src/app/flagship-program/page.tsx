'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Clock, Brain, MessageSquare, Target, CheckCircle,
  ArrowRight, Zap, Award, Users, BarChart3, ChevronDown
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState } from 'react';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function FlagshipProgramPage() {
  const [activeTab, setActiveTab] = useState<'aptitude' | 'softskills'>('aptitude');
  const heroRef = useRef(null);
  const curriculumRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.flag-hero > *', { opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power3.out' });
      gsap.from('.highlight-card', {
        opacity: 0, y: 50, scale: 0.92, stagger: 0.1, duration: 0.7, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.highlight-grid', start: 'top 78%' },
      });
      gsap.from('.week-row', {
        opacity: 0, x: -30, stagger: 0.07, duration: 0.5,
        scrollTrigger: { trigger: curriculumRef.current, start: 'top 80%' },
      });
    });
    return () => ctx.revert();
  }, []);

  const aptitude = [
    { week: 1, topic: 'Pre-Assessment, Number System, Divisibility, Simplification & Approximation', hours: 6 },
    { week: 2, topic: 'Percentages, Profit & Loss, Discount, Simple & Compound Interest', hours: 6 },
    { week: 3, topic: 'Ratio & Proportion, Partnership, Average, Mixtures & Alligation', hours: 6 },
    { week: 4, topic: 'Time & Work, Pipes & Cisterns, Time Speed Distance, Boats & Streams', hours: 6 },
    { week: 5, topic: 'Permutation & Combination, Probability, Data Sufficiency', hours: 6 },
    { week: 6, topic: 'Logical Reasoning I — Series, Coding-Decoding, Blood Relations, Direction Sense', hours: 6 },
    { week: 7, topic: 'Logical Reasoning II — Seating Arrangement, Puzzles, Syllogism, Statement & Assumption', hours: 6 },
    { week: 8, topic: 'Data Interpretation — Tables, Graphs, Pie Charts, Caselets & Data Analysis', hours: 6 },
    { week: 9, topic: 'Mock Aptitude Test: Quantitative + Logical + DI — followed by Test Discussion', hours: 6 },
    { week: 10, topic: 'Advanced Mixed Practice, Shortcut Techniques, Speed Improvement, Post-Assessment', hours: 6 },
  ];

  const softSkills = [
    { week: 1, topic: 'Ice Breaker, Self Discovery, Growth Mindset & Goal Setting', hours: 3 },
    { week: 2, topic: 'Communication Skills Fundamentals — Verbal & Non-Verbal Communication', hours: 3 },
    { week: 3, topic: 'Active Listening, Barriers to Communication, Vocabulary Building, Synonyms & Antonyms', hours: 3 },
    { week: 4, topic: 'Presentation Skills, Public Speaking Activities, Analogies & Word Relationships', hours: 3 },
    { week: 5, topic: 'Team Building, Collaboration, Problem Solving & Critical Thinking, Reading Comprehension', hours: 3 },
    { week: 6, topic: 'Emotional Intelligence, Stress & Time Management, Sentence Correction & Error Identification', hours: 3 },
    { week: 7, topic: 'Resume Building, ATS Tips, LinkedIn Profile Basics, Sentence Completion & Para Jumbles', hours: 3 },
    { week: 8, topic: 'Group Discussion Techniques, Evaluation Criteria, Extempore Practice, RC Practice', hours: 3 },
    { week: 9, topic: 'HR Interview Prep, Personal Branding, STAR Technique, Vocabulary & Interview Communication', hours: 3 },
    { week: 10, topic: 'Mock Interviews, Individual Feedback, Career Action Plan, Course Summary & Valedictory', hours: 3 },
  ];

  const outcomes = [
    { icon: Brain, value: '85%', label: 'Aptitude Improvement', sub: 'Average score increase' },
    { icon: MessageSquare, value: '95%', label: 'Communication Boost', sub: 'Self-reported confidence' },
    { icon: Target, value: '3x', label: 'Interview Success', sub: 'vs. untrained peers' },
    { icon: Award, value: '90hrs', label: 'Structured Learning', sub: 'Per student delivered' },
  ];

  const deliverables = [
    '90 structured training hours per student',
    'Pre & post-training assessment with reports',
    'Practice worksheets, test papers & reference material',
    'Complete mock GD & interview process',
    'Individual personalised feedback report per learner',
    'Noticeably improved confidence, communication & aptitude',
    'Students equipped to clear competitive selection processes',
  ];

  return (
    <div className="pt-20">
      {/* ═══════ HERO ═══════ */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F97316 0%, #DC2626 40%, #7C3AED 100%)' }}
      >
        <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full opacity-15 animate-float"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.7), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"
             style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-5xl flag-hero">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/20 backdrop-blur-sm border border-white/30">
              <Award className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Our Flagship Program</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              Final Year{' '}
              <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-5 py-2">
                Employability
              </span>
              <br />
              Skills Program
            </h1>

            {/* 90-Hour breakdown pills */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                <Brain className="w-6 h-6 text-white" />
                <div>
                  <div className="text-xl font-display font-black text-white">60 hrs</div>
                  <div className="text-xs text-white/80">Aptitude Training</div>
                </div>
              </div>
              <div className="w-px bg-white/30 hidden md:block" />
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                <MessageSquare className="w-6 h-6 text-white" />
                <div>
                  <div className="text-xl font-display font-black text-white">30 hrs</div>
                  <div className="text-xs text-white/80">Soft Skills & Corporate Readiness</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full font-black text-white bg-white/25 backdrop-blur-sm border-2 border-white/50">
                <Clock className="w-6 h-6" />
                <div className="text-xl font-display">= 90 Hours Total</div>
              </div>
            </div>

            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              A comprehensive, structured, and interactive curriculum designed to prepare final year students for campus recruitment through experiential learning, continuous practice, and personalised feedback.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ OUTCOMES ═══════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Measurable Results</div>
            <h2 className="text-headline text-gray-900 mb-3">
              What Students <span className="gradient-text">Actually Achieve</span>
            </h2>
          </div>

          <div className="highlight-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, idx) => (
              <div
                key={o.label}
                className="highlight-card card p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2"
                style={{ borderTop: `4px solid ${['#F97316', '#7C3AED', '#0D9488', '#F97316'][idx]}` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5`}
                     style={{ background: `${['rgba(249,115,22,0.10)', 'rgba(124,58,237,0.10)', 'rgba(13,148,136,0.10)', 'rgba(249,115,22,0.10)'][idx]}` }}>
                  <o.icon className="w-7 h-7" style={{ color: ['#F97316', '#7C3AED', '#0D9488', '#F97316'][idx] }} />
                </div>
                <div className="text-5xl font-display font-black mb-2" style={{ color: ['#F97316', '#7C3AED', '#0D9488', '#F97316'][idx] }}>
                  {o.value}
                </div>
                <div className="font-display font-bold text-gray-900 mb-1">{o.label}</div>
                <div className="text-sm text-gray-500">{o.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CURRICULUM TABS ═══════ */}
      <section ref={curriculumRef} className="section" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-headline text-gray-900 mb-3">
              Week-by-Week <span className="gradient-text">Curriculum</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every week is carefully designed to build on the last — progressive, purposeful, and practical.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="flex bg-white rounded-xl p-1.5 shadow-md border border-gray-200">
              <button
                onClick={() => setActiveTab('aptitude')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-display font-bold text-sm transition-all ${
                  activeTab === 'aptitude'
                    ? 'bg-gradient-to-r from-orange to-orange-dark text-white shadow-orange'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Brain className="w-5 h-5" />
                Aptitude Training (60 hrs)
              </button>
              <button
                onClick={() => setActiveTab('softskills')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-display font-bold text-sm transition-all ${
                  activeTab === 'softskills'
                    ? 'bg-gradient-to-r from-purple to-purple-light text-white shadow-purple'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                Soft Skills (30 hrs)
              </button>
            </div>
          </div>

          {/* Curriculum table */}
          <div className="card bg-white overflow-hidden">
            <div className="p-4 flex items-center gap-3"
                 style={{ background: activeTab === 'aptitude'
                   ? 'linear-gradient(135deg, #F97316, #EA580C)'
                   : 'linear-gradient(135deg, #7C3AED, #8B5CF6)' }}>
              {activeTab === 'aptitude' ? <Brain className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
              <span className="font-display font-bold text-white text-lg">
                {activeTab === 'aptitude' ? 'Quantitative & Logical Aptitude Curriculum' : 'Soft Skills & Corporate Readiness Curriculum'}
              </span>
              <span className="ml-auto bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-bold">
                {activeTab === 'aptitude' ? '60 hours | 10 weeks' : '30 hours | 10 weeks'}
              </span>
            </div>

            <div className="divide-y divide-gray-100">
              {(activeTab === 'aptitude' ? aptitude : softSkills).map((item) => (
                <div
                  key={item.week}
                  className="week-row flex items-center gap-5 px-6 py-5 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-black text-white text-lg"
                    style={{ background: activeTab === 'aptitude'
                      ? 'linear-gradient(135deg, #F97316, #EA580C)'
                      : 'linear-gradient(135deg, #7C3AED, #8B5CF6)' }}
                  >
                    {item.week}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Week {item.week}</div>
                    <div className="font-semibold text-gray-800">{item.topic}</div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 font-bold flex-shrink-0">
                    <Clock className="w-4 h-4" />
                    <span>{item.hours} hrs</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-orange/5 to-purple/5 border border-orange/20 text-center">
            <p className="text-gray-700 font-semibold text-lg italic">
              "The schedule is indicative and can be customised to align with institutional requirements and class progress."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERABLES ═══════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <div className="section-label mb-4">What You Get</div>
              <h2 className="text-headline text-gray-900 mb-6">
                Deliverables &{' '}
                <span className="gradient-text">Expected Outcomes</span>
              </h2>
              <ul className="space-y-4">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                         style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)' }}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '2.5rem' }}>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
                     style={{ background: 'radial-gradient(circle, #F97316, transparent)' }} />
                <Zap className="w-12 h-12 text-orange mb-6" />
                <h3 className="text-3xl font-display font-black text-white mb-4">
                  Why This Works
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  The learner is <span className="text-orange font-bold">not a passive participant</span> — every module creates opportunities to apply, receive feedback and improve.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Practice-First', value: '70% of time' },
                    { label: 'Feedback Sessions', value: 'Every module' },
                    { label: 'Mock Process', value: 'Full simulation' },
                  ].map(s => (
                    <div key={s.label} className="flex items-center justify-between p-3 rounded-xl"
                         style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <span className="text-gray-300 font-semibold">{s.label}</span>
                      <span className="text-orange font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section text-white" style={{ background: 'linear-gradient(135deg, #F97316 0%, #DC2626 50%, #7C3AED 100%)' }}>
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-5xl font-display font-black mb-6 leading-tight">
              Ready to Make Your Students<br />
              <span className="underline decoration-4 decoration-yellow">Campus Placement Ready?</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Partner with us to deliver this comprehensive 90-hour program and transform your final year students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-lg bg-white text-orange hover:bg-gray-50 shadow-2xl font-bold px-10">
                Request Training Proposal
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/college-solutions" className="btn btn-ghost btn-lg px-10">
                View College Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
