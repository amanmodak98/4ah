'use client';

import { useState } from 'react';
import { Star, Award, TrendingUp, Users, Quote } from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import Breadcrumbs from '@/components/Breadcrumbs';
import { faqSchema, reviewSchema, aggregateRatingSchema, breadcrumbSchema } from '@/lib/metadata';

export default function SuccessStoriesPage() {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Placement Officer',
      institution: 'National Institute of Technology',
      type: 'College',
      quote: 'The 4Ability Hive program transformed our final year participants. Their confidence levels skyrocketed, and we saw a 40% improvement in placement success rates. The trainers are exceptional, and the structured curriculum covers everything from aptitude to mock interviews.',
      initials: 'PS',
      rating: 5,
      impact: '40% increase in placements',
      image: '/testimonials/priya.jpg',
    },
    {
      name: 'Rajesh Kumar',
      role: 'HR Manager',
      institution: 'Tech Solutions Pvt Ltd',
      type: 'Corporate',
      quote: 'We partnered with 4AH for employee upskilling. The corporate training program was perfectly customized to our needs. Our team\'s communication and leadership skills improved significantly.',
      initials: 'RK',
      rating: 5,
      impact: 'Team performance +35%',
      image: '/testimonials/rajesh.jpg',
    },
    {
      name: 'Ananya Verma',
      role: 'Final Year Participant',
      institution: 'Engineering College, Batch 2024',
      type: 'Student',
      quote: 'The comprehensive training program prepared me completely for campus placements. The aptitude training and mock interviews gave me the confidence to crack multiple offers. I landed my dream job at a top IT company!',
      initials: 'AV',
      rating: 5,
      impact: '3 job offers received',
      image: '/testimonials/ananya.jpg',
    },
    {
      name: 'Prof. Suresh Menon',
      role: 'Dean - Career Development',
      institution: 'Management Institute',
      type: 'College',
      quote: 'Year-wise training from 4Ability Hive has become integral to our curriculum. Participants develop progressively, and by final year, they are truly industry-ready. A game-changer for our institution.',
      initials: 'SM',
      rating: 5,
      impact: 'Placement rate: 92%',
      image: '/testimonials/suresh.jpg',
    },
    {
      name: 'Kavita Desai',
      role: 'Participant, B.Com 2023',
      institution: 'Commerce College',
      type: 'Student',
      quote: 'I was nervous about placements but the communication skills training changed everything. I can now speak confidently in interviews and group discussions. Got placed in a finance company with excellent package.',
      initials: 'KD',
      rating: 5,
      impact: 'Confident speaker now',
      image: '/testimonials/kavita.jpg',
    },
    {
      name: 'Amit Patel',
      role: 'Training Coordinator',
      institution: 'Pharma Corporation',
      type: 'Corporate',
      quote: 'The leadership development program for our mid-level managers was outstanding. Practical, engaging, and immediately applicable. We\'ve seen measurable improvements in team dynamics and decision-making.',
      initials: 'AP',
      rating: 5,
      impact: 'Leadership scores +42%',
      image: '/testimonials/amit.jpg',
    },
  ];

  const stats = [
    { icon: Users, value: '10k+', label: 'Participants Transformed', color: 'text-orange' },
    { icon: Award, value: '50+', label: 'Partner Institutions', color: 'text-purple' },
    { icon: TrendingUp, value: '95%', label: 'Satisfaction Rate', color: 'text-teal' },
    { icon: Star, value: '4.8/5', label: 'Average Rating', color: 'text-yellow-500' },
  ];

  const filters = ['All', 'College', 'Corporate', 'Learner'];
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filtered = activeFilter === 'All'
    ? testimonials
    : testimonials.filter((t) => t.type === activeFilter);

  const faqs = [
    {
      question: 'Are these testimonials from real participants and institutions?',
      answer: 'Yes, all testimonials are from genuine participants, colleges, and corporate clients who have completed our training programs. We value authentic feedback and these represent real experiences and measurable outcomes from our partnerships.',
    },
    {
      question: 'What kind of results do participants typically achieve?',
      answer: 'Participants typically see 85% improvement in aptitude test scores, 95% boost in communication confidence, and 3x higher interview success rates. Many participants receive multiple job offers and report feeling significantly more prepared for workplace challenges.',
    },
    {
      question: 'How do colleges measure the impact of your training?',
      answer: 'Colleges track improvements through pre and post-training assessments, placement success rates, participant feedback surveys, and employer satisfaction scores. Most institutions report 30-50% improvement in overall placement rates after implementing our programs.',
    },
    {
      question: 'What do corporate clients say about the training effectiveness?',
      answer: 'Corporate clients consistently report 30-40% improvement in employee performance metrics, enhanced team communication, better leadership capabilities, and measurable ROI. Many organizations become long-term partners and extend training across multiple departments.',
    },
    {
      question: 'Can we speak to previous clients before deciding?',
      answer: 'Absolutely. We can connect you with previous clients from similar institutions or organizations. Many of our partners are happy to share their experiences and outcomes. Contact us and we\'ll arrange reference calls based on your specific requirements.',
    },
  ];

  // Review Schemas for all testimonials
  const reviewSchemas = testimonials.map(t => reviewSchema({
    author: t.name,
    reviewBody: t.quote,
    reviewRating: t.rating,
  }));

  // Aggregate Rating Schema
  const aggregateRating = aggregateRatingSchema(5, testimonials.length);

  // FAQ Schema
  const successFAQSchema = faqSchema(faqs);

  // Breadcrumb Schema
  const successBreadcrumbSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Success Stories', url: '/success-stories' },
  ]);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(successFAQSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(successBreadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Success Stories', url: '/success-stories' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="section bg-gradient-to-br from-orange to-orange-dark text-white">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10 border border-white/20">
            <Star className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Success Stories</span>
          </div>
          <h1 className="text-display text-white mb-6">
            Real Results From Real People
          </h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto leading-relaxed">
            Hear from participants, colleges, and corporates who experienced transformation through our training programs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="card p-6 text-center hover:shadow-lg transition-all">
                <Icon className={`w-10 h-10 mx-auto mb-3 ${color}`} />
                <div className="text-4xl font-display font-black text-gray-900 mb-1">{value}</div>
                <div className="text-sm text-gray-500 font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-headline text-gray-900 mb-4">
              Testimonials That <span className="gradient-text">Tell Our Story</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From placement officers to learners to HR managers — real feedback from real partnerships.
            </p>
          </div>

          {/* Filter tabs — click to show only College / Corporate / Student entries */}
          <div className="flex justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all ${
                  filter === activeFilter
                    ? 'bg-orange text-white shadow-orange'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((t) => (
              <div key={t.name} className="card p-8 hover:shadow-xl transition-all">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`badge ${
                    t.type === 'College' ? 'badge-purple' :
                    t.type === 'Corporate' ? 'badge-orange' :
                    'badge-teal'
                  }`}>
                    {t.type}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-orange/20 mb-3" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Impact */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 bg-green-50 border border-green-200">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-green-700">{t.impact}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-lg bg-gradient-to-br from-orange to-orange-dark">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                    <div className="text-sm text-orange font-semibold">{t.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange/10 border border-orange/20">
              <Star className="w-5 h-5 text-orange fill-orange" />
              <span className="font-display font-bold text-gray-900">
                Rated 4.8/5 by 500+ Participants and Institutions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <FAQ
            faqs={faqs}
            title="Frequently Asked Questions"
            subtitle="What you need to know about our success stories and client testimonials"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Ready to Write Your <span className="gradient-text">Success Story?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 50+ institutions and 10,000+ participants who transformed with 4Ability Hive training programs.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
