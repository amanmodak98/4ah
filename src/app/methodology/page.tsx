'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Target,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Award,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { breadcrumbSchema } from '@/lib/metadata';

export default function MethodologyPage() {
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [deliveryRef, deliveryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const methodologySteps = [
    {
      icon: Search,
      number: '01',
      title: 'ASSESS',
      subtitle: 'Understand Current State',
      description: 'Begin with comprehensive pre-training assessments to understand each participant\'s baseline abilities, strengths, and areas for improvement. This diagnostic phase helps us tailor the learning approach to actual needs.',
      details: [
        'Pre-module skill assessments',
        'Baseline aptitude testing',
        'Communication proficiency evaluation',
        'Individual strength mapping',
        'Learning style identification',
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10',
    },
    {
      icon: BookOpen,
      number: '02',
      title: 'LEARN',
      subtitle: 'Acquire Knowledge & Concepts',
      description: 'Deliver structured content through interactive sessions combining concept explanations, real-world examples, and industry contexts. Learning is active, engaging, and connected to practical application.',
      details: [
        'Interactive training sessions',
        'Real workplace scenarios',
        'Industry-relevant examples',
        'Concept clarity with visual aids',
        'Collaborative learning activities',
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10',
    },
    {
      icon: Target,
      number: '03',
      title: 'PRACTICE',
      subtitle: 'Apply & Reinforce',
      description: 'Provide extensive practice opportunities through exercises, simulations, role-plays, group activities, and mock scenarios. Repetition with variation builds mastery and confidence.',
      details: [
        'Hands-on practice exercises',
        'Progressive difficulty levels',
        'Timed test simulations',
        'Group discussions & activities',
        'Mock interviews & presentations',
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10',
    },
    {
      icon: MessageCircle,
      number: '04',
      title: 'FEEDBACK',
      subtitle: 'Identify & Guide',
      description: 'Offer personalized, constructive feedback on every practice attempt. Participants receive clear insights into what they did well, where they need improvement, and specific strategies for growth.',
      details: [
        'Individual performance analysis',
        'Constructive improvement suggestions',
        'Strength recognition',
        'Personalized coaching',
        'Progress tracking reports',
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-500/10 to-orange-500/10',
    },
    {
      icon: TrendingUp,
      number: '05',
      title: 'IMPROVE',
      subtitle: 'Achieve Mastery',
      description: 'Participants revisit concepts, practice with enhanced strategies, and demonstrate measurable improvement. The cycle repeats until competency is achieved across all skill areas.',
      details: [
        'Targeted skill refinement',
        'Post-assessment validation',
        'Measurable performance gains',
        'Confidence building',
        'Readiness certification',
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10',
    },
  ];

  const principles = [
    {
      icon: Users,
      title: 'Experiential Learning',
      description: 'We focus on learning by doing. Rather than relying solely on theoretical concepts, our training emphasizes hands-on practice and real-world application.',
    },
    {
      icon: Target,
      title: 'Continuous Practice',
      description: 'Mastery comes from repetition. Every module creates multiple opportunities to practice, receive feedback, and refine performance.',
    },
    {
      icon: MessageCircle,
      title: 'Constructive Feedback',
      description: 'Personalized feedback is the bridge between practice and improvement. Every participant receives specific, actionable guidance.',
    },
    {
      icon: Award,
      title: 'Progressive Difficulty',
      description: 'We build confidence by starting with foundational skills and gradually increasing complexity as participants demonstrate readiness.',
    },
    {
      icon: Zap,
      title: 'Real Workplace Context',
      description: 'All training is designed around actual recruitment processes and workplace scenarios participants will encounter.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Outcomes',
      description: 'Progress is tracked, validated, and reported. Participants see tangible evidence of their growth throughout the program.',
    },
  ];

  // HowTo Schema for the 5-step methodology
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How 4Ability Hive Training Methodology Works',
    description: 'Our proven 5-step training methodology: Assess, Learn, Practice, Feedback, and Improve - designed to transform participants into workplace-ready professionals.',
    step: methodologySteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      itemListElement: step.details.map((detail, detailIndex) => ({
        '@type': 'HowToDirection',
        position: detailIndex + 1,
        text: detail,
      })),
    })),
    totalTime: 'P10W', // 10 weeks in ISO 8601 duration format
  };

  // Breadcrumb Schema
  const methodologyBreadcrumbSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Methodology', url: '/methodology' },
  ]);

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyBreadcrumbSchema) }}
      />

      {/* Breadcrumbs - needs white background section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Methodology', url: '/methodology' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-amber-200/40 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-white/60 border border-orange-300 rounded-full px-6 py-3 backdrop-blur-xl mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Our Proven Approach</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Our <span className="text-gradient-animate">Training Methodology</span>
            </h1>

            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              A structured, experiential learning framework designed for lasting transformation.
              Every module follows our proven 5-step cycle that moves participants from awareness to mastery.
            </p>
          </motion.div>

          {/* 5-Step Cycle Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-white/80 border border-orange-200 rounded-3xl p-12 backdrop-blur-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 flex-wrap">
                {['ASSESS', 'LEARN', 'PRACTICE', 'FEEDBACK', 'IMPROVE'].map((step, index) => (
                  <div key={step} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-orange">
                        <span className="text-white font-bold text-lg">{step}</span>
                      </div>
                    </motion.div>
                    {index < 4 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '3rem' }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="hidden md:block h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-2"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-700 mt-8 text-lg">
                A continuous improvement cycle applied to every training module
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Methodology Steps */}
      <section ref={stepsRef} className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="section-title mb-6">
              The <span className="text-gradient-animate">Five-Step</span> Process
            </h2>
            <p className="section-subtitle mx-auto">
              Each phase is designed to build on the previous one, creating a systematic path from baseline to mastery
            </p>
          </motion.div>

          <div className="space-y-8">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < methodologySteps.length - 1 && (
                  <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-orange-400 to-orange-500 z-0 hidden lg:block" />
                )}

                <div className={`relative bg-white/90 border border-orange-200 hover:border-orange-300 rounded-3xl p-10 backdrop-blur-xl transition-all duration-500 shadow-md hover:shadow-lg`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Icon & Title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start space-x-6">
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <step.icon className="w-12 h-12 text-white" />
                        </div>
                        <div>
                          <div className="text-6xl font-bold text-orange-300/50 mb-2">{step.number}</div>
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-xl text-orange-600 font-semibold">{step.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Description & Details */}
                    <div className="lg:col-span-8">
                      <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section ref={principlesRef} className="section-padding relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="section-title mb-6 text-gray-900">
              Core <span className="text-gradient-animate">Training Principles</span>
            </h2>
            <p className="section-subtitle mx-auto text-gray-700">
              The foundational beliefs that shape every program we design and deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={principlesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-amber-300/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-full bg-white/90 border border-orange-200 group-hover:border-orange-300 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 shadow-md">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Framework */}
      <section ref={deliveryRef} className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6 text-gray-900">
              <span className="text-gradient-animate">Delivery Framework</span>
            </h2>
            <p className="section-subtitle mx-auto text-gray-700">
              Flexible, practical, and institution-friendly implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Mode',
                value: 'In-person, on campus (hybrid option available)',
                icon: Users,
              },
              {
                title: 'Venue',
                value: 'As designated by the institution',
                icon: Target,
              },
              {
                title: 'Language',
                value: 'English (can be aligned with participant needs)',
                icon: MessageCircle,
              },
              {
                title: 'Resources',
                value: 'AV material, reading material, practice sheets, and assessments',
                icon: BookOpen,
              },
              {
                title: 'Teaching Method',
                value: 'Interactive sessions with role play, group activities, reading material, practice sheets, and assessments',
                icon: Zap,
              },
              {
                title: 'Assessment',
                value: 'Pre & post-module assessments, quizzes, assignments, and progressive tests',
                icon: Award,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 border border-orange-200 hover:border-orange-400 rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-300/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/90 border border-orange-200 rounded-3xl p-16 backdrop-blur-xl text-center shadow-xl"
          >
            <Zap className="w-20 h-20 text-orange-600 mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Experience Our <span className="text-gradient-animate">Methodology</span> in Action
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              See how our proven 5-step process transforms participants into industry-ready professionals
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn btn-primary text-lg group">
                Request a Demo Session
                <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/flagship-program" className="btn btn-outline text-lg group">
                View Our Programs
                <Target className="inline-block ml-2 w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
