'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { useFadeInUp, useSlideIn } from '@/hooks/useGSAP';

export default function ContactPage() {
  const heroRef = useFadeInUp();
  const formRef = useSlideIn('left');
  const infoRef = useSlideIn('right');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    institutionType: 'college',
    studentCount: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        institutionType: 'college',
        studentCount: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
              <Send className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Let's <span className="gradient-text">Transform</span> Your Students Together
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Partner with 4Ability Hive and build a generation of confident, skilled, and employment-ready professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="card p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-navy-900 mb-2">
                  Request a Training Proposal
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a customized training proposal.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                    <p className="text-gray-700">
                      We've received your request. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-navy-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-navy-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-navy-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label htmlFor="institution" className="block text-sm font-bold text-navy-900 mb-2">
                          Institution Name *
                        </label>
                        <input
                          type="text"
                          id="institution"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="Your Institution"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="institutionType" className="block text-sm font-bold text-navy-900 mb-2">
                          Institution Type *
                        </label>
                        <select
                          id="institutionType"
                          name="institutionType"
                          value={formData.institutionType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        >
                          <option value="college">College / University</option>
                          <option value="corporate">Corporate</option>
                          <option value="school">School</option>
                          <option value="training">Training Institute</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="studentCount" className="block text-sm font-bold text-navy-900 mb-2">
                          Number of Students / Employees *
                        </label>
                        <input
                          type="text"
                          id="studentCount"
                          name="studentCount"
                          value={formData.studentCount}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="e.g., 100-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-navy-900 mb-2">
                        Your Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your training needs, preferred dates, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Submit Request
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-8">
              {/* Contact Details */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 mb-1">Email</div>
                      <a href="mailto:info@4ah.in" className="text-orange-500 hover:text-orange-600 transition-colors">
                        info@4ah.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 mb-1">Phone</div>
                      <a href="tel:+919876543210" className="text-orange-500 hover:text-orange-600 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 mb-1">Location</div>
                      <p className="text-gray-600">
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 mb-1">Business Hours</div>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Options */}
              <div className="card p-8 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-2 border-orange-500/20">
                <h3 className="text-xl font-bold text-navy-900 mb-4">What Happens Next?</h3>
                <ul className="space-y-4">
                  {[
                    'We review your requirements within 24 hours',
                    'Our team schedules a consultation call',
                    'We prepare a customized training proposal',
                    'You review and we finalize the program',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Types */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-6 text-center hover:shadow-xl transition-all">
                  <Building2 className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <div className="font-bold text-navy-900">Colleges</div>
                  <div className="text-sm text-gray-600">Year-wise training</div>
                </div>
                <div className="card p-6 text-center hover:shadow-xl transition-all">
                  <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <div className="font-bold text-navy-900">Corporates</div>
                  <div className="text-sm text-gray-600">Employee upskilling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
