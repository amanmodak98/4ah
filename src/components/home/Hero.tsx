'use client';

import { ArrowRight, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HeroOrb } from '../three/HeroScene';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 80, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          '-=0.3'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Three.js Orb */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] hidden xl:block opacity-40">
        <HeroOrb />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold text-orange-400">
              India's Leading L&D Training Partner
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            Transform Students Into{' '}
            <span className="gradient-text">Industry-Ready</span>{' '}
            Professionals
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive employability training programs that bridge the gap between academic education and workplace expectations. Build confidence, skills, and careers.
          </p>

          {/* Tagline Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {['ASPIRE', 'ACQUIRE', 'ASCEND', 'AMPLIFY'].map((word, idx) => (
              <div
                key={word}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-sm font-bold text-orange-400">{word}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="btn btn-primary px-8 py-4 text-lg inline-flex items-center group shadow-2xl shadow-orange-500/30"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="btn btn-light px-8 py-4 text-lg inline-flex items-center group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Programs
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '1000+', label: 'Students Trained' },
              { value: '90+', label: 'Hours Training' },
              { value: '50+', label: 'College Partners' },
              { value: '95%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
