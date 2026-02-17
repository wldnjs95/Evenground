'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ExternalLink from '@/components/ExternalLink';

type DayKey = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

interface ClassItem {
  time: string;
  name: string;
  instructor: string;
  level: string;
  genre: string;
  duration: string;
  biweekly?: boolean;
}

const scheduleData: Record<DayKey, ClassItem[]> = {
  Monday: [
    { time: '6:00 PM', name: 'Beg Choreo', instructor: 'Diana Campas / Daniel Broxton', level: 'Beginner', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '7:30 PM', name: 'Int/Adv Choreo', instructor: 'Chris Han / Allison Li', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Haley Sikes / Daniel Broxton', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Tuesday: [
    { time: '6:00 PM', name: 'Beg Choreo', instructor: 'Jess Ye', level: 'Beginner', genre: 'Choreography', duration: '90 min' },
    { time: '7:30 PM', name: 'Int Choreo', instructor: 'Victoria Kayode', level: 'Intermediate', genre: 'Choreography', duration: '90 min' },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Caro Gonzalez / Jona Vezia', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Wednesday: [
    { time: '6:00 PM', name: 'Contemporary', instructor: 'Kelly Chiu / Jess Ye', level: 'All Levels', genre: 'Contemporary', duration: '90 min', biweekly: true },
    { time: '7:30 PM', name: 'Beg Choreo', instructor: 'Allison Li', level: 'Beginner', genre: 'Choreography', duration: '90 min' },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Jay Rangan / Son Le', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '9:00 PM', name: 'Campbellocking', instructor: 'David Dinh / Garrett Crawford', level: 'All Levels', genre: 'Locking', duration: '90 min', biweekly: true },
  ],
  Thursday: [
    { time: '6:00 PM', name: 'Beg House', instructor: 'Chris Han', level: 'Beginner', genre: 'House', duration: '90 min' },
    { time: '7:30 PM', name: 'Int Choreo', instructor: 'Mariko Llosa / Britney Thai', level: 'Intermediate', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Santana Williams / Lili Offield', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Friday: [
    { time: '6:00 PM', name: 'Beg Hip-Hop', instructor: 'Son Le', level: 'Beginner', genre: 'Hip Hop', duration: '90 min' },
    { time: '7:30 PM', name: 'Kpop Choreo', instructor: 'Jazmin Macedo', level: 'All Levels', genre: 'K-Pop', duration: '90 min' },
    { time: '9:00 PM', name: 'Int/Adv Choreo', instructor: 'Krishna Basude / Alex John', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
  Saturday: [
    { time: '1:00 PM', name: 'Beg Choreo', instructor: 'Alex John / Terra Turner', level: 'Beginner', genre: 'Choreography', duration: '90 min', biweekly: true },
    { time: '2:30 PM', name: 'Kpop Choreo', instructor: 'Grace Zhang / Troy Stockman', level: 'All Levels', genre: 'K-Pop', duration: '90 min', biweekly: true },
    { time: '4:00 PM', name: 'Int/Adv Choreo', instructor: 'Andrea Castillo / Claribella Reeve', level: 'Int/Adv', genre: 'Choreography', duration: '90 min', biweekly: true },
  ],
};

const days: DayKey[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDays: Record<DayKey, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
};

const levelColors: Record<string, string> = {
  'Beginner': 'bg-[#e6efe6] text-[#3d6b3d]',
  'Intermediate': 'bg-[#f0ead8] text-[#6b5a35]',
  'Int/Adv': 'bg-[#f0e2e2] text-[#7a4545]',
  'Advanced': 'bg-[#f0e2e2] text-[#7a4545]',
  'All Levels': 'bg-[#e2e6f0] text-[#454a6a]',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function getTodayKey(): DayKey {
  const jsDay = new Date().getDay();
  const dayMap: DayKey[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (jsDay === 0) return 'Monday';
  return dayMap[jsDay - 1];
}

function getDateForDay(day: DayKey): string {
  const today = new Date();
  const currentJsDay = today.getDay(); // 0=Sun
  const dayIndex: Record<DayKey, number> = {
    Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6,
  };
  const diff = dayIndex[day] - currentJsDay;
  const target = new Date(today);
  target.setDate(today.getDate() + diff);
  return target.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

export default function Schedule() {
  const todayKey = getTodayKey();
  const [selectedDay, setSelectedDay] = useState<DayKey>(todayKey);

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
          <div className="max-w-[900px]">
            <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
              This Week's Schedule
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              SCHEDULE
            </h1>
            <p className="text-gray-500 max-w-xl mb-8">
              This week's class schedule. Classes run Monday through
              Saturday. Some classes rotate bi-weekly between instructors.
            </p>

            <ExternalLink
              href="https://evenground.pike13.com/schedule"
              platform="Pike13"
              showPlatform
              className="btn btn-gold inline-flex items-center gap-2"
            >
              Sign Up for Class
            </ExternalLink>
          </div>
        </motion.section>

        {/* Day Selector */}
        <section className="bg-[#fafafa] border-b border-gray-100 sticky top-20 z-40">
          <div className="section-padding !py-0">
            <div className="flex overflow-x-auto no-scrollbar">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`relative px-5 py-4 text-sm tracking-wide whitespace-nowrap transition-colors ${
                    selectedDay === day
                      ? 'text-[#303030] font-medium'
                      : 'text-gray-500 hover:text-gray-600'
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
                <span className="text-sm md:text-base font-normal text-gray-500 ml-3">
                  {getDateForDay(selectedDay)}
                </span>
              </h2>
              <p className="text-xs text-gray-500 tracking-wider uppercase">
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
                      <p className="text-[11px] text-gray-500">{cls.duration}</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-gray-100 group-hover:bg-gray-200 transition-colors" />

                    {/* Class Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[#303030] mb-1">
                        {cls.name}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm text-gray-500">
                          {cls.biweekly
                            ? cls.instructor.split(' / ').join('  /  ')
                            : cls.instructor}
                        </p>
                        {cls.biweekly && (
                          <span className="text-[11px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-50 text-purple-600">
                            Bi-weekly
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Level Badge + Book */}
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full ${levelColors[cls.level] || 'bg-gray-100 text-gray-600'}`}>
                        {cls.level}
                      </span>
                      <ExternalLink
                        href="https://evenground.pike13.com/schedule"
                        className="text-[12px] font-medium tracking-[0.1em] uppercase text-gray-500 hover:text-[#303030] transition-colors hidden md:flex items-center gap-1"
                      >
                        Book
                      </ExternalLink>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cross-link to Full Week Overview on /classes */}
        <section className="bg-[#fafafa] border-t border-gray-100">
          <div className="section-padding !py-8 max-w-[900px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#303030] font-medium">
                  Looking for the full recurring weekly schedule?
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  See all classes across the week at a glance.
                </p>
              </div>
              <a
                href="/classes#weekly-overview"
                className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#ffb800] hover:text-[#e5a600] transition-colors shrink-0 flex items-center gap-1.5"
              >
                View Weekly Overview
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a1a] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[13px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Ready to Dance?
            </h2>
            <p className="text-gray-400 mb-10">
              Your first class is free. Use code FIRSTCLASS at checkout.
            </p>
            <ExternalLink
              href="https://evenground.pike13.com/schedule"
              platform="Pike13"
              showPlatform
              className="btn btn-gold inline-flex items-center gap-2"
            >
              Sign Up for Class
            </ExternalLink>
          </div>
        </section>
      </main>
      </PageTransition>

      <Footer />
    </>
  );
}
