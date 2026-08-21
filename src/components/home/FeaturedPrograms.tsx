'use client';

import { GraduationCap, Briefcase, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useStaggerAnimation } from '@/hooks/useGSAP';

export default function FeaturedPrograms() {
  const cardsRef = useStaggerAnimation(3);

  const programs = [
    {
      icon: GraduationCap,
      title: 'College Solutions',
      description: 'Progressive year-wise training from first year to final year. Build employability skills systematically throughout the academic journey.',
      features: ['Year-wise Learning', 'Holistic Development', 'Campus Placement Ready'],
      href: '/college-solutions',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/college.jpg',
    },
    {
      icon: Briefcase,
      title: 'Corporate Training',
      description: 'Upskill your workforce with targeted professional development programs. Enhance productivity, leadership, and workplace competencies.',
      features: ['Employee Upskilling', 'Leadership Training', 'Custom Programs'],
      href: '/corporate-solutions',
      gradient: 'from-purple-500 to-pink-500',
      image: '/images/corporate.jpg',
    },
    {
      icon: Target,
      title: 'Flagship 90-Hour Program',
      description: 'Intensive final-year employability training. 60 hours aptitude + 30 hours soft skills. Complete placement preparation.',
      features: ['90 Hours Training', 'Mock Interviews', 'Placement Ready'],
      href: '/flagship-program',
      gradient: 'from-orange-500 to-red-500',
      image: '/images/flagship.jpg',
    },
  ];

  return (
    <section className="section-padding section-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Our <span className="gradient-text">Training Solutions</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle text-gray-600">
            Comprehensive programs designed to transform students and professionals into confident, skilled, and employment-ready individuals.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="card group cursor-pointer hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon Header */}
              <div className={`h-48 bg-gradient-to-br ${program.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <program.icon className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                {/* Floating shapes */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-sm text-gray-700">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={program.href}
                  className="inline-flex items-center text-orange-500 font-bold group-hover:text-orange-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/programs" className="btn btn-secondary px-8 py-4">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
