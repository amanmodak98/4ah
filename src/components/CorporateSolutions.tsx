'use client';

import { Briefcase, Users, Trophy, Rocket, Target, TrendingUp } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function CorporateSolutions() {
  const titleRef = useFadeInUp();
  const cardsRef = useStaggerAnimation(6);

  const solutions = [
    {
      icon: Users,
      title: 'Employee Upskilling',
      description: 'Enhance workforce capabilities through targeted soft skills and technical training programs',
      features: ['Communication Excellence', 'Leadership Development', 'Team Building'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      description: 'Build career-ready professionals with workplace competencies and industry-aligned skills',
      features: ['Workplace Etiquette', 'Professional Communication', 'Time Management'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Performance Enhancement',
      description: 'Improve employee productivity, efficiency, and overall organizational performance',
      features: ['Problem Solving', 'Critical Thinking', 'Decision Making'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Leadership Training',
      description: 'Develop future leaders with strategic thinking, people management, and vision execution',
      features: ['Strategic Planning', 'People Management', 'Change Leadership'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Target,
      title: 'Customized Programs',
      description: 'Tailored training solutions designed to meet specific organizational needs and goals',
      features: ['Need Assessment', 'Custom Curriculum', 'Flexible Delivery'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Ongoing development programs to keep employees updated with latest industry trends',
      features: ['Regular Workshops', 'Skill Assessments', 'Progress Tracking'],
      color: 'from-pink-500 to-purple-500',
    },
  ];

  return (
    <section id="corporate" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0F1419] to-[#0A0E14]">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="section-title mb-8">
            <span className="gradient-text">Corporate Solutions</span>
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Empower your workforce with comprehensive training programs designed to enhance{' '}
            <span className="text-orange-400 font-semibold">productivity, performance, and professional growth</span>.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card p-8 group hover:scale-105 transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="space-y-2 pt-6 border-t border-white/10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Partner With <span className="gradient-text">4Ability Hive</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Industry Experts', value: 'Trainers with extensive corporate experience' },
              { label: 'Customized Approach', value: 'Programs tailored to your organization' },
              { label: 'Measurable Results', value: 'Track progress with structured assessments' },
              { label: 'Flexible Delivery', value: 'On-site, hybrid, or online training options' },
            ].map((benefit, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-all">
                <div className="text-2xl font-black text-orange-400 mb-2">{benefit.label}</div>
                <p className="text-sm text-neutral-400">{benefit.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-orange-500/20 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Transform Your <span className="gradient-text">Workforce</span>
            </h3>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Partner with us to build a skilled, confident, and future-ready team that drives organizational success.
            </p>
            <a href="/#contact" className="btn-primary px-10 py-4 inline-flex items-center text-lg">
              Request Training Proposal
              <Briefcase className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
