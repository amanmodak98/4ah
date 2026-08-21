'use client';

import { MessageSquare, Users, BookOpen, Target, Trophy, Briefcase, Zap, TrendingUp } from 'lucide-react';
import { useStaggerAnimation } from '@/hooks/useGSAP';

export default function Programs() {
  const cardsRef = useStaggerAnimation(8);

  const programs = [
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      description: 'Verbal & non-verbal communication, active listening, vocabulary enhancement, presentation skills',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: ['Public Speaking', 'Confidence Building', 'Professional English'],
    },
    {
      icon: Users,
      title: 'Soft Skills Development',
      description: 'Teamwork, leadership, emotional intelligence, adaptability, time management, workplace etiquette',
      gradient: 'from-purple-500 to-pink-500',
      highlights: ['Team Collaboration', 'Leadership', 'Emotional Intelligence'],
    },
    {
      icon: Target,
      title: 'Quantitative Aptitude',
      description: 'Mathematical reasoning, data interpretation, logical problem-solving, number systems',
      gradient: 'from-orange-500 to-red-500',
      highlights: ['Speed & Accuracy', 'Problem Solving', 'Competitive Exams'],
    },
    {
      icon: Zap,
      title: 'Logical Reasoning',
      description: 'Analytical thinking, pattern recognition, decision-making, critical thinking exercises',
      gradient: 'from-green-500 to-teal-500',
      highlights: ['Analytical Skills', 'Pattern Recognition', 'Critical Thinking'],
    },
    {
      icon: BookOpen,
      title: 'Technical Training',
      description: 'Domain-specific technical skills, programming fundamentals, industry tools and technologies',
      gradient: 'from-indigo-500 to-blue-500',
      highlights: ['Coding Basics', 'Industry Tools', 'Technical Concepts'],
    },
    {
      icon: Trophy,
      title: 'Placement Readiness',
      description: 'Resume building, mock interviews, group discussions, LinkedIn optimization, personal branding',
      gradient: 'from-yellow-500 to-orange-500',
      highlights: ['Resume Crafting', 'Interview Mastery', 'GD Practice'],
    },
    {
      icon: Briefcase,
      title: 'Corporate Readiness',
      description: 'Workplace etiquette, professional behavior, email communication, business ethics',
      gradient: 'from-pink-500 to-purple-500',
      highlights: ['Professional Etiquette', 'Business Communication', 'Work Ethics'],
    },
    {
      icon: TrendingUp,
      title: 'Personality Development',
      description: 'Self-awareness, grooming, positive mindset, confidence enhancement, goal setting',
      gradient: 'from-cyan-500 to-blue-500',
      highlights: ['Self-Confidence', 'Professional Grooming', 'Positive Attitude'],
    },
  ];

  return (
    <section id="programs" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F1419] to-[#0A0E14]">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="section-title mb-8">
            Comprehensive <span className="gradient-text">Training Programs</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            We offer industry-aligned training solutions across multiple domains to build{' '}
            <span className="text-orange-400 font-semibold">employment-ready graduates</span> through holistic skill development.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="card p-6 group hover:scale-105 transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-lg`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {program.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs text-neutral-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Focus Statement */}
        <div className="max-w-5xl mx-auto">
          <div className="card p-10 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-orange-500/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Our <span className="gradient-text">Primary Focus</span>
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                While we deliver training across technical, aptitude, and soft skills, our primary focus is on building{' '}
                <span className="text-orange-400 font-bold">industry-ready graduates</span> through holistic{' '}
                <span className="text-orange-400 font-bold">Employability Skills Programs</span> that combine all essential competencies for career success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
