'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ExternalLink from '@/components/ExternalLink';
import { weeklySchedule, weekDays, shortDayMap, type DayKey } from '@/data/schedule';
import { instructors as instructorData } from '@/data/instructors';

/* ------------------------------------------------------------------ */
/*  Instructor Data (derived from weekly schedule)                     */
/* ------------------------------------------------------------------ */

const classNameToGenre: Record<string, string> = {
  'Beg Choreo': 'Choreography',
  'Int Choreo': 'Choreography',
  'Int/Adv Choreo': 'Choreography',
  'Contemporary': 'Contemporary',
  'Beg Hip-Hop': 'Hip Hop',
  'Kpop Choreo': 'K-Pop',
  'Beg House': 'House',
  'Campbellocking': 'Locking',
};

interface InstructorClass {
  day: DayKey;
  time: string;
  name: string;
  level: string;
  biweekly: boolean;
}

interface Instructor {
  name: string;
  initials: string;
  genres: string[];
  levels: string[];
  classes: InstructorClass[];
}

function deriveInstructors(): Instructor[] {
  const map = new Map<string, Instructor>();

  for (const day of weekDays) {
    for (const cls of weeklySchedule[day]) {
      const names = cls.instructor.split(' / ').map((n) => n.trim());
      const genre = classNameToGenre[cls.name] || 'Other';

      for (const name of names) {
        if (!map.has(name)) {
          const initials = name.split(' ').map((n) => n[0]).join('');
          map.set(name, { name, initials, genres: [], levels: [], classes: [] });
        }
        const inst = map.get(name)!;
        if (!inst.genres.includes(genre)) inst.genres.push(genre);
        if (!inst.levels.includes(cls.level)) inst.levels.push(cls.level);
        inst.classes.push({
          day,
          time: cls.time,
          name: cls.name,
          level: cls.level,
          biweekly: !!cls.biweekly,
        });
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

const instructors = deriveInstructors();
const genres = ['All', ...Array.from(new Set(instructors.flatMap((i) => i.genres))).sort()];

// Photo lookup: instructor name → photo URL
const photoMap = new Map(instructorData.map((i) => [i.name, i.photo]));

/* ------------------------------------------------------------------ */
/*  Styles & Config                                                    */
/* ------------------------------------------------------------------ */

const levelColors: Record<string, string> = {
  'Beginner': 'bg-[#e6efe6] text-[#3d6b3d]',
  'Intermediate': 'bg-[#f0ead8] text-[#6b5a35]',
  'Int/Adv': 'bg-[#f0e2e2] text-[#7a4545]',
  'Advanced': 'bg-[#f0e2e2] text-[#7a4545]',
  'All Levels': 'bg-[#e2e6f0] text-[#454a6a]',
};

const genreAccents: Record<string, string> = {
  'Choreography': '#303030',
  'Contemporary': '#3b82f6',
  'Hip Hop': '#ffb800',
  'K-Pop': '#e879f9',
  'House': '#f97316',
  'Locking': '#8b5cf6',
};

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-[#303030]">{children}</span>
);

const levelGuide = [
  {
    level: 'Beginner',
    badge: 'bg-[#e6efe6] text-[#3d6b3d]',
    accent: '#4a8a4a',
    short: 'No experience needed',
    description: (
      <>These classes are suited for dancers with <B>little to no experience</B> or for those who would like to revisit their fundamentals in a slower pace environment.</>
    ),
  },
  {
    level: 'Intermediate',
    badge: 'bg-[#f0ead8] text-[#6b5a35]',
    accent: '#c08520',
    short: 'Comfortable with fundamentals',
    description: (
      <>These classes are suited for dancers with moderate experience who feel comfortable in a class setting and want to <B>learn more complex movements</B> that combine many fundamentals learned in the beginner classes.</>
    ),
  },
  {
    level: 'Int/Advanced',
    badge: 'bg-[#f0e2e2] text-[#7a4545]',
    accent: '#b84a4a',
    short: 'Experienced, fast-paced',
    description: (
      <>This class is suited for dancers with extensive experience who are comfortable in a <B>fast paced environment</B> and looking to push their dance to the next level.</>
    ),
  },
  {
    level: 'Open Level',
    badge: 'bg-[#e2e6f0] text-[#454a6a]',
    accent: '#4a6abf',
    short: 'All levels welcome',
    description: (
      <>This class is suited for everybody <B>from beginners to advanced dancers</B>! These classes usually take a set of moves or concepts through a progression, where every level dancer can find something to work on.</>
    ),
  },
];

const overviewBgColors: Record<string, string> = {
  'Beginner': 'bg-[#e6efe6]',
  'Intermediate': 'bg-[#f0ead8]',
  'Int/Adv': 'bg-[#f0e2e2]',
  'All Levels': 'bg-[#e2e6f0]',
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function Classes() {
  const [activeGenre, setActiveGenre] = useState('All');
  const [openLevel, setOpenLevel] = useState<string | null>(null);

  const filtered = activeGenre === 'All'
    ? instructors
    : instructors.filter((i) => i.genres.includes(activeGenre));

  return (
    <>
      <Header />

      <PageTransition>
      <main className="pt-20">
        {/* Hero */}
        <motion.section
          className="section-padding bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Title */}
              <div>
                <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                  Train With Us
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  CLASSES
                </h1>
                <p className="text-gray-500 max-w-xl">
                  Meet our instructors and find the class that fits your style.
                  From Choreography to House, K-Pop to Locking — all experience levels welcome.
                </p>
              </div>

              {/* Right: Level Guide Accordion */}
              <div>
                <p className="text-sm font-medium text-[#303030] tracking-[0.15em] uppercase mb-4">
                  Class Levels
                </p>
                <div className="border-t border-gray-100">
                  {levelGuide.map((item) => {
                    const isOpen = openLevel === item.level;
                    return (
                      <div key={item.level} className="border-b border-gray-100">
                        <button
                          onClick={() => setOpenLevel(isOpen ? null : item.level)}
                          className="w-full flex items-center justify-between py-4 group"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-1 h-5 rounded-full shrink-0"
                              style={{ backgroundColor: item.accent }}
                            />
                            <span className="text-[15px] font-medium text-[#303030]">{item.level}</span>
                            <span className="text-xs text-gray-500 hidden sm:inline">{item.short}</span>
                          </div>
                          <motion.svg
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-4 h-4 text-gray-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-6 pr-2">
                                <span className={`inline-block text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${item.badge}`}>
                                  {item.level}
                                </span>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Full Week Overview */}
        <section id="weekly-overview" className="section-padding bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3 justify-center">
                <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                At a Glance
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#303030] mb-4">
                Weekly Schedule
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Our recurring class lineup. Some classes rotate bi-weekly between instructors.
                For real-time availability and booking, visit{' '}
                <ExternalLink
                  href="https://evenground.pike13.com/schedule"
                  className="text-[#8a6b00] hover:underline"
                >
                  Pike13
                </ExternalLink>.
              </p>
            </div>

            {/* Color Legend */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
              {[
                { label: 'Beginner', bg: 'bg-[#e6efe6]', border: 'border-[#c0d4c0]' },
                { label: 'Intermediate', bg: 'bg-[#f0ead8]', border: 'border-[#d4c8a8]' },
                { label: 'Int/Advanced', bg: 'bg-[#f0e2e2]', border: 'border-[#d4bcbc]' },
                { label: 'Open Level', bg: 'bg-[#e2e6f0]', border: 'border-[#bcc4d8]' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className={`w-4 h-3 rounded-sm ${item.bg} border ${item.border}`} />
                  <span className="text-xs text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr>
                    {weekDays.map((day) => (
                      <th
                        key={day}
                        className="text-xs font-medium tracking-[0.15em] uppercase p-4 text-left border-b-2 text-gray-500 border-gray-100"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: Math.max(...weekDays.map(d => weeklySchedule[d].length)) }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                      {weekDays.map((day) => {
                        const cls = weeklySchedule[day][rowIdx];
                        return (
                          <td key={day} className="p-2 border-b border-gray-50 h-px">
                            {cls ? (
                              <div className={`${overviewBgColors[cls.level] || 'bg-gray-50'} p-3 rounded h-full`}>
                                <p className="text-[11px] text-gray-500 mb-1">{cls.time}</p>
                                <p className="text-sm font-medium text-[#303030] leading-snug mb-1">{cls.name}</p>
                                <p className="text-[11px] text-gray-500 leading-relaxed">
                                  {cls.biweekly
                                    ? cls.instructor.split(' / ').map((name, idx) => (
                                        <span key={idx}>{idx > 0 && <><br /></>}{name.trim()}</span>
                                      ))
                                    : cls.instructor}
                                </p>
                                {cls.biweekly && (
                                  <p className="text-[11px] text-purple-500 mt-1.5">Bi-weekly</p>
                                )}
                              </div>
                            ) : (
                              <div className="p-3 h-full" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Compact View */}
            <div className="lg:hidden space-y-6">
              {weekDays.map((day) => (
                <div key={day}>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm font-medium text-[#303030]">
                      {day}
                    </span>
                    <span className="text-xs text-gray-500">
                      {weeklySchedule[day].length} classes
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {weeklySchedule[day].map((cls, i) => (
                      <div key={i} className={`text-[11px] ${overviewBgColors[cls.level] || 'bg-gray-50'} px-3 py-2 rounded text-gray-500`}>
                        <span className="text-[#303030] font-medium">{cls.time}</span> {cls.name}
                        {cls.biweekly && <span className="text-purple-500 ml-1">·bi</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="border-l-2 border-[#ffb800] pl-6 py-2">
                <h3 className="text-lg font-medium text-[#303030] mb-3">First Class Free</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  New to Evenground? Use code FIRSTCLASS at checkout for a complimentary class.
                </p>
              </div>
              <div className="border-l-2 border-[#ffb800] pl-6 py-2">
                <h3 className="text-lg font-medium text-[#303030] mb-3">All Ages 13+</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our studio welcomes dancers aged 13 and above. Saturday kids classes available for younger dancers.
                </p>
              </div>
              <div className="border-l-2 border-[#ffb800] pl-6 py-2">
                <h3 className="text-lg font-medium text-[#303030] mb-3">No Experience Needed</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Beginner classes are designed to be welcoming and accessible. Everyone starts somewhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Showcase */}
        <section id="instructors" className="section-padding bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12">
              <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                Meet the Team
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#303030] mb-6">
                Our Instructors
              </h2>

              {/* Genre Filter */}
              <div className="flex overflow-x-auto no-scrollbar gap-1 border-b border-gray-200 mb-4">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setActiveGenre(genre)}
                    className={`relative px-5 py-3 text-sm tracking-wide whitespace-nowrap transition-colors ${
                      activeGenre === genre
                        ? 'text-[#303030] font-medium'
                        : 'text-gray-500 hover:text-gray-600'
                    }`}
                  >
                    {genre}
                    {activeGenre === genre && (
                      <motion.div
                        layoutId="genreIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#303030]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Showing <span className="text-[#303030] font-medium">{filtered.length}</span> {filtered.length === 1 ? 'instructor' : 'instructors'}
                {activeGenre !== 'All' && (
                  <> in <span className="text-[#303030] font-medium">{activeGenre}</span></>
                )}
              </p>
            </div>

            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((inst) => {
                  const slug = inst.name.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <motion.div
                      key={inst.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/classes/${slug}`}
                        className="relative block bg-white border border-gray-100 overflow-hidden group hover:border-gray-200 transition-colors"
                      >
                        {/* Default: Avatar + Name + Genre + Levels */}
                        <div className="flex flex-col items-center justify-center text-center px-4 py-8 sm:py-10">
                          <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden mb-4 relative">
                            {photoMap.get(inst.name) ? (
                              <Image
                                src={photoMap.get(inst.name)!}
                                alt={inst.name}
                                fill
                                className="object-cover object-top"
                                sizes="80px"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-9 h-9 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="text-sm font-medium text-[#303030] mb-1.5">
                            {inst.name}
                          </p>
                          <div className="flex flex-wrap justify-center gap-x-1.5 gap-y-0.5">
                            {inst.genres.map((g) => (
                              <span
                                key={g}
                                className="text-[11px] font-medium tracking-wide uppercase"
                                style={{ color: genreAccents[g] || '#a3a3a3' }}
                              >
                                {g}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap justify-center gap-1 mt-2">
                            {inst.levels.map((level) => (
                              <span
                                key={level}
                                className={`text-[11px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full ${levelColors[level] || 'bg-gray-100 text-gray-600'}`}
                              >
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hover Overlay (desktop only) */}
                        <div
                          className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 transition-all duration-300 ease-out opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                          style={{ backgroundColor: 'rgba(26, 26, 26, 0.93)' }}
                        >
                          <div>
                            <p className="text-sm font-medium text-white mb-1">
                              {inst.name}
                            </p>
                            <div className="flex flex-wrap gap-x-1.5">
                              {inst.genres.map((g) => (
                                <span
                                  key={g}
                                  className="text-[11px] font-medium tracking-wide uppercase"
                                  style={{ color: genreAccents[g] === '#303030' ? '#a3a3a3' : genreAccents[g] }}
                                >
                                  {g}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1 my-3">
                            {inst.classes.map((cls, idx) => (
                              <div key={idx} className="text-[11px] leading-relaxed">
                                <span className="text-gray-500">
                                  {shortDayMap[cls.day]} {cls.time.replace(':00', '').replace(' PM', 'p').replace(' AM', 'a')}
                                </span>
                                <span className="text-gray-300 ml-1.5">{cls.name}</span>
                                {cls.biweekly && <span className="text-purple-400 ml-1">·bi</span>}
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {inst.levels.map((level) => (
                              <span
                                key={level}
                                className={`text-[11px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full ${levelColors[level] || 'bg-gray-100 text-gray-600'}`}
                              >
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            <p className="text-[11px] text-gray-500 text-center mt-6">
              Tap an instructor to view their profile
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a1a] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[13px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
              Find Your Style
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              See the Full Schedule
            </h2>
            <p className="text-gray-400 mb-10">
              Check our weekly timetable to find the best class for your schedule.
            </p>
            <a
              href="/schedule"
              className="btn btn-gold"
            >
              This Week's Classes
            </a>
          </div>
        </section>
      </main>
      </PageTransition>

      <Footer />
    </>
  );
}
