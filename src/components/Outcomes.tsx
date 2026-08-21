'use client';

import { BarChart, MessageCircle, Brain, Briefcase, Award, TrendingUp } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function Outcomes() {
  const titleRef = useFadeInUp();
  const cardsRef = useStaggerAnimation(6);

  const outcomes = [
    {
      icon: MessageCircle,
      title: 'Enhanced Communication',
      description: 'Noticeably improved verbal and non-verbal communication skills, active listening, and presentation abilities',
      stat: '90%',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Boosted Confidence',
      description: 'Increased self-confidence, assertiveness, and ability to perform under pressure during interviews and GDs',
      stat: '95%',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Aptitude Excellence',
      description: 'Stronger logical, critical, and analytical reasoning with faster, more accurate problem-solving approaches',
      stat: '85%',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Interview Readiness',
      description: 'Mastery of interview techniques, STAR method, personal branding, and professional resume building',
      stat: '92%',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Briefcase,
      title: 'Workplace Readiness',
      description: 'Professional etiquette, workplace behavior, business communication, and corporate readiness',
      stat: '88%',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BarChart,
      title: 'Selection Success',
      description: 'Better equipped to clear recruiter selection processes and meet industry expectations',
      stat: '80%',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="outcomes" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0A0E14] to-[#0F1419]">
      {/* Animated Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="section-title">
            Expected <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed mt-6">
            Measurable improvements and lasting transformations in every learner through our comprehensive training programs.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="card p-8 group hover:scale-105 transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${outcome.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg`}>
                <outcome.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {outcome.title}
                </h3>
                <span className={`text-3xl font-black bg-gradient-to-r ${outcome.color} bg-clip-text text-transparent`}>
                  {outcome.stat}
                </span>
              </div>

              <p className="text-neutral-300 leading-relaxed text-sm">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="card p-12 text-center max-w-5xl mx-auto bg-gradient-to-br from-orange-500/10 to-purple-500/10">
          <h3 className="text-3xl font-bold text-white mb-6">
            <span className="gradient-text">Our Commitment</span>
          </h3>
          <p className="text-xl text-neutral-300 leading-relaxed mb-6">
            Our commitment goes beyond conducting classroom sessions — we strive to create <span className="text-orange-400 font-semibold">lasting transformations</span> in every learner.
          </p>
          <p className="text-lg text-neutral-400">
            By the time students complete our programs, they are more confident, polished, professionally mature, and better prepared than peers who begin preparing only in their final year.
          </p>
        </div>
      </div>
    </section>
  );
}
