'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Eye, Heart, Rocket, Award, Lightbulb, TrendingUp,
  Users, Zap, CheckCircle, ArrowRight, Sparkles
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const philosophyRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance ────────────────────────────────────────────────────
      // fromTo gives GSAP explicit start/end states so the hero never flashes
      // invisible during React hydration (gsap.from() would read the DOM end
      // state at runtime and could briefly expose blank content on slow devices)
      gsap.fromTo('.about-hero-content > *',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      );

      // ── Story items — slide in from left on scroll ────────────────────────
      gsap.fromTo('.story-item',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 75%' } }
      );

      // ── Philosophy cards — scale + fade in on scroll ──────────────────────
      gsap.fromTo('.philosophy-card',
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: { trigger: philosophyRef.current, start: 'top 75%' } }
      );

      // ── Values grid — staggered fade up ──────────────────────────────────
      gsap.fromTo('.value-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6,
          scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' } }
      );
    });

    return () => ctx.revert();
  }, []);

  const philosophy = [
    {
      icon: Rocket,
      title: 'ASPIRE',
      subtitle: 'Dream Bigger',
      desc: 'Help learners identify goals, potential, passion and career aspirations.',
      gradient: 'from-orange via-orange-light to-yellow',
      iconBg: 'bg-gradient-to-br from-orange to-orange-dark',
    },
    {
      icon: Award,
      title: 'ACQUIRE',
      subtitle: 'Build Skills',
      desc: 'Equip with communication, leadership, aptitude and technical knowledge.',
      gradient: 'from-purple via-purple-light to-pink-400',
      iconBg: 'bg-gradient-to-br from-purple to-purple-light',
    },
    {
      icon: TrendingUp,
      title: 'ASCEND',
      subtitle: 'Grow & Progress',
      desc: 'Apply skills, build confidence, become employable and advance careers.',
      gradient: 'from-teal via-emerald-400 to-green-400',
      iconBg: 'bg-gradient-to-br from-teal to-emerald-500',
    },
    {
      icon: Lightbulb,
      title: 'AMPLIFY',
      subtitle: 'Create Impact',
      desc: 'Showcase strengths, lead, influence and create meaningful impact.',
      gradient: 'from-blue-500 via-cyan-400 to-teal',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
  ];

  // ── Core values data ────────────────────────────────────────────────────
  // IMPORTANT: Tailwind's JIT purges dynamic class strings like `bg-${color}`.
  // All Tailwind classes MUST be literal strings so the compiler can detect them.
  const values = [
    { icon: Zap,       title: 'Excellence',    bgClass: 'from-orange/5 to-orange/10',       borderClass: 'border-orange/20',    hoverBorder: 'hover:border-orange',    iconBg: 'bg-orange',    textHover: 'group-hover:text-orange',    barBg: 'bg-orange',    desc: 'We strive for the highest standards in everything we do, from training quality to learner outcomes.' },
    { icon: Heart,     title: 'Commitment',    bgClass: 'from-purple/5 to-purple/10',       borderClass: 'border-purple/20',    hoverBorder: 'hover:border-purple',    iconBg: 'bg-purple',    textHover: 'group-hover:text-purple',    barBg: 'bg-purple',    desc: 'Our dedication extends beyond classroom sessions — we provide lifetime mentorship and career guidance.' },
    { icon: Users,     title: 'Collaboration', bgClass: 'from-teal/5 to-teal/10',           borderClass: 'border-teal/20',      hoverBorder: 'hover:border-teal',      iconBg: 'bg-teal',      textHover: 'group-hover:text-teal',      barBg: 'bg-teal',      desc: 'We work closely with institutions, corporates, and learners to create tailored, impactful solutions.' },
    { icon: Lightbulb, title: 'Innovation',    bgClass: 'from-blue-500/5 to-blue-500/10',   borderClass: 'border-blue-500/20',  hoverBorder: 'hover:border-blue-500',  iconBg: 'bg-blue-500',  textHover: 'group-hover:text-blue-500',  barBg: 'bg-blue-500',  desc: 'We continuously evolve our methodologies to stay relevant with industry demands and learner needs.' },
    { icon: Award,     title: 'Integrity',     bgClass: 'from-orange/5 to-orange/10',       borderClass: 'border-orange/20',    hoverBorder: 'hover:border-orange',    iconBg: 'bg-orange',    textHover: 'group-hover:text-orange',    barBg: 'bg-orange',    desc: 'We maintain transparency, honesty, and ethical practices in all our partnerships and training programs.' },
    { icon: Rocket,    title: 'Empowerment',   bgClass: 'from-purple/5 to-purple/10',       borderClass: 'border-purple/20',    hoverBorder: 'hover:border-purple',    iconBg: 'bg-purple',    textHover: 'group-hover:text-purple',    barBg: 'bg-purple',    desc: 'We believe every learner has unique potential. Our programs help discover and develop hidden strengths.' },
  ];

  return (
    <div className="pt-20">
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #DC2626 100%)',
        }}
      >
        {/* Animated blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-float"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 animate-float"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)', animationDelay: '2s' }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl about-hero-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/20 backdrop-blur-sm border border-white/30">
              <Heart className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">About 4Ability Hive</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-[1.05]">
              Empowering People With The{' '}
              <span className="inline-block px-4 py-1 bg-white text-orange rounded-2xl">
                Skills That Matter
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              We're not just trainers — we're transformers. Building confident, skilled, industry-ready professionals through proven methodologies and genuine commitment.
            </p>

            <div className="flex flex-wrap gap-3">
              {['ASPIRE', 'ACQUIRE', 'ASCEND', 'AMPLIFY'].map((word, i) => (
                <div key={word} className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                  <span className="font-display font-black text-white text-sm tracking-wider">{word}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* ═══════════════ OUR STORY ═══════════════ */}
      <section ref={storyRef} className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden p-12 min-h-[500px] flex flex-col justify-center"
                   style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
                     style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6), transparent)' }} />

                <div className="relative z-10">
                  <Eye className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-4xl font-display font-black text-white mb-4 leading-tight">
                    Our Vision
                  </h3>
                  <p className="text-2xl text-purple-50 font-semibold leading-snug">
                    Creating a generation of confident, skilled, and industry-ready professionals who lead with impact.
                  </p>

                  {/* Stats overlay */}
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {[
                      { value: '2020', label: 'Founded' },
                      { value: '50+', label: 'Partners' },
                    ].map(s => (
                      <div key={s.label} className="p-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
                        <div className="text-3xl font-display font-black text-white mb-1">{s.value}</div>
                        <div className="text-sm text-purple-100 font-semibold">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="section-label">Our Story</div>
              <h2 className="text-headline text-gray-900">
                From Observation to{' '}
                <span className="gradient-text">Transformation</span>
              </h2>

              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <div className="story-item flex gap-4">
                  <CheckCircle className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                  <p>
                    After years of industry exposure working with thousands of learners, we recognized a <strong className="text-gray-900">significant gap between academic education and workplace expectations</strong>.
                  </p>
                </div>

                <div className="story-item flex gap-4">
                  <CheckCircle className="w-6 h-6 text-purple flex-shrink-0 mt-1" />
                  <p>
                    Every trainer in our network brings <strong className="text-gray-900">10+ years of corporate and academic training experience</strong>. We understand what employers truly expect.
                  </p>
                </div>

                <div className="story-item flex gap-4">
                  <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                  <p>
                    This inspired us to work directly with colleges and corporates to <strong className="text-gray-900">bridge that gap through structured, practical, industry-relevant programs</strong>.
                  </p>
                </div>

                <div className="story-item p-6 rounded-2xl bg-gradient-to-br from-orange/5 to-yellow/5 border-2 border-orange/20 mt-8">
                  <p className="text-gray-900 font-semibold text-xl">
                    <strong className="text-orange">Our Mission:</strong> To equip every student with industry-relevant competencies, confidence, and mindset to become job-ready, employable, and future-ready professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 4A PHILOSOPHY ═══════════════ */}
      <section ref={philosophyRef} className="section relative overflow-hidden"
               style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Our Framework</div>
            <h2 className="text-headline text-gray-900 mb-4">
              The <span className="gradient-text">4A Philosophy</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Our comprehensive approach to transforming learners from potential to performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, idx) => (
              <div
                key={item.title}
                className="philosophy-card group relative overflow-hidden rounded-3xl p-8 bg-white border-2 border-gray-200 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-500">
                    <span className="font-display font-black text-gray-400 group-hover:text-white transition-colors duration-500">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-4xl font-display font-black text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">
                    {item.title}
                  </div>
                  <div className="text-sm font-bold text-orange group-hover:text-white/90 mb-4 transition-colors duration-500">
                    {item.subtitle}
                  </div>
                  <p className="text-gray-600 group-hover:text-white/85 leading-relaxed transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="mt-16 max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-orange to-orange-dark text-white text-center shadow-2xl">
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <p className="text-2xl font-display font-bold leading-snug">
              "Employability is not a skill developed overnight — it's a <span className="underline decoration-4 decoration-yellow">journey that begins early</span> in a student's academic life."
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ VALUES ═══════════════ */}
      <section ref={valuesRef} className="section bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">What Drives Us</div>
            <h2 className="text-headline text-gray-900">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className={`value-card group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${v.bgClass} border-2 ${v.borderClass} ${v.hoverBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-xl ${v.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-2xl font-display font-bold text-gray-900 mb-2 ${v.textHover} transition-colors`}>
                  {v.title}
                </h3>
                <div className={`h-1 w-16 ${v.barBg} rounded-full mb-4 group-hover:w-24 transition-all duration-300`} />
                <p className="text-gray-600 leading-relaxed">
                  {/* Move descriptions into the values data object instead of idx-based inline conditionals */}
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="section bg-gradient-to-br from-purple via-purple-light to-pink-500 text-white">
        <div className="container text-center">
          <h2 className="text-5xl font-display font-black mb-6">
            Ready to Transform Together?
          </h2>
          <p className="text-xl text-purple-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with a team that genuinely cares about creating industry-ready professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-lg px-10 py-5 bg-white text-purple hover:bg-gray-50 shadow-2xl">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/programs" className="btn btn-ghost btn-lg px-10 py-5">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
