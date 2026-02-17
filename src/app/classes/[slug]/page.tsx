'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import ExternalLink from '@/components/ExternalLink';
import { getInstructorBySlug } from '@/data/instructors';
import { getClassesForInstructor, shortDayMap } from '@/data/schedule';
import { notFound } from 'next/navigation';

const genreAccents: Record<string, string> = {
  'Choreography': '#303030',
  'Contemporary': '#3b82f6',
  'Hip Hop': '#ffb800',
  'K-Pop': '#e879f9',
  'House': '#f97316',
  'Locking': '#8b5cf6',
};

const levelColors: Record<string, string> = {
  'Beginner': 'bg-[#e6efe6] text-[#3d6b3d]',
  'Intermediate': 'bg-[#f0ead8] text-[#6b5a35]',
  'Int/Adv': 'bg-[#f0e2e2] text-[#7a4545]',
  'All Levels': 'bg-[#e2e6f0] text-[#454a6a]',
};

export default function InstructorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const instructor = getInstructorBySlug(slug);

  if (!instructor) {
    notFound();
  }

  const classes = getClassesForInstructor(instructor.name);

  return (
    <>
      <Header />

      <PageTransition>
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-white">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Photo */}
                <AnimatedSection variant="fade-in">
                  <div className="relative aspect-[3/4] max-w-[480px] mx-auto lg:mx-0 overflow-hidden bg-gray-100">
                    <Image
                      src={instructor.photo}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </div>
                  {instructor.instagram && (
                    <div className="mt-4 max-w-[480px] mx-auto lg:mx-0">
                      <ExternalLink
                        href={`https://www.instagram.com/${instructor.instagram}/`}
                        className="text-sm text-gray-500 hover:text-[#303030] transition-colors inline-flex items-center gap-1.5"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @{instructor.instagram}
                      </ExternalLink>
                    </div>
                  )}
                </AnimatedSection>

                {/* Info */}
                <div className="lg:pt-4">
                  <AnimatedSection variant="fade-in-up">
                    <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                      <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                      Instructor
                    </p>
                  </AnimatedSection>

                  <AnimatedSection variant="fade-in-up" delay={0.1}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#303030] mb-6">
                      {instructor.name.toUpperCase()}
                    </h1>
                  </AnimatedSection>

                  <AnimatedSection variant="fade-in-up" delay={0.15}>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {instructor.genres.map((genre) => (
                        <span
                          key={genre}
                          className="text-[12px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full border"
                          style={{
                            color: genreAccents[genre] || '#303030',
                            borderColor: `${genreAccents[genre] || '#303030'}30`,
                            backgroundColor: `${genreAccents[genre] || '#303030'}08`,
                          }}
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </AnimatedSection>

                  <AnimatedSection variant="fade-in-up" delay={0.2}>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {instructor.bio}
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>

          {/* Currently Teaching */}
          {classes.length > 0 && (
            <section className="section-padding bg-[#fafafa]">
              <div className="max-w-[900px] mx-auto">
                <AnimatedSection variant="fade-in-up" className="mb-12">
                  <p className="text-[13px] font-medium text-[#303030] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                    <span className="w-6 h-[2px] bg-[#ffb800] inline-block shrink-0" />
                    Weekly Classes
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#303030]">
                    Currently Teaching
                  </h2>
                </AnimatedSection>

                <AnimatedSection variant="fade-in-up" delay={0.1}>
                  <div className="bg-white border border-gray-100">
                    {classes.map(({ day, item }, i) => (
                      <div
                        key={`${day}-${item.time}-${i}`}
                        className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-5 ${
                          i < classes.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <div className="sm:w-28 shrink-0">
                          <p className="text-sm font-medium text-[#303030]">{shortDayMap[day]}</p>
                          <p className="text-[13px] text-gray-500">{item.time}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#303030]">{item.name}</p>
                          <p className="text-[12px] text-gray-500">{item.duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full ${levelColors[item.level] || 'bg-gray-100 text-gray-600'}`}>
                            {item.level}
                          </span>
                          {item.biweekly && (
                            <span className="text-[11px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-50 text-purple-600">
                              Bi-weekly
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="section-padding bg-[#1a1a1a] text-white text-center">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection variant="fade-in-up">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
                  Find Your Class
                </h2>
                <p className="text-gray-400 mb-10">
                  Your first class is free. Use code FIRSTCLASS at checkout.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/classes#instructors" className="btn btn-white">
                    Back to All Instructors
                  </Link>
                  <ExternalLink
                    href="https://evenground.pike13.com/schedule"
                    platform="Pike13"
                    showPlatform
                    className="btn btn-gold inline-flex items-center gap-2"
                  >
                    Book a Class
                  </ExternalLink>
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
