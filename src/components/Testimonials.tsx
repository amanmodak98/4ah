'use client';

import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal, Engineering College',
      institution: 'JNTU Hyderabad',
      content: '4Ability Hive has been instrumental in improving our students\' placement outcomes. Their structured approach and experienced trainers have made a significant impact on our final year students.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'HR Manager',
      institution: 'Tech Solutions Pvt Ltd',
      content: 'The corporate training programs delivered by 4AH have helped our team enhance their communication and leadership skills. Highly professional and results-oriented approach.',
      rating: 5,
    },
    {
      name: 'Arun Reddy',
      role: 'Training & Placement Officer',
      institution: 'CVR College of Engineering',
      content: 'We have been partnering with 4Ability Hive for 3 years now. The year-wise training structure has helped our students build skills progressively, resulting in better placements.',
      rating: 5,
    },
    {
      name: 'Sneha Patel',
      role: 'Final Year Student',
      institution: 'CBIT, Hyderabad',
      content: 'The 90-hour flagship program completely transformed my confidence. I cleared 8 aptitude tests and got placed in my dream company. Thank you 4AH!',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="section-title">What Our <span className="gradient-text">Partners Say</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Trusted by leading educational institutions and corporate organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card p-8 ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-accent-orange" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent-yellow fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-primary-navy">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    <p className="text-sm text-accent-orange font-medium">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
