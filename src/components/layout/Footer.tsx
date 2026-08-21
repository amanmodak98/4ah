'use client';

import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const programLinks = [
    { label: 'Soft Skills Development', href: '/programs#soft-skills' },
    { label: 'Aptitude & Reasoning', href: '/programs#aptitude' },
    { label: 'Communication Skills', href: '/programs#communication' },
    { label: 'Placement Readiness', href: '/programs#placement' },
    { label: 'Technical Training', href: '/programs#technical' },
    { label: 'Flagship 90-Hour Program', href: '/flagship-program' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Founders', href: '/about#team' },
    { label: 'Our Methodology', href: '/about#methodology' },
    { label: 'College Solutions', href: '/college-solutions' },
    { label: 'Corporate Training', href: '/corporate-solutions' },
    { label: 'Success Stories', href: '/success-stories' },
  ];

  const social = [
    { icon: Linkedin,  href: '#', label: 'LinkedIn' },
    { icon: Twitter,   href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube,   href: '#', label: 'YouTube' },
  ];

  return (
    <footer style={{ background: 'var(--navy)' }} className="text-gray-300">
      {/* CTA Banner */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange mb-2">
                Ready to Transform Your Institution?
              </p>
              <h2 className="text-2xl font-display font-black text-white">
                Let's build industry-ready graduates together.
              </h2>
            </div>
            <Link
              href="/contact"
              className="btn btn-primary whitespace-nowrap"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center">
                <span className="text-white font-display font-black text-lg">4A</span>
              </div>
              <div>
                <div className="font-display font-black text-white text-lg leading-none">4Ability Hive</div>
                <div className="text-xs text-orange font-semibold mt-0.5">Learning & Development</div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Empowering students and professionals with the skills that matter. Aspire • Acquire • Ascend • Amplify.
            </p>

            <div className="space-y-3">
              <a href="mailto:info@4ah.in" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@4ah.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 99999 99999
              </a>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange transition-all"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-display font-bold mb-5">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-bold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-display font-bold mb-5">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest on training methodologies, career insights, and program updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-lg text-sm text-gray-900 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <button type="submit" className="btn btn-primary justify-center">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {year} 4Ability Hive. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms"          className="hover:text-orange transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml"    className="hover:text-orange transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
