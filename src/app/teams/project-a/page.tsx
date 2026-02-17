'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const teamData = {
  name: 'PROJECT A',
  tagline: 'Adult Competitive Team',
  founded: '2022',
  accent: '#e53e3e',
  gradientFrom: '#1a0a0a',
  gradientTo: '#1a1a1a',
  description:
    'Project A is EvenGround\'s flagship competitive dance team, founded in 2022 before the studio even opened. The team trains in multiple street dance styles and competes at regional and national events. Project A represents the spirit of EvenGround — community, growth, and dedication to the craft.',
  styles: ['Hip Hop', 'House', 'Breaking', 'Freestyle'],
  members: [
    { name: 'Chris Han', role: 'Director & Choreographer' },
    { name: 'Son Le', role: 'Co-Director' },
    { name: 'Member 3', role: 'Dancer' },
    { name: 'Member 4', role: 'Dancer' },
    { name: 'Member 5', role: 'Dancer' },
    { name: 'Member 6', role: 'Dancer' },
  ],
  achievements: [
    'Competed at multiple regional showcases',
    'Featured performers at EvenGround showcases',
    'Community outreach performances',
  ],
};

export default function ProjectA() {
  return (
    <>
      <Header />

      <PageTransition>
        <main className="pt-20">
          {/* Hero Section */}
          <section
            className="relative min-h-[60vh] flex items-center"
            style={{
              background: `linear-gradient(to bottom, ${teamData.gradientFrom}, ${teamData.gradientTo})`,
            }}
          >
            <div className="section-padding w-full">
              <div className="max-w-[1200px] mx-auto">
                <AnimatedSection variant="fade-in-up">
                  <div className="flex items-center gap-3 mb-8">
                    <span
                      className="text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border"
                      style={{
                        borderColor: teamData.accent,
                        color: teamData.accent,
                      }}
                    >
                      Est. {teamData.founded}
                    </span>
                    <span
                      className="text-[10px] font-medium tracking-[0.15em] uppercase"
                      style={{ color: teamData.accent }}
                    >
                      {teamData.tagline}
                    </span>
                  </div>
                </AnimatedSection>

                <AnimatedSection variant="fade-in-up" delay={0.1}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white mb-6">
                    {teamData.name}
                  </h1>
                </AnimatedSection>

                <AnimatedSection variant="fade-in-up" delay={0.2}>
                  <div className="flex flex-wrap gap-3">
                    {teamData.styles.map((style) => (
                      <span
                        key={style}
                        className="text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: `${teamData.accent}15`,
                          color: teamData.accent,
                        }}
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${teamData.accent}40, transparent)`,
              }}
            />
          </section>

          {/* About Section */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px] mx-auto">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[13px] font-medium tracking-[0.2em] uppercase mb-6" style={{ color: teamData.accent }}>
                  About the Team
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
                  {teamData.description}
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
                  <div>
                    <p className="text-3xl font-light text-[#303030]">{teamData.members.length}</p>
                    <p className="text-[12px] text-gray-400 tracking-[0.1em] uppercase mt-1">Members</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[#303030]">{teamData.styles.length}</p>
                    <p className="text-[12px] text-gray-400 tracking-[0.1em] uppercase mt-1">Styles</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[#303030]">{teamData.founded}</p>
                    <p className="text-[12px] text-gray-400 tracking-[0.1em] uppercase mt-1">Founded</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[#303030]">{teamData.achievements.length}</p>
                    <p className="text-[12px] text-gray-400 tracking-[0.1em] uppercase mt-1">Highlights</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Style Tags */}
              <AnimatedSection variant="fade-in-up" delay={0.3} className="mt-10">
                <p className="text-xs font-medium text-[#303030] tracking-[0.15em] uppercase mb-4">
                  Dance Styles
                </p>
                <div className="flex flex-wrap gap-2">
                  {teamData.styles.map((style) => (
                    <span
                      key={style}
                      className="text-[12px] font-medium tracking-wider uppercase px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: `${teamData.accent}10`,
                        color: teamData.accent,
                      }}
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Members Section */}
          <section className="section-padding bg-[#fafafa]">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection variant="fade-in-up" className="text-center mb-16">
                <p className="text-[13px] font-medium tracking-[0.2em] uppercase mb-4" style={{ color: teamData.accent }}>
                  The Crew
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                  TEAM MEMBERS
                </h2>
              </AnimatedSection>

              <AnimatedSection staggerChildren={0.1} className="flex flex-wrap justify-center gap-10 md:gap-14">
                {teamData.members.map((member) => (
                  <AnimatedChild key={member.name} className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 overflow-hidden mb-4 relative"
                      style={{
                        boxShadow: `0 0 0 3px transparent`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 3px ${teamData.accent}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 3px transparent`;
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </motion.div>
                    <p className="text-sm tracking-[0.05em] text-[#303030] font-medium text-center">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-1 text-center">
                      {member.role}
                    </p>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px] mx-auto">
              <AnimatedSection variant="fade-in-up" className="mb-12">
                <p className="text-[13px] font-medium tracking-[0.2em] uppercase mb-4" style={{ color: teamData.accent }}>
                  Accomplishments
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                  HIGHLIGHTS
                </h2>
              </AnimatedSection>

              <AnimatedSection staggerChildren={0.1}>
                {teamData.achievements.map((achievement) => (
                  <AnimatedChild key={achievement}>
                    <div className="flex items-start gap-4 py-5 border-b border-gray-100">
                      <svg
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: teamData.accent }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-600 leading-relaxed">{achievement}</p>
                    </div>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-[#1a1a1a] text-white">
            <div className="max-w-[900px] mx-auto text-center">
              <AnimatedSection variant="fade-in-up">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
                  Want to Join?
                </h2>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                  Auditions for {teamData.name} are held each season. Check the teams page for
                  upcoming audition dates and requirements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/teams" className="btn btn-white">
                    Back to All Teams
                  </Link>
                  <a
                    href="mailto:contact@evengroundtx.com"
                    className="btn btn-gold"
                  >
                    Contact for Details
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
