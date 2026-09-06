'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Quote, Linkedin, Mail, Sparkles, Heart, Target, Users } from 'lucide-react';
import { useFadeInUp, useStaggerAnimation } from '@/hooks/useGSAP';
import Breadcrumbs from '@/components/Breadcrumbs';
import { breadcrumbSchema } from '@/lib/metadata';

export default function FoundersPage() {
  const titleRef = useFadeInUp();
  const cardsRef = useStaggerAnimation(5);

  const founders = [
    {
      name: 'Himani S.',
      role: 'Founder & CEO | Soft Skills Trainer, Communication Skills Coach, Behavioral & Personality Development Facilitator',
      image: '/founders/himani.jpg',
      linkedin: 'https://linkedin.com/in/himani-s',
      email: 'himani@4ah.in',
      quote: 'Every individual has untapped potential. My role is not merely to make them learn, but to create the environment, practice and guidance that helps that potential become capability.',
      vision: 'To build confident, skilled and adaptable individuals—and enable organisations to build an efficient, capable and future-ready workforce.',
      expertise: ['Communication Skills', 'Leadership Development', 'Personality Development', 'Interpersonal & Behavioural Skills', 'Workplace Readiness', 'Employability', 'Personal Effectiveness', 'Adaptability & Resilience', 'Change Management', 'Emotional Intelligence', 'Coaching & Mentoring', 'Verbal Aptitude Training'],
      background: '15+ years of experience in Training & Facilitation. Certified by Google, NSD. Passionate Learning & Development professional specializing in campus-to-corporate skill development and corporate behavioural training.\n\nHas worked extensively with students, young professionals, educators, and corporate teams across academic institutions, government ITIs, CSR initiatives, and corporate programmes. Delivers practical, high-impact training focused on helping individuals strengthen workplace skills, enhance professional presence, and achieve lasting growth.\n\nBelieves in experiential and learner-centric learning—creating opportunities for participants to learn, participate, practise, reflect and apply skills in real-world situations.\n\nFor her, training has never been about status—it\'s about impact. True training is not just about sharing knowledge—it is about building confidence, developing skills, changing mindsets, and creating positive behavioral transformation.',
      color: 'from-orange-500 to-red-500',
      tagBg: 'bg-orange/10',
      tagText: 'text-orange',
      tagBorder: 'border-orange/20',
      textColor: 'text-orange',
      borderColor: 'border-orange',
    },
    {
      name: 'Anand Tiwari',
      role: 'Co-Founder & Head of Training',
      image: '/founders/anand.jpg',
      linkedin: 'https://linkedin.com/in/anand-tiwari',
      email: 'anand@4ah.in',
      quote: 'Skills are not just taught—they are practiced, refined, and internalized through real-world application and continuous feedback.',
      vision: 'Bridging the employability gap by delivering practical, industry-aligned training that makes learners workplace-ready from their first day.',
      expertise: ['Aptitude Training', 'Technical Skills', 'Assessment Design', 'Trainer Development'],
      background: '15+ years of experience in aptitude and soft skills training, specializing in quantitative reasoning, logical thinking, and professional development.\n\nDesigned proprietary assessment frameworks that are now used by leading colleges across India. Expert in creating structured curricula that combine theoretical knowledge with hands-on practice.\n\nTrained over 5,000+ individuals with an impressive 90%+ placement success rate. Passionate about bridging the employability gap through practical, industry-aligned training that prepares individuals to be workplace-ready from day one.\n\nBelieves that skills are not just taught—they are practiced, refined, and internalized through real-world application and continuous feedback.',
      color: 'from-purple-500 to-pink-500',
      tagBg: 'bg-purple/10',
      tagText: 'text-purple',
      tagBorder: 'border-purple/20',
      textColor: 'text-purple',
      borderColor: 'border-purple',
    },
    {
      name: 'Aman Kumar Modak',
      role: 'Co-Founder & Head of Technology | Full-Stack Developer | OCI DevOps Professional | GenAI Academy Certified',
      image: '/founders/aman.jpg',
      linkedin: 'https://linkedin.com/in/aman-modak',
      email: 'aman@4ah.in',
      quote: 'Technology should amplify human potential. We build tools that make learning measurable, feedback actionable, and outcomes transparent.',
      vision: 'Leveraging cutting-edge cloud technologies, DevOps practices, and AI to scale personalized learning experiences and provide data-driven insights that continuously improve training outcomes.',
      expertise: ['Full-Stack Development (Next.js, React, Node.js)', 'DevOps & Cloud (AWS, OCI, Docker, Kubernetes)', 'AI/ML & Generative AI (Vertex AI, Gemini)', 'Database Management (PostgreSQL, MySQL, Prisma)', 'CI/CD & Infrastructure as Code (Terraform)', 'EdTech Solutions & Learning Analytics', 'Digital Transformation', 'REST APIs & Microservices'],
      background: 'Currently pursuing Bachelor of Technology in Computer Science at Roorkee Institute of Technology, bringing strong academic rigor combined with extensive hands-on technical experience.\n\nCertified as an Oracle Cloud Infrastructure 2025 DevOps Professional with expertise in CI/CD automation, containerized microservices with Kubernetes, Infrastructure as Code using Terraform, DevSecOps practices, and cloud monitoring. Also holds Google Cloud GenAI Academy Certification with skills in Vertex AI, Gemini APIs, Imagen, and Multimodal RAG.\n\nFull-Stack Developer with proven experience building production-grade applications including Travo Bharat (comprehensive travel platform) and Kashavi Infotech (AI-powered digital marketing website), both featuring complete admin dashboards and deployed on AWS with Docker and CI/CD pipelines.\n\nSoftware Developer at Infirexa.tech, where developed enterprise-level ERP system for colleges, building scalable solutions for educational institutions.\n\nAIMA Student Management Games Finalist \'25, demonstrating strategic business acumen alongside technical expertise. Passionate about leveraging cloud technologies, DevOps practices, and AI to drive impactful solutions in the EdTech space, making learning measurable and outcomes transparent.',
      color: 'from-emerald-500 to-teal-500',
      tagBg: 'bg-teal/10',
      tagText: 'text-teal',
      tagBorder: 'border-teal/20',
      textColor: 'text-teal',
      borderColor: 'border-teal',
    },
    {
      name: 'Aarti Pandey',
      role: 'Soft Skills & Cosmetology Trainer',
      image: '/founders/aarti.jpg',
      linkedin: 'https://linkedin.com/in/aarti-pandey',
      email: 'aarti@4ah.in',
      quote: 'My goal is to help every individual become more confident, professional, presentable, and future-ready.',
      vision: 'Building confidence, developing skills, changing mindsets, and creating positive behavioral transformation in every individual.',
      expertise: ['Communication Skills', 'Personality Development', 'Presentation Skills', 'Teamwork & Leadership', 'Emotional Intelligence', 'Interview Skills', 'Workplace Etiquette', 'Professional Grooming', 'Personal Appearance', 'Client Handling'],
      background: '5 years of professional training experience as a passionate and learner-focused Soft Skills Facilitator and Cosmetology Trainer.\n\nConducts interactive, activity-based, and learner-centric training sessions empowering individuals through effective communication, confidence building, personality development, and professional grooming.\n\nStrong expertise in Personal Appearance, Client Handling, and Grooming Etiquette. Understands the importance of confident self-presentation, body language, and professional personality in personal and workplace success.\n\nBelieves that true training is not just about sharing knowledge—it is about building confidence, developing skills, changing mindsets, and creating positive behavioral transformation.',
      color: 'from-amber-500 to-orange-500',
      tagBg: 'bg-amber-500/10',
      tagText: 'text-amber-500',
      tagBorder: 'border-amber-500/20',
      textColor: 'text-amber-500',
      borderColor: 'border-amber-500',
    },
  ];

  // Person schemas for each founder
  const personSchemas = founders.map(founder => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: founder.name,
    jobTitle: founder.role,
    worksFor: {
      '@type': 'Organization',
      name: '4Ability Hive',
      url: 'https://4ah.in',
    },
    sameAs: founder.linkedin,
    email: founder.email,
    description: founder.background,
    knowsAbout: founder.expertise,
  }));

  // Breadcrumb Schema
  const foundersBreadcrumbSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Founders', url: '/founders' },
  ]);

  return (
    <div className="pt-20">
      {/* JSON-LD Schema for founders */}
      {personSchemas.map((schema, idx) => (
        <script
          key={`person-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foundersBreadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container">
          <Breadcrumbs items={[{ name: 'Founders', url: '/founders' }]} />
        </div>
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-20 bg-gradient-to-br from-orange to-purple blur-3xl" />

        <div className="container relative z-10 py-20" ref={titleRef}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange" />
              <span className="text-sm font-bold text-orange">Meet the Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
              The People Behind{' '}
              <span className="bg-gradient-to-r from-orange via-orange-light to-purple bg-clip-text text-transparent">
                4Ability Hive
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A team of passionate educators, trainers, and technologists united by one mission:
              <span className="text-white font-semibold"> transforming learners into workplace-ready professionals</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUNDER CARDS ═══════════════ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="space-y-12" ref={cardsRef}>
            {founders.map((founder, index) => (
              <div
                key={index}
                className="card p-10 md:p-12 group hover:scale-[1.02] transition-all"
              >
                <div className="grid lg:grid-cols-[300px_1fr] gap-10 items-start">
                  {/* Left: Photo + Quick Links */}
                  <div className="space-y-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity`} />
                      <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 300px, 300px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Contact links */}
                    <div className="flex gap-3">
                      <Link
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors group/link"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">LinkedIn</span>
                      </Link>
                      <Link
                        href={`mailto:${founder.email}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors group/link"
                      >
                        <Mail className="w-4 h-4 text-gray-700" />
                        <span className="text-sm font-semibold text-gray-700">Email</span>
                      </Link>
                    </div>

                    {/* Expertise tags */}
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Expertise</div>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${founder.tagBg} ${founder.tagText} border ${founder.tagBorder}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-display font-black text-gray-900 mb-2">
                        {founder.name}
                      </h2>
                      <p className={`text-lg font-bold mb-4 ${founder.textColor}`}>
                        {founder.role}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${founder.color} bg-opacity-5 border-l-4 ${founder.borderColor}`}>
                      <Quote className={`w-8 h-8 opacity-30 mb-3 ${founder.textColor}`} />
                      <p className="text-lg text-gray-700 italic leading-relaxed font-medium">
                        "{founder.quote}"
                      </p>
                    </div>

                    {/* Vision */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Vision</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {founder.vision}
                      </p>
                    </div>

                    {/* Background & Experience - Always visible */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Background & Experience</h3>
                      <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                        <ul className="space-y-3">
                          {founder.background.split('\n\n').map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className={`w-2 h-2 rounded-full ${founder.tagBg} ${founder.borderColor} border-2 mt-2 flex-shrink-0`}></span>
                              <span className="text-gray-700 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOUNDING STORY ═══════════════ */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 mb-4">
              <Heart className="w-4 h-4 text-purple" />
              <span className="text-sm font-bold text-purple">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
              How{' '}
              <span className="bg-gradient-to-r from-orange to-purple bg-clip-text text-transparent">
                4Ability Hive
              </span>{' '}
              Began
            </h2>
          </div>

          <div className="space-y-12">
            {/* Timeline items */}
            <div className="relative pl-8 border-l-4 border-orange/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange border-4 border-white shadow-lg" />
              <div className="pb-8">
                <div className="text-sm font-bold text-orange mb-2">2018</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">The Problem We Saw</h3>
                <p className="text-gray-600 leading-relaxed">
                  After years in corporate training and recruitment, we witnessed a persistent gap: talented graduates struggled
                  in interviews and workplaces—not due to lack of technical knowledge, but because they lacked essential professional
                  competencies like communication, problem-solving, and workplace readiness.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-4 border-purple/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple border-4 border-white shadow-lg" />
              <div className="pb-8">
                <div className="text-sm font-bold text-purple mb-2">2019</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">The Mission Takes Shape</h3>
                <p className="text-gray-600 leading-relaxed">
                  We came together—educators, trainers, technologists—with a shared belief: employability is a skill that can be taught,
                  practiced, and mastered. We designed our proprietary 5-step methodology (Assess → Learn → Practice → Feedback → Improve)
                  and began piloting programs with colleges across India.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-4 border-teal/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-teal border-4 border-white shadow-lg" />
              <div className="pb-8">
                <div className="text-sm font-bold text-teal mb-2">2020-Present</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Growing Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, 4Ability Hive has trained 10,000+ participants across 50+ institutions. Our programs span aptitude training, soft skills,
                  communication, and workplace readiness—delivered through a blend of classroom training, online modules, and continuous mentorship.
                  But numbers aside, what drives us every day is seeing confident, articulate, job-ready professionals walk out of our programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM CULTURE ═══════════════ */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
              <Users className="w-4 h-4 text-orange" />
              <span className="text-sm font-bold text-orange">Our Culture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
              What We{' '}
              <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Beyond skills and programs, we're united by core values that shape how we work, train, and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Impact Over Scale',
                desc: 'We measure success not by how many we train, but by how many lives we transform. Every learner matters.',
              },
              {
                icon: Heart,
                title: 'Empathy-Driven Training',
                desc: 'We understand the anxiety, the pressure, and the dreams of every learner. Training is personal, not transactional.',
              },
              {
                icon: Sparkles,
                title: 'Continuous Evolution',
                desc: 'Industries change. Skills evolve. We stay ahead by constantly refining our methodologies, content, and delivery.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange to-purple flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING MESSAGE ═══════════════ */}
      <section className="section bg-white">
        <div className="container max-w-4xl text-center">
          <div className="card p-12 bg-gradient-to-br from-orange/5 to-purple/5 border-2 border-orange/20">
            <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-6">
              <span className="gradient-text">Together, We Transform</span>
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Having worked closely with organizations across various industries, we understand what employers truly expect from fresh graduates — not just technical knowledge, but the <span className="text-orange font-semibold">professional competencies that determine long-term career success</span>.
            </p>
            <p className="text-lg text-gray-600 mb-10">
              After years of industry exposure and working with thousands of learners, we recognized a significant gap between academic education and workplace expectations. This inspired us to work directly with colleges and educational institutions to bridge that gap through structured, practical, and industry-relevant training programs.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-lg inline-flex"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
