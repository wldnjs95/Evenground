'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const communitySubMenu = [
    { name: 'Events', sub: 'Battles & Showcases', href: '#events' },
    { name: 'Teams', sub: 'Auditions & Crew Info', href: '#teams' },
    { name: 'About Us', sub: 'Our Mission & Story', href: '/about-us' },
  ];

  const closeAll = () => {
    setIsCommunityOpen(false);
  };

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
            <Link
              href="/testing"
              className="text-[15px] font-light tracking-[0.02em] hover:text-gray-600 transition-colors"
              onMouseEnter={closeAll}
            >
              Schedule
            </Link>
            <Link
              href="#classes"
              className="text-[15px] font-light tracking-[0.02em] hover:text-gray-600 transition-colors"
              onMouseEnter={closeAll}
            >
              Classes
            </Link>

            <Link
              href="/pricing"
              className="text-[15px] font-light tracking-[0.02em] hover:text-gray-600 transition-colors"
              onMouseEnter={closeAll}
            >
              Pricing
            </Link>

            <Link
              href="#store"
              className="text-[15px] font-light tracking-[0.02em] hover:text-gray-600 transition-colors"
              onMouseEnter={closeAll}
            >
              Store
            </Link>

            {/* Community Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCommunityOpen(true)}
              onMouseLeave={() => setIsCommunityOpen(false)}
            >
              <button className="text-[15px] font-light tracking-[0.02em] flex items-center gap-1 hover:text-gray-600 transition-colors">
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
              </button>

              {/* Dropdown - Minimal Light */}
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  isCommunityOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
              >
                <div className="bg-white/95 backdrop-blur-sm py-2 min-w-[200px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100/80">
                  {communitySubMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-3 hover:bg-gray-50/80 transition-colors border-l-2 border-transparent hover:border-gray-300"
                    >
                      <span className="block text-[13px] font-normal text-gray-800 tracking-wide">{item.name}</span>
                      <span className="block text-[11px] text-gray-500 mt-0.5 font-light">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute right-6"
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          isMenuOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <div style={{ paddingLeft: '24px', paddingRight: '24px' }} className="flex flex-col gap-1 py-4 border-t border-gray-100">
          <Link href="/testing" className="py-3 text-[15px]">Schedule</Link>
          <Link href="#classes" className="py-3 text-[15px]">Classes</Link>
          <Link href="/pricing" className="py-3 text-[15px]">Pricing</Link>
          <Link href="#store" className="py-3 text-[15px]">Store</Link>

          <button
            className="py-3 text-[15px] text-left flex items-center justify-between"
            onClick={() => setIsCommunityOpen(!isCommunityOpen)}
          >
            Community
            <svg className={`w-4 h-4 transition-transform ${isCommunityOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isCommunityOpen && (
            <div className="pl-4 flex flex-col border-l border-gray-200 ml-2 mb-2">
              {communitySubMenu.map((item) => (
                <Link key={item.name} href={item.href} className="py-2">
                  <span className="block text-[14px] text-gray-900">{item.name}</span>
                  <span className="block text-[12px] text-gray-500">{item.sub}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
