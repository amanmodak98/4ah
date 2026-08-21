'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavLink[];
}

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Meet Our Founders', href: '/founders' },
      { label: 'Our Methodology', href: '/methodology' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'All Programs', href: '/programs' },
      { label: 'College Solutions', href: '/college-solutions' },
      { label: 'Corporate Training', href: '/corporate-solutions' },
      { label: 'Flagship 90-Hour Program', href: '/flagship-program' },
    ],
  },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo — uses the actual logo.png from /public */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-orange transition-all group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="4Ability Hive"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-black text-gray-900 text-lg leading-none">
                4Ability Hive
              </div>
              <div className="text-xs text-orange font-semibold mt-0.5">
                Learning & Development
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isActive(item.href);

              return (
                <div key={item.label} className="relative">
                  {hasChildren ? (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`nav-link ${active ? 'active' : ''}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link href={item.href} className={`nav-link ${active ? 'active' : ''}`}>
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {hasChildren && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 animate-fade-in">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto animate-slide-up">
            <div className="container py-8">
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const active = isActive(item.href);
                  const dropdownOpen = openDropdown === item.label;

                  return (
                    <div key={item.label}>
                      {hasChildren ? (
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left font-display font-bold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors ${
                            active ? 'bg-orange-50 text-orange' : ''
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              dropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 font-display font-bold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors ${
                            active ? 'bg-orange-50 text-orange' : ''
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Mobile Dropdown */}
                      {hasChildren && dropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-orange hover:bg-orange-50 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-6">
                  <Link href="/contact" className="btn btn-primary w-full justify-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
