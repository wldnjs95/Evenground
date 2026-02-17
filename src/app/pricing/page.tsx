'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const pricingOptions = [
  {
    eyebrow: 'Classes',
    title: 'Class Pricing',
    description: 'Drop-in classes, class packs, and unlimited membership options.',
    highlight: 'From $15/class',
    href: '/pricing/classes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    eyebrow: 'Private Space',
    title: 'Studio Rentals',
    description: 'Hourly studio rental for rehearsals, shoots, workshops, and events.',
    highlight: 'From $50/hour',
    href: '/pricing/studio-rental',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <>
      <Header />

      <PageTransition>
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px]">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                  Simple &amp; Transparent
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  PRICING
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-gray-500 max-w-xl">
                  From drop-in classes to studio rentals — choose the plan that works best for you.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Pricing Options */}
          <section className="section-padding bg-[#fafafa]">
            <div className="max-w-[900px] mx-auto">
              <AnimatedSection staggerChildren={0.12} className="grid md:grid-cols-2 gap-6">
                {pricingOptions.map((option) => (
                  <AnimatedChild key={option.href}>
                    <Link href={option.href} className="block group">
                      <motion.div
                        whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-8 lg:p-10 border border-gray-100 group-hover:border-gray-200 transition-colors h-full"
                      >
                        <div className="w-12 h-12 flex items-center justify-center mb-6 border border-gray-100 text-gray-500 group-hover:border-[#ffb800]/30 group-hover:text-[#ffb800] transition-colors">
                          {option.icon}
                        </div>
                        <p className="text-[12px] font-medium text-[#d49a00] tracking-[0.15em] uppercase mb-2">
                          {option.eyebrow}
                        </p>
                        <h2 className="text-2xl font-light text-[#303030] tracking-tight mb-3">
                          {option.title}
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          {option.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-[#303030]">
                            {option.highlight}
                          </span>
                          <svg className="w-4 h-4 text-gray-300 group-hover:text-[#ffb800] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    </Link>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
