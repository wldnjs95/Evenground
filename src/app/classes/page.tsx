'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ClassInfo {
  name: string;
  genre: string;
  instructor: string;
  level: string;
  schedule: string;
  description: string;
  image: string;
}

const genres = ['All', 'Hip Hop', 'K-Pop', 'Breaking', 'Contemporary', 'Heels', 'Popping'];

const classes: ClassInfo[] = [
  {
    name: 'Hip Hop Foundations',
    genre: 'Hip Hop',
    instructor: 'Chris Han',
    level: 'Beginner',
    schedule: 'Mon 6:00 PM',
    description: 'Learn the fundamentals of Hip Hop dance including grooves, bounces, and basic choreography. Perfect for those just starting their dance journey.',
    image: 'Hip Hop Foundations',
  },
  {
    name: 'Hip Hop Choreography',
    genre: 'Hip Hop',
    instructor: 'Chris Han',
    level: 'Intermediate',
    schedule: 'Tue 8:30 PM',
    description: 'Build on your foundation with intermediate choreography that challenges your musicality and movement quality.',
    image: 'Hip Hop Choreography',
  },
  {
    name: 'Hip Hop Advanced',
    genre: 'Hip Hop',
    instructor: 'Chris Han',
    level: 'Advanced',
    schedule: 'Thu 7:15 PM',
    description: 'Push your limits with advanced choreography and freestyle concepts. Prior experience required.',
    image: 'Hip Hop Advanced',
  },
  {
    name: 'K-Pop Choreography',
    genre: 'K-Pop',
    instructor: 'Dorothy Nie',
    level: 'All Levels',
    schedule: 'Mon 7:15 PM',
    description: 'Learn choreography from the latest K-Pop hits. All experience levels welcome—we break it down step by step.',
    image: 'K-Pop Choreography',
  },
  {
    name: 'K-Pop Foundations',
    genre: 'K-Pop',
    instructor: 'Dorothy Nie',
    level: 'Beginner',
    schedule: 'Thu 6:00 PM',
    description: 'A beginner-friendly introduction to K-Pop dance styles, focusing on clean execution and performance quality.',
    image: 'K-Pop Foundations',
  },
  {
    name: 'Breaking Fundamentals',
    genre: 'Breaking',
    instructor: 'Son Le',
    level: 'Beginner',
    schedule: 'Tue 6:00 PM',
    description: 'Master the basics of breaking—toprock, footwork, freezes, and transitions. No experience needed.',
    image: 'Breaking Fundamentals',
  },
  {
    name: 'Breaking Cypher',
    genre: 'Breaking',
    instructor: 'Son Le',
    level: 'All Levels',
    schedule: 'Thu 8:30 PM',
    description: 'An open cypher session where breakers of all levels come together to practice, share, and battle.',
    image: 'Breaking Cypher',
  },
  {
    name: 'Contemporary Flow',
    genre: 'Contemporary',
    instructor: 'Joon Lee',
    level: 'All Levels',
    schedule: 'Wed 6:00 PM',
    description: 'Explore fluid movement, floor work, and emotional expression through contemporary dance techniques.',
    image: 'Contemporary Flow',
  },
  {
    name: 'Contemporary Choreography',
    genre: 'Contemporary',
    instructor: 'Joon Lee',
    level: 'Intermediate',
    schedule: 'Fri 7:15 PM',
    description: 'Dive deeper into contemporary choreography with a focus on storytelling and dynamic movement.',
    image: 'Contemporary Choreography',
  },
  {
    name: 'Heels Choreography',
    genre: 'Heels',
    instructor: 'CJ Fuertes',
    level: 'Intermediate',
    schedule: 'Tue 7:15 PM',
    description: 'Fierce and empowering choreography performed in heels. Focuses on confidence, technique, and performance.',
    image: 'Heels Choreography',
  },
  {
    name: 'Heels Foundations',
    genre: 'Heels',
    instructor: 'CJ Fuertes',
    level: 'Beginner',
    schedule: 'Fri 6:00 PM',
    description: 'Learn to walk, turn, and dance in heels with confidence. Building strength and balance from the ground up.',
    image: 'Heels Foundations',
  },
  {
    name: 'Popping & Animation',
    genre: 'Popping',
    instructor: 'Son Le',
    level: 'Intermediate',
    schedule: 'Wed 7:15 PM',
    description: 'Explore the art of popping, waving, and animation. Focuses on isolation, control, and musicality.',
    image: 'Popping & Animation',
  },
];

