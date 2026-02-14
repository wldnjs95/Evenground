'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const upcomingEvents = [
  {
    id: 1,
    title: 'EvenGround Summer Showcase 2025',
    date: 'Jul 26, 2025',
    day: '26',
    month: 'JUL',
    time: '7:00 PM – 10:00 PM',
    location: 'EvenGround Studio, Austin TX',
    description:
      'Our biggest event of the summer! Watch studio teams and class students perform choreography and freestyle sets. Open to all skill levels. Food, music, and good vibes guaranteed.',
    category: 'Showcase',
  },
  {
    id: 2,
    title: 'Breaking Battle: Ground Zero',
    date: 'Aug 9, 2025',
    day: '09',
    month: 'AUG',
    time: '6:00 PM – 11:00 PM',
    location: 'EvenGround Studio, Austin TX',
    description:
      'A 1v1 breaking battle open to all levels. Preliminary rounds, top 8 bracket, and cash prizes for the winners. DJ and live judges. Registration required.',
    category: 'Battle',
  },
  {
    id: 3,
    title: 'House Dance Workshop with Guest Instructor',
    date: 'Aug 23, 2025',
    day: '23',
    month: 'AUG',
    time: '2:00 PM – 5:00 PM',
    location: 'EvenGround Studio, Austin TX',
    description:
      'A special 3-hour intensive workshop covering house dance foundations, footwork patterns, and musicality. Guest instructor TBA. Limited spots available.',
    category: 'Workshop',
  },
];

const pastEvents = [
  {
    id: 4,
    title: 'Spring Jam 2025',
    date: 'Apr 12, 2025',
    category: 'Battle',
  },
  {
    id: 5,
    title: 'EvenGround Anniversary Showcase',
    date: 'Mar 1, 2025',
    category: 'Showcase',
  },
  {
    id: 6,
    title: 'Popping & Locking Workshop',
    date: 'Feb 15, 2025',
    category: 'Workshop',
  },
  {
    id: 7,
    title: 'Winter Cypher Night',
    date: 'Dec 14, 2024',
    category: 'Community',
  },
  {
    id: 8,
    title: 'Hip Hop Choreography Intensive',
    date: 'Nov 9, 2024',
    category: 'Workshop',
  },
  {
    id: 9,
    title: 'EvenGround Grand Opening',
    date: 'Oct 7, 2023',
    category: 'Showcase',
  },
];

const categoryColors: Record<string, string> = {
  Showcase: 'bg-[#ffb800]/10 text-[#ffb800]',
  Battle: 'bg-red-50 text-red-500',
  Workshop: 'bg-blue-50 text-blue-500',
  Community: 'bg-green-50 text-green-500',
};

export default function Events() {
  return (
    <>
      <Header />

      <PageTransition>
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px]">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                  Battles &amp; Showcases
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  EVENTS
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-gray-500 max-w-xl">
                  From showcases to battles to workshops — join us for events that
                  celebrate street dance culture and bring our community together.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="section-padding bg-[#fafafa]">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection variant="fade-in-up" className="mb-16">
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                  Coming Up
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                  UPCOMING EVENTS
                </h2>
              </AnimatedSection>

              <AnimatedSection
                staggerChildren={0.15}
                className="space-y-8"
              >
                {upcomingEvents.map((event) => (
                  <AnimatedChild key={event.id}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white border border-gray-100 hover:border-gray-200 transition-colors overflow-hidden"
                    >
                      <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                        {/* Image Placeholder */}
                        <div className="bg-gray-200 aspect-[16/10] md:aspect-auto md:min-h-[240px] flex items-center justify-center relative overflow-hidden">
                          <div className="text-center">
                            <p className="text-4xl md:text-5xl font-light text-gray-400">
                              {event.day}
                            </p>
                            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-1">
                              {event.month}
                            </p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full ${categoryColors[event.category] || 'bg-gray-100 text-gray-500'}`}
                            >
                              {event.category}
                            </span>
                            <span className="text-[11px] text-gray-400">
                              {event.date}
                            </span>
                          </div>

                          <h3 className="text-xl lg:text-2xl font-light text-[#303030] mb-3">
                            {event.title}
                          </h3>

                          <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-lg">
                            {event.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>

          {/* Past Events Gallery */}
          <section className="section-padding bg-white">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection variant="fade-in-up" className="mb-16">
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
                  Archive
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                  PAST EVENTS
                </h2>
              </AnimatedSection>

              <AnimatedSection
                staggerChildren={0.1}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {pastEvents.map((event) => (
                  <AnimatedChild key={event.id}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="group cursor-pointer"
                    >
                      {/* Image Placeholder */}
                      <div className="bg-gray-200 aspect-[3/2] mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400 text-sm uppercase tracking-wider">
                            Photo
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-[10px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full ${categoryColors[event.category] || 'bg-gray-100 text-gray-500'}`}
                        >
                          {event.category}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-base font-medium text-[#303030] group-hover:text-[#ffb800] transition-colors">
                        {event.title}
                      </h3>
                    </motion.div>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-[#1a1a1a] text-white text-center">
            <AnimatedSection variant="fade-in-up" className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
                Stay in the Loop
              </h2>
              <p className="text-gray-400 mb-10 text-base md:text-lg">
                Follow us on Instagram for the latest event announcements,
                recaps, and behind-the-scenes content.
              </p>
              <a
                href="https://instagram.com/evengroundtx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @evengroundtx
              </a>
            </AnimatedSection>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
