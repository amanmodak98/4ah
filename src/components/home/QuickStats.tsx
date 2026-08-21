'use client';

import { Target, Users, TrendingUp, Award } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    { icon: Users,      value: '1000+', label: 'Students Trained',    desc: 'Across colleges and corporates' },
    { icon: Target,     value: '90+',   label: 'Hours Training',      desc: 'Comprehensive flagship program' },
    { icon: TrendingUp, value: '95%',   label: 'Satisfaction Rate',   desc: 'From students and institutions' },
    { icon: Award,      value: '50+',   label: 'Partner Institutions',desc: 'Colleges and corporate clients' },
  ];

  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-headline text-white mb-3">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Measurable transformations across students, colleges and corporates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, desc }, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto shadow-lg"
                   style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-display font-black text-white mb-1">{value}</div>
              <div className="font-bold mb-1" style={{ color: '#F97316' }}>{label}</div>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
