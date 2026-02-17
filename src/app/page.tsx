import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';

export default function Home() {
  return (
    <PageTransition>
      <Header />

      <main>
        <Hero />

        {/* Welcome Section */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection variant="fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
                WELCOME TO <span className="text-[#ffb800]">EVENGROUND</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Evenground is a street dance studio based in Austin, TX. We provide a space
                where dancers of all levels come together to learn, grow, and express themselves
                through movement. Our mission is to cultivate community, creativity, and personal
                growth through the art of street dance.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <Marquee />

        {/* Quick Actions */}
        <section className="section-padding bg-[#1a1a1a]">
          <div className="max-w-[1200px] mx-auto text-center">
            <AnimatedSection variant="fade-in-up">
              <p className="text-[13px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
                Everything, Here.
              </h2>
              <p className="text-gray-400 text-sm mb-12 md:mb-16 max-w-xl mx-auto">
                Book a class, enter a battle, rent our studio, or grab tickets to our next event.
              </p>
            </AnimatedSection>

            <AnimatedSection staggerChildren={0.12} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-left">
              {/* Book a Class */}
              <AnimatedChild variant="fade-in-up">
                <a
                  href="https://evenground.pike13.com/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden border border-white/10 hover:border-[#ffb800]/40 p-6 lg:p-8 transition-all duration-300 h-full"
                >
                  <Image src="/everything/weeklyclass.webp" alt="" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-light text-white mb-2 tracking-tight">Book a Class</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      View the schedule and sign up for your next class.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#ffb800] group-hover:text-white transition-colors">
                        Book Now
                      </span>
                      <span className="text-[11px] text-white/80 tracking-wider uppercase flex items-center gap-1">
                        Pike13
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedChild>

              {/* Enter a Battle */}
              <AnimatedChild variant="fade-in-up">
                <a
                  href="https://sweatpals.com/event/even-the-odds-2v2-freestyle-battle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden border border-white/10 hover:border-[#ffb800]/40 p-6 lg:p-8 transition-all duration-300 h-full"
                >
                  <Image src="/everything/battle.webp" alt="" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-light text-white mb-2 tracking-tight">Enter a Battle</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      Register for Even the Odds, our monthly freestyle battle.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#ffb800] group-hover:text-white transition-colors">
                        Register
                      </span>
                      <span className="text-[11px] text-white/80 tracking-wider uppercase flex items-center gap-1">
                        Sweatpals
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedChild>

              {/* Rent the Studio */}
              <AnimatedChild variant="fade-in-up">
                <a
                  href="https://dnce.club/evengroundtx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden border border-white/10 hover:border-[#ffb800]/40 p-6 lg:p-8 transition-all duration-300 h-full"
                >
                  <Image src="/everything/rent.webp" alt="" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-light text-white mb-2 tracking-tight">Rent the Studio</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      Book private studio time for rehearsals, shoots, or lessons.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#ffb800] group-hover:text-white transition-colors">
                        Request Rental
                      </span>
                      <span className="text-[11px] text-white/80 tracking-wider uppercase flex items-center gap-1">
                        dnce.club
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedChild>

              {/* Get Tickets */}
              <AnimatedChild variant="fade-in-up">
                <a
                  href="/events"
                  className="group block relative overflow-hidden border border-white/10 hover:border-[#ffb800]/40 p-6 lg:p-8 transition-all duration-300 h-full"
                >
                  <Image src="/everything/anni.png" alt="" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-light text-white mb-2 tracking-tight">Get Tickets</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      Grab tickets to The Anni&apos;, our annual showcase event.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#ffb800] group-hover:text-white transition-colors">
                        Buy Tickets
                      </span>
                      <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </AnimatedChild>
            </AnimatedSection>
          </div>
        </section>

        {/* Upcoming Event Section */}
        <section className="bg-[#fafafa] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left — Event Info (with padding) */}
            <div className="flex-1 min-w-0 py-16 md:py-24 px-6 md:px-12 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-12">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[14px] font-medium text-gray-600 tracking-[0.2em] uppercase mb-4">
                  Upcoming
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-12">
                  Upcoming Events
                </h2>

                <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-[#d49a00] mb-3">
                  Battle
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-6">
                  Even the Odds
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-xl">
                  Even The Odds is a freestyle dance battle event series in Austin, TX. The battle format and music changes to maintain variety and keep the battles fresh. We have held over 10 successful battles so far, drawing in people from all over Texas, with our last battle reaching over 100+ attendees.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-10 max-w-xl">
                  Our next battle is coming up soon on <span className="font-medium text-[#1a1a1a]">Saturday, March 14th, 2026</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://sweatpals.com/event/even-the-odds-2v2-freestyle-battle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    Register Online Now
                  </a>
                  <a
                    href="https://instagram.com/evengroundtx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Check Out Our Instagram
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Event Poster (constrained to left content height) */}
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:w-[42%] xl:w-[45%] shrink-0 lg:min-h-0">
              <div className="lg:absolute lg:inset-0 relative w-full h-full">
                <Image
                  src="/eventimage-eventheodds.webp"
                  alt="Even the Odds - 2v2 Open Styles Battle, March 14th 2026"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Class Info Section */}
        <section className="py-12 md:py-16 lg:py-20 px-[var(--page-gutter)] bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <AnimatedSection variant="fade-in">
                <div className="img-container aspect-[3/2]">
                  <img
                    src="/classinfo.png"
                    alt="Evenground class information"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection variant="fade-in-up">
                <div className="lg:px-4">
                  <p className="text-[14px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                    Get Started
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4">
                    Class Info
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Everything you need to know about our classes — levels, pricing, what to bring, and how to sign up for your first session.
                  </p>
                  <Link href="/classes" className="btn btn-dark">
                    View Classes
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Studio Teams Section */}
        <section className="py-12 md:py-16 lg:py-20 px-[var(--page-gutter)] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content */}
              <AnimatedSection variant="fade-in-up">
                <div className="lg:px-4">
                  <p className="text-[14px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                    Our People
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4">
                    Studio Teams
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Meet the talented instructors and staff who make Evenground what it is. Our team brings diverse styles and experience to every class.
                  </p>
                  <Link href="/teams" className="btn btn-dark">
                    Meet the Team
                  </Link>
                </div>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection variant="fade-in">
                <div className="img-container aspect-[3/2]">
                  <img
                    src="/studioteams.webp"
                    alt="Evenground studio teams"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-12 md:py-16 lg:py-20 px-[var(--page-gutter)] bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <AnimatedSection variant="fade-in">
                <div className="img-container aspect-[3/2]">
                  <img
                    src="/aboutus.webp"
                    alt="Evenground dance community"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection variant="fade-in-up">
                <div className="lg:px-4">
                  <p className="text-[14px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                    Our Story
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-4">
                    About Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Learn about the backstory and journey of how our studio came to be — from a dream to a home for Austin&apos;s dance community.
                  </p>
                  <Link href="/about-us" className="btn btn-dark">
                    Learn More
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#1a1a1a] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
          <AnimatedSection variant="fade-in-up" className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Ready to Start?
            </h2>
            <p className="text-gray-400 mb-10 text-base md:text-lg">
              Join our community and discover the joy of street dance.
            </p>
            <a href="/schedule" className="btn btn-white">
              This Week's Schedule
            </a>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
