'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const teams = [
  {
    id: 'project-a',
    name: 'Project A',
    tagline: 'Adult Competitive Team',
    description:
      'Project A is EvenGround\'s flagship competitive dance team, founded in 2022 before the studio even opened. The team trains in multiple street dance styles and competes at regional and national events. Project A represents the spirit of EvenGround — community, growth, and dedication to the craft.',
    founded: '2022',
    memberCount: 12,
    styles: ['Hip Hop', 'House', 'Breaking', 'Freestyle'],
    achievements: [
      'Competed at multiple regional showcases',
      'Featured performers at EvenGround showcases',
      'Community outreach performances',
    ],
    members: [
      { name: 'Chris Han', role: 'Director & Choreographer' },
      { name: 'Son Le', role: 'Co-Director' },
      { name: 'Member 3', role: 'Dancer' },
      { name: 'Member 4', role: 'Dancer' },
      { name: 'Member 5', role: 'Dancer' },
      { name: 'Member 6', role: 'Dancer' },
    ],
  },
  {
    id: 'eg-youth',
    name: 'EG Youth',
    tagline: 'Youth Development Team',
    description:
      'EG Youth is our development program for young dancers ages 13–17 looking to take their training beyond regular classes. The team focuses on building foundational technique, performance skills, and teamwork. Members rehearse weekly and perform at studio showcases.',
    founded: '2024',
    memberCount: 8,
    styles: ['Hip Hop', 'Choreography', 'Popping'],
    achievements: [
      'Performed at Spring Jam 2025',
      'Studio showcase regulars',
    ],
    members: [
      { name: 'Youth Member 1', role: 'Dancer' },
      { name: 'Youth Member 2', role: 'Dancer' },
      { name: 'Youth Member 3', role: 'Dancer' },
      { name: 'Youth Member 4', role: 'Dancer' },
    ],
  },
];

const auditionInfo = {
  season: 'Fall 2025',
  date: 'September 2025 (exact date TBA)',
  requirements: [
    'Must be 13 years or older',
    'Attend at least 2 regular classes before auditioning',
    'Commitment to weekly rehearsals required',
    'No prior team experience necessary — passion and dedication are what matter',
  ],
  process: [
    'Open call audition at the studio',
    'Freestyle and choreography rounds',
    'Callbacks for final selection',
    'Results announced within 1 week',
  ],
};

export default function Teams() {
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
                  Join a Team
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  STUDIO TEAMS
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-gray-500 max-w-xl">
                  Our teams are for dancers who want to push their craft further.
                  Train together, perform together, grow together.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Team Sections */}
          {teams.map((team, teamIndex) => (
            <section
              key={team.id}
              className={`section-padding ${teamIndex % 2 === 0 ? 'bg-[#fafafa]' : 'bg-white'}`}
            >
              <div className="max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                  {/* Team Photo Placeholder */}
                  <AnimatedSection
                    variant={teamIndex % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                    className={teamIndex % 2 !== 0 ? 'lg:order-2' : ''}
                  >
                    <div className="bg-gray-200 aspect-[4/3] flex items-center justify-center overflow-hidden relative">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">
                          Team Photo
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Team Info */}
                  <AnimatedSection
                    variant="fade-in-up"
                    className={teamIndex % 2 !== 0 ? 'lg:order-1' : ''}
                  >
                    <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                      Est. {team.founded}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-2">
                      {team.name}
                    </h2>
                    <p className="text-sm text-gray-400 mb-6">{team.tagline}</p>

                    <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                      {team.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 mb-8">
                      <div>
                        <p className="text-2xl font-light text-[#303030]">
                          {team.memberCount}
                        </p>
                        <p className="text-[11px] text-gray-400 tracking-[0.1em] uppercase mt-1">
                          Members
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-light text-[#303030]">
                          {team.styles.length}
                        </p>
                        <p className="text-[11px] text-gray-400 tracking-[0.1em] uppercase mt-1">
                          Styles
                        </p>
                      </div>
                    </div>

                    {/* Style Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {team.styles.map((style) => (
                        <span
                          key={style}
                          className="text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full bg-gray-100 text-gray-500"
                        >
                          {style}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div>
                      <p className="text-xs font-medium text-[#303030] tracking-[0.1em] uppercase mb-3">
                        Highlights
                      </p>
                      <ul className="space-y-2">
                        {team.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 text-sm text-gray-500"
                          >
                            <svg className="w-4 h-4 text-[#ffb800] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Team Members Grid */}
                <AnimatedSection
                  staggerChildren={0.08}
                  className="mt-16 lg:mt-20"
                >
                  <AnimatedChild>
                    <p className="text-xs font-medium text-[#303030] tracking-[0.15em] uppercase mb-8 text-center">
                      Team Members
                    </p>
                  </AnimatedChild>
                  <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                    {team.members.map((member) => (
                      <AnimatedChild key={member.name} className="flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 overflow-hidden mb-3 relative"
                        >
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                        </motion.div>
                        <p className="text-xs tracking-[0.1em] uppercase text-[#303030] font-medium text-center">
                          {member.name}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1 text-center">
                          {member.role}
                        </p>
                      </AnimatedChild>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </section>
          ))}

          {/* Audition Info Section */}
          <section className="section-padding bg-[#1a1a1a] text-white">
            <div className="max-w-[1000px] mx-auto">
              <AnimatedSection variant="fade-in-up" className="text-center mb-16">
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                  {auditionInfo.season}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
                  AUDITION INFO
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Interested in joining a team? Here&apos;s what you need to know about
                  the audition process.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Requirements */}
                <AnimatedSection variant="fade-in-left">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ffb800] mb-6">
                    Requirements
                  </h3>
                  <ul className="space-y-4">
                    {auditionInfo.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-2 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                {/* Process */}
                <AnimatedSection variant="fade-in-right">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ffb800] mb-6">
                    Audition Process
                  </h3>
                  <ol className="space-y-4">
                    {auditionInfo.process.map((step, index) => (
                      <li
                        key={step}
                        className="flex items-start gap-4 text-sm text-gray-300 leading-relaxed"
                      >
                        <span className="text-[#ffb800] font-light text-lg leading-none mt-0.5 shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </AnimatedSection>
              </div>

              {/* CTA */}
              <AnimatedSection variant="fade-in-up" delay={0.2} className="text-center mt-16">
                <p className="text-gray-500 text-sm mb-6">
                  Next auditions: {auditionInfo.date}
                </p>
                <a
                  href="mailto:contact@evengroundtx.com"
                  className="btn bg-[#ffb800] text-[#303030] hover:bg-[#e5a600] transition-colors"
                >
                  Contact for Details
                </a>
              </AnimatedSection>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
