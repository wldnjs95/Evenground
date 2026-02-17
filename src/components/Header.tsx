'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Schedule', href: '/schedule' },
  { name: 'Classes', href: '/classes' },
];

const pricingSubMenu = [
  { name: 'Class Pricing', sub: 'Packs & Membership', href: '/pricing/classes' },
  { name: 'Studio Rental', sub: 'Hourly Studio Booking', href: '/pricing/studio-rental' },
];

const communitySubMenu = [
  { name: 'Events', sub: 'Battles & Showcases', href: '/events' },
  { name: 'Teams', sub: 'Auditions & Crew Info', href: '/teams' },
  { name: 'About Us', sub: 'Our Mission & Story', href: '/about-us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setIsPricingOpen(false);
    setIsCommunityOpen(false);
  };

  const isActive = (href: string) => pathname === href;
  const isPricingActive = pricingSubMenu.some((item) => pathname === item.href) || pathname === '/pricing';
  const isCommunityActive = communitySubMenu.some((item) => pathname === item.href);

  return (
    <header
      style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }} className="w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative h-8 w-32">
            <Image
              src="/logo.webp"
              alt="Evenground"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-light tracking-[0.02em] transition-colors relative ${
                  isActive(link.href) ? 'text-black' : 'hover:text-gray-600'
                }`}
                onMouseEnter={closeAll}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-current"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </Link>
            ))}

            {/* Pricing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsPricingOpen(true); setIsCommunityOpen(false); }}
              onMouseLeave={() => setIsPricingOpen(false)}
            >
              <button
                className={`text-[15px] font-light tracking-[0.02em] flex items-center gap-1 transition-colors relative ${
                  isPricingActive ? 'text-black' : 'hover:text-gray-600'
                }`}
              >
                Pricing
                <svg
                  className={`w-4 h-4 transition-transform duration-150 ${isPricingOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {isPricingActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-current"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isPricingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white/95 backdrop-blur-sm py-2 min-w-[200px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100/80">
                      {pricingSubMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-5 py-3 hover:bg-gray-50/80 transition-colors border-l-2 ${
                            isActive(item.href) ? 'border-gray-800 bg-gray-50/60' : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          <span className="block text-[13px] font-normal text-gray-800 tracking-wide">{item.name}</span>
                          <span className="block text-[11px] text-gray-500 mt-0.5 font-light">{item.sub}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Community Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setIsCommunityOpen(true); setIsPricingOpen(false); }}
              onMouseLeave={() => setIsCommunityOpen(false)}
            >
              <button
                className={`text-[15px] font-light tracking-[0.02em] flex items-center gap-1 transition-colors relative ${
                  isCommunityActive ? 'text-black' : 'hover:text-gray-600'
                }`}
              >
                Community
                <svg
                  className={`w-4 h-4 transition-transform duration-150 ${isCommunityOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {isCommunityActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-current"
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isCommunityOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white/95 backdrop-blur-sm py-2 min-w-[200px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100/80">
                      {communitySubMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-5 py-3 hover:bg-gray-50/80 transition-colors border-l-2 ${
                            isActive(item.href) ? 'border-gray-800 bg-gray-50/60' : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          <span className="block text-[13px] font-normal text-gray-800 tracking-wide">{item.name}</span>
                          <span className="block text-[11px] text-gray-500 mt-0.5 font-light">{item.sub}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute"
            style={{ right: 'var(--page-gutter)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }} className="flex flex-col gap-1 py-4 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-3 text-[15px] ${isActive(link.href) ? 'font-medium' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <button
                className="py-3 text-[15px] text-left flex items-center justify-between"
                onClick={() => setIsPricingOpen(!isPricingOpen)}
              >
                Pricing
                <svg className={`w-4 h-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isPricingOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col border-l border-gray-200 ml-2 mb-2">
                      {pricingSubMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className={`block text-[14px] ${isActive(item.href) ? 'text-black font-medium' : 'text-gray-900'}`}>
                            {item.name}
                          </span>
                          <span className="block text-[12px] text-gray-500">{item.sub}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="py-3 text-[15px] text-left flex items-center justify-between"
                onClick={() => setIsCommunityOpen(!isCommunityOpen)}
              >
                Community
                <svg className={`w-4 h-4 transition-transform ${isCommunityOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isCommunityOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col border-l border-gray-200 ml-2 mb-2">
                      {communitySubMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className={`block text-[14px] ${isActive(item.href) ? 'text-black font-medium' : 'text-gray-900'}`}>
                            {item.name}
                          </span>
                          <span className="block text-[12px] text-gray-500">{item.sub}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
