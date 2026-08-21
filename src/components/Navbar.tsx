'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    { name: 'All Programs', href: '/programs' },
    { name: 'Soft Skills Training', href: '/programs#soft-skills' },
    { name: 'Aptitude & Reasoning', href: '/programs#aptitude' },
    { name: 'Communication Skills', href: '/programs#communication' },
    { name: 'Technical Training', href: '/programs#technical' },
    { name: 'Placement Readiness', href: '/programs#placement' },
  ];

  const solutions = [
    { name: 'College Solutions', href: '/college-solutions' },
    { name: 'Corporate Training', href: '/corporate-solutions' },
    { name: 'Flagship Program', href: '/flagship-program' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0F1E]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-glow-orange"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                4Ability Hive
              </h1>
              <p className="text-xs text-neutral-400 hidden sm:block font-medium tracking-wide">
                Aspire • Acquire • Ascend • Amplify
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" isActive={isActive('/')}>Home</NavLink>
            <NavLink href="/about" isActive={isActive('/about')}>About</NavLink>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-neutral-300 hover:text-white font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
                <span>Programs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#131B2E]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] py-3 border border-white/10"
                  >
                    {programs.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-neutral-300 hover:text-orange-400 hover:bg-white/5 transition-all duration-200 font-medium"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-neutral-300 hover:text-white font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#131B2E]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] py-3 border border-white/10"
                  >
                    {solutions.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-neutral-300 hover:text-orange-400 hover:bg-white/5 transition-all duration-200 font-medium"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/methodology" isActive={isActive('/methodology')}>Methodology</NavLink>
            <NavLink href="/contact" isActive={isActive('/contact')}>Contact</NavLink>

            <Link href="/contact" className="ml-4 btn-primary text-sm">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 bg-[#131B2E]/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>

                <div className="space-y-2 pt-2">
                  <p className="font-semibold text-orange-400 text-sm px-3">Programs</p>
                  <div className="pl-4 space-y-1">
                    {programs.map((item) => (
                      <MobileNavLink key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        {item.name}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="font-semibold text-orange-400 text-sm px-3">Solutions</p>
                  <div className="pl-4 space-y-1">
                    {solutions.map((item) => (
                      <MobileNavLink key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        {item.name}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <MobileNavLink href="/methodology" onClick={() => setIsOpen(false)}>Methodology</MobileNavLink>
                <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>

                <Link href="/contact" className="btn-primary text-center mt-4" onClick={() => setIsOpen(false)}>
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, isActive, children }: { href: string; isActive: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
        isActive
          ? 'text-orange-400'
          : 'text-neutral-300 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-neutral-300 hover:text-orange-400 hover:bg-white/5 transition-all duration-200 rounded-lg font-medium"
    >
      {children}
    </Link>
  );
}