const levelColors: Record<string, string> = {
  'Beginner': 'bg-emerald-50 text-emerald-700',
  'Intermediate': 'bg-amber-50 text-amber-700',
  'Advanced': 'bg-red-50 text-red-700',
  'All Levels': 'bg-blue-50 text-blue-700',
};

const genreAccents: Record<string, string> = {
  'Hip Hop': '#ffb800',
  'K-Pop': '#e879f9',
  'Breaking': '#f97316',
  'Contemporary': '#3b82f6',
  'Heels': '#ec4899',
  'Popping': '#8b5cf6',
};

export default function Classes() {
  const [activeGenre, setActiveGenre] = useState('All');

  const filtered = activeGenre === 'All'
    ? classes
    : classes.filter((c) => c.genre === activeGenre);

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <motion.section
          className="section-padding bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[900px]">
            <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
              Train With Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              CLASSES
            </h1>
            <p className="text-gray-500 max-w-xl">
              From Hip Hop to Contemporary, Breaking to K-Pop—find the class that fits your style.
              All experience levels welcome.
            </p>
          </div>
        </motion.section>

        {/* Filter Bar */}
        <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
          <div className="section-padding !py-0">
            <div className="flex overflow-x-auto no-scrollbar gap-1">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`relative px-5 py-4 text-sm tracking-wide whitespace-nowrap transition-colors ${
                    activeGenre === genre
                      ? 'text-[#303030] font-medium'
                      : 'text-gray-400 hover:text-gray-600'
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
          </div>
        </section>

        {/* Class Cards */}
        <section className="section-padding bg-[#fafafa]">
          <div>
            <div className="flex items-center justify-between mb-10">
              <p className="text-sm text-gray-400">
                Showing <span className="text-[#303030] font-medium">{filtered.length}</span> {filtered.length === 1 ? 'class' : 'classes'}
                {activeGenre !== 'All' && (
                  <> in <span className="text-[#303030] font-medium">{activeGenre}</span></>
                )}
              </p>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((cls) => (
                  <motion.div
                    key={cls.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-gray-100 overflow-hidden group"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-sm text-gray-400 tracking-wide">{cls.image}</p>
                      </div>
                      <div
                        className="absolute top-0 left-0 w-full h-1"
                        style={{ backgroundColor: genreAccents[cls.genre] || '#d4d4d4' }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-gray-400">
                          {cls.genre}
                        </span>
                        <span className="text-gray-200">·</span>
                        <span className={`text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full ${levelColors[cls.level] || 'bg-gray-100 text-gray-600'}`}>
                          {cls.level}
                        </span>
                      </div>

                      <h3 className="text-lg font-medium text-[#303030] mb-2">
                        {cls.name}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {cls.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <div>
                          <p className="text-sm text-[#303030]">{cls.instructor}</p>
                          <p className="text-[11px] text-gray-400">{cls.schedule}</p>
                        </div>
                        <a
                          href="#"
                          className="text-[11px] font-medium tracking-[0.1em] uppercase text-gray-400 hover:text-[#303030] transition-colors"
                        >
                          Book →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
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

        {/* CTA */}
        <section className="section-padding bg-[#303030] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
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
              className="inline-block bg-[#ffb800] text-[#303030] font-medium text-sm tracking-wider uppercase px-10 py-4 hover:bg-[#e5a600] transition-colors"
            >
              View Schedule
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
