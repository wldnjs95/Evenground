'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type DayKey = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

interface ClassItem {
  time: string;
  name: string;
  instructor: string;
  level: string;
  room: string;
  genre: string;
  duration: string;
}

const scheduleData: Record<DayKey, ClassItem[]> = {
  Monday: [
    { time: '6:00 PM', name: 'Hip Hop Foundations', instructor: 'Chris Han', level: 'Beginner', room: 'Studio A', genre: 'Hip Hop', duration: '60 min' },
    { time: '7:15 PM', name: 'K-Pop Choreography', instructor: 'Dorothy Nie', level: 'All Levels', room: 'Studio A', genre: 'K-Pop', duration: '60 min' },
    { time: '8:30 PM', name: 'Open Practice', instructor: '—', level: 'All Levels', room: 'Studio A', genre: 'Open', duration: '90 min' },
  ],
  Tuesday: [
    { time: '6:00 PM', name: 'Breaking Fundamentals', instructor: 'Son Le', level: 'Beginner', room: 'Studio A', genre: 'Breaking', duration: '60 min' },
    { time: '7:15 PM', name: 'Heels Choreography', instructor: 'CJ Fuertes', level: 'Intermediate', room: 'Studio A', genre: 'Heels', duration: '60 min' },
    { time: '8:30 PM', name: 'Hip Hop Choreography', instructor: 'Chris Han', level: 'Intermediate', room: 'Studio A', genre: 'Hip Hop', duration: '60 min' },
  ],
  Wednesday: [
    { time: '6:00 PM', name: 'Contemporary Flow', instructor: 'Joon Lee', level: 'All Levels', room: 'Studio A', genre: 'Contemporary', duration: '60 min' },
    { time: '7:15 PM', name: 'Popping & Animation', instructor: 'Son Le', level: 'Intermediate', room: 'Studio A', genre: 'Popping', duration: '60 min' },
    { time: '8:30 PM', name: 'Freestyle Session', instructor: '—', level: 'All Levels', room: 'Studio A', genre: 'Open', duration: '90 min' },
  ],
  Thursday: [
    { time: '6:00 PM', name: 'K-Pop Foundations', instructor: 'Dorothy Nie', level: 'Beginner', room: 'Studio A', genre: 'K-Pop', duration: '60 min' },
    { time: '7:15 PM', name: 'Hip Hop Advanced', instructor: 'Chris Han', level: 'Advanced', room: 'Studio A', genre: 'Hip Hop', duration: '60 min' },
    { time: '8:30 PM', name: 'Breaking Cypher', instructor: 'Son Le', level: 'All Levels', room: 'Studio A', genre: 'Breaking', duration: '60 min' },
  ],
  Friday: [
    { time: '6:00 PM', name: 'Heels Foundations', instructor: 'CJ Fuertes', level: 'Beginner', room: 'Studio A', genre: 'Heels', duration: '60 min' },
    { time: '7:15 PM', name: 'Contemporary Choreography', instructor: 'Joon Lee', level: 'Intermediate', room: 'Studio A', genre: 'Contemporary', duration: '60 min' },
    { time: '8:30 PM', name: 'All Styles Jam', instructor: '—', level: 'All Levels', room: 'Studio A', genre: 'Open', duration: '120 min' },
  ],
  Saturday: [
    { time: '1:00 PM', name: 'Kids Hip Hop', instructor: 'Dorothy Nie', level: 'Beginner', room: 'Studio A', genre: 'Hip Hop', duration: '45 min' },
    { time: '2:00 PM', name: 'Hip Hop Intensive', instructor: 'Chris Han', level: 'All Levels', room: 'Studio A', genre: 'Hip Hop', duration: '90 min' },
    { time: '3:45 PM', name: 'K-Pop Workshop', instructor: 'Dorothy Nie', level: 'All Levels', room: 'Studio A', genre: 'K-Pop', duration: '90 min' },
  ],
  Sunday: [
    { time: '8:00 PM', name: 'Team Rehearsal (Project A)', instructor: 'Chris Han', level: 'Team Only', room: 'Studio A', genre: 'Team', duration: '120 min' },
  ],
};

const days: DayKey[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const shortDays: Record<DayKey, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};

