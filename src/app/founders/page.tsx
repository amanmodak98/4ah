'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';

export default function FoundersPage() {
  const titleRef = useFadeInUp();
  const cardsRef = useStaggerAnimation(5);

  const founders = [
    {
      name: 'Himani S.',
      role: 'Founder & CEO',
      image: '/founders/himani.jpg',
      quote: 'Every student has untapped potential. Our mission is to unlock it through structured learning, real-world practice, and continuous mentorship.',
      vision: 'Building a generation of confident, skilled, and employable professionals who are ready to make an impact from day one.',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Aviral Jain',
      role: 'Co-Founder & COO',
      image: '/founders/aviral.jpg',
      quote: 'True employability is not about clearing interviews—it\'s about being ready to contribute, lead, and grow in the workplace.',
      vision: 'Creating systematic training frameworks that transform academic knowledge into practical workplace competencies.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Anand Tiwari',
      role: 'Co-Founder & COO',
      image: '/founders/anand.jpg',
      quote: 'The gap between education and employment is real. We bridge that gap through experiential learning and continuous skill development.',
      vision: 'Partnering with institutions to design year-wise learning journeys that prepare students progressively for their careers.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Aman Modak',
      role: 'CTO',
      image: '/founders/aman.jpg',
      quote: 'Technology and training must go hand-in-hand. We leverage innovation to make learning accessible, measurable, and impactful.',
      vision: 'Building scalable training platforms that deliver consistent, high-quality learning experiences across institutions.',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'Aarti Tiwari',
      role: 'CMO',
      image: '/founders/aarti.jpg',
      quote: 'Communication is the foundation of every successful career. We help learners find their voice and express their potential with confidence.',
      vision: 'Making employability training a priority from year one, not an afterthought in the final year.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#0A0F1E]">
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="section-title">
              Meet Our <span className="gradient-text">Founders</span>
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed mt-6">
              A team of experienced trainers, facilitators, and industry professionals united by a vision to <span className="text-orange-400 font-semibold">transform students into confident, employment-ready professionals</span>.
            </p>
          </div>

          <div ref={cardsRef} className="space-y-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`card p-10 md:p-12 group hover:scale-[1.02] transition-all ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
                  {/* Founder Image */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${founder.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-white/10">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback placeholder
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      {/* Fallback initials */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-32 h-32 bg-gradient-to-br ${founder.color} rounded-full flex items-center justify-center`}>
                          <span className="text-5xl font-black text-white">
                            {founder.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Founder Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {founder.name}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${founder.color} bg-clip-text text-transparent`}>
                        {founder.role}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="relative p-6 bg-white/5 rounded-2xl border border-white/10">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-orange-500/30" />
                      <p className="text-lg text-neutral-200 leading-relaxed pl-8 italic">
                        "{founder.quote}"
                      </p>
                    </div>

                    {/* Vision */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider">
                        Vision & Commitment
                      </p>
                      <p className="text-neutral-300 leading-relaxed">
                        {founder.vision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Statement */}
          <div className="mt-20 card p-12 text-center max-w-5xl mx-auto bg-gradient-to-br from-orange-500/10 to-purple-500/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="gradient-text">Together, We Transform</span>
            </h3>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Having worked closely with organizations across various industries, we understand what employers truly expect from fresh graduates — not just technical knowledge, but the <span className="text-orange-400 font-semibold">professional competencies that determine long-term career success</span>.
            </p>
            <p className="text-lg text-neutral-400 mt-6">
              After years of industry exposure and working with thousands of learners, we recognized a significant gap between academic education and workplace expectations. This inspired us to work directly with colleges and educational institutions to bridge that gap through structured, practical, and industry-relevant training programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
