import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';

export default function Home() {
  return (
    <PageTransition>
      <Header />

      <main>
        <Hero />

        <Marquee />

        {/* Welcome Section */}
        <section className="section-padding bg-white">
          <AnimatedSection variant="fade-in-up" className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
              Welcome
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
              A Home for Dancers
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Evenground is a street dance studio based in Austin, TX. We provide a space
              where dancers of all levels come together to learn, grow, and express themselves
              through movement. Our mission is to cultivate community, creativity, and personal
              growth through the art of street dance.
            </p>
          </AnimatedSection>
        </section>

        {/* Highlight Events Section */}
        <section className="section-padding bg-white">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection variant="fade-in-up" className="text-center mb-12 md:mb-16">
              <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
                Upcoming
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                Highlighted Events
              </h2>
            </AnimatedSection>

            <AnimatedSection staggerChildren={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Even the Odds */}
              <AnimatedChild variant="fade-in-up" className="group border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Event Photo</div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#ffb800] mb-2">
                    Battle
                  </p>
                  <h3 className="text-xl font-light mb-2">Even the Odds</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Evenground&apos;s signature street dance battle event. Dancers compete head-to-head across multiple styles for prizes and bragging rights.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Date TBA
                  </div>
                  <a href="/events" className="text-sm font-medium tracking-wide uppercase hover:text-[#ffb800] transition-colors">
                    Learn More &rarr;
                  </a>
                </div>
              </AnimatedChild>

              {/* The Anni */}
              <AnimatedChild variant="fade-in-up" className="group border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Event Photo</div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#ffb800] mb-2">
                    Showcase
                  </p>
                  <h3 className="text-xl font-light mb-2">The Anni&apos;</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Our annual anniversary showcase celebrating the studio community. Featuring performances from studio teams, open stages, and guest artists.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Date TBA
                  </div>
                  <a href="/events" className="text-sm font-medium tracking-wide uppercase hover:text-[#ffb800] transition-colors">
                    Learn More &rarr;
                  </a>
                </div>
              </AnimatedChild>

              {/* Auditions */}
              <AnimatedChild variant="fade-in-up" className="group border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Event Photo</div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#ffb800] mb-2">
                    Audition
                  </p>
                  <h3 className="text-xl font-light mb-2">Team Auditions</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Ready to join a studio team? Auditions are held seasonally for Project A, Fundies, and Fine Lines. Follow us on Instagram for announcements.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Date TBA
                  </div>
                  <a href="/teams" className="text-sm font-medium tracking-wide uppercase hover:text-[#ffb800] transition-colors">
                    Learn More &rarr;
                  </a>
                </div>
              </AnimatedChild>
            </AnimatedSection>
          </div>
        </section>

        {/* Classes Section */}
        <AnimatedSection variant="fade-in" as="div">
          <Section
            id="classes"
            subtitle="What We Offer"
            title="Our Classes"
            description="We offer choreography, K-Pop, freestyle, and contemporary classes taught by experienced instructors. Our classes cater to all experience levels — from first-timers to seasoned dancers."
            buttonText="View Classes"
            buttonLink="/classes"
            imageSrc="https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80"
            imageAlt="Dance class in progress"
            light
          />
        </AnimatedSection>

        {/* Teams Section */}
        <AnimatedSection variant="fade-in" as="div">
          <Section
            id="teams"
            subtitle="Join a Team"
            title="Studio Teams"
            description="Our studio teams are for dancers who want to take their training to the next level. Teams rehearse weekly and perform at showcases, battles, and community events. Auditions are held seasonally."
            buttonText="Learn More"
            buttonLink="/teams"
            imageSrc="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80"
            imageAlt="Dance team performing"
            reverse
          />
        </AnimatedSection>

        {/* Studio Rental Section */}
        <AnimatedSection variant="fade-in" as="div">
          <Section
            id="studio-rental"
            subtitle="Private Space"
            title="Studio Rentals"
            description="Need a space to practice, rehearse, or create? Our studio is available for private rentals. The space features professional dance flooring, mirrors, and a sound system. Perfect for rehearsals, private lessons, or video shoots."
            buttonText="Book Now"
            buttonLink="/schedule"
            imageSrc="https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=800&q=80"
            imageAlt="Dance studio space"
            light
          />
        </AnimatedSection>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection variant="fade-in-up" className="text-center mb-16">
              <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
                Membership
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                Pricing
              </h2>
            </AnimatedSection>

            <AnimatedSection staggerChildren={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Drop-in */}
              <AnimatedChild variant="fade-in-up" className="bg-white p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-3">
                  Single Class
                </p>
                <h3 className="text-2xl font-light mb-1">Drop-in</h3>
                <p className="text-4xl font-light mb-6">
                  $18
                  <span className="text-base text-gray-400 ml-1">/class</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Single class access
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    No commitment required
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Try any style
                  </li>
                </ul>
                <a href="/pricing" className="btn btn-outline w-full">
                  Get Started
                </a>
              </AnimatedChild>

              {/* Monthly Unlimited */}
              <AnimatedChild variant="fade-in-up" className="bg-[#1a1a1a] text-white p-8 lg:p-10 relative hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase bg-[#ffb800] text-black px-3 py-1 font-medium">
                    Popular
                  </span>
                </div>
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-3">
                  Unlimited
                </p>
                <h3 className="text-2xl font-light mb-1">Monthly</h3>
                <p className="text-4xl font-light mb-6">
                  $120
                  <span className="text-base text-gray-500 ml-1">/month</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-300 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited classes
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    All styles included
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority registration
                  </li>
                </ul>
                <a href="/pricing" className="btn btn-white w-full">
                  Subscribe
                </a>
              </AnimatedChild>

              {/* Class Pack */}
              <AnimatedChild variant="fade-in-up" className="bg-white p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <p className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase mb-3">
                  Value Pack
                </p>
                <h3 className="text-2xl font-light mb-1">10-Class Pack</h3>
                <p className="text-4xl font-light mb-6">
                  $150
                  <span className="text-base text-gray-400 ml-1">/pack</span>
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    10 classes included
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Valid for 3 months
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible schedule
                  </li>
                </ul>
                <a href="/pricing" className="btn btn-outline w-full">
                  Buy Pack
                </a>
              </AnimatedChild>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#1a1a1a] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />
          <AnimatedSection variant="fade-in-up" className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Ready to Start?
            </h2>
            <p className="text-gray-400 mb-10 text-base md:text-lg">
              Join our community and discover the joy of street dance.
            </p>
            <a href="/schedule" className="btn btn-white">
              View Schedule
            </a>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
