'use client';

import { Target, Users, TrendingUp, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useStaggerAnimation } from '@/hooks/useGSAP';

export default function QuickStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const cardsRef = useStaggerAnimation(4);

  const stats = [
    {
      icon: Users,
      value: 1000,
      suffix: '+',
      label: 'Students Trained',
      description: 'Across colleges and corporates',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      value: 90,
      suffix: '+',
      label: 'Hours Training',
      description: 'Comprehensive flagship program',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'From students and institutions',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      value: 50,
      suffix: '+',
      label: 'Partner Institutions',
      description: 'Colleges and corporate clients',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 text-white">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle text-gray-300">
            Transforming lives through measurable outcomes and lasting impact.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-dark p-8 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <div className="text-5xl font-black text-white mb-2">
                {inView ? (
                  <>
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </>
                ) : (
                  '0' + stat.suffix
                )}
              </div>

              {/* Label */}
              <div className="text-lg font-bold text-orange-400 mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="card-dark p-10 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-orange-500/20">
            <p className="text-xl text-gray-300 leading-relaxed">
              "We don't just train — we <span className="text-orange-400 font-bold">transform</span>. Our programs create lasting impact, building confidence, competence, and career readiness that employers truly value."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
