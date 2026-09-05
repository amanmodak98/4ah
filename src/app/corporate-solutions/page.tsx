'use client';

import {
  Briefcase,
  Users,
  Trophy,
  Rocket,
  Target,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  BarChart3,
  Zap,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import { faqSchema, itemListSchema, breadcrumbSchema } from '@/lib/metadata';

export default function CorporateSolutionsPage() {
  const heroRef = useFadeInUp();
  const solutionsRef = useStaggerAnimation(6);
  const benefitsRef = useStaggerAnimation(4);

  const solutions = [
    {
      icon: Users,
      title: 'Employee Upskilling',
      description: 'Enhance workforce capabilities through targeted soft skills and professional development programs tailored to your organization.',
      features: [
        'Communication Excellence',
        'Leadership Development',
        'Team Building & Collaboration',
        'Emotional Intelligence',
        'Time & Stress Management',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      description: 'Build career-ready professionals with workplace competencies and industry-aligned skills that drive performance.',
      features: [
        'Workplace Etiquette & Ethics',
        'Professional Communication',
        'Presentation & Public Speaking',
        'Business Writing Skills',
        'Customer Relationship Management',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Performance Enhancement',
      description: 'Improve employee productivity, efficiency, and overall organizational performance through targeted interventions.',
      features: [
        'Problem Solving & Critical Thinking',
        'Decision Making Skills',
        'Analytical & Logical Reasoning',
        'Quality & Efficiency Improvement',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Rocket,
      title: 'Leadership Training',
      description: 'Develop future leaders with strategic thinking, people management, and vision execution capabilities.',
      features: [
        'Strategic Planning & Execution',
        'People Management & Motivation',
        'Change Management and Adaptability',
        'Conflict Resolution',
        'Mentoring & Coaching Skills',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Target,
      title: 'Customized Programs',
      description: 'Tailored training solutions designed to meet specific organizational needs, goals, and industry requirements.',
      features: [
        'Comprehensive Need Assessment (TNA - Training Need Assessment and TNI - Training Need Identification)',
        'Custom Curriculum Design',
        'Flexible Delivery Options',
        'On-site or Hybrid Training',
        'Progress Tracking & Reporting',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Specialized Programs',
      description: 'Targeted wellness and professional development programs focused on holistic employee growth and wellbeing.',
      features: [
        'Stress Management',
        'Emotional Intelligence',
        'Mindfulness',
        'Conflict Resolution',
        'Employee Wellbeing Sessions',
      ],
      gradient: 'from-pink-500 to-purple-500',
    },
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Measurable ROI',
      description: 'Track improvement through structured assessments, performance metrics, and employee feedback.',
      stat: '40%',
      statLabel: 'Average Performance Improvement',
    },
    {
      icon: Shield,
      title: 'Industry Experts',
      description: 'Learn from trainers with extensive corporate experience who understand real workplace challenges.',
      stat: '15+',
      statLabel: 'Years Combined Experience',
    },
    {
      icon: Lightbulb,
      title: 'Practical Approach',
      description: 'Experiential learning with real workplace scenarios, role plays, and hands-on activities.',
      stat: '90%',
      statLabel: 'Application-Based Training',
    },
    {
      icon: Zap,
      title: 'Flexible Delivery',
      description: 'Choose from on-site, online, or hybrid training formats that fit your organizational schedule.',
      stat: '100%',
      statLabel: 'Customizable Solutions',
    },
  ];

  const trainingAreas = [
    'Communication & Presentation Skills',
    'Leadership & Team Management',
    'Time & Stress Management',
    'Problem Solving & Decision Making',
    'Emotional Intelligence',
    'Conflict Management',
    'Customer Service Excellence',
    'Sales & Negotiation Skills',
    'Change Management',
    'Business Etiquette & Professionalism',
    'Digital Communication Skills',
    'Diversity & Inclusion Training',
  ];

  const faqs = [
    {
      question: 'What corporate training programs do you offer?',
      answer: 'We offer comprehensive corporate training including Employee Upskilling, Professional Development, Leadership Training, Performance Enhancement, and fully Customized Programs. Our training covers communication, leadership, emotional intelligence, problem-solving, team building, and more - all tailored to your organizational needs.',
    },
    {
      question: 'How do you customize training for our organization?',
      answer: 'We begin with a comprehensive need assessment to understand your specific challenges, goals, and workforce profile. Based on this, we design custom curriculum, select relevant case studies, and adapt our delivery methods to align with your organizational culture and objectives.',
    },
    {
      question: 'Can training be delivered on-site at our office?',
      answer: 'Yes, we offer flexible delivery options including on-site training at your location, online virtual sessions, or hybrid models. Our trainers can travel to your office anywhere in India, or we can conduct engaging virtual sessions with the same high-quality, interactive experience.',
    },
    {
      question: 'What is the typical duration of corporate training programs?',
      answer: 'Program duration varies based on your needs. We offer short workshops (1-2 days), multi-week training modules (2-8 weeks), and long-term development programs (3-6 months). Each program is designed to fit your organizational calendar and minimize workflow disruption.',
    },
    {
      question: 'How do you measure training effectiveness and ROI?',
      answer: 'We use TNA (Training Need Assessment) and TNI (Training Need Identification), performance metrics, behavioral observations, and participant feedback surveys. You receive detailed reports showing skill improvements, competency gains, and measurable impact on employee performance. Most organizations see 30-40% performance improvement.',
    },
    {
      question: 'What makes your corporate training different from others?',
      answer: 'Our training is 90% application-based with real workplace scenarios, role-plays, and hands-on activities - not passive lectures. Trainers have 15+ years of combined corporate and training experience. We provide ongoing support, progress tracking, and customize every aspect to your organizational context.',
    },
  ];

  // ItemList Schema for corporate solutions
  const corporateSolutionsSchema = itemListSchema(
    solutions.map(s => ({
      name: s.title,
      url: 'https://4ah.in/corporate-solutions',
      description: s.description,
    }))
  );

  // FAQ Schema
  const corporateFAQSchema = faqSchema(faqs);

  // Breadcrumb Schema
  const corporateBreadcrumbSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Corporate Solutions', url: '/corporate-solutions' },
  ]);

  return (
    <div className="pt-20">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSolutionsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateFAQSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateBreadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Corporate Solutions', url: '/corporate-solutions' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400">For Corporates & Organizations</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Transform Your <span className="gradient-text">Workforce</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Empower your workforce with comprehensive training programs designed to enhance productivity, performance, and professional growth. Build a skilled, confident, and future-ready team that drives organizational success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                Request Training Proposal
              </Link>
              <Link href="#solutions" className="btn btn-secondary px-8 py-4">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="gradient-text">Corporate Training Solutions</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-600">
              Comprehensive training programs designed for organizational growth and employee excellence.
            </p>
          </div>

          <div ref={solutionsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="card group hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Header with Icon */}
                <div className={`h-32 bg-gradient-to-br ${solution.gradient} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <solution.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 text-white">
              Why Partner With <span className="gradient-text">4Ability Hive</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-300">
              We bring expertise, experience, and measurable results to every corporate partnership.
            </p>
          </div>

          <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card-dark p-8 text-center hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-orange-400 mb-2">{benefit.stat}</div>
                <div className="text-sm font-bold text-white mb-3">{benefit.statLabel}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="gradient-text">Training Areas</span>
            </h2>
            <div className="divider"></div>
            <p className="section-subtitle text-gray-600">
              Comprehensive training across multiple domains to build a well-rounded workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {trainingAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 card p-4 hover:shadow-xl transition-all group"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-gray-700 font-medium group-hover:text-orange-500 transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our <span className="gradient-text">Training Process</span>
            </h2>
            <div className="divider"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: 'Assess', description: 'Understand organizational needs and skill gaps' },
              { step: 'Design', description: 'Create customized training curriculum' },
              { step: 'Deliver', description: 'Execute training with expert facilitators' },
              { step: 'Measure', description: 'Track progress through assessments' },
              { step: 'Support', description: 'Provide ongoing mentorship and guidance' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="card p-6 text-center hover:shadow-2xl transition-all group bg-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-black text-lg">{idx + 1}</span>
                  </div>
                  <div className="text-lg font-black text-navy-900 mb-2">{item.step}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <FAQ
            faqs={faqs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our corporate training solutions"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="card p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-2 border-orange-500/20 text-center">
              <h2 className="text-4xl font-black text-navy-900 mb-4">
                Ready to Elevate Your <span className="gradient-text">Team's Performance?</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Partner with us to build a skilled, confident, and future-ready workforce that drives organizational success.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-10 py-4 text-lg">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Request Training Proposal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="mailto:info@4ah.in" className="btn btn-secondary px-10 py-4 text-lg">
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
