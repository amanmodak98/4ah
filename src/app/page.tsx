'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ChevronRight, Zap, Target, TrendingUp, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        onEnter: () => {
          document.querySelectorAll('.count-up').forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0');
            gsap.from({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                el.textContent = Math.round(this.targets()[0].val).toLocaleString() +
                  (el.getAttribute('data-suffix') || '');
              },
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
      tag: '60 hrs',
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
      desc: '60 hrs aptitude + 30 hrs soft skills — complete campus placement preparation in one program.',
      tag: 'Most Popular',
      tagColor: 'badge-teal',
      href: '/flagship-program',
      border: 'hover:border-teal',
    },
  ];

  const stats = [
    { value: 1000, suffix: '+', label: 'Students Trained' },
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
      quote: 'The 4AH program completely transformed our placement numbers. Students came in confident, articulate, and genuinely ready for interviews.',
      name: 'Dr. Priya Sharma',
      role: 'Placement Officer',
      college: 'National Engineering College',
      initials: 'PS',
      rating: 5,
    },
    {
      quote: 'Their year-wise approach is exactly what colleges need. By final year, students have already been preparing for three years — it shows.',
      name: 'Prof. Ramesh Nair',
      role: 'Training & Placement Head',
      college: 'State Technical University',
      initials: 'RN',
      rating: 5,
    },
    {
      quote: 'We saw a 40% improvement in aptitude test performance after the flagship program. The structured practice and individual feedback made all the difference.',
      name: 'Ananya Verma',
      role: 'Student, B.Tech 2024',
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

  return (
    <div className="pt-20">
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)' }}
      >
        {/* Gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30"
             style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.4) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
             style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container relative z-10 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-orange mb-8"
                 style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              India's Premier L&D Training Partner
            </div>

            {/* Heading */}
            <h1 className="hero-heading text-display text-white mb-6 leading-[1.08]">
              Transform Students Into{' '}
              <span className="gradient-text">Industry-Ready</span>{' '}
              Professionals
            </h1>

            {/* Sub */}
            <p className="hero-sub text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Comprehensive employability training that bridges the gap between academic education
              and workplace expectations — building confidence, skills, and careers.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['ASPIRE', 'ACQUIRE', 'ASCEND', 'AMPLIFY'].map((word) => (
                <span key={word} className="hero-pills px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-orange"
                      style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.20)' }}>
                  {word}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/flagship-program" className="btn btn-ghost btn-lg">
                <Play className="w-5 h-5" />
                Explore Programs
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat-card p-5 rounded-2xl text-center"
                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <div className="text-3xl font-display font-black mb-1"
                       style={{ color: '#F97316' }}>
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
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
              { value: 1000, suffix: '+', label: 'Students Trained', desc: 'Across colleges & corporates' },
              { value: 50,   suffix: '+', label: 'Institutions',     desc: 'Colleges and corporate clients' },
              { value: 90,   suffix: 'hrs', label: 'Flagship Program',desc: 'Comprehensive training' },
              { value: 95,   suffix: '%',  label: 'Satisfaction',    desc: 'From students & institutions' },
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
                    Employability is a Journey,<br />Not a Last-Minute Effort
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Students who start in first year arrive at placements with years of practice.
                    Our progressive, year-wise approach ensures your students are always ahead.
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
                We're a Partner,<br />
                <span className="gradient-text">Not Just a Vendor</span>
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
