'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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

interface PracticeSlot {
  day: string;
  time: string;
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
  schedule: PracticeSlot[];
  scheduleNote?: string;
  members: TeamMember[];
  achievements: string[];
  video: string;
  mainPhoto: string;
  galleryPhotos: string[];
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
    mainPhoto: '/teams/proja/main.webp',
    galleryPhotos: Array.from({ length: 8 }, (_, i) => `/teams/proja/gallery/${i + 1}.webp`),
    description:
      "Project A is an Adult Competitive Team at Evenground Dance Studio based in Austin that aims to provide a home for dancers looking to train and compete at their best. They are a diverse group of creatives with the common goal of expressing themselves authentically no matter the medium of choice.\n\nTeam Auditions for 2026 are returning Jan 17th & Jan 18th. Follow us on Instagram to stay updated!",
    schedule: [
      { day: 'Tuesday', time: '7:30 PM – 10:00 PM' },
      { day: 'Thursday', time: '7:30 PM – 10:00 PM' },
    ],
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
    mainPhoto: '/teams/fundies/main.webp',
    galleryPhotos: Array.from({ length: 10 }, (_, i) => `/teams/fundies/gallery/${i + 1}.webp`),
    description:
      "Fundies is an Adult Exhibition Training Team housed under Evenground Dance Studio. Created to provide structured training outside of regular classes, Fundies aims to provide a home for hungry dancers in Austin that are looking to develop their movement and reach new goals together.\n\nTeam Auditions for 2026 are returning Jan 17th & Jan 18th. Follow us on Instagram to stay updated!",
    schedule: [
      { day: 'Sunday', time: '5:00 PM – 7:00 PM' },
      { day: 'Wednesday', time: '7:00 PM – 9:00 PM' },
    ],
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
    mainPhoto: '/teams/finelines/main.webp',
    galleryPhotos: Array.from({ length: 8 }, (_, i) => `/teams/finelines/gallery/${i + 1}.webp`),
    description:
      "Fine Lines is an Adult Creative Team at Evenground with a goal to empower dancers to experiment and play. We are a group that is driven by intention, inspired by community and are rooted in chest and hip-based movement.\n\nFollow us on Instagram to stay updated!",
    schedule: [],
    scheduleNote: 'Fine Lines is currently taking a break this season. We\'ll be back soon!',
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

const galleryContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Teams() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const team = teams[selectedIndex];

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % team.galleryPhotos.length : null
    );
  }, [lightboxIndex, team.galleryPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + team.galleryPhotos.length) % team.galleryPhotos.length
        : null
    );
  }, [lightboxIndex, team.galleryPhotos.length]);

  return (
    <PageTransition>
      <Header />

      {/* ============================================================ */}
      {/*  HERO SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1a1a1a]">
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

        <motion.div
          className="absolute inset-0 z-[1]"
          animate={{
            background: `linear-gradient(to bottom, ${team.darkBg}cc 0%, ${team.darkBg}99 40%, ${team.darkBg}dd 100%)`,
          }}
          transition={{ duration: 0.8, ease }}
        />

        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none"
          animate={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${team.accent}18, transparent 70%)`,
          }}
          transition={{ duration: 0.6, ease }}
        />

        <div className="section-padding relative z-10 w-full">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection variant="fade-in-up">
              <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#ffb800] mb-8">
                EvenGround Teams
              </p>
            </AnimatedSection>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 mb-12">
              {teams.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedIndex(i);
                    setLightboxIndex(null);
                  }}
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
                <p className="text-sm md:text-base text-white/60 max-w-lg">
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
        className="relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `linear-gradient(180deg, ${team.darkBg} 0%, ${team.accent}08 100%)`,
          }}
          transition={{ duration: 0.6, ease }}
        />

        {/* Full-width flex: Left padded content + Right edge-to-edge photo */}
        <div className="relative z-10 flex flex-col lg:flex-row">
          {/* Left — Info (with padding) */}
          <div className="flex-1 min-w-0 py-16 md:py-24 pl-6 pr-6 md:pl-12 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-12">
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
                <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed mb-10 whitespace-pre-line">
                  {team.description}
                </p>

                <div className="mb-10">
                  <p className="text-sm font-medium tracking-[0.15em] uppercase text-white/60 mb-4">
                    Practice Schedule
                  </p>
                  {team.schedule.length > 0 ? (
                    <div className="space-y-3">
                      {team.schedule.map((slot) => (
                        <div key={slot.day} className="flex items-center gap-5">
                          <span className="text-sm font-medium text-white/50 w-24 shrink-0 uppercase tracking-wide">
                            {slot.day}
                          </span>
                          <span className="text-base font-light text-white/80">
                            {slot.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base font-light text-white/50 italic">
                      {team.scheduleNote}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-6 md:gap-10 mb-10">
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
                      <p className="text-xs text-white/60 uppercase tracking-[0.15em] mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

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

          {/* Right — Main Photo (edge-to-edge, no padding) */}
          <div className="relative lg:w-[45%] xl:w-[48%] shrink-0 min-h-[400px] lg:min-h-0">
            {teams.map((t, i) => (
              <motion.div
                key={t.id + '-main-photo'}
                className="absolute inset-0"
                animate={{ opacity: selectedIndex === i ? 1 : 0 }}
                transition={{ duration: 1.0, ease }}
              >
                <Image
                  src={t.mainPhoto}
                  alt={`${t.name} team photo`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            ))}

            {/* Left edge fade into dark bg */}
            <motion.div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              animate={{
                background: `linear-gradient(to right, ${team.darkBg} 0%, transparent 15%)`,
              }}
              transition={{ duration: 0.8, ease }}
            />

            {/* Bottom fade (mobile) */}
            <motion.div
              className="absolute inset-0 pointer-events-none lg:hidden"
              animate={{
                background: `linear-gradient(to top, ${team.darkBg} 0%, transparent 20%)`,
              }}
              transition={{ duration: 0.8, ease }}
            />
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  MOMENTS SECTION (Main Photo + Gallery)                      */}
      {/* ============================================================ */}
      <motion.section
        animate={{ backgroundColor: team.darkBg }}
        transition={{ duration: 0.6, ease }}
        className="relative"
      >
        {/* Filmstrip — full-width horizontal scroll, no gaps, section-filling */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={team.id + '-filmstrip'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex w-max">
                {team.galleryPhotos.map((photo, i) => (
                  <button
                    key={photo}
                    className="relative h-[33vh] md:h-[43vh] lg:h-[50vh] aspect-[4/3] shrink-0 overflow-hidden group"
                    onClick={() => openLightbox(i)}
                  >
                    <Image
                      src={photo}
                      alt={`${team.name} gallery ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 35vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  LIGHTBOX                                                    */}
      {/* ============================================================ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Image */}
            <motion.div
              className="relative z-10 w-[90vw] max-w-[1100px] aspect-[3/2]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <Image
                    src={team.galleryPhotos[lightboxIndex]}
                    alt={`${team.name} gallery ${lightboxIndex + 1}`}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav: Previous */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 md:left-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Nav: Next */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 text-sm font-light tracking-wider">
              {lightboxIndex + 1} / {team.galleryPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
