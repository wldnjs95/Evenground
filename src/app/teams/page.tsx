'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TeamMember {
  name: string;
  role: string;
}

interface Team {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  accent: string;
  darkBg: string;
  lightBg: string;
  founded: number;
  styles: string[];
  description: string;
  members: TeamMember[];
  achievements: string[];
  video: string;
}

const teams: Team[] = [
  {
    id: 'project-a',
    name: 'Project A',
    subtitle: 'Adult Competitive Team',
    tagline: 'Compete. Represent. Elevate.',
    accent: '#3b82f6',
    darkBg: '#0a0f1a',
    lightBg: '#eff6ff',
    founded: 2022,
    styles: ['Hip Hop', 'House', 'Breaking', 'Choreography'],
    video: '/proja-teams.mp4',
    description:
      "Project A is EvenGround's flagship competitive dance team, founded in 2022 before the studio even opened. The team trains in multiple street dance styles and competes at regional and national events.",
    members: [
      { name: 'Son Le', role: 'Leader' },
      { name: 'Allison Li', role: 'Leader' },
    ],
    achievements: [
      'World of Dance Dallas 2024 — 3rd Place',
      'World of Dance Dallas 2025 — 3rd Place',
      'Down South 2024 — 3rd Place',
      'Featured performers at ANNI showcases',
    ],
  },
  {
    id: 'fundies',
    name: 'Fundies',
    subtitle: 'Foundations Dance Team',
    tagline: 'Build the foundation. Find your groove.',
    accent: '#fbbf24',
    darkBg: '#1a1508',
    lightBg: '#fefce8',
    founded: 2024,
    styles: ['Hip Hop', 'Choreography', 'Contemporary', 'Waacking'],
    video: '/fundies-teams.mp4',
    description:
      "Fundies is EvenGround's foundations-focused team designed for dancers who want to build strong fundamentals while being part of a supportive crew. The team emphasizes groove, musicality, and the roots of street dance styles.",
    members: [
      { name: 'Kelly Chiu', role: 'Leader' },
      { name: 'Jesse Ye', role: 'Leader' },
      { name: 'Sharon Beyzer', role: 'Leader' },
    ],
    achievements: [
      'Studio showcase regulars',
      'Community workshop hosts',
    ],
  },
  {
    id: 'fine-lines',
    name: 'Fine Lines',
    subtitle: 'Performance Art Collective',
    tagline: 'Where movement meets meaning.',
    accent: '#ef4444',
    darkBg: '#1a0808',
    lightBg: '#fef2f2',
    founded: 2024,
    styles: ['Contemporary', 'Choreography', 'Experimental', 'Fusion'],
    video: '/finelines-teams.mp4',
    description:
      "Fine Lines is EvenGround's performance-focused collective that blurs the line between dance and art. The team explores choreography through storytelling, visual concepts, and cross-genre movement.",
    members: [
      { name: 'Dorothy Ni', role: 'Leader' },
      { name: 'Lili Offield', role: 'Leader' },
    ],
    achievements: [
      'Collaborative projects with local artists',
      'Community workshop hosts',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const ease = [0.25, 0.1, 0.25, 1] as const;

const contentVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease } },
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Teams() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const team = teams[selectedIndex];

  return (
    <PageTransition>
      <Header />

      {/* ============================================================ */}
      {/*  HERO SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1a1a1a]">
        {/* Stacked video backgrounds with crossfade */}
        {teams.map((t, i) => (
          <motion.div
            key={t.id + '-video'}
            className="absolute inset-0"
            animate={{ opacity: selectedIndex === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease }}
          >
            <video
              src={t.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        ))}

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 z-[1]"
          animate={{
            background: `linear-gradient(to bottom, ${team.darkBg}cc 0%, ${team.darkBg}99 40%, ${team.darkBg}dd 100%)`,
          }}
          transition={{ duration: 0.8, ease }}
        />

        {/* Accent color glow */}
        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none"
          animate={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${team.accent}18, transparent 70%)`,
          }}
          transition={{ duration: 0.6, ease }}
        />

        <div className="section-padding relative z-10 w-full">
          <div className="max-w-[1200px] mx-auto">
            {/* Eyebrow */}
            <AnimatedSection variant="fade-in-up">
              <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#ffb800] mb-8">
                EvenGround Teams
              </p>
            </AnimatedSection>

            {/* Team Selector */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 mb-12">
              {teams.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedIndex(i)}
                  className="relative text-left group"
                >
                  <motion.span
                    className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight transition-colors duration-300"
                    animate={{
                      color: selectedIndex === i ? '#ffffff' : '#555555',
                    }}
                    transition={{ duration: 0.4, ease }}
                  >
                    {t.name}
                  </motion.span>

                  {/* Active underline with layoutId */}
                  {selectedIndex === i && (
                    <motion.div
                      layoutId="team-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: t.accent }}
                      transition={{ duration: 0.4, ease }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tagline + Subtitle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={team.id + '-hero-text'}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="text-lg md:text-xl font-light text-white/70 mb-2">
                  {team.subtitle}
                </p>
                <p className="text-sm md:text-base text-white/40 max-w-lg">
                  {team.tagline}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT SECTION                                               */}
      {/* ============================================================ */}
      <motion.section
        animate={{ backgroundColor: team.darkBg }}
        transition={{ duration: 0.6, ease }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `linear-gradient(180deg, ${team.darkBg} 0%, ${team.accent}08 100%)`,
          }}
          transition={{ duration: 0.6, ease }}
        />

        <div className="section-padding relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection variant="fade-in-up">
              <motion.p
                className="text-[13px] font-medium tracking-[0.2em] uppercase mb-6"
                animate={{ color: team.accent }}
                transition={{ duration: 0.6, ease }}
              >
                About the Team
              </motion.p>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={team.id + '-about'}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Description */}
                <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-3xl mb-12">
                  {team.description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 md:gap-12 mb-12 max-w-2xl">
                  {[
                    { label: 'Founded', value: team.founded },
                    { label: 'Leaders', value: team.members.length },
                    { label: 'Styles', value: team.styles.length },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <motion.p
                        className="text-3xl md:text-4xl font-light tracking-tight"
                        animate={{ color: team.accent }}
                        transition={{ duration: 0.6, ease }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-xs text-white/40 uppercase tracking-[0.15em] mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Style Tags */}
                <div className="flex flex-wrap gap-3">
                  {team.styles.map((style) => (
                    <motion.span
                      key={style}
                      className="px-4 py-2 text-xs font-medium tracking-wide rounded-full"
                      animate={{
                        backgroundColor: team.accent + '20',
                        color: team.accent,
                      }}
                      transition={{ duration: 0.6, ease }}
                    >
                      {style}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  MEMBERS SECTION                                             */}
      {/* ============================================================ */}
      <motion.section
        animate={{ backgroundColor: team.lightBg }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="section-padding">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection variant="fade-in-up">
              <motion.p
                className="text-[13px] font-medium tracking-[0.2em] uppercase mb-4"
                animate={{ color: team.accent }}
                transition={{ duration: 0.6, ease }}
              >
                Meet the Crew
              </motion.p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1a1a1a] mb-12">
                Team Leaders
              </h2>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={team.id + '-members'}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-wrap justify-center gap-12 md:gap-16"
              >
                {team.members.map((member) => (
                  <div key={member.name} className="text-center">
                    {/* Avatar Placeholder */}
                    <motion.div
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#e5e5e5] border-[3px]"
                      animate={{ borderColor: team.accent }}
                      transition={{ duration: 0.6, ease }}
                    >
                      <span className="text-2xl font-light text-[#a3a3a3]">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </motion.div>
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      {member.name}
                    </p>
                    <motion.p
                      className="text-xs mt-0.5"
                      animate={{ color: team.accent }}
                      transition={{ duration: 0.6, ease }}
                    >
                      {member.role}
                    </motion.p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  HIGHLIGHTS SECTION                                          */}
      {/* ============================================================ */}
      <motion.section
        animate={{ backgroundColor: team.darkBg }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="section-padding">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection variant="fade-in-up">
              <motion.p
                className="text-[13px] font-medium tracking-[0.2em] uppercase mb-4"
                animate={{ color: team.accent }}
                transition={{ duration: 0.6, ease }}
              >
                Highlights
              </motion.p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-12">
                Achievements
              </h2>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.ul
                key={team.id + '-achievements'}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6 max-w-2xl"
              >
                {team.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-4"
                  >
                    {/* Accent checkmark */}
                    <motion.div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      animate={{ backgroundColor: team.accent + '25' }}
                      transition={{ duration: 0.6, ease }}
                    >
                      <motion.svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        animate={{ color: team.accent }}
                        transition={{ duration: 0.6, ease }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </motion.svg>
                    </motion.div>
                    <span className="text-base md:text-lg font-light text-white/80">
                      {achievement}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  AUDITION CTA SECTION                                        */}
      {/* ============================================================ */}
      <motion.section
        animate={{ backgroundColor: team.darkBg }}
        transition={{ duration: 0.6, ease }}
        className="relative"
      >
        <div className="absolute inset-0 border-t border-white/10" />

        <div className="section-padding relative z-10">
          <div className="max-w-[1200px] mx-auto text-center">
            <AnimatedSection variant="fade-in-up">
              <motion.p
                className="text-[13px] font-medium tracking-[0.2em] uppercase mb-6"
                animate={{ color: team.accent }}
                transition={{ duration: 0.6, ease }}
              >
                Join the Crew
              </motion.p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
                Interested in joining?
              </h2>
              <p className="text-white/50 font-light mb-10 max-w-lg mx-auto">
                Auditions happen throughout the year. Follow us on social media
                or reach out to learn about upcoming opportunities.
              </p>
              <motion.a
                href="mailto:contact@evengroundtx.com"
                className="btn inline-flex"
                animate={{
                  backgroundColor: team.accent,
                  color: '#ffffff',
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease }}
              >
                Learn About Auditions
              </motion.a>
            </AnimatedSection>
          </div>
        </div>
      </motion.section>

      <Footer />
    </PageTransition>
  );
}
