'use client';

import {
  Users,
  TrendingUp,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  MessageSquare,
  Briefcase,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function CollegeSolutionsPage() {
  const heroRef = useFadeInUp();
  const yearRef = useStaggerAnimation(4);
  const benefitsRef = useStaggerAnimation(6);

  const yearWiseJourney = [
    {
      year: 'First Year',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      focus: 'Foundation Building',
      skills: [
        'Self-awareness and confidence building',
        'Communication fundamentals & communication skills',
        'Grooming & Professional Behaviour',
        'Learning mindset: Negative to Positive Attitude',
        'Teamwork and collaboration',
      ],
    },
    {
      year: 'Second Year',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
      focus: 'Skill Development',
      skills: [
        'Professional communication',
        'Adaptability & Change Management',
        'Problem solving',
        'Critical thinking',
        'Presentation skills',
        'Time management skills',
        'Workplace etiquette and Ethics',
      ],
    },
    {
      year: 'Third Year',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      focus: 'Professional Growth',
      skills: [
        'Leadership development',
        'Decision making',
        'Emotional intelligence',
        'Stress Management',
        'Group discussions',
        'Conflict Management',
      ],
    },
    {
      year: 'Final Year',
      icon: Award,
      color: 'from-green-500 to-teal-500',
      focus: 'Placement Readiness',
      skills: [
        'Advanced aptitude and reasoning',
        'Resume building',
        'Interview mastery',
        'Corporate communication',
        'Mock interviews',
        'Conceptual Reinforcement of Aptitude',
        'Placement preparation',
        'Holistic Personality development',
      ],
    },
  ];

  const benefits = [
    {
      icon: Calendar,
      title: 'Progressive Development',
      description: 'Skills build naturally over four years instead of cramming everything in the final year.',
    },
    {
      icon: Target,
      title: 'Better Preparedness',
      description: 'Students reach final year already equipped with core competencies, not starting from scratch.',
    },
    {
      icon: TrendingUp,
      title: 'Higher Confidence',
      description: 'Years of practice and feedback create genuinely confident, polished professionals.',
    },
    {
      icon: Briefcase,
      title: 'Employment Ready',
      description: 'Graduates are truly industry-ready with both technical and professional skills.',
    },
    {
      icon: Award,
      title: 'Competitive Edge',
      description: 'Students stand out in campus placements compared to peers who prepared late.',
    },
    {
      icon: Sparkles,
      title: 'Lasting Impact',
      description: 'Early skill development creates long-term career success, not just placement success.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400">For Colleges & Universities</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Year-Wise <span className="gradient-text">Learning Journey</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Employability is not a skill that can be developed overnight — it is a journey that should begin early in a student's academic life. We partner with institutions to create structured, progressive training programs from First Year through Final Year.
            </p>

            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="font-bold text-green-400">Progressive | Practical | Placement-Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-10 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <h2 className="text-3xl font-black text-navy-900 mb-6 text-center">
                The Challenge We Address
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  <strong className="text-red-600">One of the biggest challenges observed across campuses:</strong> Students often begin preparing for placements only during their final year. At that stage, they are expected to master communication skills, teamwork, leadership, interview techniques, aptitude, professional etiquette, and workplace readiness within a very limited timeframe.
                </p>
                <p className="text-center text-xl font-bold text-navy-900 py-4">
                  This last-minute rush creates stress, incomplete preparation, and missed opportunities.
                </p>
                <p>
                  <strong className="text-green-600">Our Solution:</strong> We design structured training programs for students from First Year through Final Year, enabling institutions to progressively build students' employability so that by the time they reach campus placements, they have already spent several years refining the skills employers seek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year-wise Journey */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 text-white">
              4Ability Hive's <span className="gradient-text">Year-Wise Learning Journey</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-300">
              A progressive, structured approach to building employment-ready graduates.
            </p>
          </div>

          <div ref={yearRef} className="space-y-8">
            {yearWiseJourney.map((yearData, idx) => (
              <div
                key={idx}
                className="card-dark p-8 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${yearData.color} opacity-0 hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className={`w-32 h-32 bg-gradient-to-br ${yearData.color} rounded-2xl flex flex-col items-center justify-center shadow-2xl`}>
                        <yearData.icon className="w-12 h-12 text-white mb-2" />
                        <div className="text-white font-black text-sm">{yearData.year}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-3xl font-black text-white">{yearData.year}</h3>
                        <span className="px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-bold">
                          {yearData.focus}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        {yearData.skills.map((skill, skillIdx) => (
                          <div key={skillIdx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Note */}
          <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-2 border-orange-500/20 rounded-2xl text-center">
            <p className="text-lg text-gray-300 italic">
              <strong className="text-white">"By the time students reach campus placements, they have already spent several years refining the skills employers seek."</strong> This progressive approach ensures they are more confident, polished, professionally mature, and better prepared than peers who begin preparing only in their final year.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Why Choose a <span className="gradient-text">Year-Wise Approach?</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-600">
              The advantages of starting early and building progressively.
            </p>
          </div>

          <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card p-8 hover:shadow-2xl transition-all group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="section-padding bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Belief
            </h2>
            <p className="text-2xl leading-relaxed mb-8 font-bold">
              Employability is not a skill that can be developed overnight — it is a journey that should begin early in a student's academic life.
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              We work alongside educational institutions in creating graduates who are not only academically qualified but also confident communicators, effective collaborators, capable problem solvers, ethical professionals, and industry-ready individuals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-2 border-orange-500/20 text-center">
              <h2 className="text-4xl font-black text-navy-900 mb-4">
                Build a <span className="gradient-text">Long-Term Partnership</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Let's design a year-wise employability roadmap that supports continuous student development throughout their academic journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-10 py-4 text-lg">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/flagship-program" className="btn btn-secondary px-10 py-4 text-lg">
                  View Final Year Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
