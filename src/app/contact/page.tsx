'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Users, CheckCircle2, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', institution: '', institutionType: 'college', studentCount: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', institution: '', institutionType: 'college', studentCount: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F97316 0%, #EC4899 60%, #7C3AED 100%)' }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 animate-pulse"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.6), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50"
             style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/20 backdrop-blur-sm border border-white/30">
              <Send className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-black text-white leading-tight mb-6">
              Let's Transform
              <br />
              <span className="inline-block px-4 py-1 bg-white text-orange rounded-2xl mt-2">
                Students Together
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              Partner with 4Ability Hive and build confident, skilled, industry-ready graduates. Request a free training proposal today.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ FORM + INFO ═══════ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="card p-10 bg-white">
                <h2 className="text-3xl font-display font-black text-gray-900 mb-2">
                  Request Training Proposal
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill the form below and we'll send a customised proposal within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-gray-900 mb-3">Thank You!</h3>
                    <p className="text-gray-600 mb-8">
                      We've received your request. Our team will contact you within 24 hours with a customised proposal.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-outline">
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="john@institution.edu"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Institution Name *</label>
                        <input
                          type="text"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="Your Institution"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Institution Type *</label>
                        <select
                          name="institutionType"
                          value={formData.institutionType}
                          onChange={handleChange}
                          required
                          className="input"
                        >
                          <option value="college">College / University</option>
                          <option value="corporate">Corporate</option>
                          <option value="school">School</option>
                          <option value="training">Training Institute</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Number of Students *</label>
                        <input
                          type="text"
                          name="studentCount"
                          value={formData.studentCount}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="e.g., 100-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Training Requirements *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input resize-none"
                        placeholder="Tell us about your training needs, preferred dates, and specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Submit Request
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="card p-8 bg-white">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail,     label: 'Email',    value: 'info@4ah.in',          href: 'mailto:info@4ah.in',  colorClass: 'bg-orange/10',    textClass: 'text-orange'    },
                    { icon: Phone,    label: 'Phone',    value: '+91 99999 99999',       href: 'tel:+919999999999',   colorClass: 'bg-purple/10',    textClass: 'text-purple'    },
                    { icon: MapPin,   label: 'Location', value: 'India',                 href: null,                  colorClass: 'bg-teal/10',      textClass: 'text-teal'      },
                    { icon: Calendar, label: 'Hours',    value: 'Mon-Sat: 9 AM - 6 PM', href: null,                  colorClass: 'bg-blue-500/10',  textClass: 'text-blue-500'  },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.colorClass}`}>
                        <item.icon className={`w-6 h-6 ${item.textClass}`} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className={`${item.textClass} hover:underline font-semibold`}>
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-gray-600">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next */}
              <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}>
                <Sparkles className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-5">What Happens Next?</h3>
                <ul className="space-y-4">
                  {[
                    'We review your requirements within 24 hours',
                    'Our team schedules a consultation call',
                    'We prepare a customised training proposal',
                    'You review and we finalise the program',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-white/90 font-medium">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: 'College Solutions',  href: '/college-solutions', colorClass: 'bg-purple/5 border-purple/20', iconClass: 'text-purple'  },
                  { icon: Users,     label: 'Corporate Training', href: '/corporate-solutions', colorClass: 'bg-teal/5 border-teal/20',   iconClass: 'text-teal'    },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`card p-6 text-center hover:shadow-xl transition-all group ${link.colorClass}`}
                  >
                    <link.icon className={`w-10 h-10 mx-auto mb-3 ${link.iconClass} group-hover:scale-110 transition-transform`} />
                    <div className="font-bold text-gray-900 text-sm">{link.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST SECTION ═══════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 bg-green-50 border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-700">Trusted by 50+ Institutions</span>
            </div>

            <h2 className="text-4xl font-display font-black text-gray-900 mb-6">
              Join Leading Institutions Who Trust{' '}
              <span className="gradient-text">4Ability Hive</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { value: '24 hrs', label: 'Response Time' },
                { value: '95%', label: 'Satisfaction Rate' },
                { value: '1000+', label: 'Students Trained' },
                { value: 'Custom', label: 'Flexible Programs' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-gradient-to-br from-orange/5 to-purple/5 border border-orange/20">
                  <div className="text-4xl font-display font-black text-orange mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
