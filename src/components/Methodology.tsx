'use client';

import { Search, BookOpen, Users, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function Methodology() {
  const titleRef = useFadeInUp();
  const stepsRef = useStaggerAnimation(5);

  const methodology = [
    {
      icon: Search,
      step: 'ASSESS',
      title: 'Understand Current Level',
      description: 'Pre-assessments, quizzes, and diagnostic tests to identify strengths and gaps',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      step: 'LEARN',
      title: 'Concept Explanation',
      description: 'Structured modules with concept explanation, guided practice, and real workplace scenarios',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      step: 'PRACTISE',
      title: 'Apply & Experience',
      description: 'Interactive sessions with role play, icebreakers, brainstorming, group activities, and simulations',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MessageSquare,
      step: 'FEEDBACK',
      title: 'Constructive Insights',
      description: 'Individual feedback reports, performance analysis, and personalized guidance',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      step: 'IMPROVE',
      title: 'Continuous Growth',
      description: 'Progressive tests, assignments, and ongoing learner mentorship for sustained development',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const features = [
    'Experiential learning focused on practical application',
    'Real workplace scenarios and case studies',
    'Continuous practice and reinforcement',
    'Constructive feedback at every stage',
    'Interactive sessions with peer-to-peer learning',
    'VARK Methodology based teaching',
    'Pre & Post module assessments',
    'Situational judgment exercises',
  ];

  return (
    <section id="methodology" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="section-title">
            Our <span className="gradient-text">Training Methodology</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed mt-6">
            Rather than relying solely on theoretical concepts, our training methodology focuses on <span className="text-orange-400 font-semibold">experiential learning, real workplace scenarios, continuous practice, constructive feedback, and practical application</span>.
          </p>
        </div>

        {/* Methodology Steps */}
        <div ref={stepsRef} className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 opacity-20" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="card p-8 text-center h-full hover:scale-105 transition-all hover:-translate-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg group-hover:shadow-2xl`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="mb-3">
                    <span className={`text-xs font-black tracking-widest bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-orange-500 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Instructional Design */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="card p-10">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="gradient-text">Instructional Design</span>
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Every module combines concept explanation, guided practice, real workplace scenarios, and structured feedback — ensuring <span className="text-orange-400 font-semibold">learning is applied, not just discussed</span>.
            </p>
            <p className="text-neutral-400">
              The learner is not a passive participant — every module creates opportunities to apply, receive feedback, and improve.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 card hover:scale-105 transition-transform"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Framework */}
        <div className="card p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="gradient-text">Delivery Framework</span>
          </h3>
          <p className="text-center text-neutral-400 mb-10">
            Flexible, practical, and institution-friendly
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'Mode', value: 'In-person on campus, hybrid option available' },
              { label: 'Venue', value: 'As designated by the institution' },
              { label: 'Language', value: 'English, can be aligned with learner needs' },
              { label: 'Resources', value: 'AV material, reading material, practice sheets, and assessments' },
              { label: 'Teaching Method', value: 'Interactive sessions with role play, icebreakers, brainstorming, peer-to-peer learning, group activities, VARK Methodology' },
              { label: 'Assessment', value: 'Pre & post module assessments, quizzes, assignments, progressive tests' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-orange-400 font-semibold text-sm">{item.label}</p>
                <p className="text-neutral-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
