'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Our Founders', href: '/founders' },
      { label: 'Our Mission', href: '/#about' },
      { label: 'Contact Us', href: '/#contact' },
    ],
    programs: [
      { label: 'All Programs', href: '/#programs' },
      { label: 'College Solutions', href: '/#college-solutions' },
      { label: 'Corporate Training', href: '/#corporate' },
      { label: 'Flagship Program', href: '/#flagship' },
    ],
    resources: [
      { label: 'Training Methodology', href: '/#methodology' },
      { label: 'Expected Outcomes', href: '/#outcomes' },
      { label: 'Year-wise Journey', href: '/#college-solutions' },
      { label: 'Request Proposal', href: '/#contact' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/4abilityhive', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/4abilityhive', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/4abilityhive', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/4abilityhive', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0E14] to-[#050709] border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-black">
                <span className="text-white">4Ability</span>
                <span className="gradient-text"> Hive</span>
              </div>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Empowering students and professionals with the skills that matter. Transforming potential into performance through comprehensive employability training.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-neutral-400 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-orange-500" />
                <a href="mailto:info@4ah.in">info@4ah.in</a>
              </div>
              <div className="flex items-center text-neutral-400">
                <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              © {currentYear} 4Ability Hive. All rights reserved.
            </div>

            {/* Tagline */}
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-orange-400 font-bold">•</span>
              <span className="text-neutral-300 font-semibold">ASPIRE</span>
              <span className="text-orange-400 font-bold">•</span>
              <span className="text-neutral-300 font-semibold">ACQUIRE</span>
              <span className="text-orange-400 font-bold">•</span>
              <span className="text-neutral-300 font-semibold">ASCEND</span>
              <span className="text-orange-400 font-bold">•</span>
              <span className="text-neutral-300 font-semibold">AMPLIFY</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-neutral-500">
            <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-orange-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
