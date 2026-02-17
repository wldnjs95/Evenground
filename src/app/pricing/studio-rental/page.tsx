'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const studios = [
  {
    name: 'Studio A',
    price: 75,
    badge: 'Larger Space',
    badgeStyle: 'text-[#d49a00] bg-[#d49a00]/10',
    photos: ['/studio/a/A1.webp', '/studio/a/A2.webp', '/studio/a/A3.webp', '/studio/a/A4.webp', '/studio/a/A5.webp', '/studio/a/A6.webp'],
    features: [
      '1,530 sq ft dance space (including lobby)',
      '36 ft wide × 6 ft tall mirrors',
      'Professional video lights & RGB spotlights',
      'JBL Professional Speakers (Bluetooth & AUX)',
      'Water dispenser, WiFi, free parking',
    ],
  },
  {
    name: 'Studio B',
    price: 50,
    badge: 'Cozy Space',
    badgeStyle: 'text-gray-500 bg-gray-100',
    photos: ['/studio/b/B3.webp', '/studio/b/B1.webp', '/studio/b/B2.webp', '/studio/b/B4.webp', '/studio/b/B5.webp'],
    features: [
      '900 sq ft dance space',
      '36 ft wide × 6 ft tall mirrors',
      'Cozy remote-controlled track lighting',
      'JBL Professional Speakers (Bluetooth & AUX)',
      'Water dispenser, WiFi, free parking',
    ],
  },
];


function StudioCard({ studio, index }: { studio: typeof studios[number]; index: number }) {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <AnimatedChild>
      <div className="bg-white border border-gray-100 overflow-hidden flex flex-col h-full">
        {/* Main Photo */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhoto}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={studio.photos[activePhoto]}
                alt={`${studio.name} photo ${activePhoto + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0 && activePhoto === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-[2px] bg-gray-100 shrink-0">
          {studio.photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setActivePhoto(i)}
              className={`relative flex-1 aspect-[4/3] overflow-hidden transition-opacity ${
                activePhoto === i ? 'opacity-100 ring-2 ring-inset ring-[#ffb800]' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <Image
                src={photo}
                alt={`${studio.name} thumbnail ${i + 1}`}
                fill
                sizes="10vw"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Pricing & Features */}
        <div className="p-8 lg:p-10 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-medium text-[#303030]">{studio.name}</h3>
            <span className={`text-[12px] font-medium tracking-wider uppercase px-3 py-1 rounded-full ${studio.badgeStyle}`}>
              {studio.badge}
            </span>
          </div>
          <p className="text-4xl font-light text-[#303030] mb-1">
            ${studio.price}<span className="text-lg text-gray-500">/hour</span>
          </p>
          <p className="text-xs text-gray-500 mb-8">1 hour minimum</p>

          <div className="space-y-3 flex-1">
            {studio.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#ffb800] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedChild>
  );
}

export default function StudioRentalPricing() {
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
                  Private Space
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  STUDIO RENTALS
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-gray-500 max-w-xl">
                  Book our space for rehearsals, workshops, photo &amp; video shoots, private events, and more.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Studio Cards */}
          <section className="section-padding marble-bg">
            <div className="max-w-[1200px] mx-auto relative z-10">
              <AnimatedSection staggerChildren={0.15} className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {studios.map((studio, i) => (
                  <StudioCard key={studio.name} studio={studio} index={i} />
                ))}
              </AnimatedSection>

              <AnimatedSection variant="fade-in-up" delay={0.3} className="flex justify-center mt-12">
                <motion.a
                  href="https://dnce.club/evengroundtx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark inline-flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Rental
                  <span className="text-[11px] text-white/60 tracking-wider uppercase flex items-center gap-1">
                    dnce.club
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </motion.a>
              </AnimatedSection>
            </div>
          </section>

          {/* Hours */}
          <section className="py-10 md:py-14 px-[var(--page-gutter)] bg-[#fafafa]">
            <AnimatedSection variant="fade-in-up" className="text-center">
              <div className="mb-4">
                <p className="text-sm font-medium text-[#303030] mb-2">Rental Hours</p>
                <p className="text-xs text-gray-500">Mon–Fri: 6PM–10:30PM &nbsp;·&nbsp; Sat: 1PM–5:30PM &nbsp;·&nbsp; Sun: 8PM–10PM</p>
              </div>
              <p className="text-xs text-gray-500">
                Booking &amp; availability managed on dnce.club
              </p>
            </AnimatedSection>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
