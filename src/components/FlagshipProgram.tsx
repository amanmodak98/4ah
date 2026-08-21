'use client';

import { Zap, Clock, Target, CheckCircle, BookOpen, Users, TrendingUp } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';
import Link from 'next/link';

export default function FlagshipProgram() {
  const titleRef = useFadeInUp();
  const featuresRef = useStaggerAnimation(6);

  const programHighlights = [
    { value: '90', label: 'Total Hours', icon: Clock },
    { value: '60', label: 'Aptitude Hours', icon: BookOpen },
    { value: '30', label: 'Soft Skills Hours', icon: Users },
    { value: '100%', label: 'Placement Focus', icon: Target },
  ];

  const trainingGoals = [
    'Build the confidence level of the students',
    'Enhance motivation to face the selection process through structured practice',
    'Improve awareness of various selection processes adopted by recruiting companies',
    'Strengthen logical, critical and analytical reasoning along with verbal ability',
    'Build capability in data interpretation and data sufficiency',
    'Achieve strong, consistent scores in comprehensive aptitude tests',
    'Master group discussions and personal interviews',
    'Create resumes that stand out to recruiters',
    'Increase the likelihood of matching recruiter requirements',
    'Drive overall improvement in performance across any competitive selection process',
  ];

  const domains = [
    {
      title: 'Aptitude Training',
      hours: '60 hours',
      purpose: 'Build quantitative, analytical and reasoning capability',
      outcome: 'Faster, more accurate and structured problem solving',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Soft Skills & Corporate Readiness',
      hours: '30 hours',
      purpose: 'Build communication, confidence and corporate readiness',
      outcome: 'Professional behaviour and stronger selection process performance',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="flagship" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F1419] to-[#0A0E14]">
      {/* Animated Background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div ref={titleRef} className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide">
              🏆 OUR FLAGSHIP OFFERING
            </span>
          </div>
          <h2 className="section-title">
            Final Year <span className="gradient-text glow-effect">Employability Skills</span> Program
          </h2>
          <p className="text-2xl text-neutral-300 leading-relaxed mt-6">
            A comprehensive <span className="text-orange-400 font-bold">90-hour program</span> designed to prepare final year students for campus recruitment through structured, practical, and interactive learning.
          </p>
        </div>

        {/* Program Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {programHighlights.map((stat, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:scale-110 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 group-hover:rotate-12 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Domain Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="card p-10 group hover:scale-105 transition-all hover:-translate-y-2"
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${domain.color} rounded-full text-white text-sm font-bold mb-6`}>
                {domain.hours}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{domain.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-orange-400 font-semibold mb-1">Purpose</p>
                  <p className="text-neutral-300">{domain.purpose}</p>
                </div>
                <div>
                  <p className="text-green-400 font-semibold mb-1">Key Output</p>
                  <p className="text-neutral-300">{domain.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Goals */}
        <div className="card p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="gradient-text">Training Goals</span>
          </h3>
          <div ref={featuresRef} className="grid md:grid-cols-2 gap-4">
            {trainingGoals.map((goal, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integration */}
        <div className="card p-10 text-center mb-16 bg-gradient-to-br from-orange-500/10 to-purple-500/10">
          <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="gradient-text">Integration & Impact</span>
          </h3>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            Connect learning with recruitment situations through a cycle of <span className="text-orange-400 font-semibold">Practice → Feedback → Improvement → Performance</span>
          </p>
        </div>

        {/* Outcomes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: TrendingUp, title: 'Enhanced Performance', desc: 'Noticeably improved communication, confidence, and aptitude performance' },
            { icon: Target, title: 'Recruitment Ready', desc: 'Students better equipped to clear recruiter selection processes' },
            { icon: CheckCircle, title: 'Complete Preparation', desc: 'Mock GDs, interviews, and real-world readiness' },
          ].map((outcome, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:scale-105 transition-transform"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-4 group-hover:rotate-12 transition-transform">
                <outcome.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{outcome.title}</h4>
              <p className="text-neutral-300">{outcome.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-primary text-lg px-10 py-5 inline-flex items-center justify-center group"
          >
            Request Training Proposal
            <Zap className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Link>
          <p className="text-neutral-400 mt-6">
            Although this proposal focuses on our Final Year program, we also partner with institutions to design <span className="text-orange-400">long-term, year-wise employability roadmaps</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
