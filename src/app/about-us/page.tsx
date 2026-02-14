'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const founder = {
  name: 'Chris Han',
  role: 'Founder & Director',
  image: '/team/chris-han.jpg',
};

const adminStaff = [
  { name: 'Dorothy Nie', role: 'Operations Manager', image: '/team/dorothy-nie.jpg' },
  { name: 'Son Le', role: 'Program Director', image: '/team/son-le.jpg' },
  { name: 'Joon Lee', role: 'Community Lead', image: '/team/joon-lee.jpg' },
  { name: 'CJ Fuertes', role: 'Marketing Lead', image: '/team/cj-fuertes.jpg' },
];

const coreValues = [
  {
    title: 'Community',
    description: 'Building lasting connections through shared passion for movement and creativity.',
  },
  {
    title: 'Creativity',
    description: 'Encouraging individual expression and artistic growth in every dancer.',
  },
  {
    title: 'Cultivation',
    description: 'Nurturing talent and fostering continuous improvement at all skill levels.',
  },
];

const timeline = [
  {
    year: '2016',
    title: 'The Dream',
    text: 'Chris Han had the dream of opening up a studio since 2016 when he started taking choreography dance classes and dancing with collegiate teams at UT Austin. He\u2019s always wanted to have his own space that he can consider the "Third Place" where after work or school, people can come together to bond and train dance together.',
  },
  {
    year: '2018',
    title: 'The Foundation',
    text: 'The path to realizing this dream has been long and took many steps. In 2018, Chris co-founded "The Space," an initiative that offered free dance classes to UT students on campus. This organization served as a crucial foundation, allowing Chris to gain valuable experience in organizing classes and nurturing a dance community.',
    funFact: 'The name EVENGROUND comes from a first ever jam that was sponsored by The Space and hosted by David Cha all the way back in 2019!',
  },
  {
    year: '2022',
    title: 'Project A',
    text: 'At the beginning of 2022, Chris met up with one of the founding members Son Le at a local tea lounge where Chris pitched the remote idea of opening up a real studio. Through brainstorming and musing of the future together, they came to the idea of starting a team as an alternative way to provide that home for dancers before opening up a studio, which became the adult competitive team Project A. Despite the challenges of practicing without mirrors in public spaces around the UT campus due to a lack of affordable and available studio space, Project A persevered.',
  },
  {
    year: '2023',
    title: 'The Studio Opens',
    text: 'Throughout 2022 and 2023, Chris started an intensive search for a commercial space that would give life to the dream he had nurtured for years. In July 2023, he finally found the perfect location, and from that moment forward, he and the founding team have worked tirelessly day in and day out to plan and execute a dance studio that meets the highest standards. Their shared goal is to provide the best possible dance experience for the Austin dance community.',
  },
];

export default function AboutUs() {
  return (
    <>
      <Header />

      <PageTransition>
        <main className="pt-20">
          {/* PART 1: OUR MISSION */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px]">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                  Part 01
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-14">
                  OUR MISSION
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <div className="space-y-8 text-gray-600 leading-relaxed">
                  <p className="text-lg md:text-xl text-[#303030] font-light leading-relaxed">
                    To bring people together through the universal language of dance, creating a welcoming space where every dancer can grow.
                  </p>
                  <p>
                    Founded in 2023, Evenground is a street style dance studio with a mission to bring people together through the universal language of dance. Whether you&apos;re a seasoned choreographer or someone who lives for freestyle battles, Evenground provides a welcoming and safe environment for you to train and grow within an inclusive dance community.
                  </p>
                  <p>
                    Our studio is open to anyone above age of 13 in the greater Austin area who shares our passion for dance!
                  </p>
                </div>
              </AnimatedSection>

              {/* Mission Values */}
              <AnimatedSection
                staggerChildren={0.15}
                className="grid md:grid-cols-3 gap-10 mt-24"
              >
                {coreValues.map((value) => (
                  <AnimatedChild key={value.title}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="border-l-2 border-[#ffb800] pl-6 py-2"
                    >
                      <h3 className="text-lg font-medium text-[#303030] mb-4">{value.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                    </motion.div>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>

          {/* PART 2: ADMIN STAFF */}
          <section className="section-padding bg-[#fafafa]">
            <div>
              <AnimatedSection variant="fade-in-up" className="text-center mb-20">
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                  Part 02
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
                  ADMIN STAFF
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  Meet the team behind Evenground who work tirelessly to create the best dance experience for our community.
                </p>
              </AnimatedSection>

              {/* Founder - Featured */}
              <AnimatedSection variant="scale-in" className="flex flex-col items-center mb-20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-200 overflow-hidden mb-6 relative ring-4 ring-[#ffb800]/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </motion.div>
                <p className="text-sm tracking-[0.15em] uppercase text-[#303030] font-medium">
                  {founder.name}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {founder.role}
                </p>
              </AnimatedSection>

              {/* Admin Team */}
              <AnimatedSection
                staggerChildren={0.12}
                className="flex flex-wrap justify-center gap-16 md:gap-20"
              >
                {adminStaff.map((member) => (
                  <AnimatedChild key={member.name} className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-5 relative cursor-pointer"
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    </motion.div>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#303030] font-medium">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-2">
                      {member.role}
                    </p>
                  </AnimatedChild>
                ))}
              </AnimatedSection>
            </div>
          </section>

          {/* PART 3: FOUNDING STORY */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px]">
              <AnimatedSection variant="fade-in-up">
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                  Part 03
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-14">
                  FOUNDING STORY
                </h2>
              </AnimatedSection>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gray-200" />

                <div className="space-y-16">
                  {timeline.map((entry, index) => (
                    <AnimatedSection
                      key={entry.year}
                      variant="fade-in-up"
                      delay={index * 0.1}
                      className="relative pl-8 md:pl-24"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        className="absolute left-0 md:left-8 top-1 w-[2px] h-[2px] -translate-x-[0px]"
                      >
                        <div className="w-3 h-3 -translate-x-[5px] -translate-y-[5px] rounded-full bg-[#ffb800] ring-4 ring-[#ffb800]/10" />
                      </motion.div>

                      {/* Year label */}
                      <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-3">
                        {entry.year}
                      </p>

                      <h3 className="text-lg font-medium text-[#303030] mb-5">{entry.title}</h3>
                      <p className="text-gray-600 leading-7">
                        {entry.text}
                      </p>
                      {entry.funFact && (
                        <p className="text-sm text-gray-400 mt-5 italic leading-6 border-l-2 border-[#ffb800]/30 pl-4">
                          Fun Fact: {entry.funFact}
                        </p>
                      )}
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
