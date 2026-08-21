'use client';

import { Target, Eye, Heart, Users, Award, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function AboutPage() {
  const heroRef = useFadeInUp();
  const philosophyRef = useStaggerAnimation(4);
  const valuesRef = useStaggerAnimation(6);

  const philosophy = [
    {
      icon: Rocket,
      title: 'ASPIRE',
      subtitle: 'Dream Bigger',
      description: 'Help learners identify their goals, potential, passion, and career aspirations. Know where you want to go.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'ACQUIRE',
      subtitle: 'Build the Skills',
      description: 'Equip them with communication skills, soft skills, leadership skills, workplace skills, aptitude, and technical knowledge. Gain what you need to get there.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'ASCEND',
      subtitle: 'Grow & Progress',
      description: 'Help learners apply their skills, build confidence, become employable, and advance their careers. Rise through continuous growth.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'AMPLIFY',
      subtitle: 'Create Impact',
      description: 'Enable learners to showcase their strengths, influence others, lead, and create meaningful impact in their workplace and society. Make your potential visible and impactful.',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from training quality to learner outcomes.',
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Our dedication extends beyond classroom sessions — we provide lifetime mentorship and career guidance.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with institutions, corporates, and learners to create tailored, impactful training solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our methodologies to stay relevant with industry demands and learner needs.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We maintain transparency, honesty, and ethical practices in all our partnerships and training programs.',
    },
    {
      icon: Rocket,
      title: 'Empowerment',
      description: 'We believe every learner has unique potential. Our programs help discover and develop hidden strengths.',
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
              <Heart className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400">About 4Ability Hive</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Empowering People With The <span className="gradient-text">Skills That Matter</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              We are a dedicated Learning & Development startup founded by a team of experienced trainers, facilitators, and industry professionals who share a vision to transform students into confident, employment-ready professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Every trainer associated with our organisation brings extensive experience in corporate and academic training. Having worked closely with organisations across various industries, we understand what employers truly expect from fresh graduates — not just technical knowledge, but the professional competencies that determine long-term career success.
                </p>
                <p>
                  After years of industry exposure and working with thousands of learners, we recognised a significant gap between academic education and workplace expectations. This inspired us to work directly with colleges and educational institutions to bridge that gap through structured, practical, and industry-relevant training programs.
                </p>
                <p>
                  <strong className="text-navy-900">Our Mission:</strong> To equip every student with the industry-relevant competencies, confidence, and mindset required to become job-ready, employable, and future-ready professionals.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-12">
                  <Eye className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg opacity-90">Creating a generation of confident, skilled, and industry-ready professionals who lead with impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4A Philosophy */}
      <section id="philosophy" className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 text-white">
              The <span className="gradient-text">4A Philosophy</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach to transforming learners from potential to performance through four progressive stages.
            </p>
          </div>

          <div ref={philosophyRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, idx) => (
              <div key={idx} className="card-dark p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-3xl font-black text-orange-400 mb-2">
                    {item.title}
                  </div>
                  <div className="text-lg font-bold text-white mb-4">
                    {item.subtitle}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-600">
              The principles that guide everything we do at 4Ability Hive.
            </p>
          </div>

          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card p-8 group hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Commitment Goes Beyond Training
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              We strive to create lasting transformations in every learner. One of the biggest challenges observed across campuses is that students often begin preparing for placements only during their final year. At that stage, they are expected to master communication skills, teamwork, leadership, interview techniques, aptitude, professional etiquette, and workplace readiness within a very limited timeframe.
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              <strong>That's why we believe employability is not a skill that can be developed overnight — it is a journey that should begin early in a student's academic life.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