const levelColors: Record<string, string> = {
  'Beginner': 'bg-emerald-50 text-emerald-700',
  'Intermediate': 'bg-amber-50 text-amber-700',
  'Advanced': 'bg-red-50 text-red-700',
  'All Levels': 'bg-blue-50 text-blue-700',
  'Team Only': 'bg-purple-50 text-purple-700',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<DayKey>('Monday');

  const todayIndex = new Date().getDay();
  const todayKey = days[(todayIndex + 6) % 7]; // JS getDay: 0=Sun, we want Mon=0

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
              Weekly Timetable
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              SCHEDULE
            </h1>
            <p className="text-gray-500 max-w-xl">
              View our weekly class schedule and find the perfect time to train.
              Classes run Monday through Saturday with open practice sessions available.
            </p>
          </div>
        </motion.section>

        {/* Day Selector */}
        <section className="bg-[#fafafa] border-b border-gray-200 sticky top-20 z-40">
          <div className="section-padding !py-0">
            <div className="flex overflow-x-auto no-scrollbar">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`relative px-5 py-5 text-sm tracking-wide whitespace-nowrap transition-colors ${
                    selectedDay === day
                      ? 'text-[#303030] font-medium'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className="hidden sm:inline">{day}</span>
                  <span className="sm:hidden">{shortDays[day]}</span>
                  {day === todayKey && (
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#ffb800] rounded-full" />
                  )}
                  {selectedDay === day && (
                    <motion.div
                      layoutId="dayIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#303030]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Grid */}
        <section className="section-padding bg-[#fafafa] !pt-12">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-[#303030]">
                {selectedDay}
              </h2>
              <p className="text-xs text-gray-400 tracking-wider uppercase">
                {scheduleData[selectedDay].length} {scheduleData[selectedDay].length === 1 ? 'class' : 'classes'}
              </p>
            </div>

            <motion.div
              key={selectedDay}
              className="space-y-4"
              initial="hidden"
              animate="visible"
            >
              {scheduleData[selectedDay].map((cls, i) => (
                <motion.div
                  key={`${selectedDay}-${i}`}
                  custom={i}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 p-6 md:p-8 hover:border-gray-200 hover:shadow-sm transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    {/* Time */}
                    <div className="md:w-24 shrink-0">
                      <p className="text-lg font-light text-[#303030]">{cls.time}</p>
                      <p className="text-[11px] text-gray-400">{cls.duration}</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-gray-100 group-hover:bg-gray-200 transition-colors" />

                    {/* Class Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[#303030] mb-1">
                        {cls.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {cls.instructor !== '—' ? `with ${cls.instructor}` : 'Open Session'}
                        <span className="text-gray-300 mx-2">·</span>
                        {cls.room}
                      </p>
                    </div>

                    {/* Level Badge + Book */}
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full ${levelColors[cls.level] || 'bg-gray-100 text-gray-600'}`}>
                        {cls.level}
                      </span>
                      <a
                        href="#"
                        className="text-[11px] font-medium tracking-[0.1em] uppercase text-gray-400 hover:text-[#303030] transition-colors hidden md:block"
                      >
                        Book →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {scheduleData[selectedDay].length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400">No classes scheduled for this day.</p>
              </div>
            )}
          </div>
        </section>

        {/* Full Week Overview - Desktop */}
        <section className="section-padding bg-white">
          <div>
            <div className="text-center mb-16">
              <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                At a Glance
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#303030]">
                Full Week Overview
              </h2>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr>
                    {days.map((day) => (
                      <th
                        key={day}
                        className={`text-xs font-medium tracking-[0.15em] uppercase p-4 text-left border-b-2 ${
                          day === todayKey
                            ? 'text-[#ffb800] border-[#ffb800]'
                            : 'text-gray-400 border-gray-100'
                        }`}
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: Math.max(...days.map(d => scheduleData[d].length)) }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                      {days.map((day) => {
                        const cls = scheduleData[day][rowIdx];
                        return (
                          <td key={day} className="p-2 align-top border-b border-gray-50">
                            {cls ? (
                              <motion.div
                                className="bg-[#fafafa] p-3 hover:bg-gray-100 transition-colors cursor-pointer rounded"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.15 }}
                                onClick={() => setSelectedDay(day)}
                              >
                                <p className="text-[11px] text-gray-400 mb-1">{cls.time}</p>
                                <p className="text-sm font-medium text-[#303030] leading-snug mb-1">{cls.name}</p>
                                <p className="text-[11px] text-gray-400">{cls.instructor}</p>
                              </motion.div>
                            ) : (
                              <div className="p-3" />
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
              {days.map((day) => (
                <div key={day}>
                  <button
                    onClick={() => setSelectedDay(day)}
                    className="flex items-center justify-between w-full py-3 border-b border-gray-100"
                  >
                    <span className={`text-sm font-medium ${day === todayKey ? 'text-[#ffb800]' : 'text-[#303030]'}`}>
                      {day}
                    </span>
                    <span className="text-xs text-gray-400">
                      {scheduleData[day].length} classes
                    </span>
                  </button>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {scheduleData[day].map((cls, i) => (
                      <div key={i} className="text-[11px] bg-[#fafafa] px-3 py-2 rounded text-gray-500">
                        <span className="text-[#303030] font-medium">{cls.time}</span> {cls.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#303030] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Ready to Dance?
            </h2>
            <p className="text-gray-400 mb-10">
              Your first class is free. Use code FIRSTCLASS at checkout.
            </p>
            <a
              href="#"
              className="inline-block bg-[#ffb800] text-[#303030] font-medium text-sm tracking-wider uppercase px-10 py-4 hover:bg-[#e5a600] transition-colors"
            >
              Sign Up for Class
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
