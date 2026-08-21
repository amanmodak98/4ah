'use client';

import { ArrowRight, Send, Building2, Users, Mail } from 'lucide-react';
import Link from 'next/link';
import { useFadeInUp } from '@/hooks/useGSAP';

export default function CTASection() {
  const ctaRef = useFadeInUp();

  return (
    <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <div ref={ctaRef} className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Transform Your Students?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Partner with 4Ability Hive and build a generation of confident, skilled, and employment-ready professionals.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Building2,
                title: 'Colleges',
                description: 'Year-wise training programs',
                cta: 'Partner With Us',
                href: '/college-solutions',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Users,
                title: 'Corporates',
                description: 'Employee upskilling solutions',
                cta: 'Request Proposal',
                href: '/corporate-solutions',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Mail,
                title: 'Get in Touch',
                description: 'Custom training requirements',
                cta: 'Contact Us',
                href: '/contact',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="card-dark p-8 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className="inline-flex items-center text-orange-400 font-bold group-hover:text-orange-300">
                    {item.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Primary CTA Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="btn btn-primary px-10 py-5 text-lg inline-flex items-center shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50"
            >
              <Send className="mr-2 w-5 h-5" />
              Request a Training Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Or email us at{' '}
              <a href="mailto:info@4ah.in" className="text-orange-400 hover:text-orange-300 font-semibold">
                info@4ah.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
