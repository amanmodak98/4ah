'use client';

import { CheckCircle2, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useFadeInUp, useSlideIn } from '@/hooks/useGSAP';

export default function WhyChooseUs() {
  const titleRef = useFadeInUp();
  const imageRef = useSlideIn('left');
  const contentRef = useSlideIn('right');

  const reasons = [
    {
      title: 'Industry-Experienced Trainers',
      description: 'Learn from professionals with extensive corporate and academic training experience who understand real workplace demands.',
    },
    {
      title: 'Proven Methodology',
      description: 'Assess → Learn → Practice → Feedback → Improve. Our structured approach ensures measurable skill development.',
    },
    {
      title: 'Holistic Skill Development',
      description: 'Not just aptitude or soft skills — we build complete employability with communication, leadership, and workplace readiness.',
    },
    {
      title: 'Year-wise Learning Journey',
      description: 'Progressive training from first year to final year ensures students are campus-placement ready, not rushed at the last minute.',
    },
    {
      title: 'Customized Training Programs',
      description: 'Flexible curriculum tailored to institutional needs, student levels, and specific industry requirements.',
    },
    {
      title: 'Lifetime Mentorship',
      description: 'Our commitment extends beyond training. We provide ongoing guidance for career growth and interview preparation.',
    },
  ];

  return (
    <section className="section-padding section-light">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why Partner With <span className="gradient-text">4Ability Hive</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle text-gray-600">
            We're not just another training vendor — we're a long-term capability development partner committed to transforming potential into performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for image - replace with actual image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <div className="text-center text-white p-12">
                  <Target className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <h3 className="text-3xl font-bold mb-4">Empowering Excellence</h3>
                  <p className="text-lg opacity-90">Building industry-ready professionals through proven training methodologies</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-500">
              <div className="text-4xl font-black text-orange-500 mb-1">1000+</div>
              <div className="text-sm font-bold text-navy-900">Success Stories</div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-10 border-t border-gray-200">
              <Link
                href="/about"
                className="inline-flex items-center text-orange-500 font-bold text-lg hover:text-orange-600 group"
              >
                Learn More About Our Approach
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
