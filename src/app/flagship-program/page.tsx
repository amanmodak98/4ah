'use client';

import {
  Target,
  Brain,
  Users,
  TrendingUp,
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  BarChart3,
  MessageSquare,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function FlagshipProgramPage() {
  const heroRef = useFadeInUp();
  const goalsRef = useStaggerAnimation(8);
  const curriculumRef = useStaggerAnimation(4);

  const programGoals = [
    'Build the confidence level of the students',
    'Enhance motivation to face the selection process through structured practice',
    'Improve awareness of the various selection processes adopted by recruiting companies',
    'Strengthen logical, critical and analytical reasoning along with verbal ability',
    'Build capability in data interpretation and data sufficiency',
    'Achieve strong, consistent scores in comprehensive aptitude tests',
    'Master group discussions and personal interviews',
    'Create resumes that stand out to recruiters',
    'Increase the likelihood of matching recruiter requirements',
    'Drive overall improvement in performance across any competitive selection process',
  ];

  const aptitudeTopics = [
    { week: 1, topic: 'Pre-Assessment, Number System, Divisibility, Simplification & Approximation', hours: 6 },
    { week: 2, topic: 'Percentages, Profit & Loss, Discount, Simple & Compound Interest', hours: 6 },
    { week: 3, topic: 'Ratio & Proportion, Partnership, Average, Mixtures & Alligation', hours: 6 },
    { week: 4, topic: 'Time & Work, Pipes & Cisterns, Time Speed Distance, Boats & Streams', hours: 6 },
    { week: 5, topic: 'Permutation & Combination, Probability, Data Sufficiency', hours: 6 },
    { week: 6, topic: 'Logical Reasoning I: Series, Coding Decoding, Blood Relations, Direction Sense', hours: 6 },
    { week: 7, topic: 'Logical Reasoning II: Seating Arrangement, Puzzles, Syllogism, Statement & Assumption', hours: 6 },
    { week: 8, topic: 'Data Interpretation: Tables, Graphs, Pie Charts, Caselets, Data Analysis', hours: 6 },
    { week: 9, topic: 'Mock Aptitude Test: Quantitative, Logical Reasoning & Data Interpretation + Test Discussion', hours: 6 },
    { week: 10, topic: 'Advanced Mixed Aptitude Practice, Shortcut Techniques, Speed Improvement, Post Assessment', hours: 6 },
  ];

  const softSkillsTopics = [
    { week: 1, topic: 'Ice Breaker, Self Discovery, Growth Mindset & Goal Setting', hours: 3 },
    { week: 2, topic: 'Communication Skills Fundamentals: Verbal & Non-Verbal Communication', hours: 3 },
    { week: 3, topic: 'Active Listening, Barriers to Communication, Vocabulary Building, Synonyms & Antonyms', hours: 3 },
    { week: 4, topic: 'Presentation Skills, Public Speaking Activities, Analogies & Word Relationships', hours: 3 },
    { week: 5, topic: 'Team Building, Collaboration, Problem Solving & Critical Thinking Activities, Reading Comprehension Techniques', hours: 3 },
    { week: 6, topic: 'Emotional Intelligence, Stress & Time Management, Sentence Correction & Error Identification', hours: 3 },
    { week: 7, topic: 'Resume Building, ATS Resume Tips, LinkedIn Profile Basics, Sentence Completion & Para Jumbles', hours: 3 },
    { week: 8, topic: 'Group Discussion Techniques, Evaluation Criteria & Extempore Practice, Reading Comprehension Practice', hours: 3 },
    { week: 9, topic: 'HR Interview Preparation, Personal Branding, STAR Technique, Vocabulary Revision & Interview Communication', hours: 3 },
    { week: 10, topic: 'Mock Interviews, Individual Feedback, Career Action Plan, Course Summary & Valedictory', hours: 3 },
  ];

  const deliverables = [
    { icon: Clock, label: '90 Hours', description: 'Structured training per student' },
    { icon: BarChart3, label: 'Pre & Post Assessment', description: 'Track learning progress' },
    { icon: Award, label: 'Practice Materials', description: 'Worksheets, tests & references' },
    { icon: Users, label: 'Mock Process', description: 'GD and interviews for real-world readiness' },
    { icon: CheckCircle2, label: 'Individual Feedback', description: 'Personalized reports for every learner' },
    { icon: TrendingUp, label: 'Measurable Improvement', description: 'Enhanced communication, confidence & aptitude' },
  ];

  const beforeAfter = [
    {
      label: 'Before Training',
      items: [
        'Knowledge may remain largely academic',
        'Limited exposure to recruitment formats',
        'Low confidence under pressure',
        'Uneven aptitude and communication skills',
      ],
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      label: 'After Training',
      items: [
        'Better GD/interview performance and mock interviews',
        'Stronger recruitment awareness',
        'More confident & assertive towards work',
        'Better test-solving approach & clearer communication',
      ],
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
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
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400">Our Flagship Program</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              90-Hour Final Year <span className="gradient-text">Employability Skills</span> Program
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg mb-8">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-orange-400" />
                <span>60 Hours Aptitude Training</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-orange-400" />
                <span>30 Hours Soft Skills</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              A comprehensive, structured, and interactive curriculum designed to prepare final year students for campus recruitment through experiential learning, continuous practice, and personalized feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Program Goals */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Training <span className="gradient-text">Goals</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-600">
              What this program aims to achieve for every learner.
            </p>
          </div>

          <div ref={goalsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programGoals.map((goal, idx) => (
              <div key={idx} className="flex items-start space-x-3 card p-6 hover:shadow-xl transition-all">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 text-white">
              Program <span className="gradient-text">Structure</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-300">
              A perfectly balanced curriculum covering aptitude, reasoning, and soft skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="card-dark p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-black text-orange-400 mb-2">60</div>
              <div className="text-xl font-bold text-white mb-2">Hours</div>
              <p className="text-gray-400">Quantitative & Logical Aptitude</p>
            </div>

            <div className="card-dark p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-black text-purple-400 mb-2">30</div>
              <div className="text-xl font-bold text-white mb-2">Hours</div>
              <p className="text-gray-400">Soft Skills & Corporate Readiness</p>
            </div>

            <div className="card-dark p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-black text-blue-400 mb-2">90</div>
              <div className="text-xl font-bold text-white mb-2">Hours</div>
              <p className="text-gray-400">Total Program Duration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aptitude Curriculum */}
      <section id="aptitude-curriculum" className="section-padding section-light">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-navy-900 mb-4">
              <Brain className="inline-block w-10 h-10 text-orange-500 mr-3 mb-1" />
              Aptitude Training Curriculum
              <span className="text-orange-500"> (60 Hours)</span>
            </h2>
            <p className="text-lg text-gray-600">
              Analytical reasoning and progressive assessment covering quantitative, logical, and data interpretation skills.
            </p>
          </div>

          <div className="space-y-4">
            {aptitudeTopics.map((item, idx) => (
              <div key={idx} className="card p-6 flex items-center justify-between hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-xl">{item.week}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-500 mb-1">Week {item.week}</div>
                    <div className="font-bold text-navy-900 text-lg">{item.topic}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">{item.hours} hrs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Curriculum */}
      <section id="soft-skills-curriculum" className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-navy-900 mb-4">
              <MessageSquare className="inline-block w-10 h-10 text-purple-500 mr-3 mb-1" />
              Soft Skills & Corporate Readiness
              <span className="text-purple-500"> (30 Hours)</span>
            </h2>
            <p className="text-lg text-gray-600">
              Communication, confidence, professional presence, and recruitment readiness training.
            </p>
          </div>

          <div className="space-y-4">
            {softSkillsTopics.map((item, idx) => (
              <div key={idx} className="card p-6 flex items-center justify-between hover:shadow-xl transition-all group bg-white">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-xl">{item.week}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-purple-500 mb-1">Week {item.week}</div>
                    <div className="font-bold text-navy-900 text-lg">{item.topic}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">{item.hours} hrs</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20 rounded-2xl">
            <p className="text-center text-lg text-gray-700 italic">
              <strong className="text-navy-900">"The learner is not a passive participant</strong> — every module creates opportunities to apply, receive feedback and improve."
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Deliverables & <span className="gradient-text">Expected Outcomes</span>
            </h2>
            <div className="divider"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {deliverables.map((item, idx) => (
              <div key={idx} className="card p-8 text-center hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold text-navy-900 mb-2">{item.label}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Before vs After */}
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((section, idx) => (
              <div key={idx} className={`${section.bg} rounded-2xl p-8 border-2 ${idx === 0 ? 'border-red-200' : 'border-green-200'}`}>
                <h3 className={`text-2xl font-black ${section.color} mb-6`}>{section.label}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-5 h-5 ${section.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Make Your Students <span className="gradient-text">Campus-Ready?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Partner with us to deliver this comprehensive 90-hour employability program and transform your final year students into confident, skilled, and placement-ready professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-10 py-4 text-lg">
                <Briefcase className="mr-2 w-5 h-5" />
                Request Training Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/programs" className="btn btn-secondary px-10 py-4 text-lg">
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
