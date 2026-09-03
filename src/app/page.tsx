'use client';
import { useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ChevronRight, Zap, Target, TrendingUp, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import FAQ from '@/components/FAQ';
import { faqSchema, reviewSchema, aggregateRatingSchema } from '@/lib/metadata';

const FloatingScene = dynamic(() => import('@/components/3D/FloatingScene'), { ssr: false });

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance — use fromTo so elements never flash invisible on SSR hydration
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo('.hero-badge',    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
        .fromTo('.hero-heading',  { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .fromTo('.hero-sub',      { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-pills',    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-ctas',     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-stat-card',{ opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)' }, '-=0.2');

      // Stats counter
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          document.querySelectorAll('.count-up').forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0');
            const suffix = el.getAttribute('data-suffix') || '';
            gsap.to({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                el.textContent = Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
              onComplete: function () {
                el.textContent = target.toLocaleString() + suffix;
              }
            });
          });
        },
      });

      // Programs reveal
      gsap.fromTo('.program-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: programsRef.current, start: 'top 80%' }
        }
      );

      // Why choose us
      gsap.fromTo('.why-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: whyRef.current, start: 'top 75%' }
        }
      );

      // Testimonials
      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: testimonialsRef.current, start: 'top 80%' }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const programs = [
    {
      icon: '🎯',
      title: 'Aptitude Training',
      desc: 'Quantitative, logical reasoning and data interpretation — with progressive practice and mock tests.',
      tag: 'Comprehensive',
      tagColor: 'badge-orange',
      href: '/programs#aptitude',
      border: 'hover:border-orange',
    },
    {
      icon: '💬',
      title: 'Communication Skills',
      desc: 'Verbal & non-verbal communication, public speaking, vocabulary and corporate correspondence.',
      tag: 'Beginner – Advanced',
      tagColor: 'badge-purple',
      href: '/programs#communication',
      border: 'hover:border-purple',
    },
    {
      icon: '🚀',
      title: 'Soft Skills & Personality',
      desc: 'Leadership, teamwork, EQ, time management, professional grooming and workplace etiquette.',
      tag: 'Year-wise',
      tagColor: 'badge-teal',
      href: '/programs#soft-skills',
      border: 'hover:border-teal',
    },
    {
      icon: '📄',
      title: 'Placement Readiness',
      desc: 'Resume building, LinkedIn, ATS tips, group discussion, HR interviews and mock processes.',
      tag: 'Final Year',
      tagColor: 'badge-orange',
      href: '/programs#placement',
      border: 'hover:border-orange',
    },
    {
      icon: '🏢',
      title: 'Corporate Training',
      desc: 'Customised employee upskilling programs — leadership, performance and change management.',
      tag: 'Enterprise',
      tagColor: 'badge-purple',
      href: '/corporate-solutions',
      border: 'hover:border-purple',
    },
    {
      icon: '⭐',
      title: 'Flagship 90-Hour Program',
      desc: 'Comprehensive aptitude and soft skills training — complete campus placement preparation in one program.',
      tag: 'Most Popular',
      tagColor: 'badge-teal',
      href: '/flagship-program',
      border: 'hover:border-teal',
    },
  ];

  const stats = [
    { value: 10000, suffix: '+', label: 'Learners Trained' },
    { value: 50,   suffix: '+', label: 'Partner Institutions' },
    { value: 95,   suffix: '%', label: 'Satisfaction Rate' },
    { value: 90,   suffix: 'hrs', label: 'Flagship Program' },
  ];

  const whyPoints = [
    { icon: Zap,       title: 'Experiential Learning', desc: 'Real workplace scenarios, role-plays, and continuous practice — not just theory.' },
    { icon: Target,    title: 'Proven Methodology', desc: 'Our 5-step Assess → Learn → Practice → Feedback → Improve cycle delivers results.' },
    { icon: TrendingUp,title: 'Progressive Skill Building', desc: 'Year-wise programs from first year to placement — skills built over time, not overnight.' },
    { icon: Users,     title: 'Expert Trainer Network', desc: 'Every trainer brings 10+ years of corporate and academic experience.' },
  ];

  const testimonials = [
    {
      quote: 'The 4AH program completely transformed our placement numbers. Learners came in confident, articulate, and genuinely ready for interviews.',
      name: 'Dr. Priya Sharma',
      role: 'Placement Officer',
      college: 'National Engineering College',
      initials: 'PS',
      rating: 5,
    },
    {
      quote: 'Their year-wise approach is exactly what colleges need. By final year, learners have already been preparing for three years — it shows.',
      name: 'Prof. Ramesh Nair',
      role: 'Training & Placement Head',
      college: 'State Technical University',
      initials: 'RN',
      rating: 5,
    },
    {
      quote: 'We saw a 40% improvement in aptitude test performance after the flagship program. The structured practice and individual feedback made all the difference.',
      name: 'Ananya Verma',
      role: 'Learner, B.Tech 2024',
      college: 'Engineering College',
      initials: 'AV',
      rating: 5,
    },
    {
      quote: 'Employee communication and leadership skills improved significantly. The trainers really understood our organizational context — highly professional.',
      name: 'Rajesh Kumar',
      role: 'HR Manager',
      college: 'Tech Solutions Pvt Ltd',
      initials: 'RK',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What is 4Ability Hive and what services do you provide?',
      answer: '4Ability Hive is a Learning & Development company specializing in employability training for learners and corporate professionals. We offer comprehensive programs in soft skills, communication, aptitude training, placement readiness, and corporate training solutions across India.',
    },
    {
      question: 'How does the year-wise learning approach work for college learners?',
      answer: 'Our progressive approach starts from first year with foundation skills (self-awareness, grooming, learning mindset), builds professional communication and adaptability in second year, develops leadership and emotional intelligence in third year, and culminates with advanced aptitude and placement preparation in final year. This ensures learners are continuously developing rather than cramming skills at the last minute.',
    },
    {
      question: 'What makes your training methodology different from traditional classroom teaching?',
      answer: 'We follow a 5-step experiential learning methodology: Assess → Learn → Practice → Feedback → Improve. Unlike passive lectures, 70% of our time is spent on hands-on activities, role-plays, simulations, and continuous feedback. Learners actively participate and apply what they learn in real workplace scenarios.',
    },
    {
      question: 'What results can institutions expect from your training programs?',
      answer: 'Institutions typically see 85% improvement in aptitude scores, 95% boost in communication confidence, and 3x higher interview success rates compared to untrained peers. We provide pre and post-assessment reports, individual feedback, and measurable outcomes for every program.',
    },
    {
      question: 'Do you offer training delivery in both online and offline modes?',
      answer: 'Yes, we offer flexible delivery modes including in-person classroom sessions, virtual live sessions, and hybrid models based on institutional requirements and preferences. All modes maintain our interactive, practice-first methodology.',
    },
    {
      question: 'How can my college or organization partner with 4Ability Hive?',
      answer: 'Simply reach out through our contact form or email us at info@4ah.in. We\'ll schedule a consultation to understand your needs, discuss program options, and design a customized training proposal aligned with your calendar and goals.',
    },
  ];

  // Review schemas for testimonials
  const reviewSchemas = testimonials.map(t => reviewSchema({
    author: t.name,
    reviewBody: t.quote,
    reviewRating: t.rating,
  }));

  // Aggregate rating schema
  const aggregateRating = aggregateRatingSchema(5, testimonials.length);

  // FAQ Schema
  const homeFAQSchema = faqSchema(faqs);

  return (
    <div className="pt-20">
      {/* JSON-LD Schema */}
      {reviewSchemas.map((schema, idx) => (
        <script
          key={`review-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFAQSchema) }}
      />

      {/* ═══════════════ MODERN HERO SECTION ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F1F35] to-[#000000]"
      >
        {/* 3D Background Scene */}
        <Suspense fallback={null}>
          <FloatingScene />
        </Suspense>

        {/* Gradient Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-10 opacity-20"
             style={{
               backgroundImage: `linear-gradient(rgba(255,107,53,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,107,53,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />

        {/* Hero Content */}
        <div className="container relative z-20 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
                  style={{
                    background: 'rgba(255,107,53,0.1)',
                    border: '1px solid rgba(255,107,53,0.3)'
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                  <span className="text-sm font-medium text-gray-200 tracking-wide">
                    10,000+ Careers Transformed
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  className="font-display font-bold text-white mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="block"
                  >
                    Transform Into
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="block bg-gradient-to-r from-[#FF6B35] via-[#F97316] to-[#3B82F6] bg-clip-text text-transparent"
                  >
                    Industry-Ready
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="block"
                  >
                    Professionals
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
                >
                  Join <span className="font-semibold text-[#FF6B35]">10,000+ learners</span> who transformed their careers with our proven system combining aptitude, communication & workplace readiness training.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
                  >
                    <span className="relative z-10">Start Your Transformation</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="/flagship-program"
                    className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Explore Programs</span>
                  </Link>
                </motion.div>

                {/* 4A Framework Pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {['ASPIRE', 'ACQUIRE', 'ASCEND', 'AMPLIFY'].map((word, i) => (
                    <motion.div
                      key={word}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="px-4 py-2 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-default"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <span className="text-sm font-bold text-white tracking-wider">{word}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: Stats Bento Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                    className="hero-stat-card group relative p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-default"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-display font-black mb-2 bg-gradient-to-br from-[#FF6B35] to-[#3B82F6] bg-clip-text text-transparent">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
      </section>

      {/* ═══════════════ RESULTS SECTION ═══════════════ */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange/5 to-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal/5 to-blue-500/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-4">
              <Zap className="w-4 h-4 text-orange" />
              <span className="text-sm font-bold text-orange">Real Impact, Real Numbers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
              What Do Learners <span className="gradient-text">Actually Achieve?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes from learners who completed our comprehensive training programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Aptitude Improvement */}
            <div className="p-10 rounded-3xl border-2 border-orange/20 hover:border-orange/40 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="text-7xl font-display font-black mb-2 bg-gradient-to-br from-orange to-orange-dark bg-clip-text text-transparent">
                  85%
                </div>
                <div className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Aptitude Improvement
                </div>
                <p className="text-gray-600 font-medium">
                  Average score increase
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  Learners show dramatic improvement in quantitative, logical reasoning, and data interpretation after our structured training
                </p>
              </div>
            </div>

            {/* Communication Boost */}
            <div className="p-10 rounded-3xl border-2 border-purple/20 hover:border-purple/40 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="text-7xl font-display font-black mb-2 bg-gradient-to-br from-purple to-purple-light bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Communication Boost
                </div>
                <p className="text-gray-600 font-medium">
                  Self-reported confidence
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  Learners report significant confidence gains in verbal communication, presentations, and professional interactions
                </p>
              </div>
            </div>

            {/* Interview Success */}
            <div className="p-10 rounded-3xl border-2 border-teal/20 hover:border-teal/40 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-center">
                <div className="text-7xl font-display font-black mb-2 bg-gradient-to-br from-teal to-cyan-500 bg-clip-text text-transparent">
                  3x
                </div>
                <div className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Interview Success
                </div>
                <p className="text-gray-600 font-medium">
                  vs. untrained peers
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  Our candidates are 3 times more likely to clear interviews compared to peers without structured training
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Join <span className="font-bold text-gray-900">10,000+ learners</span> who transformed their careers with 4Ability Hive
            </p>
            <Link href="/success-stories" className="btn btn-lg bg-gradient-to-r from-orange to-purple text-white hover:shadow-2xl hover:scale-105 transition-all inline-flex">
              Read Success Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROGRAMS ═══════════════ */}
      <section ref={programsRef} className="section bg-gray-50">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">Our Training Solutions</div>
            <h2 className="text-headline text-gray-900 mb-4">
              Programs That <span className="gradient-text">Create Careers</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From aptitude to soft skills, from college freshers to corporate professionals — we cover every competency that matters.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className={`program-card card p-7 block group transition-all duration-300 ${p.border}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{p.icon}</span>
                  <span className={`badge ${p.tagColor}`}>{p.tag}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-orange transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-orange font-bold text-sm group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/programs" className="btn btn-outline btn-lg">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section ref={statsRef} className="section"
               style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: 10000, suffix: '+', label: 'Learners Trained', desc: 'Across colleges & corporates' },
              { value: 50,   suffix: '+', label: 'Institutions',     desc: 'Colleges and corporate clients' },
              { value: 90,   suffix: 'hrs', label: 'Flagship Program',desc: 'Comprehensive training' },
              { value: 95,   suffix: '%',  label: 'Satisfaction',    desc: 'From learners & institutions' },
            ].map((s) => (
              <div key={s.label} className="py-4">
                <div className="text-5xl md:text-6xl font-display font-black leading-none mb-2 opacity-95">
                  <span className="count-up" data-target={s.value} data-suffix={s.suffix}>0{s.suffix}</span>
                </div>
                <div className="font-display font-bold text-lg mb-1">{s.label}</div>
                <div className="text-orange-100 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section ref={whyRef} className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Illustration / Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden"
                   style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '3rem', minHeight: '480px' }}>
                {/* Gradient blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
                     style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.6) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20"
                     style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)' }} />

                <div className="relative z-10">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-2xl font-display font-black text-white mb-4">
                    Why Is Employability a Process of Steps,<br />Not a Last-Minute Effort?
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Learners who start in first year arrive at placements with years of practice.
                    Our progressive, year-wise approach ensures your learners are always ahead.
                  </p>

                  {/* Timeline preview */}
                  <div className="space-y-4">
                    {['Year 1 — Foundation & Confidence', 'Year 2 — Professional Skills', 'Year 3 — Leadership & Growth', 'Year 4 — Placement Excellence'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                             style={{ background: idx === 3 ? '#F97316' : 'rgba(249,115,22,0.20)', color: idx === 3 ? 'white' : '#F97316' }}>
                          {idx + 1}
                        </div>
                        <span className={`text-sm font-semibold ${idx === 3 ? 'text-orange' : 'text-gray-300'}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Points */}
            <div className="order-1 lg:order-2">
              <div className="section-label mb-4">Why 4Ability Hive</div>
              <h2 className="text-headline text-gray-900 mb-4">
                Why Are We a Partner,<br />
                <span className="gradient-text">Not Just a Vendor?</span>
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Our commitment goes beyond classroom sessions — we strive to create lasting transformations
                through experiential learning and continuous mentorship.
              </p>

              <div className="space-y-6">
                {whyPoints.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="why-item flex gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(249,115,22,0.10)' }}>
                      <Icon className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <Link href="/about" className="btn btn-outline">
                  Our Story
                </Link>
                <Link href="/college-solutions" className="btn btn-primary">
                  College Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section ref={testimonialsRef} className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">Success Stories</div>
            <h2 className="text-headline text-gray-900">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card card p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed text-lg mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg"
                       style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                    <div className="text-sm text-orange font-semibold">{t.college}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/success-stories" className="btn btn-outline btn-lg">
              Read All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section className="section bg-white">
        <div className="container">
          <FAQ
            faqs={faqs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about 4Ability Hive"
          />
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="section"
               style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-orange text-sm font-bold uppercase tracking-widest mb-6">
              Ready to Get Started?
            </p>
            <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
              Let's Build Confident,<br />
              <span className="gradient-text">Industry-Ready Graduates</span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Partner with 4Ability Hive to create a long-term capability development roadmap
              for your institution or organisation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Request a Proposal
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/flagship-program" className="btn btn-ghost btn-lg">
                View Flagship Program
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                No placement fees
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Customised curriculum
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Lifetime mentorship
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Individual feedback reports
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
