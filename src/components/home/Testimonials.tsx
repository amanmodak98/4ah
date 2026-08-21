'use client';

import { Quote, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.children;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);

  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Placement Officer',
      institution: 'National Institute of Technology',
      content: 'The 4Ability Hive program transformed our final year students. Their confidence levels skyrocketed, and we saw a 40% improvement in placement success rates. The trainers are exceptional.',
      rating: 5,
      image: '/images/testimonial-1.jpg',
    },
    {
      name: 'Rajesh Kumar',
      role: 'HR Manager',
      institution: 'Tech Solutions Pvt Ltd',
      content: 'We partnered with 4AH for employee upskilling. The corporate training program was perfectly customized to our needs. Our team\'s communication and leadership skills improved significantly.',
      rating: 5,
      image: '/images/testimonial-2.jpg',
    },
    {
      name: 'Ananya Verma',
      role: 'Final Year Student',
      institution: 'Engineering College',
      content: 'The 90-hour flagship program prepared me completely for campus placements. The aptitude training and mock interviews gave me the confidence to crack multiple offers. Highly recommended!',
      rating: 5,
      image: '/images/testimonial-3.jpg',
    },
    {
      name: 'Prof. Suresh Menon',
      role: 'Dean - Career Development',
      institution: 'Management Institute',
      content: 'Year-wise training from 4Ability Hive has become integral to our curriculum. Students develop progressively, and by final year, they are truly industry-ready. A game-changer for our institution.',
      rating: 5,
      image: '/images/testimonial-4.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-cream-100 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Partners Say</span>
          </h2>
          <div className="divider"></div>
          <p className="section-subtitle text-gray-600">
            Hear from institutions, corporates, and students who have experienced transformation through our programs.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="card p-8 hover:shadow-2xl transition-all duration-500 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Quote className="w-8 h-8 text-orange-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-orange-500 font-semibold">
                    {testimonial.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500/10 rounded-full border border-orange-500/30">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="font-bold text-navy-900">
              Rated 4.8/5 by 500+ Students and Institutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
