'use client';

import {
  MessageSquare,
  Users,
  Brain,
  Code,
  Target,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function ProgramsPage() {
  const heroRef = useFadeInUp();
  const programsRef = useStaggerAnimation(8);

  const programs = [
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      description: 'Verbal and non-verbal communication, active listening, vocabulary building, presentation skills, and public speaking.',
      features: [
        'Verbal & Non-Verbal Communication',
        'Public Speaking & Presentations',
        'Active Listening Techniques',
        'Vocabulary Enhancement',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      href: '/programs#communication',
    },
    {
      icon: Users,
      title: 'Soft Skills Development',
      description: 'Personality development, grooming, teamwork, leadership, adaptability, emotional intelligence, and workplace etiquette.',
      features: [
        'Personality & Grooming',
        'Leadership & Teamwork',
        'Emotional Intelligence',
        'Workplace Etiquette',
      ],
      gradient: 'from-purple-500 to-pink-500',
      href: '/programs#soft-skills',
    },
    {
      icon: Brain,
      title: 'Quantitative Aptitude',
      description: 'Number systems, percentages, profit & loss, time & work, permutation & combination, data interpretation, and problem-solving.',
      features: [
        'Number Systems & Simplification',
        'Time, Speed & Distance',
        'Data Interpretation',
        'Shortcut Techniques',
      ],
      gradient: 'from-orange-500 to-red-500',
      href: '/programs#aptitude',
    },
    {
      icon: TrendingUp,
      title: 'Logical Reasoning',
      description: 'Series, coding-decoding, blood relations, puzzles, syllogism, statement & assumptions, and critical thinking.',
      features: [
        'Series & Pattern Recognition',
        'Puzzles & Seating Arrangement',
        'Syllogism & Assumptions',
        'Critical Thinking',
      ],
      gradient: 'from-green-500 to-teal-500',
      href: '/programs#reasoning',
    },
    {
      icon: Code,
      title: 'Technical Training',
      description: 'Domain-specific technical skills training aligned with industry requirements and emerging technologies.',
      features: [
        'Programming Fundamentals',
        'Domain-Specific Skills',
        'Industry Tools & Technologies',
        'Hands-on Projects',
      ],
      gradient: 'from-indigo-500 to-purple-500',
      href: '/programs#technical',
    },
    {
      icon: Target,
      title: 'Placement Readiness',
      description: 'Resume building, LinkedIn optimization, group discussions, mock interviews, HR interview preparation, and placement strategy.',
      features: [
        'Resume & LinkedIn Profile',
        'Group Discussion Mastery',
        'Mock Interviews',
        'Personal Branding',
      ],
      gradient: 'from-pink-500 to-rose-500',
      href: '/programs#placement',
    },
    {
      icon: Briefcase,
      title: 'Corporate Training',
      description: 'Professional development for working professionals including leadership, time management, and advanced communication.',
      features: [
        'Leadership Development',
        'Time & Stress Management',
        'Advanced Communication',
        'Decision Making Skills',
      ],
      gradient: 'from-yellow-500 to-orange-500',
      href: '/corporate-solutions',
    },
    {
      icon: Sparkles,
      title: 'Flagship 90-Hour Program',
      description: 'Comprehensive final-year employability program combining 60 hours aptitude + 30 hours soft skills training.',
      features: [
        '60 Hours Aptitude Training',
        '30 Hours Soft Skills',
        'Complete Mock Process',
        'Individual Feedback Reports',
      ],
      gradient: 'from-cyan-500 to-blue-500',
      href: '/flagship-program',
    },
  ];

  const methodology = [
    { step: 'ASSESS', description: 'Pre-training assessment to understand current skill levels' },
    { step: 'LEARN', description: 'Structured learning with expert trainers and proven curriculum' },
    { step: 'PRACTICE', description: 'Continuous practice through worksheets, activities, and simulations' },
    { step: 'FEEDBACK', description: 'Personalized feedback to identify strengths and improvement areas' },
    { step: 'IMPROVE', description: 'Targeted improvement plans and ongoing mentorship support' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400">Comprehensive Training Programs</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Building <span className="gradient-text">Industry-Ready</span> Professionals
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive training solutions across technical, aptitude, and soft skills. We deliver training not just theory — but practical, industry-relevant competencies that employers seek.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="gradient-text">Training Programs</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-600">
              From communication to coding, aptitude to leadership — we cover every skill that matters.
            </p>
          </div>

          <div ref={programsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="card group hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${program.gradient} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <program.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {program.features.slice(0, 3).map((feature, fidx) => (
                      <li key={fidx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={program.href}
                    className="inline-flex items-center text-orange-500 font-bold text-sm group-hover:text-orange-600"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 text-white">
              Our <span className="gradient-text">Training Methodology</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-300">
              A proven 5-stage approach that ensures learning is applied, not just discussed.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="card-dark p-6 text-center group hover:scale-105 transition-all">
                  {/* Number Badge */}
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-black text-lg">{idx + 1}</span>
                  </div>

                  {/* Step Name */}
                  <div className="text-xl font-black text-orange-400 mb-2">
                    {item.step}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow (except last item) */}
                {idx < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-2 border-orange-500/20 text-center">
              <h2 className="text-4xl font-black text-navy-900 mb-4">
                Ready to Build <span className="gradient-text">Skilled Professionals?</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Let's design a customized training program tailored to your institution's needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-8 py-4">
                  Request Training Proposal
                </Link>
                <Link href="/flagship-program" className="btn btn-secondary px-8 py-4">
                  View Flagship Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
