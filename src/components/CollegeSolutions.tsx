'use client';

import { GraduationCap, Users2, Rocket, Star, TrendingUp, Target } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function CollegeSolutions() {
  const titleRef = useFadeInUp();
  const yearCardsRef = useStaggerAnimation(4);

  const yearWiseJourney = [
    {
      year: 'First Year',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      focus: 'Foundation Building',
      topics: [
        'Self-awareness and confidence building',
        'Communication fundamentals',
        'Grooming & professional behavior',
        'Learning mindset & positive attitude',
        'Teamwork and collaboration',
      ],
    },
    {
      year: 'Second Year',
      icon: Users2,
      color: 'from-purple-500 to-pink-500',
      focus: 'Professional Development',
      topics: [
        'Professional communication',
        'Adaptability & change management',
        'Problem-solving & critical thinking',
        'Presentation skills',
        'Time management skills',
        'Workplace etiquette and ethics',
      ],
    },
    {
      year: 'Third Year',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      focus: 'Advanced Skills',
      topics: [
        'Leadership development',
        'Decision-making',
        'Emotional intelligence',
        'Stress management',
        'Group discussions',
        'Conflict management',
      ],
    },
    {
      year: 'Final Year',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      focus: 'Placement Readiness',
      topics: [
        'Advanced aptitude and reasoning',
        'Resume building & LinkedIn profile',
        'Interview mastery (HR, technical, behavioral)',
        'Corporate communication',
        'Mock interviews with feedback',
        'Holistic personality development',
        'Placement preparation',
      ],
    },
  ];

  return (
    <section id="college-solutions" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0A0E14] to-[#0F1419]">
      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="section-title mb-8">
            <span className="gradient-text">College Solutions</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Progressive, year-wise employability programs designed to transform students from{' '}
            <span className="text-orange-400 font-semibold">first year to placement-ready professionals</span>.
          </p>
        </div>

        {/* Year-wise Journey */}
        <div ref={yearCardsRef} className="grid md:grid-cols-2 gap-8 mb-20">
          {yearWiseJourney.map((item, index) => (
            <div
              key={index}
              className="card p-8 group hover:scale-105 transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-2">{item.year}</h3>
                    <p className="text-orange-400 font-bold text-sm">{item.focus}</p>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start text-neutral-300">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Target,
              title: 'Progressive Learning',
              description: 'Skills built incrementally from foundation to mastery over 4 years',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: TrendingUp,
              title: 'Better Preparedness',
              description: 'Students arrive at final year already trained, confident, and placement-ready',
              color: 'from-orange-500 to-red-500',
            },
            {
              icon: Star,
              title: 'Competitive Edge',
              description: 'Stand out from peers who begin preparation only in final year',
              color: 'from-purple-500 to-pink-500',
            },
          ].map((benefit, index) => (
            <div key={index} className="card p-6 text-center group hover:scale-105 transition-all">
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-neutral-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Transformation Statement */}
        <div className="max-w-5xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-orange-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Before Training</h3>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Knowledge remains largely academic
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Limited exposure to recruitment formats
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Low confidence under pressure
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Uneven aptitude and communication skills
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">After Training</h3>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    GD/Interview performance significantly improved
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Stronger recruitment awareness
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    More confident & assertive towards work
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Better test-solving & clearer communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-neutral-300 leading-relaxed">
            Our vision is to work alongside educational institutions in creating graduates who are{' '}
            <span className="text-orange-400 font-bold">not only academically qualified</span> but also{' '}
            <span className="text-orange-400 font-bold">confident communicators, effective collaborators, capable problem-solvers, ethical professionals, and industry-ready individuals</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
