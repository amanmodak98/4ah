'use client';

import { ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2 },
          '-=0.4'
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Target, value: '90+', label: 'Hours Training', color: 'from-orange-500 to-red-500' },
    { icon: TrendingUp, value: '1000+', label: 'Students Trained', color: 'from-blue-500 to-cyan-500' },
    { icon: Sparkles, value: '50+', label: 'Corporate Partners', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0E14] via-[#0F141F] to-[#1A1F2E]"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-400">
              Leading L&D Training Partner
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="section-title mb-6 leading-tight"
          >
            Empowering <span className="gradient-text glow-effect">Students</span>
            <br />
            With <span className="gradient-text glow-effect">Skills</span> That{' '}
            <span className="gradient-text glow-effect">Matter</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Transform potential into performance. We bridge the gap between academic education
            and workplace expectations through comprehensive{' '}
            <span className="text-orange-400 font-bold">employability training programs</span>.
          </p>

          {/* Tagline */}
          <div className="flex items-center justify-center space-x-3 mb-12 text-lg font-bold">
            <span className="text-orange-400">ASPIRE</span>
            <span className="text-white">•</span>
            <span className="text-yellow-400">ACQUIRE</span>
            <span className="text-white">•</span>
            <span className="text-blue-400">ASCEND</span>
            <span className="text-white">•</span>
            <span className="text-purple-400">AMPLIFY</span>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/#contact"
              className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center group min-w-[240px]"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/#programs"
              className="btn-secondary px-8 py-4 text-lg inline-flex items-center justify-center min-w-[240px]"
            >
              Explore Programs
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card p-6 hover:scale-105 transition-all hover:-translate-y-2 group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
