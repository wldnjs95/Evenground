'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection, { AnimatedChild } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

const classPacks = [
  { name: 'Single Class', price: 20, perClass: null, description: 'Drop-in' },
  { name: '3 Class Pack', price: 55, perClass: 18.33, description: 'Save 8%' },
  { name: '5 Class Pack', price: 85, perClass: 17, description: 'Save 15%' },
  { name: '10 Class Pack', price: 150, perClass: 15, description: 'Save 25%' },
];

const cancellationPolicies = [
  {
    type: 'Early Cancel',
    description: 'More than 4 hours notice',
    result: 'Class credit issued back',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    type: 'Late Cancel',
    description: 'Less than 4 hours notice',
    result: 'Deducted',
    color: 'text-[#ffb800]',
    bgColor: 'bg-[#ffb800]/10',
  },
  {
    type: 'No Show',
    description: 'Without notice',
    result: 'Deducted',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
];

export default function Pricing() {
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
                  Simple &amp; Transparent
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  PRICING
                </h1>
              </AnimatedSection>
              <AnimatedSection variant="fade-in-up" delay={0.2}>
                <p className="text-gray-500 max-w-xl">
                  Choose the plan that works best for you. Start with a free class and find your rhythm.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* First Class Offer */}
          <section className="section-padding bg-[#fafafa] !pt-0 !pb-16">
            <AnimatedSection variant="scale-in" className="flex justify-center">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(255, 184, 0, 0.15)' }}
                transition={{ duration: 0.2 }}
                className="bg-white border-2 border-[#ffb800] rounded-lg p-8 md:p-12 text-center max-w-lg w-full shadow-sm"
              >
                <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-4">
                  New Students
                </p>
                <h2 className="text-2xl md:text-3xl font-light text-[#303030] mb-2">
                  FIRST Class Offer
                </h2>
                <p className="text-5xl md:text-6xl font-light text-[#303030] my-6">
                  $0
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Use code <span className="font-semibold text-[#303030]">FIRSTCLASS</span> at checkout
                </p>
                <p className="text-xs text-gray-400">
                  (Only applies to regular classes)
                </p>
              </motion.div>
            </AnimatedSection>
          </section>

          {/* Class Packs */}
          <section className="section-padding bg-[#fafafa] !pt-8">
            <div>
              <AnimatedSection variant="fade-in-up" className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#303030] mb-4">
                  Class Packs
                </h2>
                <p className="text-gray-500 text-sm">
                  Purchase classes in bulk and save
                </p>
              </AnimatedSection>

              <AnimatedSection
                staggerChildren={0.1}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {classPacks.map((pack, index) => (
                  <AnimatedChild key={pack.name}>
                    <motion.div
                      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                      transition={{ duration: 0.2 }}
                      className={`bg-white rounded-lg p-8 text-center transition-colors ${
                        index === 3 ? 'ring-2 ring-[#ffb800] relative' : 'border border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      {index === 3 && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffb800] text-white text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full">
                          Best Value
                        </span>
                      )}
                      <h3 className="text-lg font-medium text-[#303030] mb-6">{pack.name}</h3>
                      <p className="text-4xl font-light text-[#303030] mb-2">
                        ${pack.price}
                      </p>
                      {pack.perClass && (
                        <p className="text-xs text-gray-400 mb-4">
                          ${pack.perClass.toFixed(2)} per class
                        </p>
                      )}
                      {!pack.perClass && (
                        <p className="text-xs text-gray-400 mb-4">
                          {pack.description}
                        </p>
                      )}
                      {pack.perClass && (
                        <span className="inline-block text-[10px] font-medium text-[#ffb800] tracking-wider uppercase bg-[#ffb800]/10 px-3 py-1 rounded-full">
                          {pack.description}
                        </span>
                      )}
                    </motion.div>
                  </AnimatedChild>
                ))}
              </AnimatedSection>

              <AnimatedSection variant="fade-in" delay={0.4}>
                <p className="text-center text-xs text-gray-400 mt-10 max-w-2xl mx-auto leading-relaxed">
                  Class passes are to be used for our regular scheduled classes only. All class passes expire <span className="font-semibold">60 days</span> from date of purchase. Final Sale, non-transferable.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Membership */}
          <section className="section-padding bg-[#303030] text-white">
            <AnimatedSection variant="fade-in-up" className="text-center">
              <p className="text-[11px] font-medium text-[#ffb800] tracking-[0.2em] uppercase mb-6">
                Unlimited Access
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
                MEMBERSHIP
              </h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-6xl md:text-7xl font-light mb-4"
              >
                $150<span className="text-2xl text-gray-400">/month</span>
              </motion.p>
              <p className="text-[#ffb800] tracking-wider uppercase text-sm mb-12">
                Unlimited Classes
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="#"
                  className="inline-block bg-[#ffb800] text-[#303030] font-medium text-sm tracking-wider uppercase px-10 py-4 rounded hover:bg-[#e5a600] transition-colors"
                >
                  Sign Up for Class
                </Link>
              </motion.div>
            </AnimatedSection>
          </section>

          {/* Cancellation Policy */}
          <section className="section-padding bg-white">
            <div className="max-w-[900px]">
              <AnimatedSection variant="fade-in-up" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#303030] mb-4">
                  Cancellation Policy
                </h2>
                <p className="text-gray-500 text-sm">
                  Please review our cancellation policy before booking
                </p>
              </AnimatedSection>

              <AnimatedSection staggerChildren={0.1}>
                {cancellationPolicies.map((policy) => (
                  <AnimatedChild key={policy.type}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center justify-between py-6 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-full ${policy.bgColor} ${policy.color} flex items-center justify-center shrink-0`}>
                          {policy.type === 'Early Cancel' && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {policy.type === 'Late Cancel' && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
                            </svg>
                          )}
                          {policy.type === 'No Show' && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </span>
                        <div>
                          <p className="font-medium text-[#303030]">{policy.type}</p>
                          <p className="text-sm text-gray-400 mt-0.5">{policy.description}</p>
                        </div>
                      </div>
                      <p className={`text-sm font-medium ${policy.type === 'Early Cancel' ? 'text-green-500' : 'text-gray-500'}`}>
                        {policy.result}
                      </p>
                    </motion.div>
                  </AnimatedChild>
                ))}
              </AnimatedSection>

              <AnimatedSection variant="fade-in" delay={0.3}>
                <p className="text-sm text-gray-400 mt-16">
                  * Our studio is limited to students <span className="font-semibold">13 years or older</span>
                </p>
              </AnimatedSection>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </>
  );
}
