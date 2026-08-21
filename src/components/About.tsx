'use client';

import { Target, Users, Lightbulb, Rocket, Award, Heart } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function About() {
  const titleRef = useFadeInUp();
  const pillarsRef = useStaggerAnimation(4);
  const valuesRef = useStaggerAnimation(6);

  const pillars = [
    {
      icon: Target,
      title: 'ASPIRE',
      subtitle: 'Dream Bigger',
      description: 'Help learners identify their goals, potential, passion, and career aspirations. Know where you want to go.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Lightbulb,
      title: 'ACQUIRE',
      subtitle: 'Build the Skills',
      description: 'Equip them with communication skills, soft skills, leadership, workplace readiness, aptitude, and technical knowledge.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'ASCEND',
      subtitle: 'Grow & Progress',
      description: 'Help learners apply their skills, build confidence, become employable, and advance their careers through continuous growth.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'AMPLIFY',
      subtitle: 'Create Impact',
      description: 'Enable learners to showcase their strengths, influence others, lead, and create meaningful impact in their workplace and society.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const values = [
    { icon: Heart, label: 'Experiential Learning', desc: 'Real workplace scenarios and hands-on practice' },
    { icon: Users, label: 'Expert Trainers', desc: 'Industry professionals with extensive corporate experience' },
    { icon: Target, label: 'Measurable Outcomes', desc: 'Track progress with structured assessments' },
    { icon: Rocket, label: 'Progressive Journey', desc: 'Year-wise skill development from first to final year' },
    { icon: Award, label: 'Lifetime Mentorship', desc: 'Ongoing support beyond training completion' },
    { icon: Lightbulb, label: 'Holistic Approach', desc: 'Technical skills + soft skills + workplace readiness' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#0A0E14] to-[#0F1419]">
      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Mission & Vision */}
        <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="section-title mb-8">
            About <span className="gradient-text">4Ability Hive</span>
          </h2>
          <div className="card p-10 mb-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Vision</h3>
            <p className="text-xl text-neutral-300 leading-relaxed">
              "Empowering people with the skills that matter"
            </p>
          </div>
          <div className="card p-10">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              To equip every student with the industry-relevant competencies, confidence, and mindset required to become <span className="text-orange-400 font-semibold">job-ready, employable, and future-ready professionals</span>. We bridge the gap between academic education and workplace expectations through structured, practical, and industry-relevant training programs.
            </p>
          </div>
        </div>

        {/* 4A Philosophy */}
        <div className="mb-24">
          <h3 className="text-4xl font-black text-center mb-12">
            The <span className="gradient-text">4A Philosophy</span>
          </h3>
          <div ref={pillarsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="card p-8 hover:scale-105 transition-all hover:-translate-y-2 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2">{pillar.title}</h4>
                <p className="text-orange-400 font-bold mb-4 text-sm">{pillar.subtitle}</p>
                <p className="text-neutral-300 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="card p-10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Who <span className="gradient-text">We Are</span>
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-6">
              We are a dedicated <span className="text-orange-400 font-semibold">Learning & Development startup</span> founded by a team of experienced trainers, facilitators, and industry professionals who share a vision to transform students into confident, employment-ready professionals.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Every trainer associated with our organization brings extensive experience in corporate and academic training. Having worked closely with organizations across various industries, we understand what employers truly expect from fresh graduates — not just technical knowledge, but the <span className="text-orange-400 font-semibold">professional competencies that determine long-term career success</span>.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              We believe that every student possesses unique potential. Our programs are thoughtfully designed to help learners discover their hidden strengths, build confidence, develop professional competencies, and become the best version of themselves.
            </p>
          </div>

          <div className="card p-10 bg-gradient-to-br from-orange-500/10 to-purple-500/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="gradient-text">Our Commitment</span>
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Our commitment goes beyond conducting classroom sessions — we strive to create lasting transformations in every learner.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-6">
              One of the biggest challenges observed across campuses is that students often begin preparing for placements only during their final year. At that stage, they are expected to master communication skills, teamwork, leadership, interview techniques, aptitude, professional etiquette, and workplace readiness within a very limited timeframe.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              To address this, we have designed structured training programs for students from <span className="text-orange-400 font-semibold">First Year through Final Year</span>, enabling institutions to progressively build students' employability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-4xl font-black text-center mb-12">
            Why <span className="gradient-text">Choose Us</span>
          </h3>
          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-6 hover:scale-105 transition-all group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{value.label}</h4>
                    <p className="text-neutral-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Belief Statement */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="card p-12 text-center bg-gradient-to-br from-orange-500/5 via-purple-500/5 to-blue-500/5 border-orange-500/20">
            <p className="text-2xl font-bold text-white leading-relaxed">
              "Employability is not a skill that can be developed overnight — it is a{' '}
              <span className="gradient-text">journey that should begin early</span> in a student's academic life."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
