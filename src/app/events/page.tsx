'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import ExternalLink from '@/components/ExternalLink';

export default function Events() {
  return (
    <>
      <Header />

      <PageTransition>
        <main className="pt-20">
          {/* ============================================================ */}
          {/*  HERO                                                        */}
          {/* ============================================================ */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px]">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                  Battles &amp; Showcases
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  EVENTS
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-gray-500 max-w-xl mb-10">
                  Two flagship events that define EvenGround — a monthly
                  freestyle battle and an annual showcase. One community.
                </p>
              </AnimatedSection>

              {/* Anchor links */}
              <AnimatedSection variant="fade-in-up" delay={0.3}>
                <div className="flex items-center gap-6">
                  <a
                    href="#even-the-odds"
                    className="text-[13px] font-medium tracking-[0.1em] uppercase text-[#303030] hover:text-[#ffb800] transition-colors link-underline"
                  >
                    Even the Odds
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="#the-anni"
                    className="text-[13px] font-medium tracking-[0.1em] uppercase text-[#303030] hover:text-[#ffb800] transition-colors link-underline"
                  >
                    The Anni
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ============================================================ */}
          {/*  EVEN THE ODDS — Dark Section                                */}
          {/* ============================================================ */}
          <section id="even-the-odds" className="section-padding bg-[#1a1a1a] text-white">
            <div className="max-w-[1200px] mx-auto">
              {/* Header */}
              <AnimatedSection variant="fade-in-up">
                <p className="text-[13px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                  Monthly Freestyle Battle
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  EVEN THE ODDS
                </h2>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-3xl mb-12">
                  Even The Odds is a freestyle dance battle event series in
                  Austin, TX. The battle format and music changes to maintain
                  variety and keep the battles fresh. We have held over 10
                  successful battles so far, drawing in people from all over
                  Texas, with our last battle reaching over 100+ attendees.
                </p>
              </AnimatedSection>

              {/* Stats Row */}
              <AnimatedSection staggerChildren={0.15} className="grid grid-cols-3 gap-6 md:gap-12 mb-16 max-w-xl">
                <AnimatedChild>
                  <div>
                    <p className="text-3xl md:text-4xl font-light tracking-tight text-[#ffb800]">
                      10+
                    </p>
                    <p className="text-xs text-white/60 uppercase tracking-[0.15em] mt-1">
                      Battles
                    </p>
                  </div>
                </AnimatedChild>
                <AnimatedChild>
                  <div>
                    <p className="text-3xl md:text-4xl font-light tracking-tight text-[#ffb800]">
                      100+
                    </p>
                    <p className="text-xs text-white/60 uppercase tracking-[0.15em] mt-1">
                      Attendees
                    </p>
                  </div>
                </AnimatedChild>
                <AnimatedChild>
                  <div>
                    <p className="text-3xl md:text-4xl font-light tracking-tight text-[#ffb800]">
                      TX
                    </p>
                    <p className="text-xs text-white/60 uppercase tracking-[0.15em] mt-1">
                      State-wide
                    </p>
                  </div>
                </AnimatedChild>
              </AnimatedSection>

              {/* Next Battle Card */}
              <AnimatedSection variant="fade-in-up">
                <div className="border border-white/10 p-8 md:p-10 max-w-2xl">
                  <p className="text-[13px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                    Next Battle
                  </p>
                  <p className="text-2xl md:text-3xl font-light tracking-tight mb-2">
                    Saturday, March 14th, 2026
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    EvenGround Studio, Austin TX
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <ExternalLink
                      href="https://events.sweatpals.com"
                      platform="Sweatpals"
                      showPlatform
                      className="btn btn-gold"
                    >
                      Register Now
                    </ExternalLink>
                    <ExternalLink
                      href="https://instagram.com/evengroundtx"
                      className="btn border border-white/20 text-white hover:bg-white/10 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Check Our Instagram
                    </ExternalLink>
                  </div>
                </div>
              </AnimatedSection>

              {/* Freestyle Sessions — secondary info */}
              <AnimatedSection variant="fade-in-up" className="mt-16 pt-16 border-t border-white/10">
                <div className="max-w-2xl">
                  <p className="text-[13px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                    Also Every Week
                  </p>
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                    Freestyle Sessions
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Freestyle Sessions are a time and place for you to practice
                    your fundamentals, exchange with others, and develop your
                    freestyle dancing. It&apos;s a perfect place to work on moves
                    you just learned in class or prepare for any upcoming battles.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
                    <span className="flex items-center gap-2 text-white/70">
                      <svg className="w-4 h-4 text-[#ffb800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Every Sunday
                    </span>
                    <span className="flex items-center gap-2 text-white/70">
                      <svg className="w-4 h-4 text-[#ffb800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      8PM — 10PM
                    </span>
                    <span className="flex items-center gap-2 text-white/70">
                      <svg className="w-4 h-4 text-[#ffb800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      FREE
                    </span>
                    <span className="text-white/60 text-xs uppercase tracking-wider">
                      All Levels Welcome
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ============================================================ */}
          {/*  THE ANNI — Light Section                                    */}
          {/* ============================================================ */}
          <section id="the-anni" className="section-padding marble-bg relative">
            <div className="max-w-[1200px] mx-auto relative z-10">
              {/* Header */}
              <AnimatedSection variant="fade-in-up">
                <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                  Annual Showcase
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#1a1a1a] mb-8">
                  THE ANNI&apos;
                </h2>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-lg md:text-xl font-light text-gray-500 leading-relaxed max-w-3xl mb-16">
                  The Anni&apos; is EvenGround&apos;s annual showcase — our
                  biggest celebration of the year. Studio teams and dancers come
                  together to perform on a professional stage, showcasing the
                  growth, creativity, and community that define EvenGround.
                </p>
              </AnimatedSection>

              {/* Event Detail Card */}
              <AnimatedSection variant="fade-in-up">
                <div className="border border-gray-200 bg-white p-8 md:p-10 max-w-2xl">
                  <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                    Latest Edition
                  </p>
                  <p className="text-2xl md:text-3xl font-light tracking-tight text-[#1a1a1a] mb-6">
                    THE ANNI&apos; 2025
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#b38200] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      November 8th, 2025
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#b38200] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Doors Open 6:30PM / Show Starts 7:00PM
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-[#b38200] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Klett Performing Arts Center
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="mailto:contact@evengroundtx.com"
                      className="btn btn-dark"
                    >
                      Get Tickets
                    </a>
                    <ExternalLink
                      href="https://youtube.com/@evengroundtx"
                      className="btn btn-outline"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Watch Past Performances
                    </ExternalLink>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ============================================================ */}
          {/*  CTA — Stay in the Loop                                      */}
          {/* ============================================================ */}
          <section className="section-padding bg-[#1a1a1a] text-white text-center">
            <AnimatedSection variant="fade-in-up" className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
                Stay in the Loop
              </h2>
              <p className="text-gray-400 mb-10 text-base md:text-lg">
                Follow us on Instagram for the latest event announcements,
                recaps, and behind-the-scenes content.
              </p>
              <ExternalLink
                href="https://instagram.com/evengroundtx"
                className="btn btn-white inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @evengroundtx
              </ExternalLink>
            </AnimatedSection>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
